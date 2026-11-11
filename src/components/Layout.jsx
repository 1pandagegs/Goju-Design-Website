import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Icon from "./Icon";
import { Button } from "./ui";
import { whatsappLink } from "../data/site";
import { PageMeta } from "../lib/seo";

const COOKIE_KEY = "goju-cookie-choice";

// Vercel Web Analytics loads only after a visitor allows analytics cookies.
let analyticsOn = false;
function enableAnalytics() {
  if (analyticsOn) return;
  analyticsOn = true;
  import("@vercel/analytics").then(({ inject }) => inject());
}

function readCookieChoice() {
  try {
    return localStorage.getItem(COOKIE_KEY);
  } catch {
    return "unavailable";
  }
}

// Overlay / Cookie banner
function CookieBanner() {
  const [choice, setChoice] = useState(readCookieChoice);
  const [settings, setSettings] = useState(false);
  useEffect(() => {
    if (choice === "all") enableAnalytics();
  }, [choice]);
  const [analytics, setAnalytics] = useState(true);

  const save = (value) => {
    try {
      localStorage.setItem(COOKIE_KEY, value);
    } catch {
      // Storage is blocked, so the banner simply hides for this visit.
    }
    setChoice(value);
  };

  if (choice) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 lg:bottom-8 lg:p-0">
      <div className="wrap !px-0 lg:!px-[120px]">
        <div className="flex flex-col gap-4 rounded-[16px] bg-night px-5 py-5 shadow-modal lg:flex-row lg:items-center lg:justify-between lg:px-6">
          <div className="flex flex-col gap-1">
            <p className="t-body font-semibold text-cream">We use a few cookies</p>
            <p className="t-small text-[13px] text-sand">
              Only to understand how the site is used and to keep it working. Read our{" "}
              <Link to="/cookie-policy" className="underline hover:text-cream">cookie policy</Link>.
            </p>
            {settings && (
              <label className="mt-2 flex items-center gap-3 t-small text-cream">
                <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="size-4 accent-[#b09b71]" />
                Allow analytics cookies
              </label>
            )}
          </div>
          <div className="flex shrink-0 gap-3">
            {settings ? (
              <Button variant="onDark" onClick={() => save(analytics ? "all" : "essential")}>Save choice</Button>
            ) : (
              <Button variant="onDark" onClick={() => setSettings(true)}>Settings</Button>
            )}
            <Button variant="gold" onClick={() => save("all")}>Accept</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Scroll to the top on page change, or to the #hash target when there is one.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <PageMeta />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex size-[60px] items-center justify-center rounded-full bg-gold text-night shadow-float transition-transform hover:scale-105 lg:bottom-8 lg:right-10"
      >
        <Icon name="whatsapp" size={26} />
      </a>
      <CookieBanner />
    </div>
  );
}
