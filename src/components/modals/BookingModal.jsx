import { useMemo, useState } from "react";
import Modal, { CloseButton } from "./Modal";
import Icon from "../Icon";
import { Button } from "../ui";
import { Field } from "../forms";
import { isEmail, sendToStudio } from "../../lib/forms";

const SLOTS = ["9:00 am", "10:00 am", "11:30 am", "1:00 pm", "2:30 pm", "4:00 pm"];
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

const sameDay = (a, b) => a && b && a.toDateString() === b.toDateString();
const longDate = (d) => d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });

// Weekdays from tomorrow onwards can be booked.
function isBookable(d) {
  const tomorrow = new Date();
  tomorrow.setHours(0, 0, 0, 0);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const day = d.getDay();
  return d >= tomorrow && day !== 0 && day !== 6;
}

function toIcsStamp(date, slot) {
  const [time, mer] = slot.split(" ");
  let [h, m] = time.split(":").map(Number);
  if (mer === "pm" && h !== 12) h += 12;
  // WAT is UTC+1.
  const start = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), h - 1, m));
  const end = new Date(start.getTime() + 30 * 60000);
  const fmt = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  return [fmt(start), fmt(end)];
}

function downloadIcs(date, slot) {
  const [start, end] = toIcsStamp(date, slot);
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Goju Design//Consultation//EN",
    "BEGIN:VEVENT",
    `UID:${start}@gojudesign.com`,
    `DTSTAMP:${start}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    "SUMMARY:Free consultation with Goju Design",
    "DESCRIPTION:30-minute video call with Goju Design. The video link will be sent to your email.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  const a = Object.assign(document.createElement("a"), { href: url, download: "goju-design-consultation.ics" });
  a.click();
  URL.revokeObjectURL(url);
}

// Modal / Book a free consultation and Modal / Consultation booked.
export default function BookingModal({ onClose }) {
  const first = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    while (!isBookable(d)) d.setDate(d.getDate() + 1);
    return d;
  }, []);
  const [month, setMonth] = useState(new Date(first.getFullYear(), first.getMonth(), 1));
  const [date, setDate] = useState(first);
  const [slot, setSlot] = useState(SLOTS[2]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [booked, setBooked] = useState(false);

  const cells = useMemo(() => {
    const lead = (month.getDay() + 6) % 7;
    const count = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    return [...Array(lead).fill(null), ...Array.from({ length: count }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1))];
  }, [month]);

  const thisMonth = new Date();
  thisMonth.setDate(1);
  thisMonth.setHours(0, 0, 0, 0);
  const canGoBack = month > thisMonth;

  const confirm = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!name.trim()) errs.name = "Please add your name.";
    if (!isEmail(email)) errs.email = "Please add a valid email so we can send the invite.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true);
    setFailed(false);
    try {
      await sendToStudio({
        name,
        email,
        type: "booking",
        service: "Free consultation booking",
        when: `${longDate(date)} at ${slot} WAT`,
      });
      setBooked(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  if (booked) {
    return (
      <Modal onClose={onClose} label="Consultation booked" width="max-w-[560px]">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-gold text-night">
            <Icon name="calendar" size={26} />
          </span>
          <h2 className="t-h2 text-ink">You are booked in.</h2>
          <div className="w-full rounded-[16px] bg-paper px-6 py-4">
            <p className="t-h4 text-ink">{longDate(date)} · {slot} WAT</p>
            <p className="t-small text-muted">30-minute video call with Goju Design</p>
          </div>
          <p className="t-body text-muted">A calendar invite and video link are on their way to your email.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button onClick={() => downloadIcs(date, slot)}>Add to calendar</Button>
            <Button variant="secondary" onClick={onClose}>Done</Button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal onClose={onClose} label="Book a free consultation" width="max-w-[880px]">
      <form onSubmit={confirm} noValidate className="flex flex-col gap-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="t-h2 text-ink">Book a free consultation</h2>
            <p className="t-body text-muted">30 minutes on video. We will talk through your project and what it would take.</p>
          </div>
          <CloseButton onClick={onClose} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[20px] border border-line p-5">
            <div className="mb-4 flex items-center justify-between">
              <button type="button" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))} disabled={!canGoBack} className="flex size-8 items-center justify-center rounded-full text-ink disabled:opacity-30" aria-label="Previous month">
                <Icon name="chevron-left" size={18} />
              </button>
              <p className="t-h4 text-ink">{month.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</p>
              <button type="button" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))} className="flex size-8 items-center justify-center rounded-full text-ink" aria-label="Next month">
                <Icon name="chevron-right" size={18} />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-y-2 text-center">
              {DAYS.map((d, i) => (
                <span key={i} className="t-small text-[13px] text-muted">{d}</span>
              ))}
              {cells.map((d, i) =>
                d ? (
                  <button
                    key={i}
                    type="button"
                    disabled={!isBookable(d)}
                    onClick={() => setDate(d)}
                    aria-pressed={sameDay(d, date)}
                    className={`mx-auto flex size-10 items-center justify-center rounded-full t-small transition-colors ${
                      sameDay(d, date)
                        ? "bg-ink text-cream"
                        : isBookable(d)
                          ? "border border-line text-ink hover:border-ink"
                          : "text-muted/50"
                    }`}
                  >
                    {d.getDate()}
                  </button>
                ) : (
                  <span key={i} />
                ),
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="t-h4 text-ink">{longDate(date)}</p>
              <p className="t-small text-[13px] text-muted">Times shown in West Africa Time (WAT)</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {SLOTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSlot(s)}
                  aria-pressed={slot === s}
                  className={`rounded-[12px] py-3 t-small transition-colors ${slot === s ? "bg-ink text-cream" : "border border-line text-ink hover:border-ink"}`}
                >
                  {s}
                </button>
              ))}
            </div>
            <Field label="Your name*" placeholder="Full name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} error={errors.name} />
            <Field label="Email*" type="email" placeholder="you@company.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} error={errors.email} />
            {failed && <p className="t-small text-gold-deep" role="alert">We could not send your booking. Please try again or message us on WhatsApp.</p>}
            <Button type="submit" icon="arrow" full disabled={sending} className="disabled:opacity-60">
              {sending ? "Booking…" : `Confirm ${slot}`}
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
