import { useParams } from "react-router-dom";
import Icon from "../components/Icon";
import { Breadcrumb, Button, CheckItem, Label, Picture } from "../components/ui";
import { CaseCard, FaqSection } from "../components/sections";
import { useModals } from "../components/modals/ModalContext";
import { getService } from "../data/services";
import { getCaseStudy } from "../data/work";
import { whatsappLink } from "../data/site";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const { openBooking } = useModals();
  const s = getService(slug);
  if (!s) return <NotFound />;

  return (
    <>
      <section className="wrap flex flex-col gap-10 pb-16 pt-8 lg:pb-24 lg:pt-12">
        <Breadcrumb items={[["Home", "/"], ["Services", "/services"], [s.name]]} />
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <span className="flex size-14 items-center justify-center rounded-[14px] bg-sand text-ink">
              <Icon name={s.icon} size={24} />
            </span>
            <h1 className="t-h1 text-ink">{s.name}</h1>
            <p className="t-body-l text-muted">{s.heroDesc}</p>
            <div className="flex flex-col gap-1">
              <Label muted>Pricing</Label>
              <p className="t-h2 text-ink">Custom quote</p>
            </div>
            <div className="flex flex-wrap gap-x-[14px] gap-y-3">
              <Button icon="whatsapp" href={whatsappLink(`Hi Goju Design, I'd like to start a ${s.name} project.`)}>Start on WhatsApp</Button>
              <Button variant="secondary" icon="arrow" onClick={openBooking}>Book a free call</Button>
            </div>
          </div>
          <Picture
            image={s.heroImage}
            className="aspect-[560/460] w-full lg:w-[560px] lg:shrink-0"
            imgClassName={s.slug === "ai-automation" ? "object-contain bg-night" : ""}
            eager
          />
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap section flex flex-col gap-10 lg:gap-14">
          <div className="flex flex-col gap-4">
            <Label>What's included</Label>
            <h2 className="t-h1 max-w-[820px] text-ink">Everything you need, nothing you don’t.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.included.map(([title, body]) => (
              <div key={title} className="flex flex-col gap-3 rounded-[20px] border border-line bg-cream p-8">
                <div className="flex items-center gap-[10px]">
                  <Icon name="check" size={18} className="shrink-0 text-gold-deep" />
                  <h3 className="t-h4 text-ink">{title}</h3>
                </div>
                <p className="t-body text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-4">
          <Label>Packages</Label>
          <h2 className="t-h1 max-w-[820px] text-ink">Pick a starting point.</h2>
          <p className="t-body-l max-w-[640px] text-muted">Every package is shaped around your project and quoted after a free consultation.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {s.packages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col gap-5 rounded-[24px] p-8 lg:p-9 ${p.featured ? "bg-night" : "border border-line bg-paper"}`}
            >
              {p.featured && <span className="self-start rounded-full bg-gold px-3 py-[6px] t-label text-night">Most requested</span>}
              <h3 className={`t-h3 ${p.featured ? "text-cream" : "text-ink"}`}>{p.name}</h3>
              <p className={`t-h2 ${p.featured ? "text-gold" : "text-ink"}`}>Custom quote</p>
              <ul className="flex flex-col gap-3">
                {p.items.map((item) => (
                  <CheckItem key={item} dark={p.featured} iconClass={p.featured ? "text-gold" : "text-gold-deep"}>{item}</CheckItem>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <Button
                  variant={p.featured ? "gold" : "secondary"}
                  icon="whatsapp"
                  full
                  href={whatsappLink(`Hi Goju Design, I'd like a quote for ${p.name}.`)}
                >
                  Get a quote on WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {s.related && (
        <section className="bg-paper">
          <div className="wrap section flex flex-col gap-10 lg:gap-14">
            <div className="flex flex-col gap-4">
              <Label>Related work</Label>
              <h2 className="t-h1 text-ink">See it in practice.</h2>
            </div>
            <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
              {s.related.map((r) => (
                <CaseCard key={r} study={getCaseStudy(r)} />
              ))}
            </div>
          </div>
        </section>
      )}

      {s.proof && (
        <section className="bg-night">
          <div className="wrap section flex flex-col gap-4">
            <Label dark>{s.proof.label}</Label>
            <h2 className="t-h1 max-w-[820px] text-cream">{s.proof.title}</h2>
            <p className="t-body-l max-w-[640px] text-sand">{s.proof.body}</p>
          </div>
        </section>
      )}

      <FaqSection title="About this service." items={s.faq} />
    </>
  );
}
