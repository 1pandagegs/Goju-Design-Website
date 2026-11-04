import { useEffect, useState } from "react";
import { FaqList, PageHeader } from "../components/sections";
import { faqGroups } from "../data/faq";

export default function FAQ() {
  const [active, setActive] = useState(faqGroups[0].id);

  // Highlight the sidebar entry for the group currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    faqGroups.forEach((g) => {
      const el = document.getElementById(g.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHeader label="FAQ" title="Questions, answered." intro="If yours is not here, ask us on WhatsApp." />
      <section className="wrap flex gap-20 pb-16 lg:pb-[120px]">
        <nav className="sticky top-[120px] hidden w-[280px] shrink-0 flex-col gap-[6px] self-start lg:flex" aria-label="FAQ sections">
          {faqGroups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className={`rounded-[12px] px-4 py-3 t-button transition-colors ${active === g.id ? "bg-paper text-ink" : "text-muted hover:text-ink"}`}
            >
              {g.title}
            </a>
          ))}
        </nav>
        <div className="flex min-w-0 flex-1 flex-col gap-16">
          {faqGroups.map((g, i) => (
            <div key={g.id} id={g.id} className="flex scroll-mt-28 flex-col gap-2">
              <h2 className="t-h3 text-ink">{g.title}</h2>
              <FaqList items={g.items} firstOpen={i === 0} divided />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
