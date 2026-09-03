# 04 — Responsive Implementation & QA

## Breakpoint strategy

```css
/* Mobile first: 360–767 */
/* Tablet: 768–1199 */
/* Desktop: 1200+ */

@media (min-width: 768px) { /* tablet enhancements */ }
@media (min-width: 1200px) { /* desktop layout */ }
```

Додаткові content breakpoints допустимі на 390, 834, 1024 і 1440, але вони мають виправляти конкретну проблему, а не створювати окремий дизайн для кожного пристрою.

## Обов’язкові тестові ширини

| Група | Viewports |
|---|---|
| Wide desktop | 1920, 1600, 1440 |
| Compact desktop | 1366, 1280, 1200 |
| Tablet landscape/portrait | 1199, 1024, 834, 820, 768 |
| Mobile | 767, 430, 414, 390, 375, 360 |

Тестувати мінімум на DPR 1 і DPR 2. На 360px сторінка не повинна мати горизонтального скролу.

## Desktop 1200+

- 12-column grid;
- container не ширший за 1440px навіть на 1920;
- H1 max-width 800–900px;
- paragraph max-width 620–720px;
- dashboard layouts 55/45, 50/50 або 5/7;
- max 4 стандартні cards у ряд, 5 тільки для compact capability cards;
- section spacing 112–160px;
- hover — enhancement, не єдина можливість побачити content;
- rich charts/diagrams дозволені;
- floating scrolled header;
- continuous orbital motion лише тут.

## Tablet 768–1199

- 8-column grid;
- page padding 28–32px;
- section spacing 88–112px;
- desktop navigation переходить у burger до cramped state;
- two-column section stack, якщо хоча б одна column стає <320px;
- 4-card rows стають 2×2;
- service bento — 2 columns;
- complex horizontal flow — 2 rows;
- tabs — horizontal scroll;
- charts зменшують label density, а не scale text;
- форми не ширші 720px;
- не покладатися на hover.

## Mobile 360–767

- 4-column grid, але більшість content займає всі 4;
- page padding 24px, на ≤390 — 20px;
- section spacing 64–88px;
- fullscreen menu;
- CTA stack, якщо labels не поміщаються;
- KPI допускаються 2×2;
- стандартні cards — одна колонка;
- charts 180–220px і спрощені axes;
- flows/process — vertical timelines;
- tabs — accordion;
- input height ≥52px, font ≥16px;
- touch target ≥44×44;
- жодної desktop overlap-композиції.

## Overflow debugging

Базово:

```css
html,
body {
  max-width: 100%;
  overflow-x: clip;
}
```

Це не спосіб приховати помилку. Якщо є overflow:

1. тимчасово додати `* { outline: 1px solid rgba(255,0,0,.15); }`;
2. перевірити fixed widths, SVG `viewBox`, long URLs, transforms, 100vw + padding;
3. замінити `width:100vw` на `width:100%` у container children;
4. додати `min-width:0` grid/flex children;
5. дозволити `overflow-wrap:anywhere` для email/URLs на legal pages.

## Functional QA

- menu відкривається клавіатурою;
- Escape закриває;
- focus trapped inside open menu;
- focus повертається на trigger;
- active nav коректний на кожній сторінці;
- filters працюють кнопками та клавіатурою;
- tabs/accordion мають правильні ARIA states;
- form validation не залежить лише від кольору;
- submit не дублює request при double-click;
- success/failure оголошуються screen reader;
- form працює без animation libraries;
- PHP повертає JSON для success і validation errors.

## Visual QA

- однакові radii для однакових component families;
- borders не зникають на світлих дисплеях;
- H1/H2 не мають orphan single word, якщо цього можна уникнути;
- усі card paddings узгоджені;
- CTA не змінює висоту між pages;
- dark section contrast ≥ WCAG AA;
- chart colors мають text legend;
- footer не виглядає як випадково інший сайт.

## Performance QA

- SVG для diagrams/icons;
- images AVIF/WebP + dimensions;
- lazy-load below-fold imagery;
- `defer` для scripts;
- charts ініціалізуються near viewport;
- animation only transform/opacity;
- немає hero video;
- font files subset/self-host або максимум 2 weights критично;
- Lighthouse target: Performance ≥90, Accessibility ≥95 за реалістичного production content.

