// Contact details and links used across the site.
export const PHONE_DISPLAY = "+234 703 864 9237";
export const PHONE_TEL = "+2347038649237";
export const EMAIL = "info@gojudesign.com";
export const CALENDLY_URL = "https://calendly.com/info-gojudesign/30min";

export const whatsappLink = (text = "Hi Goju Design, I'd like to start a project.") =>
  `https://wa.me/2347038649237?text=${encodeURIComponent(text)}`;

export const socials = {
  instagram: "https://www.instagram.com/goju_design",
  linkedin: "https://www.linkedin.com/company/gojudesign/",
};

export const jonzeeSocials = {
  tiktok: "https://www.tiktok.com/@jonzee_world",
  instagram: "https://www.instagram.com/jonzee_world",
};

export const navLinks = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Jonzee World", to: "/jonzee-world" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// EmailJS account used by the previous site. Every form on the site sends
// through the same service and template, so new briefs land in the same inbox.
export const EMAILJS = {
  serviceId: "service_6fgbn7t",
  templateId: "template_jaxxv3c",
  autoReplyTemplateId: "template_5upzknj",
  publicKey: "2FrSyujfbTxDyjEJM",
};
