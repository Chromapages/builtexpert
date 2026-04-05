import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export function Privacy() {
  return (
    <div className="min-h-screen bg-md3-surface pt-32 pb-24">
      <SEO 
        title="Privacy Policy | BuiltExpert"
        description="Privacy policy and data protection information for BuiltExpert."
      />
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-md3-on-surface">
          Privacy Policy
        </h1>
        <p className="mb-6 text-zinc-500">Last Updated: April 5, 2026</p>
        
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">1. Introduction</h2>
            <p>
              BuiltExpert ("we," "our," or "us") is dedicated to protecting the privacy of our visitors and clients. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">2. Information We Collect</h2>
            <p>We collect information that you provide directly to us through several channels:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Contact Forms:</strong> Name, email address, website URL, service interests, and project goals.</li>
              <li><strong>Audit Requests:</strong> Company name, website URL, trade category, current lead volume, name, phone number, and email.</li>
              <li><strong>Payment Information:</strong> Financial transactions are processed securely through **Stripe**. BuiltExpert does not store or see your full credit card or bank account details.</li>
              <li><strong>Automated Data:</strong> We automatically collect certain information when you visit, including your IP address, browser type, referral source, and pages visited via **Google Analytics (GA4)** and **Google Tag Manager (GTM)**.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 mt-4 space-y-1">
              <li>Respond to your inquiries and schedule strategy calls</li>
              <li>Deliver Lead System Audits and project blueprints</li>
              <li>Process payments and manage billing</li>
              <li>Provide ongoing growth support and SEO reporting</li>
              <li>Send technical notices, updates, and marketing communications (with your consent)</li>
              <li>Analyze site performance and improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">4. Sharing Your Information</h2>
            <p>
              BuiltExpert does not sell or rent your personal information to third parties. We share your data only with trusted service providers (e.g., Stripe, Google Analytics) to perform functions on our behalf. We may also disclose information if required by law or to protect our legal rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">5. Cookies & Tracking</h2>
            <p>
              We use cookies to enhance your experience and collect site traffic data. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">6. Email Communications (CAN-SPAM)</h2>
            <p>
              In compliance with the **CAN-SPAN Act**, we agree to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Not use false or misleading subjects or email addresses</li>
              <li>Identify the message as an advertisement in some reasonable way</li>
              <li>Include the physical address of our business</li>
              <li>Monitor third-party email marketing services for compliance</li>
              <li>Honor opt-out/unsubscribe requests quickly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">7. Data Retention</h2>
            <p>
              We retain contact and lead information for as long as we have an active business relationship, and for up to two (2) years thereafter, unless a longer retention period is required by law for tax or legal compliance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">8. Security</h2>
            <p>
              We prioritize data security and use industry-standard measures (SSL/TLS encryption) to protect your information. However, no electronic transmission or storage method is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">9. Your Rights (CCPA Compliance)</h2>
            <p>
              Under the **California Consumer Privacy Act (CCPA)**, California residents have the following rights:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-1">
              <li><strong>Right to Know:</strong> You may request to know what personal data we have collected about you.</li>
              <li><strong>Right to Delete:</strong> You may request that we delete your personal data.</li>
              <li><strong>Right to Opt-Out:</strong> We do not sell your personal data; however, you retain the right to opt-out of any future data sales.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
            </ul>
            <p className="mt-4">To exercise these rights, please contact us at **hello@builtexpert.com**.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">10. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we learn we have collected such data, we will delete it immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">11. Third-Party Links</h2>
            <p>
              Our site may contain links to other websites. We are not responsible for the privacy practices or content of these third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">12. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">13. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:<br />
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
