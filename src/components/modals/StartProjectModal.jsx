import { useState } from "react";
import Modal, { CloseButton } from "./Modal";
import Icon from "../Icon";
import { Button, Label } from "../ui";
import { Field, Choice } from "../forms";
import { budgetOptions, timelineOptions, isEmail, sendToStudio } from "../../lib/forms";
import { whatsappLink } from "../../data/site";

const needs = [
  { slug: "websites", icon: "desktop", name: "Website or web app", short: "Sites, landing pages, web apps" },
  { slug: "brand-design", icon: "pencil", name: "Brand & design", short: "Identity, UI/UX, decks" },
  { slug: "social-media", icon: "mic", name: "Social media & content", short: "Channels, posts, podcasts" },
  { slug: "ai-automation", icon: "wand", name: "AI & automation", short: "Custom quote" },
];

function Progress({ step }) {
  return (
    <div className="flex gap-2" aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <span key={n} className={`h-1 flex-1 rounded-[2px] ${n <= step ? "bg-gold-deep" : "bg-line"}`} />
      ))}
    </div>
  );
}

function Head({ step, title, intro, onClose }) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-[10px]">
          <Label>Start a project · Step {step} of 3</Label>
          <h2 className="t-h2 text-ink">{title}</h2>
          {intro && <p className="t-body text-muted">{intro}</p>}
        </div>
        <CloseButton onClick={onClose} />
      </div>
      <Progress step={step} />
    </div>
  );
}

// Modal / Start a project, steps 1 to 3 and the "sent" confirmation.
export default function StartProjectModal({ initial = [], onClose }) {
  const [step, setStep] = useState(1);
  const [picked, setPicked] = useState(initial);
  const [form, setForm] = useState({ budget: "", timeline: "", details: "", name: "", company: "", phone: "+234 ", email: "", reply: "WhatsApp" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target ? e.target.value : e }));
  const toggle = (slug) => setPicked((p) => (p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug]));
  const pickedNames = needs.filter((n) => picked.includes(n.slug)).map((n) => n.name);

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Please add your name.";
    if (form.phone.replace(/[^\d]/g, "").length < 7) errs.phone = "Please add a WhatsApp number we can reach.";
    if (form.email && !isEmail(form.email)) errs.email = "That email looks incomplete.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true);
    setFailed(false);
    try {
      await sendToStudio({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        service: pickedNames.join(", "),
        budget: form.budget,
        timeline: form.timeline,
        details: `${form.details}\n\nPreferred reply: ${form.reply}`,
      });
      setStep(4);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  if (step === 4) {
    const summary = `Hi Goju Design, I just sent a project brief (${pickedNames.join(", ") || "new project"}). My name is ${form.name}.`;
    return (
      <Modal onClose={onClose} label="Project sent" width="max-w-[560px]">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-gold text-night">
            <Icon name="check" size={22} />
          </span>
          <h2 className="t-h2 text-ink">Got it. Thank you.</h2>
          <p className="t-body max-w-[400px] text-muted">
            We will reply on WhatsApp within one working day with next steps and a quote.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button icon="whatsapp" href={whatsappLink(summary)}>Open WhatsApp now</Button>
            <Button variant="secondary" onClick={onClose}>Close</Button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal onClose={onClose} label="Start a project">
      <form onSubmit={submit} className="flex flex-col gap-7" noValidate>
        {step === 1 && (
          <>
            <Head step={1} title="What do you need?" intro="Pick one or more. We will tailor the next questions." onClose={onClose} />
            <div className="grid gap-4 sm:grid-cols-2">
              {needs.map((n) => {
                const on = picked.includes(n.slug);
                return (
                  <button
                    key={n.slug}
                    type="button"
                    onClick={() => toggle(n.slug)}
                    aria-pressed={on}
                    className={`flex items-center gap-4 rounded-[18px] p-5 text-left transition-colors ${
                      on ? "border-2 border-gold-deep bg-paper p-[19px]" : "border border-line bg-cream hover:border-gold"
                    }`}
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-sand text-ink">
                      <Icon name={n.icon} size={20} />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className="t-h4 text-ink">{n.name}</span>
                      <span className="t-small text-muted">{n.short}</span>
                    </span>
                    {on && (
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-deep text-cream">
                        <Icon name="check" size={12} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="t-small text-muted hover:text-ink">
                Prefer to chat? Message us on WhatsApp.
              </a>
              <Button icon="arrow" onClick={() => setStep(2)} disabled={!picked.length} className="disabled:opacity-40">
                Continue
              </Button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <Head step={2} title="Tell us about it." onClose={onClose} />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field as="select" label="Budget" placeholder="Choose a range" options={budgetOptions} value={form.budget} onChange={set("budget")} />
              <Field as="select" label="When do you need it?" placeholder="Choose a timeline" options={timelineOptions} value={form.timeline} onChange={set("timeline")} />
              <Field
                as="textarea"
                label="Project details"
                className="sm:col-span-2"
                placeholder="Example: a website for our real estate company with a projects page and WhatsApp enquiries."
                value={form.details}
                onChange={set("details")}
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
              <Button icon="arrow" onClick={() => setStep(3)}>Continue</Button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <Head step={3} title="How do we reach you?" onClose={onClose} />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name*" placeholder="Full name" autoComplete="name" value={form.name} onChange={set("name")} error={errors.name} />
              <Field label="Company" placeholder="Company or brand" autoComplete="organization" value={form.company} onChange={set("company")} />
              <Field label="WhatsApp number*" type="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} error={errors.phone} />
              <Field label="Email" type="email" placeholder="you@company.com" autoComplete="email" value={form.email} onChange={set("email")} error={errors.email} />
            </div>
            <Choice label="Reply on:" options={["WhatsApp", "Email", "Phone call"]} value={form.reply} onChange={set("reply")} />
            {failed && (
              <p className="t-small text-gold-deep" role="alert">
                Something went wrong sending your project. Please try again or message us on WhatsApp.
              </p>
            )}
            <div className="flex items-center justify-between gap-4">
              <Button variant="secondary" onClick={() => setStep(2)}>Back</Button>
              <Button type="submit" icon="arrow" disabled={sending} className="disabled:opacity-60">
                {sending ? "Sending…" : "Send project"}
              </Button>
            </div>
          </>
        )}
      </form>
    </Modal>
  );
}
