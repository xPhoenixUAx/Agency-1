<?php
declare(strict_types=1);

/*
 * SERVER-ONLY CONFIG
 * Change recipient/from and add the production origin before launch.
 */
return [
    'recipient' => 'audit@example.com',
    'from' => 'website@example.com',
    'subject_prefix' => '[Website Audit Request]',
    'allowed_origins' => [],
    'rate_limit_seconds' => 8,
    'max_request_bytes' => 65536,
    'success_message' => 'Thank you! We have successfully received your request. Our team will review your information and get back to you shortly.',
];
