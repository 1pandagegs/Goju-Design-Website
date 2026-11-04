import { Link } from "react-router-dom";
import { Label } from "../components/ui";
import { legal } from "../data/legal";

const others = {
  privacy: [["Terms of service", "/terms-of-service"], ["Cookie policy", "/cookie-policy"]],
  terms: [["Privacy policy", "/privacy-policy"], ["Cookie policy", "/cookie-policy"]],
  cookies: [["Privacy policy", "/privacy-policy"], ["Terms of service", "/terms-of-service"]],
};

const anchor = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Legal({ doc }) {
  const page = legal[doc];
  return (
    <>
      <section className="wrap flex flex-col gap-4 pb-10 pt-16 lg:pb-12 lg:pt-24">
        <Label>Legal</Label>
        <h1 className="t-h1 text-ink">{page.title}</h1>
        <p className="t-small text-muted">{page.updated}</p>
      </section>
      <section className="wrap flex flex-col gap-10 pb-16 lg:flex-row lg:gap-20 lg:pb-[120px]">
        <aside className="flex flex-col gap-3 self-start rounded-[20px] border border-line bg-paper p-6 lg:sticky lg:top-[120px] lg:w-[300px] lg:shrink-0">
          <p className="t-label text-muted">On this page</p>
          <nav className="flex flex-col gap-2" aria-label="On this page">
            {page.sections.map((s) => (
              <a key={s.title} href={`#${anchor(s.title)}`} className="t-small text-ink hover:text-gold-deep">
                {s.title}
              </a>
            ))}
          </nav>
          <div className="mt-2 flex flex-col gap-1 border-t border-line pt-4">
            {others[doc].map(([label, to]) => (
              <Link key={to} to={to} className="t-small font-semibold text-gold-deep hover:underline">
                {label}
              </Link>
            ))}
          </div>
        </aside>
        <div className="flex max-w-[820px] flex-1 flex-col gap-10">
          {page.sections.map((s, i) => (
            <article key={s.title} id={anchor(s.title)} className="flex scroll-mt-28 flex-col gap-4">
              <h2 className="t-h4 text-ink">
                {i + 1}. {s.title}
              </h2>
              {s.body.split("\n\n").map((para) => (
                <p key={para.slice(0, 24)} className="t-body text-muted">{para}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
