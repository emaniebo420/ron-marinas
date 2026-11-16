# Ron Mariñas – one-page site

Vite + React + TypeScript + Tailwind v4. Three pages: Gallery (/), About (/about), Contact (/contact). Routing is react-router; `vercel.json` rewrites deep links to `index.html`.

## Edit content
Everything lives in `src/content.ts`. Add works to the `works` array and put
images in `public/works/`. While `works` is empty the page shows labeled
placeholder slots.

## Run
```
npm install
npm run dev
npm run build
```

## Deploy
Import the repo in Vercel. Framework preset: Vite. No environment variables.
`index.html` has `noindex` while the content is placeholder; remove that line
before launch.
