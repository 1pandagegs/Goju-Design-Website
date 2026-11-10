# Content Studio templates

Social media templates for Goju Design, rendered to upload-ready images.

- `templates/slide.html`: every layout (cover, cover-image, point, list, image, stat, quote, split, phone, cta, offer, statement, video-cover, story) in four themes (paper, white, ink, gold).
- `posts/<post-id>.json`: one file per post. The id matches the post in Goju Content Studio.
- `render.cjs`: renders posts to `out/<post-id>/` as PNGs, plus a PDF when `"pdf": true` (for LinkedIn document posts).

```bash
node content-studio/render.cjs                # every post
node content-studio/render.cjs w1-fri-ig      # one post
```

Needs Playwright with Chromium. Images come from `src/assets/images`, so a post can use any image the website uses.

## Post file

```json
{
  "platforms": ["instagram", "linkedin"],
  "size": "feed",            // feed 1080x1350, or story 1080x1920
  "theme": "paper",          // paper, white, ink, gold
  "pdf": true,               // also build a PDF of all slides
  "slides": [
    { "layout": "cover", "label": "Website check", "title": "5 signs your website is *costing you customers*" },
    { "layout": "point", "n": "01", "title": "It takes more than 3 seconds to load.", "body": "Fix: compress images." },
    { "layout": "cta", "title": "Want us to check yours?", "sub": "Send your link on WhatsApp." }
  ]
}
```

Wrap words in `*asterisks*` to colour them gold. Slide fields per layout are documented at the top of each layout in `templates/slide.html`.
