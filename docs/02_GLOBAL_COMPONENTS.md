# 02 — Global Components

Візуальний референс: `references/08-global-components.png`.

## Header

### Desktop 1200+

- висота 88px;
- логотип ліворуч;
- navigation по центру або після логотипу;
- primary CTA праворуч;
- на початку сторінки фон прозорий;
- після 24–40px scroll header перетворюється на floating surface всередині 1440px контейнера;
- floating state: white 92–96% opacity, border, blur 16–20px, radius 18–22px, soft shadow;
- active link відрізняється кольором/underline, не лише opacity.

Sticky shell можна залишати на весь viewport, але сама панель має дотримуватися `.container`.

### Tablet 768–1199

- висота 76–82px;
- logo + compact CTA + burger;
- перемикати на burger орієнтовно на 1080–1120px, не чекати, поки nav фізично зламається;
- CTA можна приховати нижче 820px, якщо logo/controls стають затісними.

### Mobile 360–767

- висота 68–74px;
- logo max-width 132–150px;
- burger hit area не менше 44×44;
- fullscreen overlay `position:fixed; inset:0; z-index` вище header;
- велика навігація 28–36px;
- CTA внизу або після links;
- `body` scroll lock;
- Escape закриває меню;
- фокус не виходить за overlay;
- після закриття focus повертається на burger.

Animation: overlay opacity 0→1, links y 18→0 зі stagger 70–90ms. Не використовувати надмірну 3D-анімацію.

## Footer

### Desktop

4 колонки:

1. brand + коротке позиціонування;
2. services;
3. company/resources;
4. CTA і contact data.

Bottom row: copyright, privacy, terms. Min padding-top/bottom 72/32px.

### Tablet

2×2 grid; не стискати чотири колонки. Колонки мінімум 260px.

### Mobile

Один потік. Групи links можуть бути accordion, але Privacy і Terms мають залишатися прямими посиланнями. Touch targets 44px.

Усі company values, CTA, email, address, legal links і copyright надходять із config.

## Section heading

Структура:

```html
<header class="section-heading">
  <p class="eyebrow">...</p>
  <h2>...</h2>
  <p class="section-heading__text">...</p>
</header>
```

Desktop max-width: 760–920px. Mobile: width 100%. Eyebrow 13–14px uppercase, letter-spacing .08em, brand color.

## Metric card

Обов’язкові елементи:

- semantic label;
- strong value;
- trend/status із текстом, а не лише кольором;
- optional sparkline;
- timeframe/context.

Не використовувати реальні результати без підтвердження.

## Data-flow / funnel

Desktop: horizontal nodes + SVG connector. Tablet: 2 rows. Mobile: vertical timeline із лінією ліворуч.

Connector animation змінює тільки `stroke-dashoffset`/opacity. Для `prefers-reduced-motion` показувати відразу фінальний стан.

## Tabs → accordion transformation

- desktop: vertical or horizontal tabs залежно від секції;
- tablet: horizontal scroll tabs з `scroll-snap`;
- mobile: semantic accordion на `<button aria-expanded>`;
- зміст один і той самий, не дублювати вручну дві версії в DOM;
- JS лише перемикає presentation mode/class, дані залишаються спільними.

## Form controls

- labels завжди видимі;
- input/select min-height 52px;
- mobile font-size мінімум 16px;
- border default `--line`, focus `--brand`, error `--danger`, success `--success`;
- error message відразу під полем і пов’язаний через `aria-describedby`;
- submit disabled тільки під час відправлення;
- status container має `aria-live="polite"`.

## Motion

Базовий reveal:

```js
gsap.from(elements, {
  y: 24,
  opacity: 0,
  duration: 0.8,
  stagger: 0.09,
  ease: "power3.out"
});
```

Правила:

- анімувати transform і opacity;
- не робити scroll hijacking;
- hero dashboard може мати легкий parallax тільки desktop;
- continuous orbit тільки desktop і з паузою, коли tab hidden;
- tablet/mobile: коротші reveals, жодної постійної ротації;
- `prefers-reduced-motion: reduce` вимикає stagger/continuous motion.

