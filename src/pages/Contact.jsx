import { useState } from "react";
import Icon from "../components/Icon";
import { ArrowLink, Button, Label } from "../components/ui";
import { PageHeader } from "../components/sections";
import { Field } from "../components/forms";
import { budgetOptions, isEmail, sendToStudio } from "../lib/forms";
import { useModals } from "../components/modals/ModalContext";
import { services } from "../data/services";
import { whatsappLink, EMAIL, PHONE_DISPLAY } from "../data/site";

const empty = { name: "", email: "", phone: "+234 ", company: "", service: "", budget: "", details: "" };

// Validates and sends the "Send a brief" form, showing the error state from the design.
function BriefForm() {
  const { showToast } = useModals();
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Please add your name.";
    if (!form.email.trim()) errs.email = "Please add your email.";
    else if (!isEmail(form.email)) errs.email = 'That email looks incomplete. Check for a missing ".com".';
    if (!form.service) errs.service = "Please choose a service.";
    if (!form.details.trim()) errs.details = "Please tell us a little about the project.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true);
    setFailed(false);
    try {
      await sendToStudio({ type: "enquiry", ...form });
      setForm(empty);
      showToast("Brief sent", "We will reply within one working day.");
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  const errorCount = Object.keys(errors).length;
  return (
    <form id="brief" onSubmit={submit} noValidate className="scroll-mt-28 flex flex-col gap-6 rounded-[28px] border border-line bg-paper p-6 md:p-10 lg:p-12">
      <div className="flex flex-col gap-3">
        <h2 className="t-h2 text-ink">Send a brief</h2>
        <p className="t-body text-muted">The more you tell us, the more useful our reply. We reply within one working day.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Your name*" placeholder="Full name" autoComplete="name" value={form.name} onChange={set("name")} error={errors.name} />
        <Field label="Email*" type="email" placeholder="you@company.com" autoComplete="email" value={form.email} onChange={set("email")} error={errors.email} />
        <Field label="WhatsApp number" type="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} />
        <Field label="Company" placeholder="Company or brand name" autoComplete="organization" value={form.company} onChange={set("company")} />
        <Field as="select" label="Service*" placeholder="Choose a service" options={[...services.map((s) => s.name), "Not sure yet"]} value={form.service} onChange={set("service")} error={errors.service} />
        <Field as="select" label="Budget" placeholder="Choose a range" options={budgetOptions} value={form.budget} onChange={set("budget")} />
        <Field
          as="textarea"
          label="Tell us about the project*"
          className="md:col-span-2"
          placeholder="What you need, who it is for, and any deadline."
          value={form.details}
          onChange={set("details")}
          error={errors.details}
        />
      </div>
      {failed && (
        <p className="t-small text-gold-deep" role="alert">
          We could not send your brief. Please try again, or message us on WhatsApp.
        </p>
      )}
      <div className="flex items-center justify-between gap-4">
        <p className={`t-small ${errorCount ? "text-gold-deep" : "text-muted"}`} aria-live="polite">
          {errorCount ? `${errorCount} ${errorCount === 1 ? "field needs" : "fields need"} attention` : "* Required"}
        </p>
        <Button type="submit" icon="arrow" disabled={sending} className="disabled:opacity-60">
          {sending ? "Sending…" : "Send brief"}
        </Button>
      </div>
    </form>
  );
}

function InfoCard({ icon, label, title, body, children }) {
  return (
    <div className="flex gap-5 rounded-[24px] border border-line bg-paper p-6 lg:p-7">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-[12px] bg-sand text-gold-deep">
        <Icon name={icon} size={20} />
      </span>
      <div className="flex min-w-0 flex-col gap-1">
        <Label muted>{label}</Label>
        <p className="t-h4 break-words text-ink">{title}</p>
        <p className="t-small text-muted">{body}</p>
        {children}
      </div>
    </div>
  );
}

export default function Contact() {
  const { openBooking } = useModals();
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let’s talk about your project."
        intro="WhatsApp is the fastest way to reach us. If you prefer, send a brief below or book a free 30-minute call."
      />
      <section className="wrap grid gap-6 pb-16 lg:grid-cols-[440px_1fr] lg:gap-10 lg:pb-[120px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 rounded-[28px] bg-night p-8">
            <span className="flex size-[52px] items-center justify-center rounded-[12px] bg-gold text-night">
              <Icon name="whatsapp" size={24} />
            </span>
            <h2 className="t-h3 text-cream">WhatsApp</h2>
            <p className="t-h4 text-gold">{PHONE_DISPLAY}</p>
            <p className="t-body text-cream">Fastest reply. Send a voice note or a few lines about what you need.</p>
            <div>
              <Button variant="gold" icon="whatsapp" href={whatsappLink()}>Open WhatsApp</Button>
            </div>
          </div>
          <a href={`mailto:${EMAIL}`} className="block hover:opacity-90">
            <InfoCard icon="email" label="Email" title={EMAIL} body="For briefs, files and proposals." />
          </a>
          <InfoCard icon="pin" label="Studio" title="Abuja, Nigeria" body="Mon to Fri, 9am to 6pm." />
          <InfoCard icon="calendar" label="Free consultation" title="30-minute video call" body="Pick a time that suits you.">
            <div className="pt-1">
              <ArrowLink onClick={openBooking}>Book a call</ArrowLink>
            </div>
          </InfoCard>
        </div>
        <BriefForm />
      </section>
    </>
  );
}
