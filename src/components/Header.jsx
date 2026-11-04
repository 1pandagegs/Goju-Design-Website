import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import { Button } from "./ui";
import { navLinks, EMAIL } from "../data/site";
import { services } from "../data/services";
import { useModals } from "./modals/ModalContext";

// Overlay / Services menu (nav hover)
function ServicesMenu({ onClose }) {
  return (
    <div className="absolute inset-x-0 top-full z-40 hidden lg:block">
      <div className="fixed inset-x-0 bottom-0 top-[88px] bg-night/40" onMouseEnter={onClose} aria-hidden="true" />
      <div className="wrap relative pt-4">
        <div className="flex gap-6 rounded-[24px] bg-cream p-8 shadow-modal animate-rise-in">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              onClick={onClose}
              className="flex flex-1 flex-col gap-3 rounded-[16px] p-5 transition-colors hover:bg-paper"
            >
              <span className="flex size-11 items-center justify-center rounded-[12px] bg-sand text-ink">
                <Icon name={s.icon} size={20} />
              </span>
              <span className="t-h4 text-ink">{s.name}</span>
              <span className="t-small text-muted">{s.short}</span>
              <span className="t-button text-gold-deep">{s.listPrice}</span>
            </Link>
          ))}
          <Link
            to="/services"
            onClick={onClose}
            className="group flex w-[240px] shrink-0 flex-col justify-between rounded-[16px] bg-night p-5"
          >
            <span className="t-h4 text-cream">See all services and packages</span>
            <span className="inline-flex items-center gap-2 t-button text-gold">
              View services <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Mobile / Menu open
function MobileMenu({ onClose, onStart }) {
  const [servicesOpen, setServicesOpen] = useState(true);
  return createPortal(
    <div className="fixed inset-0 z-[65] flex flex-col overflow-y-auto bg-night px-5 pb-8 lg:hidden animate-fade-in" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="flex h-[68px] shrink-0 items-center justify-between">
        <Logo dark />
        <button type="button" onClick={onClose} className="flex size-11 items-center justify-center rounded-full border border-cream text-cream" aria-label="Close menu">
          <Icon name="close" size={18} />
        </button>
      </div>
      <nav className="mt-6 flex flex-col">
        {navLinks.map((l) =>
          l.label === "Services" ? (
            <div key={l.to} className="border-b border-cream/30">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex w-full items-center justify-between py-[14px] text-[32px] font-extrabold leading-[1.12] tracking-[-0.012em] ${servicesOpen ? "text-gold" : "text-cream"}`}
                aria-expanded={servicesOpen}
              >
                Services
                <Icon name={servicesOpen ? "chevron-down" : "chevron-right"} size={18} className="text-cream" />
              </button>
              {servicesOpen && (
                <div className="flex flex-col gap-4 pb-6 pt-1">
                  <Link to="/services" onClick={onClose} className="t-body-l text-cream">All services</Link>
                  {services.map((s) => (
                    <Link key={s.slug} to={`/services/${s.slug}`} onClick={onClose} className="t-body-l text-cream">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link key={l.to} to={l.to} onClick={onClose} className="flex items-center justify-between border-b border-cream/30 py-[14px] text-[32px] font-extrabold leading-[1.12] tracking-[-0.012em] text-cream">
              {l.label}
              <Icon name="chevron-right" size={18} />
            </Link>
          ),
        )}
      </nav>
      <div className="mt-10 flex flex-col gap-5">
        <Button variant="gold" icon="whatsapp" full onClick={onStart}>Start a project on WhatsApp</Button>
        <p className="t-small text-cream">{EMAIL} · Abuja, Nigeria</p>
      </div>
    </div>,
    document.body,
  );
}

export default function Header() {
  const { openStart } = useModals();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream">
      <div className="wrap flex h-[68px] items-center justify-between lg:h-[88px]">
        <Logo />
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {navLinks.map((l) =>
            l.label === "Services" ? (
              <div key={l.to} onMouseEnter={openServices} onMouseLeave={closeServices} className="py-8">
                <NavLink
                  to={l.to}
                  onFocus={openServices}
                  className={({ isActive }) => `t-button tracking-normal transition-colors hover:text-gold-deep ${isActive || servicesOpen ? "text-gold-deep" : "text-ink"}`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  {l.label}
                </NavLink>
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => `t-button tracking-normal transition-colors hover:text-gold-deep ${isActive ? "text-gold-deep" : "text-ink"}`}
              >
                {l.label}
              </NavLink>
            ),
          )}
        </nav>
        <div className="hidden lg:block">
          <Button icon="whatsapp" onClick={() => openStart()}>Start a project</Button>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex size-11 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          aria-label="Open menu"
        >
          <Icon name="menu" size={20} />
        </button>
      </div>
      {servicesOpen && (
        <div onMouseEnter={openServices} onMouseLeave={closeServices}>
          <ServicesMenu onClose={() => setServicesOpen(false)} />
        </div>
      )}
      {menuOpen && (
        <MobileMenu
          onClose={() => setMenuOpen(false)}
          onStart={() => {
            setMenuOpen(false);
            openStart();
          }}
        />
      )}
    </header>
  );
}
