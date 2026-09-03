# 07 — Implementation Checklist

## Architecture

- [ ] HTML5 / CSS3 / Vanilla JS only
- [ ] no framework/build dependency required
- [ ] semantic landmarks
- [ ] one H1 per page
- [ ] reusable header/footer/components
- [ ] max container 1440px
- [ ] minimum viewport 360px
- [ ] config loaded before config-loader
- [ ] PHP handler path matches form action

## Pages

- [ ] `index.html`
- [ ] `services.html`
- [ ] `case-studies.html`
- [ ] `about.html`
- [ ] `index.html#contact`
- [ ] `privacy.html`
- [ ] `terms.html`
- [ ] 404 page uses same header/footer

## Rebranding

- [ ] name/legal name editable in config
- [ ] logo/light logo/favicon paths editable
- [ ] colors editable without CSS
- [ ] company email/address editable
- [ ] hero and CTA editable
- [ ] metrics editable
- [ ] footer strings/links editable
- [ ] SEO titles/descriptions editable
- [ ] form labels/options/status editable
- [ ] legal dates editable
- [ ] recipient/from stored only server-side

## Responsive QA

- [ ] 1920
- [ ] 1600
- [ ] 1440
- [ ] 1366
- [ ] 1280
- [ ] 1200
- [ ] 1024
- [ ] 834
- [ ] 820
- [ ] 768
- [ ] 767
- [ ] 430
- [ ] 414
- [ ] 390
- [ ] 375
- [ ] 360
- [ ] no page-level horizontal scroll
- [ ] no tiny chart labels
- [ ] no hover-only content

## Accessibility

- [ ] skip link
- [ ] logical heading order
- [ ] visible focus styles
- [ ] mobile menu keyboard support
- [ ] Escape closes menu
- [ ] focus trap + focus return
- [ ] buttons use button elements
- [ ] form labels always visible
- [ ] inline errors linked with aria-describedby
- [ ] aria-live form/filter status
- [ ] charts duplicated as text metrics
- [ ] contrast AA
- [ ] reduced motion

## Performance

- [ ] SVG for icons/diagrams
- [ ] images include width/height
- [ ] WebP/AVIF where appropriate
- [ ] lazy-load below fold
- [ ] scripts defer
- [ ] charts initialize near viewport
- [ ] animate transform/opacity only
- [ ] no hero video
- [ ] no scroll hijacking
- [ ] production files minified only after debug version is approved

## Form

- [ ] POST only
- [ ] server-side validation
- [ ] whitelist selects
- [ ] email validation
- [ ] header injection protection
- [ ] honeypot
- [ ] origin validation in production
- [ ] request-size limit
- [ ] basic rate limit
- [ ] JSON success/error
- [ ] clear inline failure state
- [ ] no double submit
- [ ] SMTP considered for production
- [ ] SPF/DKIM/DMARC checked

## Content integrity

- [ ] no fake Google Partner badge
- [ ] no unapproved client logos
- [ ] no invented performance results
- [ ] case placeholders clearly marked
- [ ] legal copy supplied/approved separately
- [ ] all links and CTA URLs verified
- [ ] current year rendered correctly
