// Renders the motion videos in videos.js to MP4 (1080 x 1920, 30 fps, no sound).
// Usage: node content-studio/video/render.cjs [video-name ...]   (no names = all videos)
// Output: content-studio/out/video/<name>.mp4, plus one clip per scene in <name>-scenes/ for easy re-cutting in CapCut.
// Needs ffmpeg on the PATH.
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { chromium } = require("playwright");

const FPS = 30;
const here = __dirname;
const outRoot = path.join(here, "..", "out", "video");
const encode = (frames, start, count, file) =>
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-framerate", String(FPS), "-start_number", String(start), "-i", path.join(frames, "f%05d.jpg"),
    "-frames:v", String(count), "-c:v", "libx264", "-preset", "medium", "-crf", "16", "-pix_fmt", "yuv420p", "-movflags", "+faststart", file]);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto("file://" + path.join(here, "player.html"));
  const all = await page.evaluate(() => Object.keys(VIDEOS));
  const names = process.argv.slice(2).length ? process.argv.slice(2) : all;
  for (const name of names) {
    await page.goto("file://" + path.join(here, "player.html") + "?v=" + name);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForLoadState("networkidle");
    const { total, scenes } = await page.evaluate(() => ({ total: TOTAL, scenes: SCENES }));
    const frames = path.join(outRoot, name + "-frames");
    fs.rmSync(frames, { recursive: true, force: true });
    fs.mkdirSync(frames, { recursive: true });
    const count = Math.round(total * FPS);
    for (let i = 0; i < count; i++) {
      await page.evaluate((t) => seek(t), (i + 0.5) / FPS);
      await page.locator("#stage").screenshot({ path: path.join(frames, `f${String(i).padStart(5, "0")}.jpg`), type: "jpeg", quality: 95 });
    }
    encode(frames, 0, count, path.join(outRoot, name + ".mp4"));
    const clips = path.join(outRoot, name + "-scenes");
    fs.rmSync(clips, { recursive: true, force: true });
    fs.mkdirSync(clips, { recursive: true });
    scenes.forEach((s, k) => {
      const a = Math.round(s.start * FPS), b = Math.round(s.end * FPS);
      encode(frames, a, b - a, path.join(clips, `${String(k + 1).padStart(2, "0")}-${s.label}.mp4`));
    });
    fs.rmSync(frames, { recursive: true, force: true });
    console.log(`${name}: ${total.toFixed(1)}s, ${scenes.length} scenes`);
  }
  await browser.close();
})();
