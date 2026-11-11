import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getService } from "../data/services";
import { getCaseStudy } from "../data/work";

export const SITE_URL = "https://gojudesign.com";
const BRAND = "Goju Design";
const DEFAULT = {
  title: "Goju Design | Websites, brands and content in Abuja",
  description:
    "Goju Design Solutions Ltd is a design and development studio in Abuja, Nigeria. Websites, brands, social media, content and AI automation for businesses ready to grow.",
};

// Title and description for every fixed page. Service and case study pages are built from their data.
const PAGES = {
  "/": DEFAULT,
  "/work": { title: "Our work", description: "Real client projects from Goju Design: websites, brands, social media and podcast production for businesses in Nigeria and beyond." },
  "/services": { title: "Services", description: "Websites and web apps, brand design, social media and content, and AI automation. Clear written quotes, one team from start to finish." },
  "/products": { title: "Our products", description: "Products we design and build in-house at Goju Design, including the Mundayne habit app and the Jonzee World collectible universe." },
  "/products/mundayne": { title: "Mundayne habit app", description: "Mundayne helps you build better days, one habit at a time, with a daily journal, focus habits and visible progress. Join the waitlist." },
  "/jonzee-world": { title: "Jonzee World", description: "Jonzee World is an original collectible universe of characters and cards, created by Goju Design." },
  "/about": { title: "About us", description: "Goju Design is a design and development studio in Abuja. Meet the team behind our websites, brands, content and AI automation work." },
  "/contact": { title: "Contact us", description: "Start a project with Goju Design. Send a brief, chat on WhatsApp or book a free 30-minute call. We reply within one working day." },
  "/faq": { title: "FAQ", description: "Answers about pricing, timelines, payments and how Goju Design works with clients on websites, brands, content and automation." },
  "/privacy-policy": { title: "Privacy policy", description: "How Goju Design Solutions Ltd collects, uses and protects your personal information." },
  "/terms-of-service": { title: "Terms of service", description: "The terms that apply when you use gojudesign.com or work with Goju Design Solutions Ltd." },
  "/cookie-policy": { title: "Cookie policy", description: "Which cookies gojudesign.com uses and how to control them." },
};

const clip = (s = "", n = 160) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s);

export function metaFor(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (PAGES[path]) return PAGES[path];
  const [, section, slug] = path.split("/");
  if (section === "services" && getService(slug)) {
    const s = getService(slug);
    return { title: s.name, description: clip(s.listDesc || s.homeDesc) };
  }
  if (section === "work" && getCaseStudy(slug)) {
    const c = getCaseStudy(slug);
    return { title: `${c.name} case study`, description: clip(c.intro || c.cardDesc) };
  }
  return { title: "Page not found", description: DEFAULT.description, noindex: true };
}

function setTag(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith("link") ? "link" : "meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

// Keeps the browser title, description, canonical link and social tags in step with the current page.
export function PageMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = metaFor(pathname);
    const title = m === DEFAULT ? DEFAULT.title : `${m.title} | ${BRAND}`;
    const url = SITE_URL + (pathname === "/" ? "/" : pathname.replace(/\/+$/, ""));
    document.title = title;
    setTag('meta[name="description"]', { name: "description", content: m.description });
    setTag('link[rel="canonical"]', { rel: "canonical", href: url });
    setTag('meta[property="og:title"]', { property: "og:title", content: title });
    setTag('meta[property="og:description"]', { property: "og:description", content: m.description });
    setTag('meta[property="og:url"]', { property: "og:url", content: url });
    setTag('meta[name="robots"]', { name: "robots", content: m.noindex ? "noindex" : "index, follow" });
  }, [pathname]);
  return null;
}
