import { useState } from "react";
import Icon from "./Icon";
import { Placeholder } from "./ui";
import { useModals } from "./modals/ModalContext";

// Phone frame around a screen placeholder, as in the Mundayne mockups.
export function Phone({ label, className = "" }) {
  return (
    <div className={`rounded-[36px] border-[8px] border-ink bg-ink ${className}`}>
      <Placeholder label={label} className="size-full !rounded-[28px]" />
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
