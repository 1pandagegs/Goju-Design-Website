import Icon from "../components/Icon";
import { Breadcrumb, Button, Label, Picture } from "../components/ui";
import { jonzeeInstagram } from "../data/site";

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
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="gold" icon="arrow" href="#neon-street" target="_self">Explore Neon Street</Button>
          <Button variant="onDark" href={jonzeeInstagram}>Follow @jonzeeworld</Button>
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
              <Button variant="onDark" icon="arrow" href={jonzeeInstagram}>Verify a card</Button>
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
