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

export function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy — BuiltExpert"
        description="BuiltExpert Privacy Policy. Learn how we collect, use, and protect your personal data. GDPR and CCPA compliant."
        canonical="/privacy"
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
            Privacy Policy
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
            This Privacy Policy is provided for informational purposes. For legal advice specific to your situation, consult a qualified attorney.
          </div>

          <div style={{ color: INDUSTRIAL.charcoal, lineHeight: 1.75, fontSize: "0.95rem" }}>

            {/* 1 */}
            <Section title="1. Who We Are">
              <p>
                {COMPANY_NAME} ("we," "us," or "our") operates {SITE_URL} (the "Site"). We provide growth marketing and web development services for electrical and HVAC contractors.
              </p>
              <p>
                <strong>Data Controller:</strong><br />
                BuiltExpert<br />
                Email: <a href={`mailto:${COMPANY_EMAIL}`} style={{ color: INDUSTRIAL.teal }}>{COMPANY_EMAIL}</a>
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our Site or engage with our services.
              </p>
            </Section>

            {/* 2 */}
            <Section title="2. Information We Collect">
              <SubHeading>2.1 Information You Provide Directly</SubHeading>
              <p>When you complete our contact or audit request form, we collect:</p>
              <ul>
                <li><strong>Name</strong> — to address you personally.</li>
                <li><strong>Email address</strong> — to respond to your inquiry and send your audit.</li>
                <li><strong>Phone number</strong> (optional) — for follow-up calls if you request them.</li>
                <li><strong>Business website URL</strong> — to conduct your free site audit.</li>
                <li><strong>Trade / service type</strong> — to tailor our recommendations (e.g., electrician, HVAC).</li>
                <li><strong>Geographic service area</strong> — to perform local SEO analysis.</li>
                <li><strong>Goals and context</strong> (optional) — any notes you choose to share.</li>
              </ul>
              <p>We do not collect payment card information on this Site. Billing is handled separately via secure third-party processors.</p>

              <SubHeading>2.2 Information Collected Automatically</SubHeading>
              <p>When you visit the Site, we may automatically collect:</p>
              <ul>
                <li>IP address and approximate geographic location (city/region level)</li>
                <li>Browser type, version, and operating system</li>
                <li>Pages visited, time spent, and referring URL</li>
                <li>Device type (desktop, mobile, tablet)</li>
                <li>Cookie identifiers (see Section 6)</li>
              </ul>
              <p>This data is collected through server logs and analytics tools to understand how people use the Site and improve the experience.</p>

              <SubHeading>2.3 Information From Third Parties</SubHeading>
              <p>We may receive limited information from:</p>
              <ul>
                <li><strong>Formspree</strong> — our form processing service, which transmits your submission data to us securely.</li>
                <li><strong>Google Analytics</strong> or similar analytics providers — aggregated usage statistics.</li>
                <li><strong>Referral sources</strong> — if you arrive via a partner link, we may log the referral source.</li>
              </ul>
            </Section>

            {/* 3 */}
            <Section title="3. How We Use Your Information">
              <p>We use your personal data for the following purposes and on the following legal bases:</p>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem", marginTop: "1rem" }}>
                <thead>
                  <tr style={{ background: INDUSTRIAL.surface, borderBottom: `1px solid ${INDUSTRIAL.outline}` }}>
                    <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700 }}>Purpose</th>
                    <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700 }}>Legal Basis (GDPR)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Responding to your inquiry or audit request", "Legitimate interest / Pre-contractual steps"],
                    ["Conducting your free website audit", "Performance of a contract / Legitimate interest"],
                    ["Scheduling and preparing for discovery calls", "Legitimate interest"],
                    ["Delivering our services to active clients", "Performance of a contract"],
                    ["Sending relevant service updates or follow-up emails", "Legitimate interest (opt-out available)"],
                    ["Improving Site performance and UX", "Legitimate interest"],
                    ["Legal compliance and record-keeping", "Legal obligation"],
                    ["Fraud prevention and security", "Legitimate interest / Legal obligation"],
                  ].map(([purpose, basis], i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${INDUSTRIAL.outline}`, background: i % 2 === 0 ? "#fff" : INDUSTRIAL.surface }}>
                      <td style={{ padding: "0.75rem 1rem" }}>{purpose}</td>
                      <td style={{ padding: "0.75rem 1rem", color: INDUSTRIAL.muted }}>{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ marginTop: "1.25rem" }}>
                We will never sell your personal data to third parties. We will never share it with advertisers for targeting purposes.
              </p>
            </Section>

            {/* 4 */}
            <Section title="4. How We Share Your Information">
              <p>We share personal data only in the following circumstances:</p>
              <SubHeading>4.1 Service Providers</SubHeading>
              <p>We use trusted third-party vendors to operate the Site and deliver services. Each is bound by data processing agreements:</p>
              <ul>
                <li><strong>Formspree</strong> (form processing) — processes and forwards form submissions to us.</li>
                <li><strong>Google Analytics</strong> (analytics) — receives anonymised usage data.</li>
                <li><strong>Email providers</strong> — used to send transactional and follow-up emails.</li>
                <li><strong>Hosting providers</strong> — to serve the website.</li>
              </ul>

              <SubHeading>4.2 Legal Requirements</SubHeading>
              <p>We may disclose personal data where required to:</p>
              <ul>
                <li>Comply with applicable law or a valid legal process (subpoena, court order, etc.).</li>
                <li>Protect the rights, property, or safety of {COMPANY_NAME}, our clients, or others.</li>
                <li>Detect, prevent, or address fraud, security issues, or technical problems.</li>
              </ul>

              <SubHeading>4.3 Business Transfers</SubHeading>
              <p>If {COMPANY_NAME} is involved in a merger, acquisition, or asset sale, your personal data may be transferred. We will provide notice before your data is subject to a different privacy policy.</p>
            </Section>

            {/* 5 */}
            <Section title="5. Data Retention">
              <p>We retain your personal data for as long as necessary to fulfil the purposes described in this policy:</p>
              <ul>
                <li><strong>Inquiry and audit submissions:</strong> Up to 3 years from the date of submission, unless you become a client (in which case, for the duration of the engagement plus 5 years).</li>
                <li><strong>Active client data:</strong> For the duration of the engagement and up to 7 years after termination for legal and compliance purposes.</li>
                <li><strong>Analytics data:</strong> As configured with the analytics provider (typically 14 months for Google Analytics).</li>
                <li><strong>Cookies:</strong> See Section 6.</li>
              </ul>
              <p>You may request deletion of your data at any time (see Section 7).</p>
            </Section>

            {/* 6 */}
            <Section title="6. Cookies and Tracking">
              <SubHeading>6.1 What Cookies We Use</SubHeading>
              <p>We use the following types of cookies:</p>
              <ul>
                <li><strong>Strictly necessary cookies:</strong> Required for the Site to function (e.g., form state, session). These cannot be disabled.</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with the Site (e.g., Google Analytics). We use IP anonymisation.</li>
                <li><strong>Preference cookies:</strong> Remember your settings (e.g., dark mode if applicable).</li>
              </ul>
              <p>We do <strong>not</strong> use advertising or retargeting cookies on this Site.</p>

              <SubHeading>6.2 Managing Cookies</SubHeading>
              <p>You can control cookies through your browser settings. Disabling analytics cookies will not affect your ability to use the Site. For more information, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" style={{ color: INDUSTRIAL.teal }}>allaboutcookies.org</a>.</p>
            </Section>

            {/* 7 */}
            <Section title="7. Your Rights">
              <SubHeading>7.1 Rights Under GDPR (EEA / UK residents)</SubHeading>
              <p>If you are located in the European Economic Area or United Kingdom, you have the right to:</p>
              <ul>
                <li><strong>Access</strong> — Request a copy of the personal data we hold about you.</li>
                <li><strong>Rectification</strong> — Ask us to correct inaccurate or incomplete data.</li>
                <li><strong>Erasure ("right to be forgotten")</strong> — Request deletion of your personal data, subject to certain exceptions.</li>
                <li><strong>Restriction</strong> — Ask us to restrict processing of your data in certain circumstances.</li>
                <li><strong>Data portability</strong> — Receive your data in a structured, machine-readable format.</li>
                <li><strong>Objection</strong> — Object to processing based on legitimate interests.</li>
                <li><strong>Withdraw consent</strong> — Where processing is based on consent, withdraw it at any time without affecting prior lawful processing.</li>
              </ul>
              <p>To lodge a complaint, you may contact your national data protection authority (e.g., the ICO in the UK, or your relevant supervisory authority in the EEA).</p>

              <SubHeading>7.2 Rights Under CCPA (California residents)</SubHeading>
              <p>If you are a California resident, the California Consumer Privacy Act (CCPA) / CPRA provides you the right to:</p>
              <ul>
                <li><strong>Know</strong> — what personal information we collect and how it is used.</li>
                <li><strong>Delete</strong> — request deletion of personal information we have collected.</li>
                <li><strong>Correct</strong> — inaccurate personal information.</li>
                <li><strong>Opt-out of sale</strong> — we do not sell personal information.</li>
                <li><strong>Non-discrimination</strong> — we will not discriminate against you for exercising your rights.</li>
              </ul>
              <p>To submit a CCPA request, email us at <a href={`mailto:${COMPANY_EMAIL}`} style={{ color: INDUSTRIAL.teal }}>{COMPANY_EMAIL}</a> with the subject line "CCPA Request."</p>

              <SubHeading>7.3 How to Exercise Your Rights</SubHeading>
              <p>
                Email <a href={`mailto:${COMPANY_EMAIL}`} style={{ color: INDUSTRIAL.teal }}>{COMPANY_EMAIL}</a> with your request. We will respond within 30 days (GDPR) or 45 days (CCPA). We may ask you to verify your identity before processing the request.
              </p>
            </Section>

            {/* 8 */}
            <Section title="8. Data Security">
              <p>We take reasonable technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction, including:</p>
              <ul>
                <li>HTTPS encryption for all data in transit</li>
                <li>Access controls limiting data access to authorised team members only</li>
                <li>Third-party processors reviewed for compliance and security practices</li>
                <li>Regular review of security practices</li>
              </ul>
              <p>No method of transmission or storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.</p>
              <p>In the event of a data breach that poses a high risk to your rights and freedoms, we will notify affected individuals and relevant authorities as required by law.</p>
            </Section>

            {/* 9 */}
            <Section title="9. International Data Transfers">
              <p>
                {COMPANY_NAME} is based in the United States. If you are accessing the Site from outside the US (including from the EEA or UK), your data may be transferred to and processed in the United States.
              </p>
              <p>
                For EEA/UK residents, where we transfer data internationally, we use appropriate safeguards such as Standard Contractual Clauses (SCCs) to ensure your data remains protected to the same standard as within the EEA/UK.
              </p>
            </Section>

            {/* 10 */}
            <Section title="10. Children's Privacy">
              <p>
                Our Site and services are not directed at children under the age of 13 (or 16 in the EEA). We do not knowingly collect personal data from children. If you believe we have inadvertently collected information from a child, please contact us immediately at <a href={`mailto:${COMPANY_EMAIL}`} style={{ color: INDUSTRIAL.teal }}>{COMPANY_EMAIL}</a> and we will promptly delete it.
              </p>
            </Section>

            {/* 11 */}
            <Section title="11. Links to Third-Party Websites">
              <p>
                Our Site may contain links to external websites. This Privacy Policy does not apply to those sites. We recommend reviewing the privacy policies of any third-party sites you visit. We are not responsible for the content or privacy practices of external sites.
              </p>
            </Section>

            {/* 12 */}
            <Section title="12. Email Communications">
              <p>
                If you submit a form or contact us, you may receive email communications from us relating to your inquiry, your audit, or our services. Every non-transactional email includes an unsubscribe link. You may also opt out at any time by emailing <a href={`mailto:${COMPANY_EMAIL}`} style={{ color: INDUSTRIAL.teal }}>{COMPANY_EMAIL}</a> with "Unsubscribe" in the subject line.
              </p>
              <p>
                We comply with the CAN-SPAM Act (US) and CASL (Canada) where applicable.
              </p>
            </Section>

            {/* 13 */}
            <Section title="13. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. For material changes, we will provide prominent notice on the Site or by email to affected individuals. Your continued use of the Site after changes take effect constitutes acceptance of the updated policy.
              </p>
              <p>We encourage you to review this page periodically.</p>
            </Section>

            {/* 14 */}
            <Section title="14. Contact Us" isLast>
              <p>For any questions, concerns, or requests regarding this Privacy Policy or your personal data:</p>
              <p>
                <strong>{COMPANY_NAME}</strong><br />
                Email: <a href={`mailto:${COMPANY_EMAIL}`} style={{ color: INDUSTRIAL.teal }}>{COMPANY_EMAIL}</a><br />
                Website: <a href={SITE_URL} style={{ color: INDUSTRIAL.teal }}>{SITE_URL}</a>
              </p>
              <p>We aim to respond to all privacy-related enquiries within 5 business days.</p>

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
                  to="/terms"
                  style={{ color: INDUSTRIAL.teal, fontSize: "0.9rem", textDecoration: "underline" }}
                >
                  Terms of Service →
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
