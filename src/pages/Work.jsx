import { useState } from "react";
import { ArrowLink, Label, Picture, Placeholder, Status } from "../components/ui";
import { CaseCard, PageHeader } from "../components/sections";
import { useModals } from "../components/modals/ModalContext";
import { caseStudies } from "../data/work";

const filters = [
  ["all", "All"],
  ["websites", "Websites"],
  ["social", "Social media & content"],
  ["brand", "Brand & design"],
  ["products", "Products"],
];

export default function Work() {
  const { openWaitlist } = useModals();
  const [filter, setFilter] = useState("all");
  const clients = filter === "all" ? caseStudies : caseStudies.filter((c) => c.filters.includes(filter));
  const showProducts = ["all", "brand", "products"].includes(filter);

  return (
    <>
      <PageHeader
        label="Work"
        title="Work we have designed, built and run."
        intro="Client projects first, then the products and originals we build for ourselves."
      >
        <div className="-mx-5 flex gap-[10px] overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0" role="group" aria-label="Filter work">
          {filters.map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={filter === id}
              className={`shrink-0 rounded-full px-5 py-[10px] t-button transition-colors ${
                filter === id ? "bg-ink text-cream" : "border border-line text-ink hover:border-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </PageHeader>

      {clients.length > 0 && (
        <section className="wrap pb-16 lg:pb-[120px]">
          <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:gap-y-[72px]">
            {clients.map((c) => (
              <CaseCard key={c.slug} study={c} />
            ))}
          </div>
        </section>
      )}

      {showProducts && (
        <section className="bg-paper">
          <div className="wrap section flex flex-col gap-10 lg:gap-16">
            <div className="flex flex-col gap-4">
              <Label>Products and originals</Label>
              <h2 className="t-h1 max-w-[800px] text-ink">Built by us, for us.</h2>
            </div>
            <div className="grid gap-12 md:grid-cols-2 md:gap-8">
              <div className="flex flex-col gap-4">
                <Placeholder label="Mundayne home screen" className="h-[300px] w-full" />
                <Status className="self-start">Coming soon</Status>
                <h3 className="t-h3 text-ink">Mundayne</h3>
                <Label muted>Mobile app</Label>
                <p className="t-body text-muted">A simple habit tracker with a daily journal. Check off habits, track progress, reflect.</p>
                <ArrowLink onClick={() => openWaitlist()}>Join the waitlist</ArrowLink>
              </div>
              <div className="flex flex-col gap-4">
                <Picture image={{ key: "jzKey", label: "Jonzee World, key visual" }} className="h-[300px] w-full" />
                <Status className="self-start">Ongoing</Status>
                <h3 className="t-h3 text-ink">Jonzee World</h3>
                <Label muted>Original universe</Label>
                <p className="t-body text-muted">A Nigerian collectible universe of characters, fashion and stories.</p>
                <ArrowLink to="/jonzee-world">Enter Jonzee World</ArrowLink>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
