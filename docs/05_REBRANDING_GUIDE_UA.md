# 05 — Максимально простий ребрендинг

## Що редагує клієнт

У більшості випадків — лише:

`starter/config/config.js`

Клієнт змінює значення після двокрапки всередині лапок. Назви ключів ліворуч не змінювати.

У config зібрані:

- brand name і legal name;
- tagline;
- logo / dark logo / favicon paths;
- brand colors;
- email, address, social links;
- main navigation labels;
- primary/secondary CTA;
- hero copy;
- proof/trust labels;
- metrics;
- page titles/meta descriptions;
- footer text and links;
- form labels/options/success/failure messages;
- legal updated dates.

## Найпростіша заміна logo

Замінити файли, зберігши імена:

```text
/assets/brand/logo.svg
/assets/brand/logo-dark.svg
/assets/brand/favicon.svg
```

Тоді paths у config взагалі не потрібно змінювати.

Вимоги до SVG logo:

- прозорий background;
- без embedded raster image;
- `viewBox` присутній;
- без жорстко заданої ширини/висоти;
- світла та dark-версія мають однакові пропорції.

## Кольори

Client змінює:

```js
colors: {
  brand: "#6F3DFF",
  brandSecondary: "#9B78FF",
  brandDark: "#3D199D"
}
```

`config-loader.js` автоматично переносить значення в CSS custom properties. Редагувати CSS не потрібно.

Перед прийманням нових кольорів перевірити:

- contrast білого тексту на brand button;
- focus ring;
- links на white background;
- chart distinction;
- dark section readability.

## Прив’язка тексту

```html
<h1 data-config="pages.home.hero.title"></h1>
<p data-config="pages.home.hero.text"></p>
```

Для href/src:

```html
<a data-config="cta.primary.label"
   data-config-href="cta.primary.url"></a>

<img data-config-src="brand.logo"
     data-config-alt="brand.name">
```

Для повторюваних items:

```html
<div data-config-list="pages.home.hero.metrics">
  <template>
    <article class="metric-card">
      <strong data-config-item="value"></strong>
      <span data-config-item="label"></span>
    </article>
  </template>
</div>
```

Loader використовує `textContent` і attribute assignment, а не `innerHTML`, тому звичайне редагування config не створює HTML injection.

## Що не редагує клієнт

- HTML structure;
- CSS layout/breakpoints;
- JS interactions/animations;
- PHP validation rules;
- field names, якщо backend integration вже налаштована.

## Єдиний другий файл

Recipient email не можна безпечно брати з browser `config.js`, тому deployment person один раз редагує:

`starter/php/server-config.php`

```php
'recipient' => 'audit@client-domain.com',
'from' => 'website@client-domain.com',
```

Це серверна конфігурація; вона не відображається у source browser.

## Rebranding checklist

1. Замінити 3 brand SVG.
2. Змінити `brand`, `contact`, `colors`, `cta` в `config.js`.
3. Перевірити page SEO titles.
4. Замінити placeholder metrics і case results або прибрати їх.
5. Заповнити `server-config.php`.
6. Надіслати test submission.
7. Перевірити inbox + spam + Reply-To.
8. Перевірити всі 7 pages на 1440, 834, 390 і 360px.

