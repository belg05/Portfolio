# BELG — Sound Designer / Composer Portfolio

Современный сайт-портфолио для саунд-дизайнера и композитора (Глеб, 5+ лет в геймдеве).

**Live:** будет доступен после включения GitHub Pages → `https://belg05.github.io/Portfolio/`

## Что внутри

- Hero с живым визуалайзером и плеером
- Портфолио с фильтрами + ссылки на Drive, Telegram, YouTube шоурилы (FMOD/Wwise)
- Резюме: опыт, навыки, инструменты (FL Studio, FMOD, Wwise, Unity)
- Услуги: прайс-таблица + калькулятор с отправкой в форму
- Процесс работы, отзывы, контактная форма

## Как задеплоить бесплатно (3 варианта)

### Вариант 1 — GitHub Pages (рекомендую, 2 минуты)

1. Зайди на GitHub в репозиторий `belg05/Portfolio` → вкладка **Settings** → слева **Pages**
2. В разделе **Build and deployment** выбери:
   - Source: **GitHub Actions**
3. Теперь запушь в `main` (или уже запушено в `arena/01a0b644-portfolio` — workflow сработает и для этой ветки)
4. Перейди в **Actions** — увидишь workflow `Deploy Portfolio to GitHub Pages` — дождись зеленой галочки
5. Снова зайди в **Settings → Pages** — там появится ссылка вида `https://belg05.github.io/Portfolio/`

Чтобы сайт появился на `main` (сейчас он в ветке `arena/01a0b644-portfolio`):
- На GitHub нажми **Pull requests** → **New pull request** → base: `main`, compare: `arena/01a0b644-portfolio` → Create → Merge
- Или локально:
```bash
git checkout main
git merge arena/01a0b644-portfolio
git push origin main
```

### Вариант 2 — Vercel (еще проще, 1 минута, свой домен бесплатно)

1. Зайди на https://vercel.com → Sign up with GitHub
2. **Add New Project** → выбери `belg05/Portfolio`
3. Нажми **Deploy** — всё, сайт готов, даст ссылку `https://portfolio-xxx.vercel.app`
4. Можешь в Settings → Domains привязать свой домен бесплатно

> Для Vercel поменяй в `vite.config.js` base с `/Portfolio/` на `/` (или оставь как есть, Vercel сам поймет)

### Вариант 3 — Netlify Drop (самый быстрый, без GitHub)

1. Локально собери проект: `npm run build`
2. Зайди на https://app.netlify.com/drop
3. Перетащи папку `dist` мышкой — получишь ссылку мгновенно

## Локальный запуск

```bash
npm install
npm run dev
# http://localhost:5173
```

## Структура

```
index.html          # вся разметка
src/style.css       # дизайн-система (lime/violet, glass, noise)
src/main.js         # логика: портфолио, плеер, калькулятор, форма
vite.config.js      # base: /Portfolio/ для GitHub Pages
.github/workflows/deploy.yml # авто-деплой на Pages
```

## Контакты в сайте

- TG: @belg_pr
- Email: belg.pr@gmail.com
- Drive: https://drive.google.com/drive/folders/1_9MsLRO_MVdzQR0Jp9XiWXmrl8?usp=sharing
- Telegram Portfolio: https://t.me/+bOpSpQd8UjdkNGFi
- Beats: https://t.me/myzod3ad
- Showreels: https://youtu.be/vLHIWrCV2MA и https://www.youtube.com/watch?v=aAikR7Be7LE
