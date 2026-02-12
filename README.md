# Basis Points Podcast — GitHub Pages site

A picturesque, single-page site for **Basis Points Podcast** (James, Haik, George) with a demo **AI co-host** chat UI.

## Local dev

```bash
cd basis-points-podcast
source .venv/bin/activate
mkdocs serve
```

Open http://127.0.0.1:8000

## Build

```bash
mkdocs build
```

## Publish to GitHub Pages

This repo includes a GitHub Actions workflow that builds MkDocs and publishes to GitHub Pages.

1. Create a GitHub repo (e.g. `basis-points-podcast`)
2. Push this code
3. In GitHub: **Settings → Pages**
   - Source: **GitHub Actions**
4. The workflow will publish automatically.

Your site will be at:
`https://<your-username>.github.io/<repo-name>/`

## AI live mode (optional)

The UI supports a "live" toggle that calls `./api/chat`. GitHub Pages is static, so live mode is **not** enabled here.
If you want live AI later, deploy to Vercel/Netlify and add a serverless function.
