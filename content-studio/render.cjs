// Renders post specs (posts/*.json) into upload-ready images using templates/slide.html.
// Usage: node content-studio/render.cjs [post-id ...]   (no ids = every post)
// Output: content-studio/out/<id>/<id>-01.png ... plus <id>.pdf when the spec asks for a LinkedIn document.
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const root = __dirname;
const SIZES = { feed: [1080, 1350], story: [1080, 1920] };

(async () => {
  const ids = process.argv.slice(2);
  const files = fs.readdirSync(path.join(root, "posts")).filter((f) => f.endsWith(".json"))
    .filter((f) => !ids.length || ids.includes(f.replace(/\.json$/, "")));
  const browser = await chromium.launch();
  for (const f of files) {
    const spec = JSON.parse(fs.readFileSync(path.join(root, "posts", f), "utf8"));
    const id = f.replace(/\.json$/, "");
    const size = spec.size || "feed";
    const [w, h] = SIZES[size];
    const out = path.join(root, "out", id);
    fs.rmSync(out, { recursive: true, force: true });
    fs.mkdirSync(out, { recursive: true });
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const pngs = [];
    for (const [i, slide] of spec.slides.entries()) {
      const data = { size, theme: spec.theme, ...slide, index: i + 1, total: spec.slides.length };
      await page.addInitScript(`window.SLIDE = ${JSON.stringify(data)}`);
      await page.goto("file://" + path.join(root, "templates", "slide.html"));
      await page.evaluate(() => document.fonts.ready);
      await page.waitForLoadState("networkidle");
      const file = path.join(out, `${id}-${String(i + 1).padStart(2, "0")}.png`);
      await page.locator("#frame").screenshot({ path: file });
      pngs.push(file);
    }
    await page.close();
    if (spec.pdf) {
      const doc = await browser.newPage();
      // Inline the slides: a page built with setContent cannot load file:// images.
      const imgs = pngs.map((p) => `<img src="data:image/png;base64,${fs.readFileSync(p).toString("base64")}" style="display:block;width:${w}px;height:${h}px;page-break-after:always">`).join("");
      await doc.setContent(`<html><body style="margin:0">${imgs}</body></html>`, { waitUntil: "load" });
      await doc.pdf({ path: path.join(out, `${id}.pdf`), width: `${w}px`, height: `${h}px`, printBackground: true, pageRanges: "" });
      await doc.close();
    }
    console.log(`${id}: ${pngs.length} image(s)${spec.pdf ? " + pdf" : ""}`);
  }
  await browser.close();
})();
