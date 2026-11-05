import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import { Breadcrumb, Label, Picture, Status } from "../components/ui";
import Lightbox from "../components/modals/Lightbox";
import { getCaseStudy } from "../data/work";
import NotFound from "./NotFound";

export default function CaseStudy() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);
  const [lightbox, setLightbox] = useState(null);
  if (!study) return <NotFound />;
  const next = getCaseStudy(study.next);
  const g = study.gallery;

  return (
    <>
      <section className="wrap flex flex-col gap-8 pb-12 pt-8 lg:pb-16 lg:pt-12">
        <Breadcrumb items={[["Home", "/"], ["Work", "/work"], [study.name]]} />
        <div className="flex flex-wrap items-center gap-3">
          <Status>{study.status}</Status>
          <Label>{study.category}</Label>
        </div>
        <h1 className="t-display text-ink">{study.name}</h1>
        <p className="t-body-l max-w-[760px] text-muted">{study.intro}</p>
        <dl className="grid grid-cols-2 border-y border-line md:grid-cols-3 lg:grid-cols-5">
          {study.meta.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-2 py-6 pr-6">
              <dt className="t-label text-muted">{k}</dt>
              <dd className="t-body break-words text-ink">
                {Array.isArray(v)
                  ? v.map(([label, href], i) => (
                      <span key={href}>
                        {i > 0 && " · "}
                        <a href={href} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:text-gold-deep hover:decoration-gold-deep">
                          {label}
                        </a>
                      </span>
                    ))
                  : v}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="wrap pb-16 lg:pb-24">
        <Picture image={study.heroImage} className="aspect-[1200/640] w-full" eager />
      </section>

      <section className="bg-paper">
        <div className="wrap section flex flex-col gap-6 lg:flex-row lg:gap-20">
          <div className="flex shrink-0 flex-col gap-3 lg:w-[340px]">
            <Label>The brief</Label>
            <h2 className="t-h2 text-ink">What they needed.</h2>
          </div>
          <p className="t-h3 font-medium text-ink">{study.brief}</p>
        </div>
      </section>

      <section className="wrap section flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-3">
          <Label>What we did</Label>
          <h2 className="t-h1 text-ink">Our part.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {study.did.map(([title, body]) => (
            <div key={title} className="flex flex-col gap-[14px] rounded-[24px] border border-line bg-paper p-7 lg:p-9">
              <span className="flex size-11 items-center justify-center rounded-[12px] bg-sand text-gold-deep">
                <Icon name="check" size={18} />
              </span>
              <h3 className="t-h3 text-ink">{title}</h3>
              <p className="t-body text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap flex flex-col gap-6 pb-16 lg:pb-[120px]">
        <div className="grid gap-6 md:grid-cols-2">
          <Picture image={g[0]} onClick={() => setLightbox(0)} className="aspect-[588/440] w-full" />
          <Picture image={g[1]} onClick={() => setLightbox(1)} className="aspect-[588/440] w-full" />
        </div>
        <div className="grid gap-6 md:grid-cols-[1fr_396px]">
          <Picture image={g[2]} onClick={() => setLightbox(2)} className="aspect-[780/520] w-full md:aspect-auto md:h-[520px]" />
          <Picture image={g[3]} onClick={() => setLightbox(3)} className="aspect-[396/520] w-full md:aspect-auto md:h-[520px]" />
        </div>
        <p className="t-small text-muted">Click any image to open it full screen</p>
      </section>

      <section className="bg-night">
        <div className="wrap section flex flex-col gap-10 lg:gap-14">
          <div className="flex flex-col gap-3">
            <Label dark>Results</Label>
            <h2 className="t-h1 text-cream">What changed.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {study.results.map(([n, label]) => (
              <div key={label} className="flex flex-col gap-2 border-t-2 border-gold pt-8">
                <p className="t-h1 text-cream">{n}</p>
                <p className="t-body-l text-sand">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section flex flex-col items-center gap-7 text-center lg:px-[240px]">
        <blockquote className="t-h2 text-ink">{study.quote}</blockquote>
        <p className="t-body text-muted">{study.quoteBy}</p>
      </section>

      <Link to={`/work/${next.slug}`} className="group block bg-paper">
        <div className="wrap flex items-center justify-between gap-6 py-12 lg:py-16">
          <div className="flex flex-col gap-2">
            <Label muted>Next case study</Label>
            <p className="t-h1 text-ink">{next.name}</p>
          </div>
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:translate-x-1 lg:size-20">
            <Icon name="arrow" size={26} />
          </span>
        </div>
      </Link>

      {lightbox !== null && <Lightbox title={study.name} images={g} start={lightbox} onClose={() => setLightbox(null)} />}
    </>
  );
}
