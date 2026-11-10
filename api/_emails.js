// Branded HTML emails for Goju Design, sent through Resend by api/send.js.
// Email clients ignore most modern CSS, so every layout here uses tables and inline styles.
// Files starting with "_" in /api are helpers, not endpoints.

export const SITE = "https://gojudesign.com";
export const STUDIO = {
  email: "info@gojudesign.com",
  phoneDisplay: "+234 703 864 9237",
  whatsapp: "https://wa.me/2347038649237",
  calendly: "https://calendly.com/gojudesign-info/30min",
  instagram: "https://www.instagram.com/goju_design",
  linkedin: "https://www.linkedin.com/company/gojudesign/",
};

const C = { ink: "#2a2a2a", night: "#1a1a1a", gold: "#b09b71", goldDeep: "#927845", paper: "#f1eee8", sand: "#ebe6db", line: "#e1dacb", muted: "#6d6d6d", white: "#ffffff" };
const FONT = "'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif";
const SERIF = "'Instrument Serif', Georgia, 'Times New Roman', serif";

export const esc = (v = "") =>
  String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const nl2br = (v) => esc(v).replace(/\r?\n/g, "<br>");
const firstName = (name = "") => esc(String(name).trim().split(/\s+/)[0] || "there");
// Headline helper: wraps *words* in the gold serif italic accent used across the brand.
const accent = (text) => esc(text).replace(/\*(.+?)\*/g, `<span style="font-family:${SERIF};font-style:italic;font-weight:400;color:${C.goldDeep};font-size:1.12em;letter-spacing:0">$1</span>`);

// ---------- building blocks ----------
const p = (html, extra = "") => `<p style="margin:0 0 16px;font-family:${FONT};font-size:16px;line-height:1.65;color:${C.ink};${extra}">${html}</p>`;
const label = (text) => `<p style="margin:0 0 12px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${C.goldDeep}">${esc(text)}</p>`;
const h1 = (text) => `<h1 style="margin:0 0 20px;font-family:${FONT};font-size:34px;line-height:1.12;font-weight:800;letter-spacing:-0.02em;color:${C.ink}">${accent(text)}</h1>`;

export const button = (text, href, variant = "dark") => {
  const s = variant === "dark" ? { bg: C.ink, fg: C.white, bd: C.ink } : { bg: C.white, fg: C.ink, bd: C.line };
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display:inline-table;margin:0 8px 8px 0"><tr><td style="border-radius:999px;background:${s.bg};border:1.5px solid ${s.bd}">
  <a href="${esc(href)}" target="_blank" style="display:inline-block;padding:14px 26px;font-family:${FONT};font-size:15px;font-weight:700;color:${s.fg};text-decoration:none;border-radius:999px">${esc(text)}&nbsp;&rarr;</a></td></tr></table>`;
};

// Key/value summary card, e.g. the brief a client sent.
const summary = (rows) => {
  const body = rows
    .filter(([, v]) => v && String(v).trim())
    .map(([k, v], i) => `<tr><td style="padding:14px 0;${i ? `border-top:1px solid ${C.line};` : ""}vertical-align:top;width:36%;font-family:${FONT};font-size:13px;font-weight:600;color:${C.muted}">${esc(k)}</td>
      <td style="padding:14px 0;${i ? `border-top:1px solid ${C.line};` : ""}vertical-align:top;font-family:${FONT};font-size:15px;line-height:1.55;font-weight:500;color:${C.ink}">${nl2br(v)}</td></tr>`)
    .join("");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.paper};border:1px solid ${C.line};border-radius:16px;margin:8px 0 24px"><tr><td style="padding:6px 22px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${body}</table></td></tr></table>`;
};

// Numbered "what happens next" list.
const steps = (items) =>
  `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:4px 0 24px">${items
    .map((t, i) => `<tr><td style="width:44px;padding:0 0 14px;vertical-align:top"><div style="width:30px;height:30px;line-height:30px;border-radius:999px;background:${C.sand};text-align:center;font-family:${FONT};font-size:13px;font-weight:800;color:${C.goldDeep}">${i + 1}</div></td>
      <td style="padding:5px 0 14px;font-family:${FONT};font-size:15px;line-height:1.55;color:${C.ink}">${t}</td></tr>`)
    .join("")}</table>`;

const divider = `<div style="height:1px;background:${C.line};margin:28px 0"></div>`;

// ---------- shell ----------
// preheader = the grey preview line shown in inbox lists.
export function layout({ preheader = "", content, internal = false }) {
  const footer = internal
    ? `<p style="margin:0;font-family:${FONT};font-size:12px;line-height:1.6;color:${C.muted}">Sent from the contact forms on <a href="${SITE}" style="color:${C.muted}">gojudesign.com</a>. Reply to this email to answer the sender directly.</p>`
    : `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
        <td style="vertical-align:top"><img src="${SITE}/email/mark-gold.png" width="44" height="44" alt="Goju Design" style="display:block;border:0"></td>
        <td style="vertical-align:top;padding-left:16px;font-family:${FONT};font-size:13px;line-height:1.7;color:${C.sand}">
          <strong style="color:${C.white};font-weight:700">Goju Design Solutions Ltd</strong><br>Websites, brands, content and AI automation. Abuja, Nigeria.<br>
          <a href="mailto:${STUDIO.email}" style="color:${C.gold};text-decoration:none">${STUDIO.email}</a> &nbsp;·&nbsp; <a href="${STUDIO.whatsapp}" style="color:${C.gold};text-decoration:none">${STUDIO.phoneDisplay}</a></td></tr>
        <tr><td></td><td style="padding:16px 0 0 16px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">
          <a href="${SITE}" style="color:${C.white};text-decoration:none">Website</a> &nbsp;&nbsp;
          <a href="${STUDIO.instagram}" style="color:${C.white};text-decoration:none">Instagram</a> &nbsp;&nbsp;
          <a href="${STUDIO.linkedin}" style="color:${C.white};text-decoration:none">LinkedIn</a></td></tr></table>`;

  return `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light">
<title>Goju Design</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Instrument+Serif:ital@1&display=swap" rel="stylesheet">
<style>
  body{margin:0;padding:0;background:${C.paper}}
  a{color:${C.goldDeep}}
  @media (max-width:620px){ .card{border-radius:0!important} .pad{padding:28px 22px!important} h1{font-size:28px!important} }
</style></head>
<body style="margin:0;padding:0;background:${C.paper}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${C.paper}">${esc(preheader)}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.paper}"><tr><td align="center" style="padding:32px 12px">
  <table role="presentation" class="card" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:${C.white};border-radius:24px;overflow:hidden;border:1px solid ${C.line}">
    <tr><td class="pad" style="padding:30px 40px 26px;border-bottom:1px solid ${C.line}">
      <a href="${SITE}" target="_blank"><img src="${SITE}/email/logo-lockup-ink.png" width="178" height="41" alt="Goju Design Solutions Ltd" style="display:block;border:0;width:178px;height:auto"></a></td></tr>
    <tr><td class="pad" style="padding:40px 40px 16px">${content}</td></tr>
    <tr><td class="pad" style="padding:28px 40px;background:${internal ? C.sand : C.night}">${footer}</td></tr>
  </table>
  <p style="margin:18px 0 0;font-family:${FONT};font-size:11px;color:${C.muted}">© ${new Date().getFullYear()} Goju Design Solutions Ltd · <a href="${SITE}" style="color:${C.muted}">gojudesign.com</a></p>
</td></tr></table></body></html>`;
}

// Plain-text twin of every email (spam filters and some clients want one).
const text = (lines) => lines.filter(Boolean).join("\n") + `\n\n--\nGoju Design Solutions Ltd\n${STUDIO.email} · ${STUDIO.phoneDisplay}\n${SITE}`;

// ---------- templates ----------
// Each returns { subject, html, text }.

export function enquiryReceived(d) {
  const rows = [["Service", d.service], ["Company", d.company], ["Budget", d.budget], ["Timeline", d.timeline], ["Your message", d.details]];
  return {
    subject: "We've got your brief – Goju Design",
    html: layout({
      preheader: "Thanks for reaching out. We reply within one working day.",
      content:
        label("Brief received") +
        h1(`Thanks, ${d.name ? String(d.name).trim().split(/\s+/)[0] : "there"}. We've got *your brief.*`) +
        p("Thanks for telling us about your project. A real person on our team is reading it now, and we'll reply within one working day.") +
        steps([
          "We read your brief and note any questions.",
          "We reply by email or WhatsApp, whichever you prefer.",
          "If it's a fit, we book a short call and send a clear, written quote.",
        ]) +
        label("What you sent us") +
        summary(rows) +
        p("Need us sooner? Message us on WhatsApp or book a free 30-minute call.", "margin-bottom:20px") +
        button("Chat on WhatsApp", `${STUDIO.whatsapp}?text=${encodeURIComponent("Hi Goju Design, I just sent a brief on your website.")}`) +
        button("Book a call", STUDIO.calendly, "light"),
    }),
    text: text([
      `Thanks, ${d.name || "there"}. We've got your brief.`,
      "",
      "A real person on our team is reading it now, and we'll reply within one working day.",
      "",
      ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
      "",
      `WhatsApp: ${STUDIO.whatsapp}`,
      `Book a call: ${STUDIO.calendly}`,
    ]),
  };
}

export function enquiryNotification(d) {
  const rows = [["Name", d.name], ["Email", d.email], ["WhatsApp", d.phone], ["Company", d.company], ["Service", d.service], ["Budget", d.budget], ["Timeline", d.timeline], ["Preferred reply", d.reply], ["Details", d.details], ["Sent from", d.source]];
  const wa = d.phone ? `https://wa.me/${String(d.phone).replace(/[^\d]/g, "")}` : "";
  return {
    subject: `New brief: ${d.name || "Website visitor"}${d.service ? ` – ${d.service}` : ""}`,
    html: layout({
      internal: true,
      preheader: `${d.service || "New enquiry"}${d.budget ? ` · ${d.budget}` : ""}`,
      content:
        label("New project brief") +
        h1(`${d.name || "Someone"} wants to *work with us.*`) +
        summary(rows) +
        (d.email ? button("Reply by email", `mailto:${d.email}?subject=${encodeURIComponent("Re: your project brief – Goju Design")}`) : "") +
        (wa ? button("WhatsApp them", wa, "light") : "") +
        p("Aim to reply within one working day.", `margin-top:16px;font-size:13px;color:${C.muted}`),
    }),
    text: text(["New project brief", "", ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`)]),
  };
}

export function bookingReceived(d) {
  return {
    subject: `Your call request: ${d.when} – Goju Design`,
    html: layout({
      preheader: `We've noted ${d.when}. Your calendar invite is on its way.`,
      content:
        label("Call requested") +
        h1(`See you *soon,* ${firstName(d.name)}.`) +
        p("Thanks for booking a free 30-minute consultation with Goju Design. Here's the time you picked:") +
        `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 24px;background:${C.night};border-radius:18px"><tr><td style="padding:24px 26px">
          <p style="margin:0 0 6px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${C.gold}">Video call · 30 minutes</p>
          <p style="margin:0;font-family:${FONT};font-size:24px;line-height:1.25;font-weight:800;color:${C.white}">${esc(d.when)}</p></td></tr></table>` +
        steps([
          "We confirm the slot and email you a calendar invite with the video link.",
          "Before the call, have a think about your goals, timeline and budget.",
          "On the call, we'll talk through your project and suggest next steps. No obligation.",
        ]) +
        p("Need a different time? Pick one directly on our calendar, or message us on WhatsApp.", "margin-bottom:20px") +
        button("Change the time", STUDIO.calendly) +
        button("WhatsApp us", STUDIO.whatsapp, "light"),
    }),
    text: text([`See you soon, ${d.name || "there"}.`, "", `Your call request: ${d.when} (30-minute video call).`, "We'll confirm and send a calendar invite with the video link.", "", `Change the time: ${STUDIO.calendly}`]),
  };
}

export function bookingNotification(d) {
  const rows = [["Name", d.name], ["Email", d.email], ["Requested slot", d.when], ["Sent from", d.source]];
  return {
    subject: `Call request: ${d.name || "Website visitor"} – ${d.when}`,
    html: layout({
      internal: true,
      preheader: `${d.when} · 30-minute consultation`,
      content:
        label("New consultation request") +
        h1(`*${d.when}*`) +
        summary(rows) +
        p("Send the calendar invite with a video link to confirm the slot.") +
        (d.email ? button("Reply by email", `mailto:${d.email}?subject=${encodeURIComponent(`Your call with Goju Design – ${d.when}`)}`) : ""),
    }),
    text: text(["New consultation request", "", ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`)]),
  };
}

export function waitlistWelcome(d) {
  return {
    subject: "You're on the Mundayne waitlist",
    html: layout({
      preheader: "Thanks for joining. You'll be first to know when Mundayne launches.",
      content:
        label("Mundayne waitlist") +
        h1("You're on *the list.*") +
        p("Thanks for joining the waitlist for <strong>Mundayne</strong>, the habit app we're designing and building in-house at Goju Design.") +
        p("Mundayne helps you build better days, one habit at a time, with a daily journal, focus habits and progress you can actually see.") +
        steps([
          "We'll email you when early access opens.",
          `You'll get it first on ${esc(d.platform || "your phone")}.`,
          "Early members help shape what we build next.",
        ]) +
        button("See Mundayne", `${SITE}/products/mundayne`),
    }),
    text: text(["You're on the Mundayne waitlist.", "", "We'll email you when early access opens.", `${SITE}/products/mundayne`]),
  };
}

export function waitlistNotification(d) {
  const rows = [["Contact", d.email || d.phone], ["Platform", d.platform], ["Sent from", d.source]];
  return {
    subject: `Mundayne waitlist: ${d.email || d.phone}`,
    html: layout({ internal: true, preheader: `New sign-up on ${d.platform || "unknown platform"}`, content: label("Mundayne waitlist") + h1("New *sign-up.*") + summary(rows) }),
    text: text(["New Mundayne waitlist sign-up", "", ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`)]),
  };
}

// General-purpose branded email for one-off sends and Resend broadcasts
// (announcements, newsletters, project updates). Body is trusted HTML written by the team.
export function announcement({ eyebrow = "News from Goju Design", headline, bodyHtml, image, cta, ctaHref, preheader = "" }) {
  return {
    subject: headline.replace(/\*/g, ""),
    html: layout({
      preheader,
      content:
        label(eyebrow) +
        h1(headline) +
        (image ? `<img src="${esc(image)}" width="520" alt="" style="display:block;width:100%;height:auto;border-radius:16px;margin:4px 0 24px;border:0">` : "") +
        bodyHtml +
        (cta ? `<div style="margin-top:8px">${button(cta, ctaHref)}</div>` : "") +
        divider +
        p(`Questions? Just reply to this email or message us on <a href="${STUDIO.whatsapp}" style="color:${C.goldDeep}">WhatsApp</a>.`, `font-size:14px;color:${C.muted}`),
    }),
    text: text([headline.replace(/\*/g, ""), "", bodyHtml.replace(/<[^>]+>/g, ""), cta ? `${cta}: ${ctaHref}` : ""]),
  };
}
