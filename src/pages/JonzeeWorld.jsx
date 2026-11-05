import Icon from "../components/Icon";
import { Breadcrumb, Button, Label, Picture } from "../components/ui";
import { jonzeeSocials } from "../data/site";

const rarity = [
  ["Common", "Standard card", "#3fa34d", "jzCard01"],
  ["Rare", "Standard card", "#3b7ddd", "jzCard02"],
  ["Super Rare", "Standard card", "#8b4fd1", "jzCard01"],
  ["Ultra Rare", "Holographic", "#e0802b", "jzCard02"],
  ["Grail", "Holographic, one of one", "#d9433b", "jzCard01"],
];

const characters = [
  ["jzAdam", "Adam", "Adam · #001", "The original."],
  ["jz007", "The French bulldog", "#007", "Cropped plaid and baggy jorts."],
  ["jz010", "The bird", "#010", "Colour-block cord shirt and baggy jorts."],
  ["jz014", "Character #014", "#014", "Varsity tank and camo long jorts."],
];

// Round social button. Without an href it renders as a static "coming soon" icon.
function SocialIcon({ icon, label, href }) {
  const cls = "flex size-11 items-center justify-center rounded-full border border-cream text-cream";
  if (!href)
    return (
      <span aria-label={label} title={label} className={`${cls} relative cursor-default opacity-50`}>
        <Icon name={icon} size={18} />
      </span>
    );
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={`${cls} transition-colors hover:bg-cream hover:text-night`}>
      <Icon name={icon} size={18} />
    </a>
  );
}

export default function JonzeeWorld() {
  return (
    <div className="bg-night">
      <section className="wrap flex flex-col gap-6 pb-16 pt-8 lg:pb-24 lg:pt-12">
        <Breadcrumb dark items={[["Home", "/"], ["Jonzee World"]]} />
        <Label dark>An original universe by Goju</Label>
        <h1 className="t-display text-cream">Jonzee World</h1>
        <p className="t-body-l max-w-[680px] text-sand">
          A Nigerian collectible universe where contemporary art meets fashion and Gen Z culture. Characters, places and stories, collected as physical trading cards.
        </p>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <Button variant="gold" icon="arrow" href="#neon-street" target="_self">Explore Neon Street</Button>
          <div className="flex items-center gap-3">
            <span className="t-small text-sand">Follow @jonzee_world</span>
            <SocialIcon icon="tiktok" label="TikTok" href={jonzeeSocials.tiktok} />
            <SocialIcon icon="instagram" label="Instagram" href={jonzeeSocials.instagram} />
            <SocialIcon icon="youtube" label="YouTube, coming soon" />
          </div>
        </div>
        <Picture image={{ key: "jzCrew", label: "Jonzee World crew: Adam and friends" }} className="mt-4 aspect-[2/1] w-full" eager />
      </section>

      <section id="neon-street" className="scroll-mt-24 bg-ink">
        <div className="wrap section flex flex-col gap-10 md:flex-row md:items-center lg:gap-16">
          <Picture image={{ key: "jzNeon", label: "Neon Street series background" }} className="aspect-[4/3] w-full md:w-1/2 lg:w-[560px] lg:shrink-0" />
          <div className="flex flex-col gap-4">
            <Label dark>Series 01</Label>
            <h2 className="t-h1 text-cream">Neon Street</h2>
            <p className="t-body-l max-w-[520px] text-sand">
              The first series. Every card in it shares the neon street world, with its own illustration, variant and rarity.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap section flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-4">
          <Label dark>Rarity</Label>
          <h2 className="t-h1 max-w-[820px] text-cream">Five levels. Some cards are one of one.</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {rarity.map(([name, desc, color, image]) => (
            <div key={name} className="flex flex-col gap-4 rounded-[20px] border-2 bg-ink p-4 lg:p-6" style={{ borderColor: color }}>
              <Picture image={{ key: image, label: `${name} card` }} className="aspect-[172/260] w-full" />
              <div className="flex flex-col gap-1">
                <p className="t-h4 text-cream">{name}</p>
                <p className="t-small text-sand">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink">
        <div className="wrap section flex flex-col gap-10 md:flex-row md:items-center md:justify-between lg:gap-16">
          <div className="flex max-w-[560px] flex-col gap-5">
            <span className="flex size-12 items-center justify-center rounded-[12px] bg-gold text-night">
              <Icon name="shield" size={26} />
            </span>
            <h2 className="t-h1 text-cream">Every card is verifiable.</h2>
            <p className="t-body-l text-sand">Scan the QR code on any card to open its own page and check that it is genuine.</p>
            <div>
              {/* The verification site is not live yet, so this stays a static button. */}
              <span
                aria-disabled="true"
                title="Card verification is coming soon"
                className="inline-flex cursor-default items-center gap-[10px] rounded-full border-[1.5px] border-cream/50 px-[26px] py-[16px] t-button text-cream/70"
              >
                Verify a card
                <span className="rounded-full bg-cream/10 px-2 py-[2px] text-[11px] uppercase tracking-[0.12em] text-sand">Soon</span>
              </span>
            </div>
          </div>
          <Picture image={{ key: "jzVerify", label: "Card verification page on a phone" }} className="aspect-[480/420] w-full md:w-[420px] lg:w-[480px] lg:shrink-0" />
        </div>
      </section>

      <section className="wrap section flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-4">
          <Label dark>Characters</Label>
          <h2 className="t-h1 max-w-[820px] text-cream">One character. Endless fits.</h2>
          <p className="t-body-l max-w-[620px] text-sand">
            Adam is the original. Every card gives him a new outfit, era or city, and his companions come along for the ride.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-6">
          {characters.map(([key, alt, title, body]) => (
            <div key={key} className="flex flex-col gap-3">
              <Picture image={{ key, label: alt }} className="aspect-[282/340] w-full bg-cream" />
              <p className="t-h4 text-cream">{title}</p>
              <p className="t-small text-sand">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
