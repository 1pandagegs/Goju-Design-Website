import { Link } from "react-router-dom";
import Icon from "./Icon";
import { img } from "../data/images";

const buttonStyles = {
  primary: "bg-ink text-cream hover:bg-night",
  secondary: "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-cream",
  gold: "bg-gold text-night hover:bg-[#c2ad82]",
  onDark: "border-[1.5px] border-cream text-cream hover:bg-cream hover:text-night",
};

// Web/Button: pill button with an optional WhatsApp icon before the label or an arrow after it.
export function Button({ variant = "primary", icon, to, href, onClick, type = "button", full, className = "", children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-[10px] rounded-full px-[26px] py-[16px] t-button whitespace-nowrap transition-colors ${
    buttonStyles[variant]
  } ${full ? "w-full" : ""} ${className}`;
  const content = (
    <>
      {icon === "whatsapp" && <Icon name="whatsapp" size={18} />}
      {icon === "calendar" && <Icon name="calendar" size={18} />}
      <span>{children}</span>
      {icon === "arrow" && <Icon name="arrow" size={16} />}
      {icon === "arrow-up-right" && <Icon name="arrow-up-right" size={16} />}
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>;
  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls} {...rest}>
        {content}
      </a>
    );
  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {content}
    </button>
  );
}

// Text link in gold-deep (or gold on dark sections) with a trailing arrow.
export function ArrowLink({ to, href, onClick, dark, className = "", children }) {
  const cls = `group inline-flex items-center gap-2 t-button whitespace-nowrap ${dark ? "text-gold" : "text-gold-deep"} ${className}`;
  const inner = (
    <>
      <span className="underline-offset-4 group-hover:underline">{children}</span>
      <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-0.5" />
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>;
  return <button type="button" onClick={onClick} className={cls}>{inner}</button>;
}

export function Label({ dark, muted, className = "", children }) {
  const color = muted ? "text-muted" : dark ? "text-gold" : "text-gold-deep";
  return <p className={`t-label ${color} ${className}`}>{children}</p>;
}

// Web/Chip
export function Chip({ children }) {
  return <span className="inline-flex items-center whitespace-nowrap rounded-full border border-line px-[14px] py-[7px] t-small text-ink">{children}</span>;
}

// Web/Status
export function Status({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-paper px-[14px] py-[7px] t-small text-ink ${className}`}>
      <span className="size-2 rounded-full bg-gold" aria-hidden="true" />
      {children}
    </span>
  );
}

// Section header: label, title, optional intro and an optional link on the right.
export function SectionHeader({ label, title, intro, link, dark, titleClass = "max-w-[760px]", introClass = "max-w-[620px]", className = "" }) {
  return (
    <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}>
      <div className="flex flex-col gap-4">
        {label && <Label dark={dark}>{label}</Label>}
        <h2 className={`t-h1 ${dark ? "text-cream" : "text-ink"} ${titleClass}`}>{title}</h2>
        {intro && <p className={`t-body-l ${dark ? "text-sand" : "text-muted"} ${introClass}`}>{intro}</p>}
      </div>
      {link && <div className="shrink-0">{link}</div>}
    </div>
  );
}

// Web/Image placeholder: shown wherever the design still waits for a real screenshot.
export function Placeholder({ label, dark, className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-[10px] rounded-[20px] p-5 text-center ${dark ? "bg-ink text-sand" : "bg-sand text-gold-deep"} ${className}`}>
      <Icon name="image" size={28} />
      <p className="t-small">{label}</p>
    </div>
  );
}

// An exported design image, cropped to fill its slot.
export function Picture({ image, className = "", imgClassName = "", onClick, eager }) {
  const src = img(image.key);
  if (!src) return <Placeholder label={image.label} className={className} />;
  const pic = (
    <img
      src={src}
      alt={image.label}
      loading={eager ? "eager" : "lazy"}
      className={`size-full object-cover ${imgClassName}`}
    />
  );
  if (onClick)
    return (
      <button type="button" onClick={onClick} className={`block overflow-hidden rounded-[20px] ${className}`} aria-label={`Open image: ${image.label}`}>
        {pic}
      </button>
    );
  return <div className={`overflow-hidden rounded-[20px] ${className}`}>{pic}</div>;
}

export function Breadcrumb({ items, dark }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 t-small">
      {items.map(([label, to], i) => {
        const last = i === items.length - 1;
        return (
          <span key={label} className="flex items-center gap-2">
            {last ? (
              <span className={dark ? "text-cream" : "text-ink"} aria-current="page">{label}</span>
            ) : (
              <Link to={to} className={`hover:underline ${dark ? "text-sand/70" : "text-muted"}`}>{label}</Link>
            )}
            {!last && <Icon name="chevron-right" size={12} className={dark ? "text-sand/70" : "text-muted"} />}
          </span>
        );
      })}
    </nav>
  );
}

export function CheckItem({ dark, iconClass, children }) {
  return (
    <li className="flex items-start gap-[10px] t-body">
      <Icon name="check" size={16} className={`mt-[5px] shrink-0 ${iconClass || (dark ? "text-gold" : "text-gold-deep")}`} />
      <span className={dark ? "text-cream" : "text-ink"}>{children}</span>
    </li>
  );
}
