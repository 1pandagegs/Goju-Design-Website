// Writes public/sitemap.xml from the site's routes and data. Runs before every build (see "prebuild").
import fs from "fs";
import { services } from "../src/data/services.js";
import { caseStudies } from "../src/data/work.js";

const SITE = "https://gojudesign.com";
const today = new Date().toISOString().slice(0, 10);
const pages = [
  ["/", "1.0"], ["/services", "0.9"], ["/work", "0.9"], ["/contact", "0.8"], ["/about", "0.7"],
  ...services.map((s) => [`/services/${s.slug}`, "0.8"]),
  ...caseStudies.map((c) => [`/work/${c.slug}`, "0.7"]),
  ["/products", "0.6"], ["/products/mundayne", "0.6"], ["/jonzee-world", "0.5"], ["/faq", "0.5"],
  ["/privacy-policy", "0.2"], ["/terms-of-service", "0.2"], ["/cookie-policy", "0.2"],
];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([p, pr]) => `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod><priority>${pr}</priority></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml: ${pages.length} pages`);
