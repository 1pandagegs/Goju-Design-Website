import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Icon from "../Icon";

export function CloseButton({ onClick, dark, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Close"
      className={`flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors ${
        dark ? "border-cream text-cream hover:bg-cream hover:text-night" : "border-line text-ink hover:border-ink"
      } ${className}`}
    >
      <Icon name="close" size={18} />
    </button>
  );
}

// Dimmed overlay with a centred white card. Closes on Escape or a click outside the card.
export default function Modal({ onClose, label, width = "max-w-[720px]", className = "", children }) {
  const card = useRef();
  useEffect(() => {
    const prev = document.activeElement;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    card.current?.querySelector("input, button, select, textarea")?.focus({ preventScroll: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto bg-night/70 p-0 animate-fade-in sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={card}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={`relative w-full ${width} rounded-t-[28px] bg-cream p-6 shadow-modal animate-rise-in sm:my-auto sm:rounded-[28px] sm:p-10 ${className}`}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
