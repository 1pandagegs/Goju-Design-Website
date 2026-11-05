import { ArrowLink, Button, Chip, Label, Picture, Status } from "../components/ui";
import { PageHeader } from "../components/sections";
import { Phone, WaitlistInline } from "../components/product";
import { whatsappLink } from "../data/site";

export default function Products() {
  return (
    <>
      <PageHeader
        label="Products"
        title="Products we build for ourselves."
        intro="An original app in development and an original universe. They keep our craft sharp and prove we can ship our own ideas, not only yours."
      />

      <section className="wrap flex flex-col gap-10 pb-16 lg:gap-14 lg:pb-[120px]">
        <div className="flex flex-col gap-10 rounded-[28px] bg-paper p-6 md:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:p-12">
          <div className="flex max-w-[400px] flex-col gap-5">
            <Status className="self-start">Coming soon</Status>
            <h2 className="t-h1 text-ink">Mundayne</h2>
            <Label>Our first original app.</Label>
            <p className="t-body-l text-muted">
              A simple habit tracker with a daily journal built in. Plan your routine, check habits off, see your progress, and reflect on your day.
            </p>
            <div className="flex flex-wrap gap-2">
              <Chip>Coming to iOS</Chip>
              <Chip>Coming to Android</Chip>
            </div>
            <WaitlistInline />
            <ArrowLink to="/products/mundayne">See the app</ArrowLink>
          </div>
          <div className="flex items-center justify-center gap-4 lg:gap-5">
            <Phone screen="mundayneHome" className="h-[420px] w-[204px] sm:h-[580px] sm:w-[280px]" />
            <Phone screen="mundayneProgress" className="hidden h-[499px] w-[241px] sm:block" />
          </div>
        </div>

        <div className="flex flex-col gap-10 rounded-[28px] bg-ink p-6 md:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:p-12">
          <div className="flex max-w-[460px] flex-col gap-5">
            <Label dark>Original universe</Label>
            <h2 className="t-h1 text-cream lg:whitespace-nowrap">Jonzee World</h2>
            <p className="t-body-l text-sand">
              A Nigerian collectible universe of characters, fashion, places and stories, collected as physical trading cards. First series: Neon Street.
            </p>
            <div>
              <Button variant="gold" icon="arrow" to="/jonzee-world">Enter Jonzee World</Button>
            </div>
          </div>
          <Picture image={{ key: "jzLineup", label: "Jonzee World character lineup" }} className="aspect-[520/400] w-full lg:w-[520px] lg:shrink-0" />
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap section flex flex-col items-center gap-6 text-center">
          <h2 className="t-h1 text-ink">Want an app of your own?</h2>
          <p className="t-body-l max-w-[480px] text-muted">We design and build apps for clients the same way we build ours.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button icon="whatsapp" href={whatsappLink("Hi Goju Design, I'd like to talk about building an app.")}>Talk to us about your app</Button>
            <Button variant="secondary" icon="arrow" to="/services/brand-design">UI/UX design service</Button>
          </div>
        </div>
      </section>
    </>
  );
}
