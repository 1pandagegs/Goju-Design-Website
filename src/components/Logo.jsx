import { Link } from "react-router-dom";
import { img } from "../data/images";

// Web/Logo lockup on light and on dark.
export default function Logo({ dark, className = "" }) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`} aria-label="Goju Design, home">
      <img src={img(dark ? "logo-mark-light" : "logo-mark")} alt="" className="size-[38px] lg:size-[44px]" />
      <span className="flex flex-col gap-[2px] whitespace-nowrap">
        <span className={`text-[16px] font-extrabold leading-[1.35] tracking-[0.04em] lg:text-[18px] ${dark ? "text-cream" : "text-gold"}`}>
          GOJU DESIGN
        </span>
        <span className={`text-[8px] font-semibold uppercase leading-[1.4] tracking-[0.42em] lg:text-[9px] ${dark ? "text-sand" : "text-gold"}`}>
          Solutions Ltd
        </span>
      </span>
    </Link>
  );
}
