import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import PolicyLayout, { BUSINESS_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from "@/components/PolicyLayout";

const topics = ["New project", "Existing project / support", "Billing or refund", "Other"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: topics[0], message: "" });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.topic}] Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <PolicyLayout
      kicker="Contact Us"
      title={<>Let&apos;s talk about <em>your project.</em></>}
      intro="A new build, a question about an order, or a billing issue — write to us and we will reply within 1–2 business days."
    >
      <div className="contact-grid">
        <div className="contact-cards">
          <div className="contact-card">
            <span className="small-label">Email</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
          {CONTACT_PHONE ? (
            <div className="contact-card">
              <span className="small-label">Phone / WhatsApp</span>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a>
            </div>
          ) : null}
          <div className="contact-card">
            <span className="small-label">Business address</span>
            <p>LyroWeb Solutions<br />{BUSINESS_ADDRESS}</p>
          </div>
          <div className="contact-card">
            <span className="small-label">Support hours</span>
            <p>Monday to Saturday, 10:00 AM – 7:00 PM IST</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <label>
            <span className="small-label">Your name</span>
            <input value={form.name} onChange={update("name")} required autoComplete="name" />
          </label>
          <label>
            <span className="small-label">Email</span>
            <input type="email" value={form.email} onChange={update("email")} required autoComplete="email" />
          </label>
          <label>
            <span className="small-label">What do you need?</span>
            <select value={form.topic} onChange={update("topic")}>
              {topics.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="small-label">Message</span>
            <textarea rows={5} value={form.message} onChange={update("message")} required />
          </label>
          <button type="submit" className="button-primary">
            <span>Send message</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>
          <p className="form-note">This opens your email app with the message ready to send.</p>
        </form>
      </div>
    </PolicyLayout>
  );
}
