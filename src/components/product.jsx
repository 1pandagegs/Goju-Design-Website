import { useState } from "react";
import Icon from "./Icon";
import { img } from "../data/images";
import { useModals } from "./modals/ModalContext";

const screenLabels = {
  mundayneHome: "Mundayne home screen",
  mundayneProgress: "Mundayne progress screen",
  mundayneJournal: "Mundayne journal screen",
  mundayneSettings: "Mundayne settings screen",
};

// Phone frame around a Mundayne app screenshot.
export function Phone({ screen, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-[36px] border-[8px] border-ink bg-ink shadow-float ${className}`}>
      <img src={img(screen)} alt={screenLabels[screen]} loading="lazy" className="size-full rounded-[28px] object-cover object-top" />
    </div>
  );
}

// Wide panel with one or more phone screens rising from the bottom edge.
export function ScreensPanel({ screens, dark, className = "" }) {
  return (
    <div className={`relative flex items-start justify-center gap-4 overflow-hidden rounded-[20px] px-6 pt-8 ${dark ? "bg-ink" : "bg-sand"} ${className}`}>
      {screens.map((s, i) => (
        <div
          key={s}
          className={`w-[46%] max-w-[200px] shrink-0 overflow-hidden rounded-t-[26px] border-[6px] border-b-0 border-night bg-night ${i % 2 ? "translate-y-6" : ""}`}
        >
          <img src={img(s)} alt={screenLabels[s]} loading="lazy" className="block w-full rounded-t-[20px]" />
        </div>
      ))}
    </div>
  );
}

// Inline "Email or WhatsApp" field with the "Join the waitlist" button inside it.
// Submitting opens the waitlist modal with the contact filled in, so people can pick their phone.
export function WaitlistInline({ className = "" }) {
  const { openWaitlist } = useModals();
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        openWaitlist(value);
      }}
      className={`flex items-center gap-2 rounded-full border border-line bg-cream p-[6px] pl-5 ${className}`}
    >
      <label htmlFor="waitlist-inline" className="sr-only">Email or WhatsApp</label>
      <input
        id="waitlist-inline"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Email or WhatsApp"
        className="min-w-0 flex-1 bg-transparent t-small text-ink outline-none placeholder:text-muted"
      />
      <button type="submit" className="inline-flex shrink-0 items-center gap-[10px] rounded-full bg-ink px-5 py-[14px] t-button text-cream hover:bg-night">
        Join the waitlist <Icon name="arrow" size={16} />
      </button>
    </form>
  );
}
