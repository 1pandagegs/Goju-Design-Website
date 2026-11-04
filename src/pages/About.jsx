import Icon from "../components/Icon";
import { Button, Label, Picture } from "../components/ui";
import { PageHeader } from "../components/sections";

const beliefs = [
  ["We show real work", "Every project on this site is real and named. No stock mockups."],
  ["Clear, written quotes", "Every project gets a clear, written quote before any work starts."],
  ["One team, start to finish", "The people who design your project are the people who build it."],
  ["We stay on", "Most of our client work is ongoing. We do not hand over and disappear."],
];

const team = [
  {
    key: "ayo",
    name: "Ayo Gegeoju",
    role: "Creative Designer & Team Lead",
    bio: "Leads the team and sets the creative direction on every project, from brand and web design to content and our own products.",
    linkedin: "https://www.linkedin.com/company/gojudesign/",
  },
  {
    key: "david",
    name: "David Abraham",
    role: "Front-End Developer",
    bio: "Turns approved designs into clean, fast, working code, and keeps sites running smoothly after launch.",
    linkedin: "https://www.linkedin.com/company/gojudesign/",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        label="About"
        title="A studio built on doing the work properly."
        intro="Goju Design Solutions Ltd is a design and development studio in Abuja. We started because too many good businesses were let down by clunky websites and inconsistent branding. We fix that, and then we keep it working."
      />

      <section className="bg-paper">
        <div className="wrap section flex flex-col gap-10 lg:gap-14">
          <div className="flex flex-col gap-4">
            <Label>How we work</Label>
            <h2 className="t-h1 max-w-[720px] text-ink">Four things we hold ourselves to.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {beliefs.map(([title, body]) => (
              <div key={title} className="flex flex-col gap-[14px] rounded-[20px] border border-line bg-cream p-7 lg:p-8">
                <span className="flex size-10 items-center justify-center rounded-[10px] bg-sand text-gold-deep">
                  <Icon name="check" size={16} />
                </span>
                <h3 className="t-h3 text-ink">{title}</h3>
                <p className="t-body text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-4">
          <Label>Team</Label>
          <h2 className="t-h1 max-w-[720px] text-ink">The people behind the work.</h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2 md:gap-8">
          {team.map((p) => (
            <div key={p.name} className="flex flex-col gap-3">
              <Picture image={{ key: p.key, label: `${p.name}, portrait` }} className="aspect-[584/440] w-full bg-cream" imgClassName="object-contain object-bottom" />
              <h3 className="t-h3 mt-2 text-ink">{p.name}</h3>
              <Label>{p.role}</Label>
              <p className="t-body text-muted">{p.bio}</p>
              <a href={p.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 t-small text-muted hover:text-ink">
                <Icon name="linkedin" size={16} /> LinkedIn
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-night">
        <div className="wrap section flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-[720px] flex-col gap-4">
            <Label dark>Beyond client work</Label>
            <h2 className="t-h1 text-cream">We also build our own.</h2>
            <p className="t-body-l text-sand">An original habit app in development and Jonzee World, an original collectible universe.</p>
          </div>
          <div>
            <Button variant="gold" icon="arrow" to="/products">See our products</Button>
          </div>
        </div>
      </section>
    </>
  );
}
