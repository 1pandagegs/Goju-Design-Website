import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Icon from "../Icon";
import { CloseButton } from "./Modal";
import { img } from "../../data/images";

// Overlay / Image lightbox for case study galleries.
export default function Lightbox({ title, images, start = 0, onClose }) {
  const [i, setI] = useState(start);
  const go = useCallback((d) => setI((v) => (v + d + images.length) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [go, onClose]);

  const current = images[i];
  return createPortal(
    <div className="fixed inset-0 z-[60] flex flex-col bg-night/95 animate-fade-in" role="dialog" aria-modal="true" aria-label={`${title} gallery`}>
      <div className="wrap flex h-[88px] shrink-0 items-center justify-between">
        <p className="t-small text-cream">
          {title} · {i + 1} of {images.length}
        </p>
        <CloseButton dark onClick={onClose} />
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-5 lg:px-[200px]">
        <img src={img(current.key)} alt={current.label} className="max-h-full max-w-full rounded-[20px] object-contain" />
        <button type="button" onClick={() => go(-1)} aria-label="Previous image" className="absolute left-4 flex size-14 items-center justify-center rounded-full bg-cream text-ink lg:left-[100px]">
          <Icon name="chevron-left" size={22} />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next image" className="absolute right-4 flex size-14 items-center justify-center rounded-full bg-cream text-ink lg:right-[100px]">
          <Icon name="chevron-right" size={22} />
        </button>
      </div>
      <p className="mt-6 px-5 text-center t-body text-cream">{current.label}</p>
      <div className="flex shrink-0 justify-center gap-3 px-5 py-6">
        {images.map((im, n) => (
          <button
            key={im.key}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Show image ${n + 1}`}
            className={`h-14 w-[88px] overflow-hidden rounded-[10px] border-2 ${n === i ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"}`}
          >
            <img src={img(im.key)} alt="" className="size-full object-cover" />
          </button>
        ))}
      </div>
    </div>,
    document.body,
  );
}
