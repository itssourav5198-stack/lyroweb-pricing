/**
 * Midnight Ledger design: a dark editorial price catalogue using warm saffron
 * accents, asymmetric service rails, refined typography, and short tactile motion.
 */
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const contactHref = "mailto:sohimaproduction@gmail.com";

const websitePackages = [
  {
    label: "Basic",
    title: "Basic Package",
    price: "₹7,000",
    summary:
      "Ideal for individuals and small businesses needing a clean, fast web presence.",
    features: [
      "Custom HTML/CSS design",
      "Mobile responsive",
      "Contact section",
      "2 revisions",
    ],
  },
  {
    label: "Standard",
    title: "Standard Package",
    price: "₹12,000",
    summary:
      "Multi-page website with advanced features, perfect for growing brands.",
    features: [
      "Multi-page website",
      "Custom UI/UX design",
      "SEO basics",
      "Unlimited revisions",
      "1 month support",
    ],
    featured: true,
  },
  {
    label: "Premium",
    title: "Premium Package",
    price: "₹30,000",
    summary:
      "Full-scale professional website with advanced integrations and premium support.",
    features: [
      "Full custom development",
      "Advanced UI animations",
      "CMS / dynamic features",
      "Priority support",
      "3 months maintenance",
    ],
  },
];

const creativeServices = [
  {
    tag: "Creative",
    title: "Songwriting",
    price: "₹5,000",
    unit: "/ song",
    summary:
      "Original lyrics, melodies and full compositions crafted to your vision and genre.",
    features: [
      "Custom lyrics & melody",
      "Any genre / instrument",
      "Royalty negotiation help",
      "3 revisions",
    ],
  },
  {
    tag: "Design",
    title: "Poster & Template Design",
    price: "₹6,000",
    unit: "/ project",
    summary:
      "Print-ready posters and reusable templates for promotions, events and social media.",
    features: [
      "Custom poster/template design",
      "Print & digital ready files",
      "Editable source files",
      "2 revisions",
    ],
  },
  {
    tag: "Identity",
    title: "Branding",
    price: "₹4,000",
    unit: "/ project",
    summary:
      "A complete starter identity so your business looks consistent everywhere.",
    features: [
      "Logo design",
      "Brand colors & fonts",
      "Social media kit",
      "2 revisions",
    ],
  },
  {
    tag: "Automation",
    title: "AI Voice Agent",
    price: "₹10,000",
    unit: "/ project",
    summary:
      "A custom AI calling agent for your business — handles queries, bookings or support calls.",
    features: [
      "Custom conversation design",
      "Business-specific knowledge setup",
      "Call flow & tone tuning",
      "1 month support",
    ],
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.62, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand-lockup" aria-label="LyroWeb Solutions">
      <img
        src="/images/lyroweb-mark.svg"
        alt=""
        className="brand-mark"
      />
      {!compact && (
        <span className="brand-wordmark">
          LYRO<span>WEB</span>
        </span>
      )}
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="kicker">
      <span className="kicker-line" />
      <span>{children}</span>
    </div>
  );
}

function ArrowLink({
  children,
  inverse = false,
  className = "",
}: {
  children: React.ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <a
      href={contactHref}
      className={`arrow-link ${inverse ? "arrow-link--inverse" : ""} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight size={16} strokeWidth={1.9} aria-hidden="true" />
    </a>
  );
}

function PricingCard({ item, index }: { item: (typeof websitePackages)[number]; index: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      className={`price-card ${item.featured ? "price-card--featured" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      whileHover={reduceMotion ? {} : { y: -7 }}
      transition={{ duration: 0.42, delay: index * 0.09, ease }}
    >
      {item.featured && <span className="popular-chip">Most popular</span>}
      <div className="card-topline">
        <span>{item.label}</span>
        <span className="corner-mark" aria-hidden="true" />
      </div>
      <h3>{item.title}</h3>
      <p className="price-line">
        <strong>{item.price}</strong>
        <span>/ project</span>
      </p>
      <p className="card-summary">{item.summary}</p>
      <ul className="feature-list">
        {item.features.map((feature) => (
          <li key={feature}>
            <Check size={13} strokeWidth={2.1} aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <ArrowLink>{item.featured ? "Hire me now" : "Get in touch"}</ArrowLink>
    </motion.article>
  );
}

function CreativeCard({ item, index }: { item: (typeof creativeServices)[number]; index: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      className={`creative-card creative-card--${index + 1}`}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      whileHover={reduceMotion ? {} : { y: -6 }}
      transition={{ duration: 0.42, delay: index * 0.07, ease }}
    >
      <span className="card-index">0{index + 1}</span>
      <div className="card-topline">
        <span>{item.tag}</span>
        <span className="corner-mark" aria-hidden="true" />
      </div>
      <h3>{item.title}</h3>
      <p className="price-line">
        <strong>{item.price}</strong>
        <span>{item.unit}</span>
      </p>
      <p className="card-summary">{item.summary}</p>
      <ul className="feature-list">
        {item.features.map((feature) => (
          <li key={feature}>
            <Check size={13} strokeWidth={2.1} aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <ArrowLink>Get in touch</ArrowLink>
    </motion.article>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="header-logo" onClick={closeMenu}>
          <Logo />
        </a>
        <nav className={`site-nav ${isMenuOpen ? "site-nav--open" : ""}`} aria-label="Primary navigation">
          <a href="#websites" onClick={closeMenu}>Websites</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#creative" onClick={closeMenu}>Creative</a>
        </nav>
        <a href={contactHref} className="header-cta">
          <span>Start a project</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-content">
            <motion.div
              className="hero-copy"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.68, ease }}
            >
              <Kicker>LyroWeb Solutions · Price catalogue 2026</Kicker>
              <h1>
                Design with a clear price <em>and a clear point of view.</em>
              </h1>
              <p className="hero-description">
                Websites, apps, branding and creative work — priced upfront, no hidden charges.
                Choose what your business needs, then let&apos;s map the details.
              </p>
              <div className="hero-actions">
                <a href="#websites" className="button-primary">
                  <span>Explore pricing</span>
                  <ArrowDownRight size={18} aria-hidden="true" />
                </a>
                <a href={contactHref} className="text-action">Talk about your project</a>
              </div>
            </motion.div>

            <motion.div
              className="hero-art"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.88, delay: 0.12, ease }}
            >
              <div className="hero-image-frame">
                <img
                  src="/images/hero-abstract.svg"
                  alt="Abstract graphite and saffron studio sculpture"
                />
              </div>
              <motion.div
                className="hero-stamp"
                animate={reduceMotion ? {} : { y: [0, -7, 0], rotate: [-3, 0, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={17} strokeWidth={1.7} />
                <span>Crafted to move</span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="hero-stat-row"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34, ease }}
          >
            <div><strong>₹4,000</strong><span>starting price</span></div>
            <div><strong>7</strong><span>services offered</span></div>
            <div><strong>1–3</strong><span>months support included</span></div>
            <p>Clear scope. Calm delivery.</p>
          </motion.div>
        </section>

        <div className="service-ticker" aria-label="Services offered">
          <div className="ticker-track">
            {["Website design", "Mobile apps", "Brand identity", "AI voice agents", "Creative direction", "Website design", "Mobile apps", "Brand identity", "AI voice agents", "Creative direction"].map((item, index) => (
              <span key={`${item}-${index}`}>
                <i aria-hidden="true">✦</i>{item}
              </span>
            ))}
          </div>
        </div>

        <section id="websites" className="ledger-section section-pad">
          <div className="section-rail">
            <Kicker>01 — Website making charges</Kicker>
            <p>Choose the site that fits your next stage.</p>
          </div>
          <div className="section-main">
            <Reveal>
              <h2>Get a website built <em>to be remembered.</em></h2>
            </Reveal>
            <div className="pricing-grid">
              {websitePackages.map((item, index) => <PricingCard item={item} index={index} key={item.title} />)}
            </div>
          </div>
        </section>

        <section id="services" className="ledger-section section-pad keep-live-section">
          <div className="section-rail">
            <Kicker>02 — Website running charges</Kicker>
            <p>Small essentials for a site that stays open.</p>
          </div>
          <div className="section-main">
            <Reveal>
              <h2>Keep it live, <em>without the guesswork.</em></h2>
            </Reveal>
            <Reveal delay={0.08} className="registration-note">
              <span className="note-dot" /> With 3 year registration of domain.
            </Reveal>
            <div className="running-grid">
              <motion.article className="running-card" whileHover={reduceMotion ? {} : { y: -5 }} transition={{ duration: 0.25, ease }}>
                <span className="running-number">A</span>
                <div className="running-content">
                  <span className="small-label">Domain .com service</span>
                  <h3>3 year plan</h3>
                  <p className="running-price"><strong>₹3,199</strong> <span>for 3 year</span></p>
                  <p>Includes domain registration &amp; renewal for your .com website.</p>
                </div>
                <span className="fixed-chip">Fixed price</span>
              </motion.article>
              <motion.article className="running-card" whileHover={reduceMotion ? {} : { y: -5 }} transition={{ duration: 0.25, ease }}>
                <span className="running-number">B</span>
                <div className="running-content">
                  <span className="small-label">Web hosting</span>
                  <h3>Annual hosting</h3>
                  <p className="running-price"><s>₹5,997</s> <strong>₹2,999</strong> <span>for 3 year</span></p>
                  <p>Keeps your site online with uptime monitoring &amp; basic tech support.</p>
                </div>
                <span className="fixed-chip fixed-chip--sale">50% off</span>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="app-feature section-pad">
          <div className="app-visual">
            <Reveal>
              <div className="image-window image-window--app">
                <img src="/images/app-sculpture.svg" alt="Abstract mobile app development sculpture" />
              </div>
            </Reveal>
            <span className="image-caption">Mobile apps / 03</span>
          </div>
          <div className="app-copy">
            <Reveal><Kicker>03 — App development</Kicker></Reveal>
            <Reveal delay={0.05}><h2>Mobile apps with <em>your brand built in.</em></h2></Reveal>
            <Reveal delay={0.1}>
              <p>From a focused tool to a customer-facing product, we scope the right platform, features, and launch path together.</p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="app-price-block">
                <span>Custom build</span>
                <strong>starting at ₹20,000 <small>/ project</small></strong>
                <p>Final price depends on platform, features and complexity — a clear quote is shared after a quick scoping call.</p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="app-feature-grid">
                {["Android / iOS builds", "Custom UI matching your brand", "Backend & database setup", "Testing & Play Store / App Store help"].map((item) => (
                  <span key={item}><Check size={14} />{item}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.22}><ArrowLink className="app-link">Get in touch</ArrowLink></Reveal>
          </div>
        </section>

        <section id="creative" className="creative-section section-pad">
          <div className="creative-head">
            <div>
              <Kicker>04 — Creative services</Kicker>
              <h2>Brand, design &amp; sound — <em>made to carry.</em></h2>
            </div>
            <div className="creative-image-wrap">
              <img src="/images/branding-object.svg" alt="Abstract brand identity studio materials" />
            </div>
          </div>
          <div className="creative-grid">
            {creativeServices.map((item, index) => <CreativeCard item={item} index={index} key={item.title} />)}
          </div>
        </section>

        <section className="closing-section section-pad">
          <div className="closing-rule" />
          <Reveal className="closing-content">
            <span className="closing-label">Your next build starts here</span>
            <h2>Ready to make it <em>real?</em></h2>
            <p>Tell us what your business needs — we&apos;ll quote it clearly, no surprises.</p>
            <a href={contactHref} className="closing-cta">
              <span>Contact LyroWeb Solutions</span>
              <ArrowUpRight size={23} />
            </a>
          </Reveal>
          <div className="closing-mark"><Logo compact /></div>
        </section>
      </main>

      <footer className="site-footer">
        <div><Logo /><span>© 2026 LyroWeb Solutions</span></div>
        <p>Website · App · Branding · Creative</p>
        <a href={contactHref}>sohimaproduction@gmail.com</a>
      </footer>
    </div>
  );
}
