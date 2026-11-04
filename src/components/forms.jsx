import { useId } from "react";
import Icon from "./Icon";

// Field/* from the design: label above an input, with an optional error line below.
export function Field({ label, error, as = "input", options, className = "", inputClassName = "", ...props }) {
  const id = useId();
  const errId = `${id}-err`;
  const shared = {
    id,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": error ? errId : undefined,
    ...props,
  };
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="t-small text-ink">{label}</label>
      {as === "textarea" && <textarea rows={4} className={`field-input min-h-[120px] resize-y ${inputClassName}`} {...shared} />}
      {as === "select" && (
        <div className="relative">
          <select className={`field-input appearance-none pr-10 ${props.value ? "text-ink" : "text-muted"} ${inputClassName}`} {...shared}>
            <option value="">{props.placeholder}</option>
            {options.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <Icon name="chevron-down" size={16} className="pointer-events-none absolute right-[18px] top-1/2 -translate-y-1/2 text-muted" />
        </div>
      )}
      {as === "input" && <input className={`field-input ${inputClassName}`} {...shared} />}
      {error && <p id={errId} className="t-small text-[13px] text-gold-deep">{error}</p>}
    </div>
  );
}

// Small pill toggle used for "Reply on" and "I use" choices.
export function Choice({ options, value, onChange, label }) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="radiogroup" aria-label={label}>
      <span className="t-small text-muted">{label}</span>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          role="radio"
          aria-checked={value === o}
          onClick={() => onChange(o)}
          className={`rounded-full px-[14px] py-[7px] t-small transition-colors ${value === o ? "bg-ink text-cream" : "border border-line text-ink hover:border-ink"}`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
