<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

$config = require __DIR__ . '/server-config.php';

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function input(string $key): string
{
    $value = $_POST[$key] ?? '';
    return is_string($value) ? trim($value) : '';
}

function textLength(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function cleanSingleLine(string $value): string
{
    $value = strip_tags($value);
    $value = preg_replace('/[\r\n]+/', ' ', $value) ?? '';
    return trim($value);
}

function cleanMessage(string $value): string
{
    $value = strip_tags($value);
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    return trim($value);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'message' => 'Method not allowed.']);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > (int) $config['max_request_bytes']) {
    respond(413, ['ok' => false, 'message' => 'The request is too large.']);
}

$allowedOrigins = $config['allowed_origins'] ?? [];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && $allowedOrigins !== [] && !in_array($origin, $allowedOrigins, true)) {
    respond(403, ['ok' => false, 'message' => 'Origin not allowed.']);
}

if (input('website_confirm') !== '') {
    respond(200, ['ok' => true, 'message' => $config['success_message']]);
}

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start(['cookie_httponly' => true, 'cookie_samesite' => 'Lax', 'use_strict_mode' => true]);
}

$now = time();
$lastSubmit = (int) ($_SESSION['last_audit_submit'] ?? 0);
$rateLimit = (int) ($config['rate_limit_seconds'] ?? 8);
if ($lastSubmit > 0 && ($now - $lastSubmit) < $rateLimit) {
    respond(429, ['ok' => false, 'message' => 'Please wait a few seconds and try again.']);
}

$name = cleanSingleLine(input('name'));
$email = cleanSingleLine(input('email'));
$website = cleanSingleLine(input('website'));
$needHelp = cleanSingleLine(input('need_help'));
$message = cleanMessage(input('message'));
$consent = strtolower(input('consent'));

if ($website !== '' && !preg_match('~^https?://~i', $website)) {
    $website = 'https://' . $website;
}

$needs = ['Google Ads Management', 'Performance Max', 'Shopping', 'Lead Generation', 'Tracking & Analytics', 'Marketing Automation', 'Account Audit', 'Other'];
$errors = [];

if (textLength($name) < 2 || textLength($name) > 100) $errors['name'] = 'Enter your name (2–100 characters).';
if (textLength($email) > 190 || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Enter a valid business email.';
if ($website !== '' && (textLength($website) > 255 || !filter_var($website, FILTER_VALIDATE_URL))) $errors['website'] = 'Enter a valid website URL.';
if (!in_array($needHelp, $needs, true)) $errors['need_help'] = 'Select a valid service.';
if (textLength($message) < 10 || textLength($message) > 2000) $errors['message'] = 'Enter a message between 10 and 2000 characters.';
if (!in_array($consent, ['1', 'on', 'yes', 'true'], true)) $errors['consent'] = 'Consent is required.';

if ($errors !== []) respond(422, ['ok' => false, 'message' => 'Please check the highlighted fields.', 'errors' => $errors]);

$recipient = filter_var($config['recipient'] ?? '', FILTER_VALIDATE_EMAIL);
$from = filter_var($config['from'] ?? '', FILTER_VALIDATE_EMAIL);
if (!$recipient || !$from) {
    error_log('Audit form: invalid recipient/from configuration.');
    respond(500, ['ok' => false, 'message' => 'The form is not configured yet.']);
}

$_SESSION['last_audit_submit'] = $now;
$subjectText = ($config['subject_prefix'] ?? '[Website]') . ' ' . $name;
$subject = '=?UTF-8?B?' . base64_encode($subjectText) . '?=';
$bodyLines = [
    'New Google Ads audit request', '----------------------------------------',
    'Name: ' . $name,
    'Email: ' . $email, 'Website: ' . ($website !== '' ? $website : 'Not provided'),
    'Needs help with: ' . $needHelp, '', 'Main goal / message:', $message, '',
    'Submitted at (UTC): ' . gmdate('Y-m-d H:i:s'), 'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown'),
];
$headers = ['From: Website <' . $from . '>', 'Reply-To: ' . $email, 'MIME-Version: 1.0', 'Content-Type: text/plain; charset=UTF-8', 'Content-Transfer-Encoding: 8bit'];
$sent = @mail($recipient, $subject, implode("\n", $bodyLines), implode("\r\n", $headers));
if (!$sent) {
    error_log('Audit form: mail transport failed.');
    respond(500, ['ok' => false, 'message' => 'We could not send your request. Please try again or contact us by email.']);
}

respond(200, ['ok' => true, 'message' => $config['success_message']]);
