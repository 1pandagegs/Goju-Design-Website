import emailjs from "@emailjs/browser";
import { EMAILJS } from "../data/site";

export const budgetOptions = [
  "Under ₦250,000",
  "₦250,000 to ₦500,000",
  "₦500,000 to ₦1,000,000",
  "₦1,000,000 to ₦2,500,000",
  "Above ₦2,500,000",
  "Not sure yet",
];

export const timelineOptions = ["As soon as possible", "Within 1 month", "Within 2 months", "Within 3 months", "Flexible"];

export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

// Sends any site form to the studio inbox. The primary route is our Resend endpoint (/api/send),
// which also emails the sender a branded confirmation. If that fails, it falls back to the
// EmailJS template the old site used, so no enquiry is lost.
export async function sendToStudio({ type = "enquiry", name = "", email = "", phone = "", company = "", service = "", budget = "", timeline = "", reply = "", details = "", when = "", platform = "", website = "" }) {
  const payload = { type, name, email, phone, company, service, budget, timeline, reply, details, when, platform, website, source: window.location.href };
  try {
    const r = await fetch("/api/send", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (r.ok) return;
  } catch {
    // network error: fall through to EmailJS
  }
  return emailjs.send(
    EMAILJS.serviceId,
    EMAILJS.templateId,
    {
      from_name: name,
      from_email: email,
      company_name: company,
      phone_number: phone,
      service_needed: service,
      project_budget: budget,
      project_timeline: timeline,
      project_details: [details, reply && `Preferred reply: ${reply}`, when && `Requested slot: ${when}`, platform && `Platform: ${platform}`].filter(Boolean).join("\n\n"),
    },
    EMAILJS.publicKey,
  );
}
