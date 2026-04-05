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
        <p className="mb-6 text-zinc-500">Last Updated: March 26, 2026</p>
        
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">1. Engagement</h2>
            <p>
              By accessing our website and services, you agree to be bound by these Terms of Service. 
              BuiltExpert provides web design, SEO, and marketing services specifically tailored for trade contractors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">2. Intellectual Property</h2>
            <p>
              All websites built by BuiltExpert are considered "work for hire" upon final payment. 
              BuiltExpert retains rights to use the project in our portfolio and marketing materials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">3. Limitation of Liability</h2>
            <p>
              BuiltExpert is not liable for loss of business, revenue, or data resulting from website downtime 
              or SEO fluctuations. We provide our services on an "as-is" basis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-md3-on-surface mb-4">4. Governing Law</h2>
            <p>
              These terms are governed by the laws of the jurisdiction in which BuiltExpert operates.
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
