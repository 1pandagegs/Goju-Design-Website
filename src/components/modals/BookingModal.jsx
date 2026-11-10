import { useEffect, useState } from "react";
import Modal, { CloseButton } from "./Modal";
import Icon from "../Icon";
import { Button } from "../ui";
import { CALENDLY_URL, whatsappLink } from "../../data/site";

// Calendly colours set to the brand: paper background, ink text, deep gold buttons.
const embedUrl = () => {
  const params = new URLSearchParams({
    embed_domain: window.location.hostname,
    embed_type: "Inline",
    background_color: "f1eee8",
    text_color: "2a2a2a",
    primary_color: "927845",
    hide_gdpr_banner: "1",
    hide_landing_page_details: "1",
  });
  return `${CALENDLY_URL}?${params}`;
};

// Calendly messages the parent page; only trust events from calendly.com.
const isCalendly = (e) => e.origin === "https://calendly.com" && typeof e.data?.event === "string" && e.data.event.startsWith("calendly.");

// Modal / Book a free consultation: Calendly's live availability, embedded and styled to the brand.
export default function BookingModal({ onClose }) {
  const [loaded, setLoaded] = useState(false);
  const [height, setHeight] = useState(660);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const onMessage = (e) => {
      if (!isCalendly(e)) return;
      if (e.data.event === "calendly.page_height") {
        const h = parseInt(e.data.payload?.height, 10);
        if (h) setHeight(Math.max(560, h));
      }
      if (e.data.event === "calendly.event_scheduled") setBooked(true);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <Modal onClose={onClose} label="Book a free consultation" width="max-w-[1000px]" className="!p-0 overflow-hidden">
      <div className="flex items-start justify-between gap-4 border-b border-line px-6 pb-5 pt-6 sm:px-10 sm:pt-8">
        <div className="flex flex-col gap-2">
          <h2 className="t-h2 text-ink">{booked ? "You are booked in." : "Book a free consultation"}</h2>
          <p className="t-body text-muted">
            {booked
              ? "A calendar invite and video link are on their way to your email."
              : "30 minutes on video. Pick a time that suits you, in your own time zone."}
          </p>
        </div>
        <CloseButton onClick={onClose} />
      </div>

      <div className="relative bg-paper">
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted">
            <span className="size-8 animate-spin rounded-full border-2 border-line border-t-gold-deep" />
            <p className="t-small">Loading available times…</p>
          </div>
        )}
        <iframe
          title="Book a free consultation with Goju Design"
          src={embedUrl()}
          onLoad={() => setLoaded(true)}
          className="block w-full border-0"
          style={{ height: `min(${height}px, calc(100dvh - 300px))` }}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-6 py-4 sm:px-10">
        <p className="t-small text-muted">Prefer to chat first? Message us on WhatsApp.</p>
        {booked ? (
          <Button variant="secondary" onClick={onClose}>Done</Button>
        ) : (
          <a href={whatsappLink("Hi Goju Design, I'd like to book a call.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 t-small font-semibold text-ink hover:text-gold-deep">
            <Icon name="whatsapp" size={16} /> WhatsApp us
          </a>
        )}
      </div>
    </Modal>
  );
}
