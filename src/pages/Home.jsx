import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { ArrowLink, Button, Label, Picture, SectionHeader, Status } from "../components/ui";
import { ScreensPanel } from "../components/product";
import { CaseCard, ServiceCard } from "../components/sections";
import { useModals } from "../components/modals/ModalContext";
import { caseStudies } from "../data/work";
import { services } from "../data/services";
import { whatsappLink } from "../data/site";
import { img } from "../data/images";

const steps = [
  ["01", "Chat", "Message us on WhatsApp or send a brief. We ask about your business, goals and budget."],
  ["02", "Proposal", "You get a clear scope, timeline and price in writing before any work starts."],
  ["03", "Design & build", "We share progress as we go, so you review real work, not surprises."],
  ["04", "Launch & support", "We go live, hand everything over, and stay on for updates when you need them."],
];

function Hero() {
  return (
    <section className="wrap flex flex-col gap-10 pb-16 pt-12 lg:flex-row lg:items-center lg:gap-16 lg:pb-[120px] lg:pt-24">
      <div className="flex min-w-0 flex-1 flex-col gap-7">
        <Label>
          <span className="lg:hidden">Design studio · Abuja</span>
          <span className="hidden lg:inline">Design and development studio · Abuja, Nigeria</span>
        </Label>
        <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink md:text-[60px] lg:text-[72px] lg:leading-none lg:tracking-[-0.025em]">
          Websites, brands and content for businesses <span className="text-gold-deep">ready to grow.</span>
        </h1>
        <p className="t-body-l max-w-[560px] text-muted">
          We design, build and run the digital side of your business, from your website to your Instagram, so you can focus on the work itself.
        </p>
        <div className="flex flex-col gap-[14px] sm:flex-row">
          <Button icon="whatsapp" href={whatsappLink()}>Start a project</Button>
          <Button variant="secondary" icon="arrow" to="/work">See our work</Button>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 lg:w-[480px] lg:shrink-0">
        <Picture image={{ key: "as5HomeSmall", label: "AS5 Group website, homepage screenshot" }} className="aspect-[3/2] w-full" eager />
        <div className="grid grid-cols-2 gap-4">
          <Picture image={{ key: "amfhCover", label: "A Message For Her, podcast cover" }} className="aspect-[232/200] w-full" eager />
          <Picture image={{ key: "sabSmall", label: "Sabali Limited website" }} className="aspect-[232/200] w-full" eager />
        </div>
      </div>
    </section>
  );
}

// Client logos, taken from the headers of each client's website.
const clientLogos = [
  ["client-as5", "AS5 Group", "/work/as5-group", "h-9 lg:h-11"],
  ["client-sabali", "Sabali Limited", "/work/sabali-limited", "h-11 lg:h-14"],
  ["client-amfh", "A Message For Her", "/work/a-message-for-her", "h-8 lg:h-10"],
];

function Clients() {
  return (
    <section className="bg-paper">
      <div className="wrap flex flex-col gap-5 py-9 lg:flex-row lg:items-center lg:justify-between">
        <Label muted>Clients we work with</Label>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-5 lg:gap-[72px]">
          {clientLogos.map(([key, name, to, size]) => (
            <Link key={key} to={to} className="opacity-90 transition-opacity hover:opacity-100">
              <img src={img(key)} alt={name} className={`${size} w-auto`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  const { openStart } = useModals();
  return (
    <section className="wrap section flex flex-col gap-10 lg:gap-16">
      <SectionHeader
        label="Selected work"
        title="Real clients. Live work."
        intro="Every project here is ours: designed, built, and in most cases still run by us."
        link={<span className="hidden md:inline-flex"><ArrowLink to="/work">View all work</ArrowLink></span>}
      />
      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:gap-y-[72px]">
        {caseStudies.map((c) => (
          <CaseCard key={c.slug} study={c} />
        ))}
        <div className="flex min-h-[420px] flex-col justify-between gap-10 rounded-[24px] bg-night p-8 lg:min-h-[610px] lg:p-12">
          <div className="flex flex-col gap-4">
            <Label dark>Your project</Label>
            <p className="t-h1 text-cream">Could be next on this page.</p>
            <p className="t-body-l text-sand">Tell us about your business and what you need. We will reply with a plan and a quote.</p>
          </div>
          <div>
            <Button variant="gold" icon="whatsapp" onClick={() => openStart()}>Start a project</Button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <ArrowLink to="/work">View all work</ArrowLink>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="bg-paper">
      <div className="wrap section flex flex-col gap-10 lg:gap-16">
        <SectionHeader
          label="What we do"
          title="Four services, done properly."
          intro="Clear scopes, with every project quoted after a free consultation."
          link={<span className="hidden md:inline-flex"><ArrowLink to="/services">All services</ArrowLink></span>}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="md:hidden">
          <ArrowLink to="/services">All services</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="wrap section flex flex-col gap-10 lg:gap-16">
      <SectionHeader label="How we work" title="From first message to launch." titleClass="max-w-[700px]" />
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(([n, title, body]) => (
          <li key={n} className="flex flex-col gap-[14px] border-t-2 border-gold pt-7">
            <Label>{n}</Label>
            <h3 className="t-h3 text-ink">{title}</h3>
            <p className="t-body text-muted">{body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function MadeByGoju() {
  return (
    <section className="bg-night">
      <div className="wrap section flex flex-col gap-10 lg:gap-16">
        <SectionHeader
          dark
          label="Made by Goju"
          title="We build our own products too."
          intro="An original app and an original universe, built in-house. They keep our skills sharp and prove we can ship."
          link={<span className="hidden md:inline-flex"><ArrowLink dark to="/products">See products</ArrowLink></span>}
        />
        {/* Desktop: two large tiles */}
        <div className="hidden gap-8 md:grid md:grid-cols-2">
          <Link to="/products/mundayne" className="group flex flex-col gap-[18px]">
            <ScreensPanel dark screens={["mundayneHome", "mundayneProgress"]} className="h-[300px] w-full" />
            <Status className="self-start">Coming soon</Status>
            <h3 className="t-h3 text-cream group-hover:text-gold">Mundayne</h3>
            <Label dark>Mobile app · In development</Label>
            <p className="t-body text-sand">A simple habit tracker with a daily journal. Check off habits, track progress, reflect.</p>
          </Link>
          <Link to="/jonzee-world" className="group flex flex-col gap-[18px]">
            <Picture image={{ key: "jzKey", label: "Jonzee World, key visual" }} className="h-[300px] w-full" />
            <Status className="self-start">Ongoing</Status>
            <h3 className="t-h3 text-cream group-hover:text-gold">Jonzee World</h3>
            <Label dark>Original universe</Label>
            <p className="t-body text-sand">A Nigerian collectible universe of characters, fashion and stories, starting with Neon Street.</p>
          </Link>
        </div>
        {/* Mobile: compact list */}
        <div className="flex flex-col md:hidden">
          <Link to="/products/mundayne" className="flex items-center gap-4 border-b border-cream/40 pb-6">
            <img src={img("mundayneHome")} alt="Mundayne home screen" className="size-[88px] shrink-0 rounded-[16px] object-cover object-top" />
            <div className="flex flex-col gap-2">
              <h3 className="t-h3 text-cream">Mundayne</h3>
              <p className="t-small text-sand">Original app, coming to Android and iOS.</p>
              <Status className="self-start">Coming soon</Status>
            </div>
          </Link>
          <Link to="/jonzee-world" className="flex items-center gap-4 border-b border-cream/40 py-6">
            <img src={img("jzAdam")} alt="Adam, Jonzee World" className="size-[88px] shrink-0 rounded-[16px] object-cover object-top" />
            <div className="flex flex-col gap-2">
              <h3 className="t-h3 text-cream">Jonzee World</h3>
              <p className="t-small text-sand">A Nigerian collectible universe.</p>
              <Status className="self-start">Ongoing</Status>
            </div>
          </Link>
          <div className="pt-6">
            <ArrowLink dark to="/products">See products</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  ["“I love the website. It feels contemporary and premium, and it tells our story perfectly.”", "Engr Abuba Sahabi", "CEO, AS5 Group", "client-as5"],
  ["“The website is perfect. It represents Sabali exactly, and the move to hard code did not miss a single detail.”", "Abdullahi Junaid", "CEO, Sabali Limited", "client-sabali"],
  ["“I was super impressed with how the whole podcast was coordinated and delivered, from production to content management and distribution.”", "Gina", "Host, A Message For Her", "client-amfh"],
];

// "What clients say" carousel: advances every 7 seconds and pauses while hovered or focused.
function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (d) => setI((v) => (v + d + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setI((v) => (v + 1) % testimonials.length), 7000);
    return () => clearTimeout(t);
  }, [i, paused]);

  return (
    <section
      className="wrap section flex flex-col items-center gap-8 text-center"
      aria-roledescription="carousel"
      aria-label="What clients say"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Label>What clients say</Label>
      <div className="grid w-full lg:px-[120px]">
        {testimonials.map(([quote, name, role, logo], n) => (
          <figure
            key={name}
            aria-hidden={n !== i}
            aria-roledescription="slide"
            aria-label={`${n + 1} of ${testimonials.length}`}
            className={`col-start-1 row-start-1 flex flex-col items-center gap-8 transition-opacity duration-500 ${n === i ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <blockquote className="t-h2 text-ink">{quote}</blockquote>
            <figcaption className="flex items-center gap-[14px] text-left">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-paper p-2" aria-hidden="true">
                <img src={img(logo)} alt="" className="max-h-full max-w-full object-contain" />
              </span>
              <span className="flex flex-col gap-[2px]">
                <span className="t-h4 text-ink">{name}</span>
                <span className="t-small text-muted">{role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="flex size-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink">
          <Icon name="chevron-left" size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map(([, name], n) => (
            <button
              key={name}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Show testimonial ${n + 1}`}
              aria-current={n === i}
              className={`h-2 rounded-full transition-all ${n === i ? "w-6 bg-gold-deep" : "w-2 bg-line hover:bg-gold"}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="flex size-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink">
          <Icon name="chevron-right" size={18} />
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <SelectedWork />
      <WhatWeDo />
      <HowWeWork />
      <MadeByGoju />
      <Testimonials />
    </>
  );
}
