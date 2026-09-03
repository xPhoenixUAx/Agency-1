# Google Ads Performance Agency — production-пак

Обраний напрям: **Concept #5 — Premium Light Performance UI**.

Цей пакет є повним handoff для реалізації сайту на **HTML5 / CSS3 / Vanilla JavaScript** з PHP-обробником форми. Фреймворк і build-система не потрібні.

## Що входить

- 8 детальних візуальних аркушів;
- референси Home, Services, Case Studies, About, Free Audit і спільного Legal-шаблону;
- на кожному page-reference показані desktop 1440, tablet 834 і mobile 390;
- окремий UI-kit і стани глобальних компонентів;
- точні правила контейнерів, grid, типографіки, відступів і breakpoint-ів;
- інструкції реалізації кожної сторінки для desktop / tablet / mobile;
- готовий client-editable `config.js`;
- безпечний DOM-loader для підстановки даних із config;
- JS для AJAX-відправлення форми та inline validation;
- PHP handler із server-side validation, honeypot, Origin check і JSON-відповіддю;
- чекліст готовності та QA-матриця.

## Головні обмеження

- максимальна ширина контентного контейнера: **1440px**;
- мінімальна підтримувана ширина viewport: **360px**;
- desktop: **1200px+**;
- tablet: **768–1199px**;
- mobile: **360–767px**;
- жодного пропорційного «стискання десктопа» на планшеті або телефоні;
- жодного horizontal page scroll;
- основні дані для ребрендингу змінюються в одному файлі: `starter/config/config.js`;
- лише адреси одержувача/відправника форми змінюються окремо в `starter/php/server-config.php`, бо їх не можна безпечно зберігати в публічному JS.

## Структура пакета

```text
google-ads-agency-pack/
├── 00_START_HERE_UA.md
├── docs/
│   ├── 01_DESIGN_SYSTEM.md
│   ├── 02_GLOBAL_COMPONENTS.md
│   ├── 03_PAGE_IMPLEMENTATION.md
│   ├── 04_RESPONSIVE_QA.md
│   ├── 05_REBRANDING_GUIDE_UA.md
│   ├── 06_FORM_HANDLER.md
│   └── 07_IMPLEMENTATION_CHECKLIST.md
├── references/
│   ├── 01-home-responsive.png
│   ├── 02-services-responsive.png
│   ├── 03-case-studies-responsive.png
│   ├── 04-about-responsive.png
│   ├── 05-free-audit-responsive.png
│   ├── 06-legal-responsive.png
│   ├── 07-design-system.png
│   └── 08-global-components.png
└── starter/
    ├── config/config.js
    ├── css/base.css
    ├── js/config-loader.js
    ├── js/form.js
    ├── php/server-config.php
    ├── php/send-form.php
    └── snippets/config-bindings-example.html
```

## Сторінки сайту

```text
/index.html
/services.html
/case-studies.html
/about.html
/index.html#contact
/privacy.html
/terms.html
```

Архітектура допускає подальше додавання `service-detail.html` і `case-detail.html`, але вони не потрібні для першої версії.

## Рекомендований порядок реалізації

1. Перенести токени з `starter/css/base.css` у проєкт.
2. Зібрати header, mobile menu, footer і кнопки за `docs/02_GLOBAL_COMPONENTS.md`.
3. Підключити `config.js`, потім `config-loader.js`.
4. Реалізувати Home секція за секцією.
5. Побудувати внутрішні сторінки зі спільних компонентів.
6. Додати `form.js`, `send-form.php` і заповнити `server-config.php`.
7. Виконати responsive QA на всіх ширинах із матриці.
8. Заповнити чекліст перед передачею.

## Підключення скриптів

Порядок важливий: config має завантажуватися до loader.

```html
<script src="/config/config.js"></script>
<script src="/js/config-loader.js" defer></script>
<script src="/js/main.js" defer></script>
<script src="/js/form.js" defer></script>
```

## Важлива примітка щодо референсів

Зображення задають композицію, ієрархію, щільність та адаптивну поведінку. Тексти, цифри, логотипи й результати на них є демонстраційними. У production не використовувати вигадані client logos або непідтверджені результати.
