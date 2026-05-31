# Eugenia Demarchi — Visual Artist Portfolio

Personal portfolio website: **Eugenia Demarchi**, a visual artist based in Argentina. The site showcases artwork series, biography, and exhibition history, and includes a contact form.

## Live Site

<img width="2700" height="1004" alt="image" src="https://github.com/user-attachments/assets/036476e1-304e-4189-a1c6-952107a266d4" />


[eugeniademarchi.com](https://eugeniademarchi.netlify.app/)) 


## Features

- **Bilingual content** — full EN / ESP toggle with no page reload
- **Artwork galleries** — dedicated pages per series (Lorquianas, Nadar en agua dulce, Tejidos, Pan y rosas, Aguas rumorosas, Tierra primitiva, Punto ciego, Luz lila, Coral)
- **Lightbox gallery** — image zoom and navigation powered by lightGallery
- **Smooth page transitions** — CSS fade-in/out between pages
- **Scroll-to-top button** — appears on long pages
- **Lazy-loaded images** — WebP with JPEG fallback via `<picture>` tags
- **Blurred image loading** — images fade in sharp once loaded
- **Responsive layout** — Bootstrap 5 grid, mobile-first
- **Contact form** — email-based inquiry form with subject selection

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styles | CSS3, Bootstrap 5.3, Bootstrap Icons 1.11 |
| Scripts | Vanilla JavaScript (ES6) |
| Fonts | Plus Jakarta Sans (Google Fonts) |
| Gallery | lightGallery |

No build step, no bundler, no framework — plain static files.

## Project Structure

```
web-demarchi/
├── index.html              # Home (carousel)
├── bio.html                # Biography
├── obra.html               # Works overview
├── exhibiciones.html       # Exhibition history
├── contacto.html           # Contact form
├── lorquianas.html         # Series: Lorquianas
├── nadar-en-agua-dulce.html
├── tejidos.html
├── pan-y-rosas.html
├── aguas-rumorosas.html
├── tierra-primitiva.html
├── punto-ciego.html
├── luz-lila.html
├── coral.html
├── css/
│   ├── style.css           # Global styles
│   └── lorquianas.css      # Series-specific styles
├── javascript/
│   ├── db.js               # Bilingual content + language switcher
│   ├── blurredImgs.js      # Blur-to-sharp loading effect
│   ├── pageTransitions.js  # Fade transitions between pages
│   ├── lightGallery.js     # Gallery lightbox setup
│   └── scrollToTopButton.js
└── IMAGENES/               # All artwork and UI images
```

## Getting Started

No installation needed. Open `index.html` in any browser, or serve the folder with any static file server:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080`.

## i18n — Language System

All translatable strings live in [javascript/db.js](javascript/db.js) under `data.english` and `data.spanish`. The language switcher in the navbar swaps text content on the fly by matching DOM element `id` and `class` names to the data keys.

To add a new translated string:

1. Add entries under both `english` and `spanish` in `db.js`.
2. Give the target HTML element a matching `id` or `class`.
3. Add the selector to the `document.querySelectorAll(...)` list in `db.js`.

## License

All artwork images are the exclusive property of Eugenia Demarchi. Code is open source under the [MIT License](LICENSE).
