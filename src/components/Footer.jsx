import { Link } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import { Button } from "./ui";
import { navLinks, socials, whatsappLink, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "../data/site";
import { services } from "../data/services";

// Web/Chevron band: gold ends pointing into a sand middle, with a chevron-shaped gap that shows the footer behind it.
function ChevronBand() {
  const tip = (
    <svg width="30" height="36" viewBox="0 0 30 36" className="block shrink-0" aria-hidden="true">
      <polygon points="0,0 18,18 0,36" className="fill-gold" />
      <polygon points="12,0 30,0 30,36 12,36 30,18" className="fill-sand" />
    </svg>
  );
  return (
    <div className="flex h-9 w-full" aria-hidden="true">
      <div className="flex-1 bg-gold lg:w-[320px] lg:flex-none" />
      {tip}
      <div className="w-6 bg-sand lg:flex-1" />
      <div className="hidden -scale-x-100 lg:flex">
        <div className="w-[320px] bg-gold" />
        {tip}
      </div>
    </div>
  );
}

const studioLinks = [...navLinks.filter((l) => l.label !== "Contact"), { label: "FAQ", to: "/faq" }];

function SocialLinks() {
  const items = [
    ["instagram", socials.instagram, "Instagram"],
    ["linkedin", socials.linkedin, "LinkedIn"],
  ];
  return (
    <div className="flex gap-[10px]">
      {items.map(([icon, href, label]) => (
        <a
          key={icon}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="flex size-10 items-center justify-center rounded-full border border-cream text-cream transition-colors hover:bg-cream hover:text-night"
        >
          <Icon name={icon} size={16} />
        </a>
      ))}
    </div>
  );
}

function Column({ title, children, className = "" }) {
  return (
    <div className={`flex flex-col gap-[14px] ${className}`}>
      <p className="t-label text-gold">{title}</p>
      {children}
    </div>
  );
}

const linkCls = "t-body text-cream hover:text-gold transition-colors";

export default function Footer() {
  return (
    <footer className="bg-night">
      <div className="wrap flex flex-col gap-8 pb-12 pt-16 lg:gap-16 lg:pt-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-6 min-[1440px]:gap-0">
          <div className="flex min-w-0 flex-col gap-[18px]">
            <h2 className="t-h1 text-cream min-[1440px]:whitespace-nowrap">Have a project in mind?</h2>
            <p className="t-body-l max-w-[560px] text-sand">
              Tell us what you are building. We will reply with next steps and a quote.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-[14px] sm:flex-row">
            <Button variant="gold" icon="whatsapp" href={whatsappLink()}>Chat on WhatsApp</Button>
            <Button variant="onDark" icon="arrow" to="/contact#brief">Send a brief</Button>
          </div>
        </div>
        <div className="h-px w-full bg-cream" />
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:flex lg:justify-between">
          <div className="col-span-2 flex flex-col gap-5">
            <Logo dark />
            <p className="t-body hidden max-w-[320px] text-sand lg:block">
              A design and development studio in Abuja, Nigeria. Websites, brands, content and digital products.
            </p>
            <div className="hidden lg:block">
              <SocialLinks />
            </div>
          </div>
          <Column title="Studio">
            {studioLinks.map((l) => (
              <Link key={l.to} to={l.to} className={linkCls}>{l.label}</Link>
            ))}
          </Column>
          <Column title="Services" className="hidden lg:flex">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className={linkCls}>{s.name}</Link>
            ))}
          </Column>
          <Column title="Contact" className="max-lg:[&>*:not(:first-child)]:text-[14px]">
            <a href={`tel:${PHONE_TEL}`} className={`${linkCls} whitespace-nowrap`}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className={`${linkCls} whitespace-nowrap`}>{EMAIL}</a>
            <span className="t-body text-cream">Abuja, Nigeria</span>
            <span className="t-body text-cream">Mon to Fri, 9am to 6pm</span>
          </Column>
          <div className="col-span-2 lg:hidden">
            <SocialLinks />
          </div>
        </div>
        <div className="flex flex-col gap-1 t-small text-sand lg:flex-row lg:items-center lg:justify-between">
          <p>
            © 2026 Goju Design Solutions Ltd.<span className="hidden lg:inline"> All rights reserved.</span>
          </p>
          <div className="flex gap-6 max-lg:gap-0">
            <Link to="/privacy-policy" className="hover:text-cream">
              <span className="hidden lg:inline">Privacy policy</span>
              <span className="lg:hidden">Privacy</span>
            </Link>
            <span className="lg:hidden">&nbsp;·&nbsp;</span>
            <Link to="/terms-of-service" className="hover:text-cream">
              <span className="hidden lg:inline">Terms of service</span>
              <span className="lg:hidden">Terms</span>
            </Link>
            <span className="lg:hidden">&nbsp;·&nbsp;</span>
            <Link to="/cookie-policy" className="hover:text-cream">
              <span className="hidden lg:inline">Cookie policy</span>
              <span className="lg:hidden">Cookies</span>
            </Link>
          </div>
        </div>
      </div>
      <ChevronBand />
    </footer>
  );
}
