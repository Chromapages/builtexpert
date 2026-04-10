import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export function Terms() {
  return (
    <div className="min-h-screen bg-md3-surface pt-32 pb-24">
      <SEO 
        title="Terms of Service | BuiltExpert"
        description="Terms of service and engagement rules for BuiltExpert."
      />
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-md3-on-surface">
          Terms of Service
        </h1>
        <p className="mb-6 text-zinc-500">Last Updated: April 5, 2026</p>
        
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing the BuiltExpert website or purchasing any of our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our site or engage our services. These terms constitute a legally binding agreement between you and BuiltExpert.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">2. Services</h2>
            <p>
              BuiltExpert provides a range of digital marketing and growth services specifically for trade contractors, including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>HVAC Lead System Audits ($297 Diagnostic)</li>
              <li>HVAC Lead Generation Systems</li>
              <li>Conversion-Optimized Landing Pages</li>
              <li>Local SEO & Google Business Profile Management</li>
              <li>HVAC Growth & Optimization Retainers</li>
            </ul>
            <p className="mt-4">
              The specific scope of work, deliverables, and timelines for each project will be defined in a separate Project Agreement or Statement of Work (SOW).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">3. Payments & Fees</h2>
            <p>
              <strong>HVAC Lead System Audit:</strong> The $297 fee is non-refundable once the audit process has begun and the final report/blueprint has been delivered.
            </p>
            <p className="mt-2">
              <strong>Project Services:</strong> Most website and design projects require a 50% non-refundable deposit to begin work. Final payment is due upon project completion or before the site goes live.
            </p>
            <p className="mt-2">
              <strong>Retainers:</strong> Monthly growth support retainers are billed in advance on a recurring monthly basis. Late payments (over 15 days) may result in service suspension.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">4. Cancellation & Termination</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Monthly Retainers:</strong> Either party may cancel a month-to-month retainer with a 30-day written notice.</li>
              <li><strong>Project Cancellations:</strong> If you cancel a project after work has started, the initial deposit is forfeited. BuiltExpert reserves the right to bill for additional hours worked beyond the deposit value.</li>
              <li><strong>Termination by BuiltExpert:</strong> We reserve the right to terminate services for non-payment, lack of cooperation, or violation of these terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">5. Ownership & Intellectual Property</h2>
            <p>
              <strong>"Work for Hire":</strong> Upon receipt of final payment, all custom websites, copy, and creative assets built specifically for the Client are considered "work for hire," and the Client owns all rights to such assets.
            </p>
            <p className="mt-2">
              <strong>BuiltExpert Rights:</strong> BuiltExpert retains ownership of any pre-existing software frameworks, scripts, or proprietary tools used in the project. BuiltExpert also retains the right to feature the completed project in our portfolio, case studies, and marketing materials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">6. No Guarantee of Results</h2>
            <p>
              While we engineer our systems for high conversion and ranking, BuiltExpert provides no guarantee of specific rankings, lead volumes, or revenue increases. SEO and digital marketing outcomes are subject to third-party algorithm changes (Google, Meta), market competition, and external factors beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, BuiltExpert's total liability for any claim arising from our services is limited to the fees paid by the Client in the three (3) months preceding the claim. BuiltExpert is not liable for indirect, incidental, or consequential damages, including loss of business or profits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">8. Indemnification</h2>
            <p>
              Client agrees to indemnify and hold BuiltExpert harmless from any claims, losses, or damages (including legal fees) arising from the Client's business operations, content provided by the Client, or the Client's breach of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">9. Third-Party Services</h2>
            <p>
              BuiltExpert often integrates third-party tools (Stripe, Google Analytics, ServiceTitan). These services are governed by their own respective terms. BuiltExpert is not responsible for outages or changes in policy by these third-party platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">10. Confidentiality</h2>
            <p>
              Both parties agree to keep all proprietary information (pricing, backend systems, growth strategies) confidential. This obligation extends beyond the termination of our working relationship.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">11. Governing Law & Venue</h2>
            <p>
              These terms are governed by the laws of the **State of California**. Any legal disputes shall be settled through binding arbitration in **Riverside County, California**, before any legal action is filed in court.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">12. Changes to Terms</h2>
            <p>
              BuiltExpert reserves the right to update these Terms of Service at any time. Continued use of our site and services after updates constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">13. Contact Information</h2>
            <p>
              For legal inquiries or questions regarding these terms, please contact us at:<br />
              <strong>Email:</strong> hello@builtexpert.com<br />
              <strong>Phone:</strong> (951) 295-9085
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-zinc-200">
            <Link to="/" className="text-md3-primary font-bold hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
