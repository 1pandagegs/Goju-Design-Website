import { useState } from "react";
import Modal, { CloseButton } from "./Modal";
import { Button, Label } from "../ui";
import { Phone } from "../product";
import { Field, Choice } from "../forms";
import { sendToStudio } from "../../lib/forms";

// Modal / Join the waitlist (Mundayne).
export default function WaitlistModal({ initialContact = "", onClose, onJoined }) {
  const [contact, setContact] = useState(initialContact);
  const [platform, setPlatform] = useState("iPhone");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (contact.trim().length < 5) return setError("Please add an email or WhatsApp number.");
    setError("");
    setSending(true);
    try {
      const isMail = contact.includes("@");
      await sendToStudio({
        type: "waitlist",
        name: "Mundayne waitlist",
        email: isMail ? contact : "",
        phone: isMail ? "" : contact,
        service: "Mundayne waitlist",
        platform,
        details: `Join the Mundayne waitlist. Platform: ${platform}.`,
      });
      onJoined();
    } catch {
      setError("We could not add you just now. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Modal onClose={onClose} label="Join the Mundayne waitlist">
      <div className="flex gap-8">
        <form onSubmit={submit} noValidate className="flex flex-1 flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-[10px]">
              <Label>Coming soon</Label>
              <h2 className="t-h2 text-ink">Be first to try Mundayne.</h2>
              <p className="t-body text-muted">We will message you once, on launch day. No spam.</p>
            </div>
            <CloseButton onClick={onClose} className="sm:hidden" />
          </div>
          <Field label="Email or WhatsApp number" placeholder="you@email.com or +234" value={contact} onChange={(e) => setContact(e.target.value)} error={error} />
          <Choice label="I use:" options={["iPhone", "Android"]} value={platform} onChange={setPlatform} />
          <Button type="submit" icon="arrow" full disabled={sending} className="disabled:opacity-60">
            {sending ? "Joining…" : "Join the waitlist"}
          </Button>
        </form>
        <div className="relative hidden w-[204px] shrink-0 sm:block">
          <CloseButton onClick={onClose} className="absolute -right-2 -top-2 z-10 bg-cream" />
          <Phone screen="mundayneHome" className="mt-6 h-[400px] w-full" />
        </div>
      </div>
    </Modal>
  );
}
