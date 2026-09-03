# 06 — Form Handler

Готові файли:

- `starter/js/form.js` — UX, client validation, AJAX;
- `starter/php/send-form.php` — server validation, honeypot, rate limit, email, JSON;
- `starter/php/server-config.php` — recipient/from/origin settings.

## HTML requirements

Form:

```html
<form data-audit-form action="/php/send-form.php" method="post" novalidate>
```

Кожне поле має `name`, label і error container:

```html
<label for="audit-email">Business Email</label>
<input id="audit-email" name="email" type="email"
       autocomplete="email" required
       aria-describedby="error-email">
<span id="error-email" data-error-for="email"></span>
```

Status:

```html
<div data-form-status aria-live="polite" tabindex="-1"></div>
```

Honeypot:

```html
<div class="hp-field" aria-hidden="true">
  <label for="website-confirm">Leave this field empty</label>
  <input id="website-confirm" name="website_confirm"
         type="text" tabindex="-1" autocomplete="off">
</div>
```

Timestamp:

```html
<input type="hidden" name="form_started_at" value="">
```

`form.js` заповнює timestamp при initial interaction, але backend не покладається на нього як на єдиний anti-spam mechanism.

## Field names expected by PHP

| Field | Required | Rules |
|---|---|---|
| `name` | yes | 2–100 chars |
| `company` | no | max 120 chars |
| `email` | yes | valid email, max 190 |
| `website` | no | valid URL, max 255 |
| `business_type` | yes | whitelist |
| `budget` | no | whitelist |
| `need_help` | yes | whitelist |
| `message` | yes | 10–2000 chars |
| `consent` | yes | value `1`/`on`/`yes` |
| `website_confirm` | honeypot | must be empty |

## Success UX

Success rendered inline; не redirect. Default message береться з config:

“Thank you! We have successfully received your request. Our team will review your information and get back to you shortly.”

## Server deployment

1. Upload `/php/server-config.php` і `/php/send-form.php`.
2. Set recipient/from on the same domain when possible.
3. Add production origin to `allowed_origins`.
4. Confirm PHP `mail()` is configured by host.
5. Submit with valid data.
6. Submit invalid email and verify 422 JSON + inline error.
7. Fill honeypot manually and verify neutral success without email.
8. Verify `Reply-To` uses visitor email.

## Production email reliability

`mail()` is included because it works on many standard PHP hostings without dependencies. For high-deliverability production, replace the final transport with SMTP/PHPMailer while preserving the same validation and JSON response format. Configure SPF, DKIM and DMARC for the sending domain.

Ніколи не ставити visitor email у `From`; це погіршує deliverability і може порушити DMARC. Visitor email використовується лише як sanitized `Reply-To`.

## Expected JSON

Success:

```json
{
  "ok": true,
  "message": "Thank you! We have successfully received your request. Our team will review your information and get back to you shortly."
}
```

Validation failure:

```json
{
  "ok": false,
  "message": "Please check the highlighted fields.",
  "errors": {
    "email": "Enter a valid business email."
  }
}
```

