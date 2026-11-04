import Icon from "../components/Icon";
import { ArrowLink, Button, CheckItem, Label, Picture } from "../components/ui";
import { FaqList, PageHeader } from "../components/sections";
import { services, servicePackages } from "../data/services";
import { servicesTeaser } from "../data/faq";
import { whatsappLink } from "../data/site";

export default function Services() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Clear services. Honest quotes."
        intro="Four things we do well. Every project is quoted on its scope after a free consultation, so you only pay for what you need."
      />

      <section className="wrap flex flex-col gap-8 pb-16 lg:pb-[120px]">
        {services.map((s, i) => (
          <article
            key={s.slug}
            className={`flex flex-col gap-10 rounded-[28px] border border-line p-6 md:p-10 lg:flex-row lg:items-center lg:gap-16 lg:p-12 ${i % 2 ? "bg-cream" : "bg-paper"}`}
          >
            <div className="flex min-w-0 flex-1 flex-col gap-5">
              <span className="flex size-14 items-center justify-center rounded-[14px] bg-sand text-ink">
                <Icon name={s.icon} size={24} />
              </span>
              <h2 className="t-h2 text-ink">{s.name}</h2>
              <p className="t-body-l text-muted">{s.listDesc}</p>
              <ul className="flex flex-col gap-3">
                {s.listIncludes.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
              <p className="t-h3 text-ink">{s.listPrice}</p>
              <div className="flex flex-wrap gap-3">
                <Button icon="arrow" to={`/services/${s.slug}`}>View service</Button>
                <Button variant="secondary" icon="whatsapp" href={whatsappLink(`Hi Goju Design, I have a question about ${s.name}.`)}>
                  Ask on WhatsApp
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 lg:w-[460px] lg:shrink-0">
              <Picture image={s.listImage} className="aspect-[460/360] w-full" imgClassName={s.slug === "ai-automation" ? "object-contain bg-night" : ""} />
              <p className="t-small text-muted">{s.seenIn}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-night">
        <div className="wrap section flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col gap-4">
            <Label dark>Popular packages</Label>
            <h2 className="t-h1 max-w-[800px] text-cream">Popular starting points.</h2>
            <p className="t-body-l max-w-[640px] text-sand">
              Pick the closest fit and message us. We will shape it around your project and send a quote.
            </p>
          </div>
          <div className="flex flex-col">
            {servicePackages.map(([name, desc]) => (
              <a
                key={name}
                href={whatsappLink(`Hi Goju Design, I'd like a quote for ${name}.`)}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-b border-cream py-6 lg:flex lg:gap-8 lg:py-[26px]"
              >
                <span className="t-h4 text-cream lg:w-[380px] lg:shrink-0">{name}</span>
                <span className="col-start-1 t-body text-sand lg:flex-1">{desc}</span>
                <span className="col-start-1 t-h4 text-gold lg:whitespace-nowrap">Custom quote</span>
                <span className="col-start-2 row-span-3 row-start-1 inline-flex items-center gap-2 t-button whitespace-nowrap text-cream group-hover:text-gold">
                  Get a quote <Icon name="arrow-up-right" size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section flex flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <Label>Questions</Label>
            <h2 className="t-h1 text-ink">Before you ask.</h2>
          </div>
          <ArrowLink to="/faq">All questions</ArrowLink>
        </div>
        <FaqList items={servicesTeaser} firstOpen={false} />
      </section>
    </>
  );
}
