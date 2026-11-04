import { Button, Label } from "../components/ui";
import { whatsappLink } from "../data/site";

export default function NotFound() {
  return (
    <section className="wrap flex flex-col items-center gap-6 py-24 text-center lg:py-40">
      <Label>404</Label>
      <h1 className="t-h1 max-w-[820px] text-ink">This page has moved, or never existed.</h1>
      <p className="t-body-l text-muted">Try one of these instead.</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button icon="arrow" to="/">Go to home</Button>
        <Button variant="secondary" icon="arrow" to="/work">See our work</Button>
        <Button variant="secondary" icon="whatsapp" href={whatsappLink()}>Ask on WhatsApp</Button>
      </div>
    </section>
  );
}
