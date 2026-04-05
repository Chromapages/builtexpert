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
        <p className="mb-6 text-zinc-500">Last Updated: March 26, 2026</p>
        
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">1. Introduction</h2>
            <p>
              BuiltExpert ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us through our contact forms or when you book a 
              strategy call. This may include your name, email address, phone number, and business details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">3. How We Use Your Information</h2>
            <p>
              We use the collected information to respond to your inquiries, provide our web design and marketing 
              services, and send occasional updates if you've opted in to our newsletter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. However, no method of 
              transmission over the internet is 100% secure.
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
