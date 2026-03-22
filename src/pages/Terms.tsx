import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const INDUSTRIAL = {
  charcoal: "#1a1a1a",
  muted: "#6b7280",
  outline: "#e5e7eb",
  surface: "#f9fafb",
  teal: "#0d9488",
  tealLight: "#f0fdfa",
};

const LAST_UPDATED = "March 22, 2026";
const COMPANY_NAME = "BuiltExpert";
const COMPANY_EMAIL = "hello@builtexpert.com";
const SITE_URL = "https://builtexpert.com";

export function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service — BuiltExpert"
        description="BuiltExpert Terms of Service. Read the terms and conditions governing use of our site and digital growth services for contractors."
        canonical="/terms"
      />

      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f2a2a 100%)",
          paddingTop: "7rem",
          paddingBottom: "3rem",
        }}
      >
        <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "0 2rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: INDUSTRIAL.teal,
              marginBottom: "1rem",
            }}
          >
            Legal
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "1rem",
              lineHeight: 1.1,
            }}
          >
            Terms of Service
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "0.95rem" }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          background: "#fff",
          minHeight: "60vh",
          paddingBottom: "5rem",
        }}
      >
        <div
          style={{
            maxWidth: "52rem",
            margin: "0 auto",
            padding: "3rem 2rem 0",
          }}
        >
          {/* Disclaimer */}
          <div
            style={{
              background: INDUSTRIAL.tealLight,
              border: `1px solid #99f6e4`,
              borderRadius: "0.5rem",
              padding: "1rem 1.25rem",
              marginBottom: "2.5rem",
              fontSize: "0.85rem",
              color: "#0f766e",
            }}
          >
            This is a template for informational purposes. Consult with a qualified attorney for legal advice specific to your situation.
          </div>

          <div style={{ color: INDUSTRIAL.charcoal, lineHeight: 1.75, fontSize: "0.95rem" }}>

            {/* 1 */}
            <Section title="1. Agreement to Terms">
              <p>
                By accessing or using the {COMPANY_NAME} website at {SITE_URL} (the "Site") or engaging any of our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not access or use the Site or our services.
              </p>
              <p>
                These Terms apply to all visitors, users, and others who access the Site. They govern your use of the Site and, together with any project agreement, subscription contract, or statement of work ("Service Agreement"), govern the delivery of our services.
              </p>
              <p>
                If there is a conflict between these Terms and a signed Service Agreement, the Service Agreement takes precedence for the specific matters it addresses.
              </p>
            </Section>

            {/* 2 */}
            <Section title="2. Description of Services">
              <p>
                {COMPANY_NAME} provides digital growth services to electrical, HVAC, and related trades contractors, including but not limited to:
              </p>
              <ul>
                <li>Website design, development, and hosting</li>
                <li>Local search engine optimisation (SEO)</li>
                <li>Google Business Profile management</li>
                <li>Conversion rate optimisation (CRO)</li>
                <li>Lead generation systems and consulting</li>
                <li>Performance reporting and analytics</li>
              </ul>
              <p>
                The specific services provided to you, their scope, pricing, and terms are set out in your individual Service Agreement. Nothing on this Site constitutes an offer or guarantee of specific results.
              </p>
            </Section>

            {/* 3 */}
            <Section title="3. Free Audit and Discovery Calls">
              <p>
                We offer free website audits and discovery calls to prospective clients. By requesting an audit or call, you acknowledge:
              </p>
              <ul>
                <li>The audit and call are provided free of charge and create no obligation to purchase services.</li>
                <li>The audit reflects observations as of the date conducted and may become outdated.</li>
                <li>Audit findings are for informational purposes only and do not constitute professional legal, financial, or technical advice.</li>
                <li>We reserve the right to decline audit requests at our discretion.</li>
              </ul>
            </Section>

            {/* 4 */}
            <Section title="4. Service Engagement and Contracts">
              <SubHeading>4.1 Service Agreements</SubHeading>
              <p>
                Paid engagement with {COMPANY_NAME} requires a separate written Service Agreement. No services will commence until a Service Agreement is signed and applicable fees are received.
              </p>

              <SubHeading>4.2 Subscription Services</SubHeading>
              <p>
                Where services are provided on a monthly subscription basis:
              </p>
              <ul>
                <li>Subscriptions renew automatically each month unless cancelled in writing with at least 30 days' notice prior to the renewal date.</li>
                <li>Fees are charged in advance at the start of each billing period.</li>
                <li>No refunds are issued for partial months except where required by law.</li>
                <li>We reserve the right to adjust pricing with 30 days' written notice to existing clients.</li>
              </ul>

              <SubHeading>4.3 Cancellation</SubHeading>
              <p>
                Either party may terminate a subscription with 30 days' written notice. Upon cancellation:
              </p>
              <ul>
                <li>You retain ownership of any website we built for you (subject to full payment of outstanding balances).</li>
                <li>We will provide reasonable transition assistance for up to 14 days post-termination.</li>
                <li>Any outstanding fees become immediately due.</li>
              </ul>

              <SubHeading>4.4 Payment Terms</SubHeading>
              <p>
                Fees are due as specified in your Service Agreement. Overdue balances accrue interest at 1.5% per month (or the maximum permitted by law, whichever is lower). We reserve the right to suspend services for accounts more than 14 days past due.
              </p>
            </Section>

            {/* 5 */}
            <Section title="5. Client Responsibilities">
              <p>To enable us to deliver services effectively, you agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information as requested.</li>
                <li>Grant necessary access to platforms (e.g., Google Business Profile, website CMS, analytics) in a timely manner.</li>
                <li>Review and provide feedback on deliverables within agreed timeframes.</li>
                <li>Ensure all content and materials you provide to us are accurate, legally compliant, and do not infringe third-party rights.</li>
                <li>Maintain all passwords and access credentials in confidence.</li>
                <li>Notify us promptly of any material changes to your business that may affect the services (e.g., service area changes, business name changes).</li>
              </ul>
              <p>
                Delays caused by your failure to fulfil these responsibilities may affect timelines and do not constitute a breach by {COMPANY_NAME}.
              </p>
            </Section>

            {/* 6 */}
            <Section title="6. Intellectual Property">
              <SubHeading>6.1 Our Content</SubHeading>
              <p>
                All content on the Site, including text, graphics, logos, images, and software, is the property of {COMPANY_NAME} or its licensors and is protected by copyright, trademark, and other applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
              </p>

              <SubHeading>6.2 Deliverables</SubHeading>
              <p>
                Upon full payment of all amounts due under a Service Agreement:
              </p>
              <ul>
                <li><strong>Website and design assets</strong> created specifically for you are transferred to you ("work for hire"), unless otherwise specified in the Service Agreement.</li>
                <li><strong>Proprietary tools, frameworks, systems, and methodologies</strong> developed by {COMPANY_NAME} remain our property. We grant you a non-exclusive licence to use them as integrated into your deliverables.</li>
                <li><strong>Third-party licensed assets</strong> (stock images, fonts, plugins) are subject to their respective licences, which we will communicate to you.</li>
              </ul>

              <SubHeading>6.3 Your Content</SubHeading>
              <p>
                You retain ownership of all content, data, and materials you provide to us. By providing us with content, you grant {COMPANY_NAME} a non-exclusive, royalty-free licence to use it solely for the purpose of delivering your services.
              </p>

              <SubHeading>6.4 Portfolio Rights</SubHeading>
              <p>
                Unless you request otherwise in writing, we may reference your business name and the services provided to you in our portfolio, case studies, and marketing materials. We will not disclose confidential business metrics without your explicit written permission.
              </p>
            </Section>

            {/* 7 */}
            <Section title="7. Confidentiality">
              <p>
                Both parties agree to keep confidential all non-public information disclosed by the other party in connection with the services, including business strategies, pricing, performance data, and proprietary processes ("Confidential Information").
              </p>
              <p>
                Confidential Information does not include information that: (a) is or becomes publicly known without breach; (b) was already known to the receiving party; (c) is independently developed without use of the Confidential Information; or (d) is required to be disclosed by law.
              </p>
              <p>
                These confidentiality obligations survive termination of any Service Agreement for a period of three (3) years.
              </p>
            </Section>

            {/* 8 */}
            <Section title="8. Performance and Results">
              <p>
                We apply proven SEO, CRO, and digital marketing methodologies. However, you acknowledge:
              </p>
              <ul>
                <li>Search engine rankings, call volumes, and lead generation results depend on many factors outside our control, including search engine algorithm changes, competitor activity, market conditions, and your business responsiveness.</li>
                <li>We do not guarantee specific ranking positions, lead volumes, or revenue outcomes unless expressly stated in writing in your Service Agreement.</li>
                <li>Historical results shared on our Site or in our materials represent past client outcomes and are not guarantees of future performance.</li>
                <li>Performance may vary by service area, market competition, and season.</li>
              </ul>
            </Section>

            {/* 9 */}
            <Section title="9. Disclaimers">
              <p>
                The Site and all information, content, and materials on it are provided on an "as is" and "as available" basis without warranties of any kind, express or implied, including but not limited to:
              </p>
              <ul>
                <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement.</li>
                <li>Warranties that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.</li>
                <li>Warranties as to the accuracy or completeness of any content on the Site.</li>
              </ul>
              <p>
                To the fullest extent permitted by applicable law, {COMPANY_NAME} disclaims all such warranties.
              </p>
            </Section>

            {/* 10 */}
            <Section title="10. Limitation of Liability">
              <p>
                To the maximum extent permitted by applicable law, {COMPANY_NAME}, its officers, directors, employees, and agents will not be liable for:
              </p>
              <ul>
                <li>Any indirect, incidental, consequential, special, or punitive damages.</li>
                <li>Loss of profits, revenue, data, goodwill, or business opportunities.</li>
                <li>Damages arising from your reliance on information on the Site.</li>
                <li>Any matter beyond our reasonable control.</li>
              </ul>
              <p>
                Our total aggregate liability to you for any claims arising from or related to the services shall not exceed the total fees paid by you to {COMPANY_NAME} in the three (3) months immediately preceding the event giving rise to the claim.
              </p>
              <p>
                Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In such jurisdictions, our liability is limited to the fullest extent permitted by law.
              </p>
            </Section>

            {/* 11 */}
            <Section title="11. Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless {COMPANY_NAME} and its officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, costs, and expenses (including reasonable attorney's fees) arising from:
              </p>
              <ul>
                <li>Your use of the Site or services in violation of these Terms.</li>
                <li>Content or materials you provide that infringe a third party's intellectual property or other rights.</li>
                <li>Your violation of any applicable law or regulation.</li>
                <li>Any misrepresentation you make in connection with the services.</li>
              </ul>
            </Section>

            {/* 12 */}
            <Section title="12. Acceptable Use">
              <p>You agree not to use the Site or services to:</p>
              <ul>
                <li>Violate any applicable local, national, or international laws or regulations.</li>
                <li>Transmit unsolicited commercial communications (spam).</li>
                <li>Attempt to gain unauthorised access to any part of the Site or its related systems.</li>
                <li>Upload or transmit any harmful, fraudulent, or deceptive content.</li>
                <li>Interfere with the proper working of the Site or disrupt other users' access.</li>
                <li>Scrape, crawl, or data-mine the Site without our prior written consent.</li>
                <li>Use the Site or services for any purpose that competes with {COMPANY_NAME}'s business.</li>
              </ul>
            </Section>

            {/* 13 */}
            <Section title="13. Third-Party Links and Services">
              <p>
                The Site may contain links to third-party websites or services. These are provided for convenience only. {COMPANY_NAME} does not endorse, control, or accept responsibility for any third-party content, products, or services. Your use of third-party sites is subject to their terms and privacy policies.
              </p>
            </Section>

            {/* 14 */}
            <Section title="14. Privacy">
              <p>
                Your use of the Site is subject to our{" "}
                <Link to="/privacy" style={{ color: INDUSTRIAL.teal }}>Privacy Policy</Link>
                , which is incorporated into these Terms by reference. By using the Site, you consent to the data practices described in the Privacy Policy.
              </p>
            </Section>

            {/* 15 */}
            <Section title="15. Governing Law and Dispute Resolution">
              <p>
                These Terms are governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any dispute arising from or related to these Terms shall be subject to the exclusive jurisdiction of the courts of [State], United States.
              </p>
              <p>
                Before initiating formal legal proceedings, both parties agree to attempt to resolve disputes in good faith through direct negotiation for a period of at least 30 days.
              </p>
              <p>
                For disputes involving amounts under $10,000, either party may elect binding arbitration under the American Arbitration Association's Consumer Arbitration Rules.
              </p>
            </Section>

            {/* 16 */}
            <Section title="16. Force Majeure">
              <p>
                Neither party shall be liable for delays or failure to perform due to causes beyond their reasonable control, including natural disasters, acts of government, labour disputes, internet outages, cyber-attacks, or pandemics. The affected party will notify the other as soon as practicable and use reasonable efforts to resume performance.
              </p>
            </Section>

            {/* 17 */}
            <Section title="17. Modifications to Terms">
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be communicated by updating the "Last updated" date at the top of this page and, where appropriate, by email or prominent notice on the Site.
              </p>
              <p>
                Your continued use of the Site or services after changes become effective constitutes acceptance of the revised Terms. If you do not agree, you must discontinue use of the Site and, where applicable, provide notice of termination under your Service Agreement.
              </p>
            </Section>

            {/* 18 */}
            <Section title="18. Severability and Waiver">
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force and effect.
              </p>
              <p>
                No waiver of any term or breach shall be deemed a waiver of any subsequent breach or of the term itself.
              </p>
            </Section>

            {/* 19 */}
            <Section title="19. Entire Agreement">
              <p>
                These Terms, together with any applicable Service Agreement and our Privacy Policy, constitute the entire agreement between you and {COMPANY_NAME} regarding your use of the Site and our services, and supersede all prior agreements, representations, and understandings.
              </p>
            </Section>

            {/* 20 */}
            <Section title="20. Contact Us" isLast>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p>
                <strong>{COMPANY_NAME}</strong><br />
                Email: <a href={`mailto:${COMPANY_EMAIL}`} style={{ color: INDUSTRIAL.teal }}>{COMPANY_EMAIL}</a><br />
                Website: <a href={SITE_URL} style={{ color: INDUSTRIAL.teal }}>{SITE_URL}</a>
              </p>

              <div
                style={{
                  marginTop: "2.5rem",
                  paddingTop: "2rem",
                  borderTop: `1px solid ${INDUSTRIAL.outline}`,
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/privacy"
                  style={{ color: INDUSTRIAL.teal, fontSize: "0.9rem", textDecoration: "underline" }}
                >
                  Privacy Policy →
                </Link>
                <Link
                  to="/contact"
                  style={{ color: INDUSTRIAL.teal, fontSize: "0.9rem", textDecoration: "underline" }}
                >
                  Contact Us →
                </Link>
              </div>
            </Section>

          </div>
        </div>
      </div>
    </>
  );
}

function Section({
  title,
  children,
  isLast = false,
}: {
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <section
      style={{
        paddingBottom: "2.5rem",
        marginBottom: isLast ? 0 : "2.5rem",
        borderBottom: isLast ? "none" : `1px solid ${INDUSTRIAL.outline}`,
      }}
    >
      <h2
        style={{
          fontSize: "1.2rem",
          fontWeight: 800,
          color: INDUSTRIAL.charcoal,
          marginBottom: "1.25rem",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: "0.95rem",
        fontWeight: 700,
        color: INDUSTRIAL.charcoal,
        marginTop: "0.5rem",
        marginBottom: "0",
      }}
    >
      {children}
    </h3>
  );
}
