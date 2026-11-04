# gojudesign.com

The Goju Design Solutions Ltd website, built from the "Redesign 2026" pages in the Figma file.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

Hosted on Vercel (`vercel.json` sends every route to the single-page app).

## Where things live

- `src/data/` holds the page content: services, case studies, FAQ, legal text and contact details (`site.js`). Most copy changes happen here.
- `src/assets/images/` holds the images exported from Figma. Reference them by file name (without extension) in the data files.
- `src/pages/` holds one file per page. `src/components/` holds the header, footer, buttons, cards and pop-ups.
- Colours and type sizes come from the Figma variables and live in `tailwind.config.js` and `src/index.css`.

## Forms

The brief, start-a-project, booking and waitlist forms send through EmailJS using the same account and template as the previous site (`EMAILJS` in `src/data/site.js`).
