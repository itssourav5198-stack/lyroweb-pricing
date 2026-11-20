import { Link } from "wouter";
import PolicyLayout from "@/components/PolicyLayout";

const stages = [
  ["Not started", "100% of the amount paid (minus payment gateway charges)"],
  ["Design or planning in progress", "Amount paid minus the value of work completed so far"],
  ["Development in progress", "Amount paid minus the value of work completed so far"],
  ["Delivered or approved", "No refund"],
];

export default function Refunds() {
  return (
    <PolicyLayout
      kicker="Legal"
      title={<>Refunds &amp; <em>Cancellations.</em></>}
      intro="We want you to be happy with the work. This page explains when you can cancel a service and when a refund applies."
      updated="19 November 2026"
    >
      <section>
        <h2>1. Cancelling before work starts</h2>
        <p>If you cancel before we begin work, you get a full refund of the amount paid, less any payment gateway charges that cannot be recovered.</p>
      </section>
      <section>
        <h2>2. Cancelling after work has started</h2>
        <p>Once work begins, time and resources are committed to your project. The refund depends on the stage reached.</p>
        <div className="policy-table-wrap">
          <table className="policy-table">
            <thead>
              <tr><th>Project stage</th><th>Refund</th></tr>
            </thead>
            <tbody>
              {stages.map(([stage, refund]) => (
                <tr key={stage}><td>{stage}</td><td>{refund}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>The value of work completed is calculated from the milestones and effort in your quote.</p>
      </section>
      <section>
        <h2>3. When a refund is not available</h2>
        <ul>
          <li>Final deliverables have been handed over or approved.</li>
          <li>Delays were caused by missing content, feedback or payments from your side.</li>
          <li>You changed your mind about style or direction after the agreed revisions were used.</li>
          <li>Third-party costs were already paid on your behalf, such as domains, hosting, themes, plugins or stock assets.</li>
          <li>Digital products and courses, once access has been granted.</li>
        </ul>
      </section>
      <section>
        <h2>4. When you get a full or partial refund</h2>
        <ul>
          <li>We fail to deliver the agreed scope and cannot fix it within a reasonable time.</li>
          <li>You were charged twice or charged an incorrect amount.</li>
          <li>We cancel the project for reasons on our side.</li>
        </ul>
      </section>
      <section>
        <h2>5. How to request a cancellation or refund</h2>
        <ol>
          <li>Email us from the address used for the order, with your name, order or invoice details and the reason.</li>
          <li>You can also reach us through the <Link href="/contact">Contact Us</Link> page.</li>
          <li>We review the request and reply within 2 business days.</li>
        </ol>
      </section>
      <section>
        <h2>6. Refund timeline</h2>
        <p>Approved refunds go back to the original payment method within 5–7 business days. Your bank or payment provider may take additional time to show the credit.</p>
      </section>
      <section>
        <h2>7. Subscriptions and maintenance plans</h2>
        <p>You can cancel a recurring plan at any time with written notice. Cancellation applies from the next billing cycle, and the current period is not refunded.</p>
      </section>
      <section>
        <h2>8. Questions</h2>
        <p>If anything is unclear, write to us on the <Link href="/contact">Contact Us</Link> page before you pay.</p>
      </section>
    </PolicyLayout>
  );
}
