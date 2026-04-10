import * as React from "react";
import { ArrowRight, CheckCircle2, Loader2, X, Play, Target, BarChart3, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { SEO } from "@/components/SEO";
import { trackEvent } from "@/components/Analytics";
import { submitToCRM } from "@/lib/crm";
import {
  INDUSTRIAL,
  industrialMeshStyle,
} from "@/lib/industrialStyle";

type AuditStep = 1 | 2 | 3 | 4;

const AUDIT_AREAS = [
  {
    icon: <Target className="size-6" />,
    title: "Competitor Market Share",
    desc: "We identify the 3 rivals hoarding your local leads and exactly what they're doing to win.",
  },
  {
    icon: <BarChart3 className="size-6" />,
    title: "Lead-Loss Points",
    desc: "A manual teardown of your conversion path to find where you're losing 20-40% of potential calls.",
  },
  {
    icon: <AlertCircle className="size-6" />,
    title: "Technical SEO Audit",
    desc: "Finding the hidden speed and ranking errors that no automated tool will ever catch.",
  },
];

const WHY_PAID = [
  "No automated boilerplate reports",
  "Manual video walkthrough (~15 mins)",
  "Zero credit-back gimmicks",
  "A real strategic asset you own",
];

export function Audit() {
  const [step, setStep] = React.useState<AuditStep>(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string>("");
  const [formData, setFormData] = React.useState({
    website: "",
    company: "",
    trade: "",
    leads: "",
    name: "",
    email: "",
    phone: "",
  });

  const nextStep = () => setStep((s) => (s + 1) as AuditStep);
  const prevStep = () => setStep((s) => (s - 1) as AuditStep);
  const stepLabels = ["Business", "Trade", "Leads", "Contact"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Submit to CRM
    submitToCRM({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      brandId: "builtexpert",
      sourceDetail: `Audit Page - ${formData.trade}`,
    });

    try {
      // 1. Submit lead details first (capture the lead)
      const leadResponse = await fetch("/api/lead-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadType: "audit_initiated",
          ...formData,
          source: "audit-page-redesign",
        }),
      });

      const leadData = await leadResponse.json().catch(() => ({}));
      if (!leadResponse.ok) {
        throw new Error(typeof leadData.error === "string" ? leadData.error : "Failed to capture audit details");
      }

      // 2. Create Stripe Checkout Session
      const response = await fetch("/api/create-audit-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
        }),
      });

      const data = await response.json().catch(() => ({}));
      
      if (!response.ok) {
        throw new Error(typeof data.error === "string" ? data.error : "Failed to start secure checkout");
      }

      if (data.error) throw new Error(data.error);
      if (data.url) {
        trackEvent("audit_checkout_start", { email: formData.email });
        window.location.href = data.url;
        return;
      }

      throw new Error("Stripe session URL was not returned");
    } catch (error: any) {
      console.error("Audit submission error:", error);
      setSubmitError(error?.message || "We couldn't initiate secure checkout. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="HVAC Lead System Audit — $297 Strategic Diagnostic"
        description="A manual, deep-dive diagnostic of your HVAC business's digital presence. Find exactly what's costing you calls."
        canonicalPath="/audit"
      />

      <div className="min-h-screen bg-white font-body tracking-tight antialiased" style={industrialMeshStyle}>
        
        {/* --- Hero / Sales Section --- */}
        <section className="relative overflow-hidden pt-32 pb-24 border-b" style={{ borderColor: INDUSTRIAL.outline }}>
          <div className="mx-auto max-w-[1440px] px-8">
            <div className="max-w-4xl">
              <span className="mb-6 inline-block rounded-full border border-md3-primary/20 bg-md3-primary/5 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                Low-Friction Entry Offer
              </span>
              <h1 className="mb-8 font-headline text-6xl font-bold tracking-tighter text-[#1a1a1a] md:text-8xl lg:text-9xl uppercase">
                HVAC Lead <br />
                <span className="text-md3-primary">System Audit.</span>
              </h1>
              <p className="max-w-2xl text-xl font-light leading-relaxed text-zinc-600 md:text-2xl">
                Before you hire another agency or spend another $1k on Google Ads, find out why your current system isn&apos;t performing. A manual, 47-point diagnostic for <span className="font-semibold text-[#1a1a1a]">$297</span>.
              </p>
            </div>
          </div>
        </section>

        {/* --- What's Included --- */}
        <section className="py-24 border-b" style={{ borderColor: INDUSTRIAL.outline }}>
          <div className="mx-auto max-w-[1440px] px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {AUDIT_AREAS.map((area, idx) => (
                <div key={idx} className="group flex flex-col items-start">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center bg-zinc-50 border transition-all group-hover:bg-md3-primary group-hover:text-white" style={{ borderColor: INDUSTRIAL.outline }}>
                    {area.icon}
                  </div>
                  <h3 className="mb-4 font-headline text-xl font-bold">{area.title}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 bg-[#1a1a1a] p-12 text-white">
               <div>
                  <h2 className="font-headline font -light text-3xl font-bold mb-6">Why is this $297?</h2>
                  <p className="text-zinc-400 font-light mb-8">
                    Free audits are automated lead-magnets. They don&apos;t look at your competitors, they don&apos;t understand your local market dynamics, and they don&apos;t find the &quot;Lead Leaks&quot; in your specific landing pages.
                  </p>
                  <ul className="space-y-4">
                    {WHY_PAID.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-teal-400">
                        <CheckCircle2 className="size-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="relative flex items-center justify-center bg-zinc-900 border border-zinc-800 border-dashed p-8">
                  <div className="text-center">
                    <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-md3-primary/10 text-md3-primary">
                      <Play className="size-8 fill-current" />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em]">Sample Audit Video</p>
                    <p className="text-xs text-zinc-500 mt-2">14 mins of pure strategic value</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* --- The Audit Form --- */}
        <section id="book-now" className="py-24">
          <div className="mx-auto max-w-3xl px-8">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Initialize Your Audit</h2>
              <p className="text-zinc-500 font-light">Tell us about your business. We collect the data first, then you securely pay via Stripe.</p>
            </div>

            <div className="overflow-hidden bg-white shadow-2xl border" style={{ borderColor: INDUSTRIAL.outline }}>
              <div className="h-1.5 w-full bg-zinc-100">
                <div
                  className="bg-md3-primary transition-all duration-500"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>

              <form onSubmit={handleSubmit} className="p-10 md:p-16">
                <div className="mb-8 grid grid-cols-4 gap-2 sm:gap-4">
                  {stepLabels.map((label, index) => {
                    const stepNumber = index + 1;
                    const isActive = step === stepNumber;
                    const isComplete = step > stepNumber;

                    return (
                      <div key={label} className="flex flex-col items-center gap-2 text-center">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold ${
                            isActive || isComplete
                              ? "border-md3-primary bg-md3-primary text-white"
                              : "border-zinc-200 text-zinc-400"
                          }`}
                        >
                          {stepNumber}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="mb-8 font-headline text-2xl font-bold uppercase tracking-tight">The Business Assets</h3>
                    <div className="space-y-8">
                      <div>
                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Website URL</label>
                        <input
                          required
                          type="url"
                          placeholder="https://yourcontractingsite.com"
                          className="w-full border-b border-zinc-200 py-4 text-xl font-light outline-none transition-colors focus:border-md3-primary"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Company Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Elite Mechanical"
                          className="w-full border-b border-zinc-200 py-4 text-xl font-light outline-none transition-colors focus:border-md3-primary"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.website || !formData.company}
                      className="mt-12 flex w-full items-center justify-center gap-3 bg-[#1a1a1a] py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-md3-primary disabled:opacity-50"
                    >
                      Step 2: The Trade
                      <ArrowRight className="size-4" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="mb-8 font-headline text-2xl font-bold uppercase tracking-tight">What is your primary trade?</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {[
                        "HVAC / Mechanical",
                        "Electrical",
                        "Plumbing",
                        "Home Performance",
                        "Solar / Energy",
                        "General Contracting",
                      ].map((trade) => (
                        <button
                          key={trade}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, trade });
                            nextStep();
                          }}
                          className={`border p-6 text-left transition-all ${
                            formData.trade === trade
                              ? "border-md3-primary bg-md3-primary/5 ring-1 ring-md3-primary"
                              : "border-zinc-100 hover:border-zinc-300"
                          }`}
                        >
                          <span className="text-sm font-medium">{trade}</span>
                        </button>
                      ))}
                    </div>
                    <button onClick={prevStep} type="button" className="mt-8 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-600">← Back</button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="mb-8 font-headline text-2xl font-bold uppercase tracking-tight">Current monthly lead volume?</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        "0–10 leads / month",
                        "10–30 leads / month",
                        "30–100 leads / month",
                        "100+ leads / month",
                      ].map((leads) => (
                        <button
                          key={leads}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, leads });
                            nextStep();
                          }}
                          className={`border p-6 text-left transition-all ${
                            formData.leads === leads
                              ? "border-md3-primary bg-md3-primary/5 ring-1 ring-md3-primary"
                              : "border-zinc-100 hover:border-zinc-300"
                          }`}
                        >
                          <span className="text-sm font-medium">{leads}</span>
                        </button>
                      ))}
                    </div>
                    <button onClick={prevStep} type="button" className="mt-8 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-600">← Back</button>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="mb-8 font-headline text-2xl font-bold uppercase tracking-tight">Audit Point of Contact</h3>
                    {submitError && <div className="mb-6 bg-red-50 p-4 font-medium text-red-600 border border-red-100 text-sm">{submitError}</div>}
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Name</label>
                          <input required type="text" className="w-full border-b border-zinc-200 py-3 text-lg outline-none focus:border-md3-primary" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        </div>
                        <div>
                          <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Phone</label>
                          <input required type="tel" inputMode="numeric" autoComplete="tel" className="w-full border-b border-zinc-200 py-3 text-lg outline-none focus:border-md3-primary" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Work Email</label>
                        <input required type="email" inputMode="email" autoComplete="email" className="w-full border-b border-zinc-200 py-3 text-lg outline-none focus:border-md3-primary" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                      </div>
                    </div>
                    <button
                      disabled={isSubmitting}
                      className="mt-12 flex w-full items-center justify-center gap-3 bg-md3-primary py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#1a1a1a] disabled:opacity-50"
                    >
                      {isSubmitting ? <><Loader2 className="animate-spin" /> Redirecting to Secure Payment...</> : "Complete Secure Booking — $297"}
                    </button>
                    <button onClick={prevStep} type="button" className="mt-8 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-600">← Back</button>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="py-24 bg-zinc-50 border-t" style={{ borderColor: INDUSTRIAL.outline }}>
           <div className="mx-auto max-w-[1440px] px-8">
              <h2 className="font-headline text-3xl font-bold mb-12 uppercase">Audit FAQ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 {[
                   { q: "Is this a recurring fee?", a: "No. This is a one-time diagnostic fee of $297. There are no ongoing commitments unless you decide to work with us later." },
                   { q: "How long until I get the result?", a: "Standard turnaround is 48 business hours. We manually record your audit video and draft the action plan within that timeframe." },
                   { q: "What if I don't have a website yet?", a: "Then we audit your competitors and your mapping presence to show you exactly what the market demands for your first build." },
                   { q: "Can I use this for multiple companies?", a: "This price covers a single brand audit. For multi-location or franchise groups, contact us for a custom quote." }
                 ].map((item, idx) => (
                   <div key={idx}>
                      <h4 className="font-bold text-sm uppercase tracking-widest mb-3 text-zinc-500">{item.q}</h4>
                      <p className="text-zinc-600 font-light leading-relaxed">{item.a}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

      </div>
    </>
  );
}
