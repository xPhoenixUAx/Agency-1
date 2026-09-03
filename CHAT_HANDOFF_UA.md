# Handoff: Google Ads Performance Agency website

Цей файл зібрано для продовження роботи в іншому чаті. Він фіксує початкове ТЗ, послідовність правок користувача, шляхи до референсів, поточний стан проєкту та останню незавершену задачу.

## Робоче середовище

- Поточна папка: `E:\lp\Agency-1`
- У цій папці немає Git-репозиторію (`.git` відсутній).
- Користувач переніс увесь проєкт із окремої папки в корінь. Не створювати нову вкладену папку `site`: актуальний сайт уже лежить безпосередньо в корені.
- Локальний preview раніше запускався командою:

  ```powershell
  php -S 127.0.0.1:8766 -t .
  ```

- Основна сторінка: `http://127.0.0.1:8766/index.html`
- PHP у середовищі був доступний (версія 8.3.32 під час попередньої перевірки).

## Початкове завдання користувача

У папці знаходяться повний reference та implementation pack для сайту Google Ads Performance Agency. Перед реалізацією потрібно було:

1. Прочитати `00_START_HERE_UA.md`.
2. Прочитати всі файли в `docs/`.
3. Переглянути всі зображення в `references/`.
4. Використати файли з `starter/` як основу для config, CSS, JavaScript і PHP-форми.

Потрібен повністю готовий багатосторінковий сайт зі сторінками:

- `index.html`
- `services.html`
- `case-studies.html`
- `about.html`
- `index.html#contact` — форма запиту аудиту на головній сторінці
- `privacy.html`
- `terms.html`

Стек:

- HTML5
- CSS3
- Vanilla JavaScript
- PHP для форми
- без React, Vue, Bootstrap, Tailwind та інших фреймворків
- без build-системи
- не використовувати Lenis
- GSAP, ScrollTrigger, Chart.js, Swiper і Lucide — лише за реальної потреби

Обов’язкові вимоги:

- максимально точно відтворити Concept #5 Premium Light Performance UI;
- максимальна ширина контентного контейнера — 1440px;
- мінімальний viewport — 360px;
- окремі адаптивні режими desktop, tablet і mobile;
- не стискати desktop layout пропорційно;
- спільні header, fullscreen mobile menu, footer, buttons, cards, forms і data-visualization components;
- усі секції з `docs/03_PAGE_IMPLEMENTATION.md`, без пропусків через складність;
- без випадкових placeholder-зображень та generic office photography;
- не вигадувати справжні client logos, Google Partner status або реальні рекламні результати;
- демонстраційні кейси позначати як placeholder data;
- важливі дані графіків дублювати звичайним HTML-текстом;
- keyboard navigation, focus states, reduced motion, ARIA;
- жодного горизонтального скролу на 360px.

Ребрендинг:

- назви, кольори, логотипи, контакти, CTA, SEO, footer content, form messages та основні тексти мають керуватися через `config/config.js`;
- звичайний ребрендинг не повинен вимагати редагування CSS або HTML;
- серверні email-адреси залишаються в `php/server-config.php`;
- `js/config-loader.js` базувався на starter-версії;
- відсутнє значення config не повинно ламати layout.

Форма:

- `js/form.js` та `php/send-form.php` базувалися на starter-файлах;
- client-side і server-side validation;
- honeypot;
- захист від повторного надсилання;
- inline errors;
- success/error без переходу на іншу сторінку;
- введені дані не губляться при помилці;
- JSON-відповіді PHP.

Очікувана CSS-структура:

- `css/base.css`
- `css/components.css`
- `css/layout.css`
- `css/responsive.css`
- `css/pages/home.css`
- `css/pages/services.css`
- `css/pages/case-studies.css`
- `css/pages/about.css`
- `css/pages/legal.css`

Очікувана JavaScript-структура:

- `js/config-loader.js`
- `js/main.js`
- `js/navigation.js`
- `js/animations.js`
- `js/charts.js`
- `js/case-filter.js`
- `js/form.js`

## Актуальна структура проєкту

У корені зараз є:

- усі 7 HTML-сторінок;
- `config/config.js`;
- усі передбачені CSS та JS файли;
- `php/send-form.php` і `php/server-config.php`;
- brand SVG;
- оригінальні/впізнавані іконки Google-сервісів у `assets/icons/services/`;
- документація та референси.

Важливі файли для поточної роботи:

- `index.html`
- `css/pages/home.css`
- `js/main.js`
- `config/config.js`
- `REFERENCE_INDEX.html`
- `references/01-home-responsive.png`

## Послідовність візуальних правок користувача

### Загальна реакція на першу реалізацію

Користувач зазначив, що візуал був надто спрощений порівняно з референсами. Основні побажання:

- дотягувати візуал до референсів максимально точно;
- використовувати нормальні іконки;
- не замінювати складні візуальні елементи випадковими CSS/SVG «рисками та палками»;
- за потреби генерувати нормальну графіку;
- обов’язково звірятися з `REFERENCE_INDEX.html`;
- працювати посекційно за детальними референсами.

### Header + hero

Desktop reference:

- `C:\Users\pavlo\Desktop\скріни\Знімок екрана 2026-09-02 184527.png`
- `C:\Users\pavlo\Desktop\скріни\Знімок екрана 2026-09-02 185756.png`

Tablet reference:

- `C:\Users\pavlo\Desktop\скріни\Знімок екрана 2026-09-02 185900.png`

Mobile reference:

- `C:\Users\pavlo\Desktop\скріни\Знімок екрана 2026-09-02 185935.png`

Додаткові правки:

- на tablet і mobile центрувати hero content;
- `.display-xl` центрувати на tablet/mobile;
- `.lede` також центрувати;
- hero збільшити приблизно на 30%;
- `.signal-strip` зробити marquee;
- іконки marquee — нормальні, кольорові, насичені та оригінальні іконки сервісів;
- marquee збільшити, бо попередній масштаб був дрібним;
- іконка для `Search` не пасувала — її треба було замінити.

### Друга секція: Business outcomes

Desktop:

- `C:\Users\pavlo\Desktop\скріни\Знімок екрана 2026-09-02 193500.png`

Tablet:

- `C:\Users\pavlo\Desktop\скріни\Знімок екрана 2026-09-02 193658.png`

Mobile:

- `C:\Users\pavlo\Desktop\скріни\Знімок екрана 2026-09-02 193712.png`

Ключове прохання: відтворити повноцінні data-visualization cards, не підміняти графіку випадковими декоративними лініями.

### Третя секція: Our services / capabilities

Desktop:

- `C:\Users\pavlo\Desktop\скріни\Знімок екрана 2026-09-02 200236.png`

Tablet:

- `C:\Users\pavlo\Desktop\скріни\Знімок екрана 2026-09-02 200349.png`

Mobile:

- `C:\Users\pavlo\Desktop\скріни\Знімок екрана 2026-09-02 200417.png`

Подальші правки:

- прибрати нумерацію;
- у `.capability-stack.is-pending.is-visible` контент карток був занадто дрібний — збільшити масштаб;
- desktop-секція була зависокою — підтягнути висоту;
- після першого скорочення висоту підтягнути ще;
- контент карток усе ще здавався дрібним — збільшити повторно;
- у `.capability-card.capability-card--automation.is-expanded` підрівняти контент і краще центрувати;
- користувач запитав, чи не дублюють одна одну `Our services` і `The performance system`;
- після огляду головної сторінки було вирішено зробити рекомендоване спрощення/покращення структури;
- секцію `Our services` на desktop ще раз зменшити по висоті.

### Measurement advantage

Основний desktop reference:

- `C:\Users\pavlo\Downloads\ChatGPT Image 2 вер. 2026 р., 21_26_50.png`

Перший широкий/планшетний reference, який кілька разів надсилали:

- `C:\Users\pavlo\Downloads\ChatGPT Image 2 вер. 2026 р., 21_34_20.png`

Пізніше користувач уточнив, що зображення нижче є саме **tablet reference**, а не mobile:

- `C:\Users\pavlo\Downloads\ChatGPT Image 2 вер. 2026 р., 21_34_26.png`

Окремий справжній mobile reference:

- `C:\Users\pavlo\Downloads\ChatGPT Image 2 вер. 2026 р., 22_35_53.png`

Додаткові скріншоти розбіжностей поточної desktop-реалізації:

- `C:\Users\pavlo\Desktop\скріни\Знімок екрана 2026-09-02 221131.png`
- `C:\Users\pavlo\Desktop\скріни\Знімок екрана 2026-09-02 222258.png` — проблема із зеленим return-path та центром `Optimization signal`;
- `C:\Users\pavlo\Desktop\скріни\Знімок екрана 2026-09-02 222731.png` — проблема з нижніми трьома benefit items.

Обов’язкова правка користувача для цієї секції: **прибрати нумерацію**. Референси показують круги `01–05`, але їх не слід повертати, бо користувач прямо попросив видалити нумерацію.

## Поточна реалізація Measurement advantage

Розмітка розташована в `index.html` у секції `.measurement-section` і містить:

- `.measurement-header`;
- `.measurement-loop`;
- `.measurement-flow-shell`;
- список `.measurement-flow` з п’ятьма `.measurement-stage`;
- `.measurement-mobile-loop-node`;
- `.measurement-feedback`;
- `.measurement-return-path`;
- `.measurement-benefit-drops`;
- `.measurement-benefits`.

У `js/main.js` додана іконка `arrow-up`. Нумерація stages у поточній HTML/CSS-реалізації відсутня.

Desktop уже отримав:

- 5 горизонтальних stage cards;
- фіолетові data-flow connectors;
- зелений return-path;
- центральний refresh-node;
- три benefits внизу.

Tablet уже переведений у snake layout `3 + 2`:

- перший ряд: Ad click → Conversion → CRM outcome;
- другий ряд: Revenue ← Qualified lead;
- зелений return-path під stage-картками;
- benefits вертикальним списком.

Mobile уже переведений у вертикальний flow із п’яти карток та правим зеленим return-loop.

Останні cache-busting версії, які були зафіксовані перед цим handoff:

- `/css/pages/home.css?v=20260902-41`
- `/js/main.js?v=20260902-18`
- `/config/config.js?v=20260902-24`

Якщо редагується CSS/JS/config, варто збільшити відповідний query version в HTML, щоб браузер не показував старий кеш.

## Остання актуальна задача — ще не завершена

Користувач попросив:

> підтягни ще планшетну версію до референса

Актуальний tablet reference:

- `C:\Users\pavlo\Downloads\ChatGPT Image 2 вер. 2026 р., 21_34_26.png`

На ньому потрібно точно відтворити:

- header із великим трирядковим заголовком;
- description ліворуч і status badge праворуч із вертикальним розділювачем;
- великий rounded dotted panel майже на всю ширину;
- flow у формі `3 + 2`;
- другий ряд: Revenue ліворуч, Qualified lead праворуч;
- фіолетовий snake connector між рядами;
- зелений return contour від Revenue до лівої частини flow;
- refresh node строго по центру зеленої горизонталі;
- `Optimization signal` і пояснення під ним;
- три benefits вертикальним списком із великими іконками, dotted vertical rail та dots;
- щільність і пропорції, близькі до референса;
- **без нумерації**, попри цифри на зображенні.

Перед перериванням було визначено ймовірні причини розбіжності в tablet CSS (`@media (min-width: 768px) and (max-width: 1199px)` у `css/pages/home.css`):

- нижні benefit rows мають `min-height: 102px` і, ймовірно, занадто розтягують секцію; референс ближчий до 76–80px на ряд;
- список benefits зараз надто широкий і центрований; у референсі він вужчий і сильніше зміщений праворуч, щоб іконки починалися приблизно в першій чверті panel;
- stage titles та іконки на tablet можуть бути замалі;
- column gap у `3 + 2` flow може бути замалим, через що cards виходять надто широкими;
- зелений return-path треба точніше посадити за лівим і правим відступом;
- panel heading і `Optimization signal` можна трохи збільшити.

Орієнтовні корекції, які ще не були внесені:

- tablet `.measurement-benefits li`: `min-height` близько `76px–80px`;
- tablet `.measurement-benefits`: ширина близько `72%`, не просто `calc(100% - 5rem)`, та контрольований left offset;
- зберегти іконки benefits близько `60px`, але збільшити title приблизно до `1rem`;
- stage icons збільшити приблизно до `52px`, SVG до `36–38px`;
- stage title близько `1.05rem`;
- column gap збільшити приблизно до `3.5rem–4.5rem` залежно від ширини;
- row gap близько `3rem`;
- return-path left/right приблизно `11.5% / 8%`;
- не змінювати mobile selectors під час tablet refinement.

Це лише стартові гіпотези. Потрібно зробити actual render на tablet viewport, порівняти зі скріншотом і відкоригувати за фактичним результатом.

## Остання відома технічна перевірка

Перед останнім запитом перевірялися:

- баланс CSS braces — був коректним;
- баланс основних HTML-тегів — був коректним;
- нумерація Measurement stages — відсутня;
- homepage і CSS через локальний PHP server — повертали HTTP 200;
- tablet snake rules та mobile loop rules — віддавалися сервером.

Повноцінний browser screenshot у попередній сесії не вдалося отримати: in-app browser повертав, що доступного browser instance немає. Не використовувати це як доказ відповідності; якщо browser доступний у новому чаті, обов’язково перевірити візуально.

## Про повідомлення `{\"detail\":\"Bad Request\"}`

Під час попередньої роботи користувач двічі побачив повідомлення:

```json
{"detail":"Bad Request"}
```

Це було схоже на помилку інструмента/інтерфейсу під час виконання агента, а не підтверджену помилку PHP-форми або сайту. Не витрачати час на неї, якщо вона не відтворюється в Network/Console самого сайту.

## Як продовжити в новому чаті

Рекомендований перший запит для нового чату:

> Прочитай `CHAT_HANDOFF_UA.md`, потім відкрий актуальний `index.html` і `css/pages/home.css`. Продовж останню незавершену задачу: підтягни tablet-версію секції Measurement advantage до `C:\Users\pavlo\Downloads\ChatGPT Image 2 вер. 2026 р., 21_34_26.png`. Нумерацію не повертай. Не змінюй уже налаштовані desktop і mobile режими. Запусти локальний preview, перевір фактичний tablet render і виправ відмінності.

## Повний перелік коротких повідомлень користувача в цій ітерації

Нижче збережено зміст запитів у хронологічному порядку, щоб не втратити контекст тону й пріоритетів:

1. Користувач переніс усе з окремої папки в корінь, бо так має бути.
2. Візуал вийшов надто спрощеним порівняно з референсом — потрібно дотягнути.
3. Використовувати нормальні іконки, якщо потрібно.
4. Не робити випадкові CSS/SVG риски та палки; генерувати/створювати повноцінний візуал.
5. Реалізація не відповідала референсам.
6. Надано детальний home reference `references/01-home-responsive.png`.
7. Вказано, що `REFERENCE_INDEX.html` уже показує потрібний вигляд.
8. Припущено, що старі стилі можуть перекривати нові.
9. Вирішено передавати референси посекційно.
10. Надано desktop, tablet і mobile references для header + hero.
11. Центрувати hero content, `.display-xl` та `.lede` на tablet/mobile.
12. Збільшити hero на 30%.
13. Зробити `.signal-strip` marquee з нормальними кольоровими іконками.
14. Використати оригінальні іконки сервісів.
15. Збільшити marquee.
16. Замінити невдалу іконку Search.
17. Надано desktop, tablet і mobile references для другої секції.
18. Надано desktop, tablet і mobile references для третьої секції.
19. Прибрати нумерацію.
20. Збільшити контент capability cards, зменшити desktop height секції, підрівняти й центрувати automation card.
21. Переглянути дублювання `Our services` і `The performance system`, а також загалом зайве/відсутнє на home.
22. Реалізувати рекомендовані структурні зміни.
23. Ще підтягнути висоту `Our services` на desktop.
24. Надано references для `Measurement advantage`.
25. Повторно попросили прибрати нумерацію.
26. Desktop Measurement не збігався 1:1; надано screenshots конкретних проблем return-path і benefits.
27. Reference `21_34_26.png` спочатку помилково назвали mobile, потім уточнили, що це tablet.
28. Надано окремий справжній mobile reference `22_35_53.png`.
29. Попросили реалізувати.
30. Двічі з’явилося `{\"detail\":\"Bad Request\"}`.
31. Останній запит: ще підтягнути tablet до `21_34_26.png`.
