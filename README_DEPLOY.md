# Deploy Ataron site to Vercel

Эта папка — автономная версия сайта для `ataron.co.il`.

## Рекомендуемый workflow

Так как сайт будет часто меняться, лучше хранить эту папку в GitHub и подключить репозиторий к Vercel.

После этого процесс будет простой:

1. Вносим изменения в сайт.
2. Делаем commit и push в GitHub.
3. Vercel автоматически публикует новую версию на домене.

Рекомендуемое имя репозитория:

`ataron-site`

## Что внутри

- `index.html` — главная страница сайта
- `privacy.html` — Privacy Policy
- `terms.html` — Terms of Use
- `site.css` — стили сайта
- `site-i18n.js` — переводы сайта: русский, иврит, английский, арабский
- `site.webmanifest` — PWA manifest
- `brand-concept-3/svg/` — логотипы и иконки
- `vercel.json` — базовая конфигурация Vercel

## Как загрузить на Vercel

1. Открыть `https://vercel.com`
2. Войти в аккаунт
3. Создать новый проект
4. Загрузить или импортировать эту папку:

   `outputs/ataron-site`

5. Framework Preset:

   `Other`

6. Build Command:

   оставить пустым

7. Output Directory:

   оставить пустым или `./`

8. После публикации добавить домены:

   - `ataron.co.il`
   - `www.ataron.co.il`

9. Vercel покажет DNS-записи, которые нужно добавить у регистратора или в Cloudflare.

## Важные ссылки после публикации

- `https://ataron.co.il`
- `https://ataron.co.il/privacy`
- `https://ataron.co.il/terms`
