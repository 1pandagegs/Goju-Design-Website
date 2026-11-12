// Goju Design motion videos for Reels and TikTok (1080 x 1920, 30 fps, no sound).
// Each video is a list of scenes: [seconds, background, html, label].
// Backgrounds: paper, night, deep (gold), white. To change wording, edit the text here and run render.cjs.

const IMG = "../../src/assets/images/";
const WA = "+234 703 864 9237";
// One animated piece of text. kind = blur | up | down | left | right | pop | fade | wipe; d = delay in seconds.
const A = (text, kind = "blur", d = 0, extra = "", t = "") => `<span class="a ${kind} ${extra}" style="--d:${d}s;${t ? `--t:${t}s;` : ""}">${text}</span>`;
const big = (html, size = 230) => `<div class="c"><div class="mont" style="font-size:${size}px">${html}</div></div>`;
const loud = (html, size = 300) => `<div class="c"><div class="anton" style="font-size:${size}px">${html}</div></div>`;
const brackets = `<div class="brk"><i></i><i></i><i></i><i></i></div>`;

// Closing card used by every video.
const endCard = (dark, line, cta = "gojudesign.com") => `<div class="c" style="gap:44px">
  ${A(`<span class="mark" style="width:230px;height:230px;color:${dark ? "var(--gold)" : "var(--ink)"}"></span>`, "pop", 0.05)}
  ${A(`<div class="label" style="font-size:40px;font-weight:800;letter-spacing:.12em">Goju Design</div>`, "up", 0.25)}
  ${A(`<div class="mont" style="font-size:96px;line-height:1;max-width:820px">${line}</div>`, "up", 0.4)}
  ${A(`<div class="pill" style="background:${dark ? "var(--paper)" : "var(--ink)"};color:${dark ? "var(--night)" : "var(--paper)"}">${cta} &rarr;</div>`, "pop", 0.7)}
  ${A(`<div class="body" style="font-size:34px;opacity:.75">@goju_design &nbsp;·&nbsp; WhatsApp ${WA}</div>`, "fade", 0.95)}</div>`;

const phone = (inner, enter = false, top = 520) => `<div class="phone ${enter ? "a rise" : ""}" style="top:${top}px;${enter ? "--t:.7s;" : ""}">${inner}</div>`;
const wire = (d = 0) => `<div style="padding:110px 44px 0;display:flex;flex-direction:column;gap:26px">
  ${A(`<div class="bar" style="width:170px;height:34px;background:var(--deep)"></div>`, "fade", d)}
  ${A(`<div class="bar" style="width:440px;height:230px"></div>`, "up", d + 0.12)}
  ${A(`<div class="bar" style="width:440px;height:30px"></div>`, "up", d + 0.24)}
  ${A(`<div class="bar" style="width:320px;height:30px"></div>`, "up", d + 0.32)}
  ${A(`<div class="bar" style="width:220px;height:74px;border-radius:40px;background:var(--ink)"></div>`, "pop", d + 0.45)}
  ${A(`<div class="bar" style="width:440px;height:260px;background:var(--night)"></div>`, "up", d + 0.55)}</div>`;
const liveSite = (fade) => `<img class="${fade ? "a fade" : ""}" style="--t:.5s;position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top" src="assets/sabali-mobile.jpg">`;
const step = (n, word) => `<div class="abs" style="left:90px;top:290px;display:flex;align-items:baseline;gap:26px">${A(`<span class="label" style="opacity:.7">${n}</span>`, "fade", 0)}${A(`<span class="mont" style="font-size:150px;text-transform:none">${word}</span>`, "up", 0.05)}</div>`;
const marqueeRow = (text, cls, rev, style = "") => `<div style="overflow:visible;white-space:nowrap;${style}"><span class="marq ${rev ? "rev" : ""} ${cls}" style="font-size:150px;font-weight:800;letter-spacing:-.04em">${(text + " · ").repeat(8)}</span></div>`;
const workCard = (img, label, top, d) => `<div class="abs a up" style="--d:${d}s;--t:.6s;left:120px;top:${top}px;width:760px">
  <div class="card" style="height:400px"><img src="${IMG}${img}"></div>
  <div class="label" style="margin-top:18px;font-size:26px">${label}</div></div>`;

const VIDEOS = {
  // 1. Kinetic words, like the "we don't just code" reference.
  "01-we-dont-just-design": {
    scenes: [
      [0.7, "paper", big(A("we")), "we"],
      [0.8, "night", big(`${A("we")}<br>${A("don't", "blur", 0.15)}`), "we-dont"],
      [1.2, "paper", big(`${A("just")}<br>${A("design.", "blur", 0.25, "serif gdeep")}`, 250), "just-design"],
      [0.8, "night", big(`${A("we")}<br>${A("build", "blur", 0.15)}`), "we-build"],
      [0.55, "paper", big(A("websites"), 190), "websites"],
      [0.55, "night", big(A("brands", "blur", 0, "gold"), 230), "brands"],
      [0.55, "paper", big(A("content"), 210), "content"],
      [0.55, "night", big(A("automation", "blur", 0, "gold"), 160), "automation"],
      [0.6, "paper", big(A("that")), "that"],
      [1.3, "night", `<div class="c"><div class="serif gold" style="font-size:420px;line-height:.9">${A("work.", "pop", 0, "", 0.5)}</div></div>`, "work"],
      [2.8, "paper", endCard(false, "websites, brands and content that work."), "end-card"],
    ],
  },

  // 2. Problem, fix, process, call to action. Like the "Outdated? Confusing? Let's fix" reference.
  "02-lets-fix-your-website": {
    scenes: [
      [0.9, "deep", `<div class="c"><div class="mont" style="font-size:190px;text-transform:none">${A("Outdated?", "right", 0, "", 0.5)}</div></div>`, "outdated"],
      [0.9, "paper", `<div class="c"><div class="mont" style="font-size:180px;text-transform:none">${A("Confusing?", "left", 0, "", 0.5)}</div></div>`, "confusing"],
      [0.9, "night", `<div class="c"><div class="mont" style="font-size:300px;text-transform:none">${A("Slow?", "blur", 0, "gold")}</div></div>`, "slow"],
      [1.5, "paper", `<div class="c"><div class="mont" style="font-size:230px;text-transform:none;text-align:left;width:100%">${A("Let's")}<br>${A("fix", "blur", 0.3)}<br>${A("that.", "blur", 0.6, "serif gdeep")}</div></div>`, "lets-fix-that"],
      [1.5, "deep", step("01", "Design") + phone(wire(0.5), true), "01-design"],
      [1.4, "deep", step("02", "Build") + phone(wire(-5) + liveSite(true)), "02-build"],
      [1.7, "deep", step("03", "Launch") + phone(liveSite(false)) +
        `<div class="abs a pop" style="--d:.25s;left:70px;top:820px;transform-origin:left"><span class="chip" style="transform:rotate(-7deg);display:inline-block">Mobile first</span></div>
         <div class="abs a pop" style="--d:.55s;left:560px;top:1240px"><span class="chip" style="transform:rotate(5deg);display:inline-block">Loads fast ⚡</span></div>
         <div class="abs a pop" style="--d:.85s;left:90px;top:1420px"><span class="chip" style="transform:rotate(-3deg);display:inline-block">WhatsApp on every page</span></div>`, "03-launch"],
      [2.6, "night", `<div class="abs" style="left:-300px;right:-300px;top:330px;transform:rotate(-11deg);display:flex;flex-direction:column;gap:18px">
          ${marqueeRow("Web Design", "paperc")}
          ${marqueeRow("Brand Identity", "", true, "-webkit-text-stroke:3px var(--paper);color:transparent")}
          ${marqueeRow("Social Media", "gold")}
          ${marqueeRow("Podcasts", "paperc", true)}
          ${marqueeRow("AI Automation", "", false, "-webkit-text-stroke:3px var(--paper);color:transparent")}
          ${marqueeRow("Web Apps", "gold", true)}</div>
        <div class="c">${A(`<span class="chip" style="font-size:48px;padding:30px 54px">One team, start to finish</span>`, "pop", 0.6)}</div>`, "services"],
      [3.0, "deep", `<div class="c" style="gap:50px">
          ${A(`<span class="mark" style="width:200px;height:200px;color:var(--paper)"></span>`, "pop", 0.05)}
          <div class="mont" style="font-size:130px;text-transform:none;line-height:1">${A("Let's build")}<br>${A("your website.", "blur", 0.25)}</div>
          ${A(`<div class="pill" style="background:var(--paper);color:var(--night)">Book a free call &rarr;</div>`, "pop", 0.7)}
          ${A(`<div class="body" style="text-decoration:underline;text-underline-offset:12px">gojudesign.com</div>`, "fade", 1)}</div>`, "call-to-action"],
    ],
  },

  // 3. Real work showcase. Like the "We build websites that stand out" reference.
  "03-work-that-sells": {
    scenes: [
      [2.0, "paper", brackets + `<div class="abs anton" style="left:0;right:0;top:330px;text-align:center;font-size:210px">${A("We", "pop", 0)} ${A("build", "pop", 0.18)}<br>${A("websites", "pop", 0.4)}</div>
        <div class="abs anton" style="left:0;right:0;top:1040px;text-align:center;font-size:210px">${A("that", "pop", 0.75)}<br>${A("sell.", "pop", 0.95, "gdeep")}</div>
        <div class="abs body a fade" style="--d:1.2s;left:90px;top:810px;width:520px;font-size:30px;text-align:left">Real client work, designed and built by one team in Abuja.</div>`, "we-build-websites"],
      [1.9, "paper", brackets + `<div class="abs anton" style="left:0;right:0;top:330px;text-align:center;font-size:210px">We build<br>websites</div>
        <div class="abs anton" style="left:0;right:0;top:1040px;text-align:center;font-size:210px">that<br><span class="gdeep">sell.</span></div>
        <div class="abs card a tilt" style="--t:.9s;left:60px;top:640px;width:960px;height:560px"><img src="${IMG}as5Hero.webp"></div>`, "site-reveal"],
      [3.6, "paper", brackets + workCard("as5Hero.webp", "AS5 Group · Real estate", 270, 0) + workCard("sabHome.webp", "Sabali Limited · Export", 740, 0.5) + workCard("amfhYoutube.webp", "A Message For Her · Podcast", 1210, 1.0), "three-projects"],
      [3.0, "night", brackets + `<div class="c" style="gap:10px;padding-bottom:260px">
          ${A(`<div class="label gold">The result</div>`, "fade", 0)}
          <div class="anton" style="font-size:190px;margin-top:30px;white-space:nowrap">${A("35", "up", 0.1)} ${A("&rarr;", "fade", 0.4, "gold")} ${A("147", "pop", 0.6)}</div>
          ${A(`<div class="serif gold" style="font-size:190px;line-height:1">followers.</div>`, "blur", 0.9)}
          ${A(`<div class="body" style="margin-top:40px;opacity:.8">AS5 Group on Instagram, a 4.2x increase since we took over.</div>`, "up", 1.2)}</div>`, "result"],
      [3.0, "paper", brackets + `<div class="abs label mut a fade" style="left:110px;top:420px">We do</div>
        <div class="abs anton" style="left:110px;top:500px;font-size:150px;line-height:1.12;color:#cfc8b8">
          <div class="a lit" style="--d:.2s;--t:.3s;display:block">Websites</div><div class="a lit" style="--d:.75s;--t:.3s;display:block">Brands</div>
          <div class="a lit" style="--d:1.3s;--t:.3s;display:block">Content</div><div class="a lit" style="--d:1.85s;--t:.3s;display:block">AI automation</div></div>`, "we-do"],
      [2.8, "night", endCard(true, "want work like this?", "Book a free call"), "end-card"],
    ],
  },

  // 4. Swinging logo loop. Like the pendulum "Need a website? Let's talk!" reference. Loops cleanly.
  "04-need-a-website-loop": {
    persist: `<div class="abs" style="left:0;right:0;top:250px;text-align:center"><span class="mark" style="width:64px;height:64px;color:var(--ink);vertical-align:middle"></span>
        <span class="label" style="margin-left:16px;font-weight:800;font-size:34px;vertical-align:middle;color:var(--ink)">Goju Design</span></div>
      <div class="abs swing" style="left:537px;top:-40px;width:6px;height:1170px;background:var(--night);border-radius:3px">
        <div style="position:absolute;left:-102px;bottom:-190px;width:210px;height:210px;border-radius:52px;background:var(--night);display:grid;place-items:center;box-shadow:0 30px 60px rgba(0,0,0,.3)">
          <span class="mark" style="width:150px;height:150px;color:var(--gold)"></span></div></div>
      <div class="abs label" style="left:0;right:0;top:1440px;text-align:center;color:var(--ink);font-size:28px">Websites · Brands · Content · AI</div>`,
    scenes: (() => {
      const need = (k) => [k, "paper", `<div class="abs anton" style="left:0;right:0;top:700px;text-align:center;font-size:190px">${A("Need a<br>website?", "wipeR", 0, "", 0.22)}</div>`, "need-a-website"];
      const talk = [1.5, "paper", `<div class="abs anton gdeep" style="left:0;right:0;top:700px;text-align:center;font-size:230px">${A("Let's<br>talk.", "wipe", 0, "", 0.22)}</div>`, "lets-talk"];
      return [need(0.75), talk, need(1.5), talk, [0.75, "paper", `<div class="abs anton" style="left:0;right:0;top:700px;text-align:center;font-size:190px">${A("Need a<br>website?", "wipeR", 0, "", 0.22)}</div>`, "need-a-website"]];
    })(),
  },

  // 5. Hard cut flash words. Like the "YOU / WILL / BE" reference.
  "05-your-website-should-sell": {
    scenes: [
      [0.45, "night", loud("Your"), "your"],
      [0.45, "paper", loud("Website", 250), "website"],
      [0.45, "night", loud("Should"), "should"],
      [1.7, "night", `<img class="bg a zoom" style="--t:1.7s" src="assets/chess.jpg"><div class="abs anton gold" style="left:80px;top:270px;font-size:360px">${A("Sell.", "pop", 0, "", 0.35)}</div>`, "sell"],
      [0.5, "paper", loud("Not just", 260), "not-just"],
      [0.9, "night", loud(`Look<br>${A("nice.", "blur", 0.15, "serif gold")}`, 300), "look-nice"],
      [0.5, "deep", loud("It should", 240), "it-should"],
      [1.4, "night", loud(`${A("Bring", "pop", 0)}<br>${A("you", "pop", 0.15)}<br>${A("clients.", "pop", 0.3, "gold")}`, 290), "bring-you-clients"],
      [3.0, "paper", `<img class="bg" src="assets/mega.jpg"><div class="abs" style="left:80px;top:270px;display:flex;align-items:center;gap:16px">${A(`<span class="mark" style="width:60px;height:60px;color:var(--ink)"></span>`, "fade", 0)}${A(`<span class="label" style="font-weight:800">Goju Design</span>`, "fade", 0)}</div>
        <div class="abs anton" style="left:80px;top:380px;font-size:190px">${A("Let's", "up", 0.1)}<br>${A("talk.", "up", 0.25, "gdeep")}</div>
        <div class="abs pill a pop" style="--d:.6s;left:80px;top:1340px;background:var(--ink);color:var(--paper);font-size:38px;white-space:nowrap">WhatsApp ${WA}</div>
        <div class="abs body a fade" style="--d:.9s;left:90px;top:1470px;font-size:34px">gojudesign.com</div>`, "end-card"],
    ],
  },
};
