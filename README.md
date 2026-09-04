# For Bengi 🎂

A one-page cinematic birthday site. Pure HTML/CSS/JS — no build step, works straight on GitHub Pages.

## 1. Add your own content (do this before deploying)

**Photos** — drop image files into `assets/photos/` and update the two arrays at the top of `script.js`:
- `storyMoments` — 4 photos for the "Where It All Began" timeline
- `memories` — 8–12 photos for the gallery (`assets/photos/mem1.jpg`, `mem2.jpg`, etc.)

Until you add real photos, empty slots just show a soft gradient placeholder instead of a broken image — nothing looks broken, it just won't be personal yet.

**Music** — put an mp3 at `assets/music/birthday.mp3` (or change `birthdayConfig.musicSrc` and the `<source>` path in `index.html` if you name it differently). If you skip this, the site still works fine — the music button just won't play anything.

**Text you'll probably want to edit:**
- `birthdayConfig` (top of `script.js`) — name
- `funnyLines`, `loveReasons`, `secretMessage` in `script.js`
- The letter itself — it's written directly in `index.html` inside `<section class="letter-section">`, in the block with `data-line` paragraphs. Edit the text there, keep the `data-line` attribute on each `<p>` so the scroll reveal still works.

Everything else (animations, layout, reveals) you shouldn't need to touch.

## 2. Preview locally (optional)

Any static server works, e.g. with Python installed:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## 3. Deploy to GitHub Pages

```
git init
git add .
git commit -m "Create birthday website"
git branch -M main
git remote add origin [GITHUB_REPO_URL]
git push -u origin main
```

Replace `[GITHUB_REPO_URL]` with your repo's URL, e.g. `https://github.com/yourusername/bengi-birthday.git`.

Then enable Pages:

1. Go to your repo on GitHub
2. **Settings → Pages**
3. Under "Build and deployment," set **Source** to `Deploy from a branch`
4. Branch: `main`, folder: `/ (root)`
5. Save — GitHub gives you a link like `https://yourusername.github.io/bengi-birthday/` within a minute or two

Share that link with her.

## Notes

- No backend, database, or frameworks — just `index.html`, `style.css`, `script.js`.
- All paths are relative, so it works whether the repo is served from the root or a subfolder (which is how GitHub Pages serves project repos).
- The easter egg is a small star in the top-left corner — click it 5 times to unlock a hidden message. Not documented anywhere in the UI on purpose.
- Reduced-motion and mobile users get lighter animations automatically; nothing to configure.
# Birthday-WEB
