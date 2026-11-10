// Writes every email template to emails-preview/*.html with sample data.
// Usage: node scripts/email-preview.mjs   (then open the files in a browser)
import fs from "fs";
import * as T from "../api/_emails.js";

const brief = { name: "Amaka Obi", email: "amaka@example.com", phone: "+234 803 000 0000", company: "Obi Foods", service: "Websites, Brand design", budget: "₦1,000,000 to ₦2,500,000", timeline: "Within 2 months", reply: "WhatsApp", details: "We need a new website for our food brand, with online ordering and a refreshed logo.", source: "https://gojudesign.com/contact" };
const booking = { name: "Amaka Obi", email: "amaka@example.com", when: "Thursday 13 November at 10:00 WAT", source: "https://gojudesign.com/" };
const waitlist = { email: "amaka@example.com", platform: "iPhone", source: "https://gojudesign.com/products/mundayne" };
const out = {
  "enquiry-received": T.enquiryReceived(brief),
  "enquiry-notification": T.enquiryNotification(brief),
  "booking-received": T.bookingReceived(booking),
  "booking-notification": T.bookingNotification(booking),
  "waitlist-welcome": T.waitlistWelcome(waitlist),
  "waitlist-notification": T.waitlistNotification(waitlist),
  announcement: T.announcement({
    headline: "Our new website is *live.*",
    preheader: "A new look for Goju Design, and real work you can explore.",
    bodyHtml: '<p style="margin:0 0 16px;font-family:Montserrat,Arial,sans-serif;font-size:16px;line-height:1.65;color:#2a2a2a">We have rebuilt gojudesign.com from the ground up. You can now explore real client work, see how we price and plan projects, and book a free call in two clicks.</p>',
    cta: "Visit the website",
    ctaHref: "https://gojudesign.com",
  }),
};
fs.mkdirSync("emails-preview", { recursive: true });
for (const [name, e] of Object.entries(out)) {
  const local = process.argv.includes("--local");
  const html = local ? e.html.replaceAll(`${T.SITE}/email/`, `${process.cwd()}/public/email/`) : e.html;
  fs.writeFileSync(`emails-preview/${name}.html`, html);
  console.log(`${name}: ${e.subject}`);
}
