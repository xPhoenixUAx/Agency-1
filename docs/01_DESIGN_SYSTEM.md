# 01 — Design System

Візуальний характер: світлий, преміальний, точний, business-first, data-driven. Карти й діаграми мають відчуватися як елементи професійного продукту, а не випадкові маркетингові «квадратики».

Основний референс: `references/07-design-system.png`.

## 1. Контейнер

```css
:root {
  --container-max: 1440px;
  --page-pad: 48px;
}

.container {
  width: min(calc(100% - (var(--page-pad) * 2)), var(--container-max));
  margin-inline: auto;
}

@media (max-width: 1439px) {
  :root { --page-pad: 40px; }
}

@media (max-width: 1199px) {
  :root { --page-pad: 32px; }
}

@media (max-width: 1023px) {
  :root { --page-pad: 28px; }
}

@media (max-width: 767px) {
  :root { --page-pad: 24px; }
}

@media (max-width: 390px) {
  :root { --page-pad: 20px; }
}
```

Внутрішній контент ніколи не ширший за 1440px. Фон секції може тягнутися на всю ширину viewport.

## 2. Grid

| Режим | Колонки | Gap | Типова поведінка |
|---|---:|---:|---|
| Desktop ≥1200 | 12 | 24–32px | split 5/7, 6/6, 7/5; до 4 карт у ряд |
| Tablet 768–1199 | 8 | 20–24px | split лише якщо колонки залишаються ≥320px; переважно stack/2-col |
| Mobile 360–767 | 4 | 16px | один основний потік; 2-col тільки для коротких KPI |

Не будувати складні сітки вкладеними `display:grid` без потреби. Для більшості секцій достатньо grid на рівні секції та flex усередині картки.

## 3. Колірні токени

```css
:root {
  --bg: #F8F7FB;
  --surface: #FFFFFF;
  --surface-soft: #F2EFF9;
  --surface-dark: #171223;
  --text: #121322;
  --text-soft: #6D7080;
  --text-inverse: #FFFFFF;
  --line: #E6E2ED;
  --brand: #6F3DFF;
  --brand-2: #9B78FF;
  --brand-dark: #3D199D;
  --success: #28B878;
  --warning: #F1A33A;
  --danger: #DF616A;
  --focus: #3B82F6;
}
```

Розподіл кольорів:

- 75–82%: теплий білий і світлі surface;
- 12–18%: чорний текст, тонкі borders, нейтральні підписи;
- 5–8%: brand violet/cobalt;
- success/warning/danger — тільки для змістовних статусів та графіків.

Заборонено додавати випадкові градієнти до кожної картки. Градієнт доречний у hero glow, primary CTA і центральному вузлі діаграми.

## 4. Типографіка

Рекомендація: `Manrope` для display + body. Альтернатива: `Inter`. Не використовувати більше двох сімейств.

| Стиль | Desktop | Tablet | Mobile |
|---|---|---|---|
| H1 | 72–92 / .94–1.0 | 56–68 / 1.0 | 44–58 / 1.0 |
| H2 | 52–64 / 1.0–1.08 | 44–54 | 34–42 |
| H3 | 28–36 | 26–32 | 24–30 |
| Body XL | 20 / 1.5 | 18–20 | 18 |
| Body | 18 / 1.55 | 17–18 | 16–18 |
| Label | 14–15 | 14 | 13–14 |

Приклад fluid type:

```css
.display-xl {
  font-size: clamp(3.25rem, 5.3vw, 5.75rem);
  line-height: .98;
  letter-spacing: -.055em;
}
```

Не розтягувати рядок H1 ширше за 850–900px. Довжина body text: 55–72 символи.

## 5. Відступи секцій

| Режим | Звичайна секція | Компактна секція | Hero top/bottom |
|---|---:|---:|---:|
| Desktop | 128–160px | 96–112px | 72–96 / 112–144px |
| Tablet | 96–112px | 72–88px | 64–80 / 88–112px |
| Mobile | 72–88px | 56–64px | 44–56 / 72–88px |

Використовувати `clamp()` для проміжних ширин, але фіксувати мінімальні значення на 360px.

## 6. Radius, border, shadow

```css
:root {
  --radius-xs: 10px;
  --radius-sm: 14px;
  --radius-md: 20px;
  --radius-lg: 28px;
  --radius-xl: 36px;
  --radius-pill: 999px;
  --shadow-card: 0 20px 60px rgba(44, 29, 76, .08);
  --shadow-float: 0 16px 50px rgba(18, 19, 34, .10);
}
```

- невеликі controls: 10–14px;
- звичайні cards: 20–28px;
- hero/CTA panels: 28–36px;
- border: `1px solid var(--line)`;
- shadow використовувати лише для ієрархії, не на кожному елементі.

## 7. Кнопки

Primary:

- height 54–58px desktop, 52–56px mobile;
- violet/cobalt fill, білий текст;
- padding-inline 20–24px;
- arrow/icon 18–20px;
- border-radius 14–18px або pill — один варіант на весь сайт.

Secondary:

- біла/прозора surface;
- 1px border;
- темний текст;
- та сама висота, що primary.

Hover: `translateY(-2px)` + трохи глибша тінь. Active: `translateY(0) scale(.985)`. Focus-visible: 3px ring із offset 3px. Disabled: opacity .45, cursor default, без transform.

На 360px CTA-кнопки стають `width:100%`, якщо дві кнопки не поміщаються без скорочення тексту.

## 8. Карти

Default card:

- `background: var(--surface)`;
- `border: 1px solid var(--line)`;
- radius 24–32px;
- desktop padding 28–36px;
- tablet 24–30px;
- mobile 22–26px.

Не приховувати важливий опис на hover. Hover може підкреслити карту, але весь зміст доступний без миші.

## 9. Графіки й data visualization

- Chart.js або SVG;
- critical numbers завжди дублюються текстом;
- desktop chart height 300–390px;
- tablet 240–320px;
- mobile 180–220px;
- прибирати другорядні grid lines і кожну другу axis label на малому екрані;
- tooltip не має виходити за viewport;
- не запускати chart до наближення секції до viewport.

## 10. Іконки

Lucide або одна власна SVG-система. Розміри 18/20/24px. Badge-container 40–48px. Stroke-width однаковий на всьому сайті. Не змішувати outline і filled icon packs.

