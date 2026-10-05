# June Bakehouse & Deli — Website

A website for **June Bakehouse & Deli**, Patrakar Colony, Indore.

---

## Files in this folder

```
june-bakehouse/
├── index.html     ← The entire website (single page)
├── style.css      ← All colours, fonts, and layout
├── script.js      ← Nav, mobile menu, scroll animations
├── images/        ← Drop your photos here (see below)
└── README.md      ← This file
```

---

## How to run locally

```bash
cd june-bakehouse
python3 -m http.server 8095
```
Then open [http://localhost:8095](http://localhost:8095) in your browser.

---

## How to deploy

This is a plain HTML/CSS/JS site. It works on **any** web host:

- **Netlify (recommended):** Drag-and-drop the entire `june-bakehouse/` folder to [netlify.com/drop](https://app.netlify.com/drop). Done.
- **GitHub Pages:** Push this folder to a GitHub repository, enable Pages in Settings.
- **Any shared hosting (cPanel, etc.):** Upload all files via FTP to `public_html/`.

No build step required.

---

## What you need to provide

| Item | Where to put it | Notes |
|------|----------------|-------|
| **Hero photo** | Replace the `photo-placeholder--hero` `div` in `index.html` with an `<img>` | Ideally 1600 × 900 px or wider, interior shot |
| **About photos** | Replace `photo-placeholder--portrait` and `photo-placeholder--landscape-sm` | Portrait + landscape |
| **Gallery photos** (6 slots) | Replace each `photo-placeholder gallery__item` `div` | See labels for suggested subjects |
| **Opening time** | Already confirmed: 9:30 am (from Google Maps) ✓ | Nothing to change |
| **Instagram handle** | In `index.html`, search for `footer-instagram` and replace `href="#"` with your Instagram URL | e.g. `https://instagram.com/junebakehouse` |
| **Menu PDF** | In `index.html`, find the `menu-view-full` button and change `href` to your PDF URL | Optional — currently links to Google Maps |
| **Your domain** | In `index.html` `<head>`, update the canonical URL, OG URL, and OG image | e.g. change `junebakehouse.in` to your real domain |
| **OG image** | Upload a 1200 × 630 px photo as `images/og-cover.jpg` | Used for WhatsApp/social link previews |

---

## How to edit content

All content lives in `index.html`. Look for these comments to find sections:

- `<!-- MENU ITEMS START -->` / `<!-- MENU ITEMS END -->` — edit menu items here
- Each `<dl class="visit__details">` row — address, hours, phone, price

### Editing the colour palette
Open `style.css`. At the very top, under `:root {`, you'll see:

```css
--cream:      #F6EFE2;
--olive:      #3E4A34;
--terracotta: #B5593A;
```

Change any hex code here and it updates everywhere on the site.

---

## Adding real photos

Replace each placeholder block like this:

**Before (placeholder):**
```html
<div class="photo-placeholder photo-placeholder--portrait" aria-label="[PHOTO: ...]">
  <span class="photo-placeholder__label">Interior detail<br><small>600 × 800 · portrait</small></span>
</div>
```

**After (real photo):**
```html
<img src="images/interior-01.jpg" 
     alt="The lower dining room, arched windows and pendant lights" 
     class="photo-placeholder--portrait"
     loading="lazy"
     width="600" height="800">
```

Place all photos inside the `images/` folder.

---

## Technical notes

- No frameworks, no build tools, no npm. Just open `index.html`.
- Google Fonts are loaded from the web — you need an internet connection for them to render.
- The embedded Google Map uses an iframe. It will show a map without needing an API key (standard Maps embed).
- The `prefers-reduced-motion` media query is respected — animations turn off for users who prefer it.
- Lighthouse score: 90+ on mobile expected once real photos are added with proper `width`/`height` attributes and lazy loading.
