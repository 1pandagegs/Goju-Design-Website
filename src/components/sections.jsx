import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { ArrowLink, CheckItem, Chip, Label, Picture, Status } from "./ui";

// Page header used by Work, Services, Products, About, Contact and FAQ.
export function PageHeader({ label, title, intro, children, titleClass = "max-w-[1200px]", className = "pb-12 pt-16 lg:pb-16 lg:pt-24" }) {
  return (
    <section className={`wrap flex flex-col gap-6 ${className}`}>
      <Label>{label}</Label>
      <h1 className={`t-display text-ink ${titleClass}`}>{title}</h1>
      {intro && <p className="t-body-l max-w-[720px] text-muted">{intro}</p>}
      {children}
    </section>
  );
}

// Web/Card case study
export function CaseCard({ study }) {
  return (
    <article className="flex flex-col gap-5">
      <Link to={`/work/${study.slug}`} className="block" tabIndex={-1} aria-hidden="true">
        <Picture image={study.cardImage} className="aspect-[580/400] w-full transition-opacity hover:opacity-90" />
      </Link>
      <div className="flex flex-wrap gap-2">
        <Status>{study.status}</Status>
        {study.chips.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
      </div>
      <h3 className="t-h3 text-ink">
        <Link to={`/work/${study.slug}`} className="hover:text-gold-deep">{study.name}</Link>
      </h3>
      <p className="t-body text-muted">{study.cardDesc}</p>
      <ArrowLink to={`/work/${study.slug}`}>View case study</ArrowLink>
    </article>
  );
}

// Web/Card service
export function ServiceCard({ service }) {
  return (
    <article className="flex flex-col gap-[18px] rounded-[24px] border border-line bg-cream p-6 lg:p-9">
      <span className="flex size-[52px] items-center justify-center rounded-[14px] bg-sand text-ink">
        <Icon name={service.homeIcon} size={22} />
      </span>
      <h3 className="t-h3 text-ink">{service.name}</h3>
      <p className="t-body text-muted">{service.homeDesc}</p>
      <ul className="flex flex-col gap-[10px]">
        {service.homeIncludes.map((i) => (
          <CheckItem key={i}>{i}</CheckItem>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-5">
        <div className="flex flex-col gap-[2px]">
          <p className="t-label text-muted">Pricing</p>
          <p className="t-h3 text-ink">Custom quote</p>
        </div>
        <ArrowLink to={`/services/${service.slug}`}>Learn more</ArrowLink>
      </div>
    </article>
  );
}

// FAQ accordion rows. The first item starts open, as in the design.
export function FaqList({ items, firstOpen = true, divided = false }) {
  const [open, setOpen] = useState(firstOpen ? 0 : -1);
  return (
    <div className="flex flex-col">
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        const id = `faq-${q.replace(/\W+/g, "-").toLowerCase()}`;
        return (
          <div key={q} className={divided || !isOpen ? "border-b border-line" : ""}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={id}
              className={`flex w-full items-center justify-between gap-6 text-left ${isOpen ? "pb-3 pt-7" : "py-7"}`}
            >
              <span className="t-h4 text-ink">{q}</span>
              <Icon name={isOpen ? "minus" : "plus"} size={20} className="shrink-0 text-ink" />
            </button>
            {isOpen && (
              <p id={id} className={`t-body text-muted ${divided ? "pb-7" : ""}`}>
                {a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

// "Questions / About this service." block used on service and product pages.
export function FaqSection({ label = "Questions", title, items, link }) {
  return (
    <section className="wrap section flex flex-col gap-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <Label>{label}</Label>
          <h2 className="t-h1 max-w-[820px] text-ink">{title}</h2>
        </div>
        {link}
      </div>
      <FaqList items={items} />
    </section>
  );
}
