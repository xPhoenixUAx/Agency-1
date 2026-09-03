# 03 — Page-by-page Implementation

## Загальні правила для всіх сторінок

- Один `h1` на сторінку.
- Кожна секція має semantic `section` і зрозумілий `aria-labelledby`.
- Background може бути full-bleed; контент завжди в `.container` max 1440px.
- DOM-order відповідає mobile reading order. Desktop layout змінюється CSS Grid, а не дублюванням контенту.
- Не використовувати зображення тексту для chart metrics: цифри мають бути HTML.
- Усі visible brand/company/CTA values — з `config.js`.
- У production не публікувати placeholder results як реальні.

---

# HOME — `/index.html`

Референс: `references/01-home-responsive.png`.

## 1. Hero

Контент: eyebrow, H1, paragraph, primary/secondary CTA, trust line, performance dashboard, KPI strip.

### Desktop 1200+

- section min-height 780–860px;
- grid 12 columns, copy 5–6, visual 6–7;
- copy vertically centered; max-width 680px;
- H1 орієнтир 72–88px, не більше 4 коротких рядків;
- dashboard card min-width 620px, chart 300–360px;
- dashboard має 4 KPI + main chart + funnel/sidebar;
- нижня trust/KPI strip може перетинати hero bottom на 24–32px;
- soft radial glow під dashboard, без тяжкої фотографії.

### Tablet 768–1199

- один потік: copy → CTA → dashboard → KPI;
- copy max-width 760px;
- dashboard max-width 100%, chart height 260–300px;
- 4 KPI в 2×2 або 4 в ряд лише на landscape 1024+;
- забрати sidebar funnel, якщо основний chart стає вужчим за 540px;
- hero min-height не фіксувати.

### Mobile 360–767

- H1 44–54px, paragraph 16–18px;
- CTA stack при ≤430px; gap 12px;
- dashboard: KPI 2×2, chart 190–220px, funnel відсутній або у вигляді вертикальних 3 nodes;
- не показувати дрібні axis labels; залишити beginning/end + textual totals;
- trust logo strip або 2×2, або horizontal scroll з видимим наступним item;
- decorative glow обрізати всередині секції, не створюючи overflow.

### Interaction

- H1 line reveal один раз;
- dashboard cards stagger;
- chart line можна draw-on-scroll;
- continuous orbit/floating тільки desktop;
- без JS hero залишається повністю видимим.

## 2. Business Outcomes

Cards: Qualified Leads, Revenue, CPA/CPL, Data Quality.

### Desktop

4 рівні карти в ряд. Перша/друга можуть мати більший visual emphasis, але висота узгоджена. У кожній card: icon, claim/value, пояснення, micro-chart.

### Tablet

2×2 grid, min card width 300px. На 768px gap 20px.

### Mobile

Одна колонка. Micro-chart праворуч від value або внизу. Не робити carousel для чотирьох базових outcome cards.

## 3. Core Services

5 cards: Google Ads Management, Lead Generation, E-commerce Growth, Tracking & Analytics, Marketing Automation.

### Desktop

Asymmetric bento на 12 колонок:

- featured Google Ads: 7 cols × 2 rows;
- Lead Generation: 5 cols;
- E-commerce: 5 cols;
- Tracking: 6 cols;
- Automation: 6 cols.

Featured card містить compact campaign UI, решта — один сильний visual pattern. Уся card клікабельна, але link має доступне ім’я.

### Tablet

2-column grid. Featured займає всі 8 cols. Решта 4+4.

### Mobile

Одна колонка; featured не повинна бути вдвічі довша за інші. Усе, що було декоративним dashboard, скорочується до 2–3 metrics.

## 4. Performance System

Сценарій: Google Ads → Landing Page → Lead → CRM → Qualified → Sale.

### Desktop

6 nodes у горизонтальній послідовності, SVG connector під ними. Central/qualified nodes підкреслені. Додати feedback line від Sale назад до Ads/Data.

### Tablet

2 rows × 3 nodes. Стрілка між rows не має перетинати cards; SVG path генерується відповідно до actual element positions.

### Mobile

Vertical timeline. Node icon у лівій колонці 44px, content справа. Feedback пояснюється окремою card під timeline, а не складною looping line.

## 5. Case Studies preview

### Desktop

Featured case 12 cols: narrative 4–5 cols, graph 5 cols, metrics 3 cols. Дві smaller cases нижче 6+6.

### Tablet

Один case у ряд. У featured chart і metrics можуть бути 5+3 cols після narrative.

### Mobile

Порядок: category → title → Challenge → Strategy → 2×2 metrics → chart → link. Chart 190–220px. Жодного masonry.

## 6. Google Ads Capabilities

Items: Search, Performance Max, Shopping, Demand Gen/YouTube/Display, App Campaigns.

### Desktop

Tabs 4 cols ліворуч, dynamic visual 8 cols праворуч. Active tab має icon, title, short outcome, arrow.

### Tablet

Horizontal scroll tablist зверху; visual під нею. `scroll-snap-align:start`.

### Mobile

Accordion. При відкритті показати короткий опис + 2–3 capability rows + simplified UI preview. Не приховувати ключову інформацію лише в desktop tab panel.

## 7. Tracking & Analytics

Контрастна dark-violet section.

### Desktop

Copy 5 cols; feedback-loop visual 7 cols. Nodes: Ad Click → Conversion → CRM → Revenue → Feedback. Текст і metrics білі/світлі, success highlight mint.

### Tablet

Copy зверху, visual нижче. Максимум 2 rows nodes.

### Mobile

Vertical stack; background full-bleed; cards можуть бути трохи світліші за section. Не зменшувати node labels нижче 14px.

## 8. Marketing Automation

Cards: Reporting, Performance Monitoring, Budget Alerts, CRM Feedback, Lead Tracking, Feed Automation, AI Analysis, Anomaly Detection.

### Desktop

Central dashboard 6 cols, навколо/поруч cards у bento. Не будувати хаотичну orbit, якщо connections не мають змісту.

### Tablet

2-column cards; central dashboard full width above.

### Mobile

1-column outcome cards. Developer terms замінюються business language. Max 8 cards, кожна 100–150px висоти.

## 9. Process

01 Audit, 02 Strategy, 03 Setup & Launch, 04 Optimize, 05 Scale.

### Desktop

5-step horizontal sequence, step line не проходить через текст. У кожного кроку number, title, 1 sentence.

### Tablet

3+2 grid або vertical timeline. На 768 portrait краще vertical.

### Mobile

Vertical timeline. Активна progress-анімація допускається один раз при вході в viewport.

## 10. Final Audit CTA

### Desktop

Large light-violet rounded panel, 12 cols, padding 56–72px. Headline 52–60px; CTA right або нижче.

### Tablet

Stack, padding 40–48px, CTA natural width.

### Mobile

Padding 28–32px, radius 24px, button width 100%, headline 32–38px.

---

# SERVICES — `/services.html`

Референс: `references/02-services-responsive.png`.

## 1. Hero

Desktop: copy 5 cols, campaign overview stack 7 cols; min-height 620–720px. Tablet/mobile: copy then dashboard. Mobile лишає 4 KPI + one chart, без layered overlap.

## 2. Google Ads Management

Capabilities: Search, Performance Max, Shopping, Demand Gen/YouTube/Display, App Campaigns.

### Desktop

Intro 3 cols, cards 9 cols/5-card grid. Кожна capability має icon, role, business outcome. Не робити п’ять однакових paragraph cards — додати різні micro UI: keyword trend, feed status, placement split.

### Tablet

Intro full width, cards 2–3 в ряд залежно від 834/1024. Min width 220px.

### Mobile

Compact icon rows або accordion. Touch target 56px, details below active row.

## 3. Lead Generation

Full flow Google Ads → Landing Page → Lead → CRM → Qualified Lead → Sale.

- desktop: full-width horizontal journey;
- tablet: 2 rows × 3;
- mobile: vertical journey;
- під journey показати три controls: lead quality, offline conversions, sales feedback.

## 4. E-commerce Growth

### Desktop

Copy 4 cols, product feed + revenue dashboard 8 cols. Visual layers: Merchant Center status, product card/feed health, Shopping/PMax mix, revenue/ROAS chart.

### Tablet

Copy above visual; KPI 4 across at 1024 or 2×2 at 834.

### Mobile

Feed status becomes list, KPI 2×2, chart max 220px.

## 5. Tracking & Analytics

Capabilities: Conversion Tracking, Analytics, GTM, Call Tracking, Offline Conversions, CRM Integration, Revenue Tracking, Attribution, Lead Quality.

### Desktop

Dark full-width section; copy 4 cols, layered data diagram 8 cols; capability chips/cards in two rows.

### Tablet

Diagram under copy. Capability cards 3 columns at 1024, 2 at 768–834.

### Mobile

Group into three understandable blocks: Capture, Connect, Improve. Усередині — icon rows. Уникати дев’яти однакових великих cards.

## 6. Automation

Use business outcomes:

- clearer reporting;
- early anomaly warnings;
- faster budget decisions;
- CRM feedback;
- cleaner feeds;
- less manual checking.

Desktop 4-column bento/row; tablet 2-column; mobile single-column.

## 7. CTA

Використати спільний Final Audit CTA. Показати коротко, що саме входить в audit. Не повторювати всю форму на Services.

---

# CASE STUDIES — `/case-studies.html`

Референс: `references/03-case-studies-responsive.png`.

## 1. Hero + filters

Desktop hero висотою 420–520px, headline max-width 760px. Filter row нижче intro. Tablet same flow. Mobile filters horizontal-scroll з gradient/fade cue праворуч; filter buttons 44px min-height.

Filters: All, Lead Generation, E-commerce, B2B, Apps.

JS filtering:

- cards мають `data-case-category`;
- натискання оновлює `aria-pressed`;
- приховані cards отримують `hidden`;
- після filter update оголосити count в `aria-live`;
- без JS показати всі cards.

## 2. Featured case

Структура: sector, placeholder indicator, title, Challenge, Strategy, tags, chart, 3–4 metrics, detail link.

### Desktop

Wide 12-col card. Narrative 4, chart 5, metrics 3. Card padding 36–48px.

### Tablet

Narrative full width, chart 5 cols + metrics 3 cols; при 768 усе stack.

### Mobile

Title → 2×2 metrics → Challenge → Strategy → chart → link. Chart labels спрощені.

## 3. Case grid

Desktop 2 columns, tablet/mobile 1. Не використовувати masonry — рівний reading order важливіший. Усі cards мають однакову внутрішню структуру, але можуть відрізнятися chart type.

Валідні metric categories:

- lead gen: lead volume, CPL, CPA, qualified leads, CVR;
- e-commerce: revenue, ROAS, CPA, purchases, CVR;
- apps: installs, CPI, in-app conversions;
- B2B: pipeline, qualified opportunities, cost per opportunity.

## 4. Placeholder disclaimer

До отримання реальних кейсів додати видимий neutral note: data is placeholder for layout demonstration. Не використовувати відомі company logos як декоративний social proof.

## 5. CTA

CTA може використовувати формулювання “Request an account review”, а URL веде на `/index.html#contact`.

---

# ABOUT — `/about.html`

Референс: `references/04-about-responsive.png`.

## 1. Hero

Headline: “Performance marketing with business context.”

Desktop: editorial copy 6 cols, decision-system visual 6 cols. Tablet/mobile: copy first, visual second. Visual має чотири змістовні вузли, не випадкові orbit chips.

## 2. Principles

1. Data before assumptions
2. Revenue before vanity metrics
3. Lead quality before raw volume
4. Transparent reporting

Desktop 4 cards, tablet 2×2, mobile 1 column/compact rows. Кожний principle: icon, title, one concrete sentence.

## 3. Decision Framework

Signal → Analysis → Decision → Test → Feedback.

Desktop horizontal, tablet 3+2 or one row at 1024, mobile vertical. Feedback step візуально повертається до Signal лише на desktop; mobile пояснює цикл текстом.

## 4. Ecosystem

Google Ads, Analytics, GTM, CRM, Merchant Center, Reporting, Automation.

Desktop connected system; tablet two rows; mobile 2-column compact cards + Automation full width. Не показувати інтеграції, яких агентство реально не підтримує, після отримання content.

## 5. How we work / evidence

До наявності реальних team photos використовувати principles, operational proof, reporting examples і process metrics. Не вигадувати 50+ specialists або $250M+ revenue; ці значення на референсі лише UI placeholders.

Desktop 4–5 small evidence cards, tablet 2×2, mobile key/value rows.

## 6. CTA

Спільний audit CTA. Короткий текст: review account, identify tracking gaps, prioritize next actions.

---

# CONTACT FORM — `/index.html#contact`

Референс: `references/05-free-audit-responsive.png`.

Це primary conversion page. Не робити giant multi-step wizard.

## 1. Hero + form

### Desktop

- 12-column split: left 5, form 7 або 5/7;
- left: H1, intro, 3 benefits, proof/metric card;
- right: form card 560–640px, padding 32–40px, radius 28–32px;
- page top до form 40–72px після header;
- two-column field rows тільки для short fields;
- long selects/message full width.

### Tablet

- single-column;
- copy max-width 760px;
- form max-width 720px;
- short fields можуть бути 2 columns на 1024, але 1 column на 768 portrait;
- proof metrics 4 across at 1024 або 2×2.

### Mobile

- form full-width у container;
- input/select min-height 52px, font-size ≥16px;
- усі fields 1 column;
- textarea min-height 140px;
- submit full width;
- inline status card під submit;
- не показувати success card постійно — на референсі це demonstration state.

## 2. Fields

Required:

- Name;
- Business Email;
- Business Type;
- What do you need help with?;
- Main Goal / Message;
- Consent.

Optional:

- Company;
- Website;
- Monthly Advertising Budget.

Business Type options: Lead Generation, E-commerce, Local Business, B2B / SaaS, Mobile App, Other.

Need Help options: Google Ads Management, Performance Max, Shopping, Lead Generation, Tracking & Analytics, Marketing Automation, Account Audit, Other.

## 3. Validation and status

- visible labels;
- client validation для швидкого UX, server validation як authority;
- first invalid field отримує focus;
- errors зберігають layout і не викликають великого стрибка;
- submit disabled під час request;
- success rendered inline, form values cleared після success;
- failure не очищає form;
- status `aria-live="polite"`;
- honeypot invisible для sighted users, але не через `display:none` field name, який боти можуть розпізнати; використати off-screen wrapper.

## 4. What happens next

3 steps: account review, prioritized findings, follow-up/next action. Desktop horizontal, tablet/mobile vertical or compact 1-column. Не обіцяти точний термін, якщо бізнес його не підтвердив.

## 5. FAQ

3–5 питань. Native accessible accordion. Mobile залишається accordion, desktop теж може бути accordion — немає потреби робити окремий layout.

---

# PRIVACY / TERMS — `/privacy.html`, `/terms.html`

Референс: `references/06-legal-responsive.png`.

Обидві сторінки використовують один template/class system; змінюються title, last updated, TOC і article content.

## Desktop

- compact legal hero;
- article shell max 1160px;
- sticky TOC 260–300px зліва;
- article max-width 760–880px;
- body 17–18px, line-height 1.7;
- headings мають `scroll-margin-top` під sticky header;
- note/contact callout 100% article width;
- footer без data visualization.

## Tablet

- TOC стає disclosure/select-like accordion над article;
- article max-width 820px;
- side margins 28–32px;
- sticky behavior вимикається.

## Mobile

- title 42–48px і natural wrap;
- body 16–18px;
- TOC accordion;
- list indent 20–24px;
- callout padding 20–24px;
- footer stack;
- жодних chart/decorative dashboards.

## Legal content

Текст має бути наданий або підтверджений клієнтом/юристом. Референс не є юридичною консультацією. Email/address підставляються з config, щоб не редагувати вручну дві сторінки.
