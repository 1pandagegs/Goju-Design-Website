// POST /api/send — receives every site form and emails it through Resend:
// a notification to the studio inbox (reply-to = the sender) and a branded auto-reply to the sender.
// Needs the RESEND_API_KEY environment variable in Vercel.
import * as T from "./_emails.js";

const FROM = process.env.EMAIL_FROM || "Goju Design <info@gojudesign.com>";
const STUDIO_TO = process.env.STUDIO_EMAIL || "info@gojudesign.com";
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || "").trim());
const clean = (v, max = 2000) => String(v ?? "").trim().slice(0, max);

async function resend(payload) {
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!r.ok) throw new Error(`Resend ${r.status}: ${await r.text()}`);
  return r.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!process.env.RESEND_API_KEY) return res.status(503).json({ error: "Email is not configured" });

  const b = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  if (b.website) return res.status(200).json({ ok: true }); // honeypot: bots fill hidden fields

  const d = {
    type: clean(b.type, 20),
    name: clean(b.name, 120),
    email: clean(b.email, 200),
    phone: clean(b.phone, 40),
    company: clean(b.company, 160),
    service: clean(b.service, 300),
    budget: clean(b.budget, 80),
    timeline: clean(b.timeline, 80),
    reply: clean(b.reply, 80),
    details: clean(b.details, 5000),
    when: clean(b.when, 120),
    platform: clean(b.platform, 40),
    source: clean(b.source, 200),
  };
  if (d.phone.replace(/[^\d]/g, "").length < 8) d.phone = ""; // empty "+234 " prefill
  if (d.email && !isEmail(d.email)) return res.status(400).json({ error: "Invalid email" });

  const pairs = {
    enquiry: [T.enquiryNotification, T.enquiryReceived],
    booking: [T.bookingNotification, T.bookingReceived],
    waitlist: [T.waitlistNotification, T.waitlistWelcome],
  }[d.type];
  if (!pairs) return res.status(400).json({ error: "Unknown form type" });
  if (d.type !== "waitlist" && (!d.name || !d.email)) return res.status(400).json({ error: "Name and email are required" });
  if (d.type === "waitlist" && !d.email && !d.phone) return res.status(400).json({ error: "Contact is required" });

  const [toStudio, toSender] = pairs;
  try {
    const n = toStudio(d);
    await resend({ from: FROM, to: [STUDIO_TO], reply_to: d.email || undefined, subject: n.subject, html: n.html, text: n.text });
  } catch (e) {
    console.error(e);
    return res.status(502).json({ error: "Could not send" });
  }
  // The studio has the message; a failed auto-reply should not show the visitor an error.
  if (d.email) {
    try {
      const a = toSender(d);
      await resend({ from: FROM, to: [d.email], reply_to: STUDIO_TO, subject: a.subject, html: a.html, text: a.text });
    } catch (e) {
      console.error("Auto-reply failed", e);
    }
  }
  return res.status(200).json({ ok: true });
}
