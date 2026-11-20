import { Link } from "wouter";
import PolicyLayout from "@/components/PolicyLayout";

export default function Terms() {
  return (
    <PolicyLayout
      kicker="Legal"
      title={<>Terms &amp; <em>Conditions.</em></>}
      intro={'These terms apply to this website and to every service you buy from LyroWeb Solutions ("LyroWeb", "we", "us"). By using the site or hiring us, you agree to them.'}
      updated="19 November 2026"
    >
      <section>
        <h2>1. Services</h2>
        <p>We offer website design and development, apps, branding, creative work and related digital services. Scope, deliverables, timeline and price are agreed in writing (quote, invoice or message) before work begins. Anything outside that scope is quoted separately.</p>
      </section>
      <section>
        <h2>2. Payments</h2>
        <ul>
          <li>Prices are in Indian Rupees (INR) unless stated otherwise and exclude applicable taxes such as GST.</li>
          <li>Work starts after the advance or full payment in your quote is received.</li>
          <li>Larger projects may be split into milestones. Each milestone is due before the next stage begins.</li>
          <li>Final files, source code and access are handed over after full payment.</li>
          <li>Late payment may pause the project and move delivery dates.</li>
        </ul>
      </section>
      <section>
        <h2>3. Client responsibilities</h2>
        <ul>
          <li>Share content, logos, images, credentials and feedback on time.</li>
          <li>Make sure you own or have the right to use everything you give us.</li>
          <li>Give consolidated feedback so revision rounds stay efficient.</li>
        </ul>
      </section>
      <section>
        <h2>4. Timelines and revisions</h2>
        <p>Delivery dates are estimates and depend on timely inputs from you. Each package includes the revision rounds stated in your quote. Extra revisions, or major changes after approval, may be charged.</p>
      </section>
      <section>
        <h2>5. Intellectual property</h2>
        <ul>
          <li>After full payment, you own the final deliverables made specifically for you.</li>
          <li>We keep ownership of our pre-existing tools, templates, code libraries and know-how.</li>
          <li>Third-party assets such as fonts, stock media, plugins and themes stay under their own licences.</li>
          <li>We may show the finished work in our portfolio unless you ask us in writing not to.</li>
        </ul>
      </section>
      <section>
        <h2>6. Third-party services</h2>
        <p>Projects may rely on platforms such as hosting, domains, payment gateways, Firebase, Shopify or Cloudinary. Their fees, availability and terms are outside our control, and we are not responsible for their downtime or policy changes.</p>
      </section>
      <section>
        <h2>7. Hosting, maintenance and support</h2>
        <p>Unless a maintenance plan is purchased, hosting, updates, backups and new fixes after delivery are not included. Defects in our own work reported within 15 days of delivery are fixed at no extra cost.</p>
      </section>
      <section>
        <h2>8. Confidentiality</h2>
        <p>We keep your business information and credentials confidential and use them only for your project.</p>
      </section>
      <section>
        <h2>9. Limitation of liability</h2>
        <p>We do not guarantee business results such as sales, traffic or search ranking. To the extent the law allows, our total liability for any claim is limited to the amount you paid for the service in question, and we are not liable for indirect or consequential losses.</p>
      </section>
      <section>
        <h2>10. Acceptable use</h2>
        <p>You may not use our services for unlawful, fraudulent, infringing or harmful content. We may refuse or stop work that breaks this rule.</p>
      </section>
      <section>
        <h2>11. Termination</h2>
        <p>Either party may end a project by written notice. Payment for work completed up to that point stays due. Refunds are covered by our <Link href="/refunds">Refunds &amp; Cancellations</Link> policy.</p>
      </section>
      <section>
        <h2>12. Governing law</h2>
        <p>These terms are governed by the laws of India. Any dispute falls under the jurisdiction of the courts in Gurugram, Haryana.</p>
      </section>
      <section>
        <h2>13. Changes to these terms</h2>
        <p>We may update these terms from time to time. The updated version applies from the date shown at the top of this page.</p>
      </section>
      <section>
        <h2>14. Contact</h2>
        <p>Questions about these terms? Write to us on the <Link href="/contact">Contact Us</Link> page.</p>
      </section>
    </PolicyLayout>
  );
}
