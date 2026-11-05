import { Breadcrumb, Button, Label, Status } from "../components/ui";
import { FaqSection } from "../components/sections";
import { Phone, ScreensPanel, WaitlistInline } from "../components/product";

const features = [
  ["mundayneHome", "A clear daily routine", "See the week at a glance and filter habits by health, productivity or faith."],
  ["mundayneProgress", "Progress you can see", "Today’s completion, remaining habits and your best streak, all on one screen."],
  ["mundayneJournal", "A journal for the day", "Log your mood and energy, and write a short reflection on how the day went."],
];

const faq = [
  ["When does Mundayne launch?", "We are finishing the Android version now. Join the waitlist and we will message you on launch day."],
  ["Will it be free?", "We will share pricing at launch. Join the waitlist to hear first."],
  ["Which phones will it work on?", "Android and iPhone."],
];

export default function Mundayne() {
  return (
    <>
      <section className="wrap flex flex-col gap-10 pb-16 pt-8 lg:flex-row lg:items-center lg:gap-16 lg:pb-24 lg:pt-12">
        <div className="flex flex-col gap-6 lg:w-[360px] lg:shrink-0">
          <Breadcrumb items={[["Home", "/"], ["Products", "/products"], ["Mundayne"]]} />
          <Status className="self-start">In development</Status>
          <h1 className="t-display text-ink lg:text-[72px]">Mundayne</h1>
          <p className="t-body-l text-muted">
            A simple habit tracker with a daily journal built in. Plan your routine, check habits off, see your progress, and reflect on your day.
          </p>
          <WaitlistInline />
          <p className="t-small text-[13px] text-muted">We will message you once, on launch day. No spam.</p>
        </div>
        <div className="flex flex-1 items-center justify-center gap-3 lg:gap-4">
          <Phone screen="mundayneJournal" className="hidden h-[493px] w-[238px] sm:block" />
          <Phone screen="mundayneHome" className="h-[460px] w-[222px] sm:h-[580px] sm:w-[280px]" />
          <Phone screen="mundayneProgress" className="hidden h-[493px] w-[238px] xl:block" />
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap section flex flex-col gap-10 lg:gap-14">
          <div className="flex flex-col gap-4">
            <Label>Features</Label>
            <h2 className="t-h1 text-ink">What it does.</h2>
            <p className="t-body-l text-muted">What you get from day one.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map(([shot, title, body]) => (
              <div key={title} className="flex flex-col gap-4 rounded-[20px] border border-line bg-cream p-5 lg:p-6">
                <ScreensPanel screens={[shot]} className="h-[220px] w-full" />
                <h3 className="t-h3 text-ink">{title}</h3>
                <p className="t-body text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night">
        <div className="wrap section flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-[820px] flex-col gap-4">
            <Label dark>Built by Goju</Label>
            <h2 className="t-h2 text-cream">Designed and developed in-house in Abuja.</h2>
            <p className="t-body-l text-sand">
              Every screen, line of code and launch decision is ours. It is the same team and process we use for client apps.
            </p>
          </div>
          <div>
            <Button variant="gold" icon="arrow" to="/services/brand-design">Our UI/UX service</Button>
          </div>
        </div>
      </section>

      <FaqSection title="Before launch." items={faq} />
    </>
  );
}
