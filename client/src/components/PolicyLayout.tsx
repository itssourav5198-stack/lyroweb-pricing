/**
 * Shared shell for policy pages: same header, footer and Midnight Ledger
 * styling as the home page, with a readable editorial content column.
 */
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";

export const CONTACT_EMAIL = "lyroweb.solution@gmail.com";
export const CONTACT_PHONE: string = ""; // Add your number like "+91 98765 43210". Empty = hidden.
export const BUSINESS_ADDRESS = "Gurugram, Haryana, India"; // Add full address here if a payment gateway asks for it.

const contactHref = `mailto:${CONTACT_EMAIL}`;

const policyLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refunds", label: "Refunds & Cancellations" },
];

function Logo() {
  return (
    <div className="brand-lockup" aria-label="LyroWeb Solutions">
      <img src="/images/logo-1.png" alt="" className="brand-mark" />
      <span className="brand-wordmark">
        LYRO<span>WEB</span>
      </span>
    </div>
  );
}

type Props = {
  kicker: string;
  title: ReactNode;
  intro: string;
  updated?: string;
  children: ReactNode;
};

export default function PolicyLayout({ kicker, title, intro, updated, children }: Props) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [location]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link href="/" className="header-logo">
          <Logo />
        </Link>
        <nav className={`site-nav ${open ? "site-nav--open" : ""}`} aria-label="Primary navigation">
          <Link href="/">Home</Link>
          {policyLinks.map((l) => (
            <Link key={l.href} href={l.href} aria-current={location === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <a href={contactHref} className="header-cta">
          <span>Start a project</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main className="policy-page section-pad">
        <div className="policy-head">
          <p className="kicker">
            <span className="kicker-line" />
            {kicker}
          </p>
          <h1>{title}</h1>
          <p className="policy-intro">{intro}</p>
          {updated ? <span className="small-label">Last updated: {updated}</span> : null}
        </div>
        <div className="policy-body">{children}</div>
      </main>

      <footer className="site-footer site-footer--policy">
        <div>
          <Logo />
          <span>© 2026 LyroWeb Solutions</span>
        </div>
        <nav className="footer-links" aria-label="Policies">
          {policyLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <a href={contactHref}>{CONTACT_EMAIL}</a>
      </footer>
    </div>
  );
}
