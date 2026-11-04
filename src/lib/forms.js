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

// Sends any site form to the studio inbox through the EmailJS template the old site used.
export function sendToStudio({ name, email = "", phone = "", company = "", service = "", budget = "", timeline = "", details = "" }) {
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
      project_details: details,
    },
    EMAILJS.publicKey,
  );
}
