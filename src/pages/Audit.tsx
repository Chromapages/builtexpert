import * as React from "react";
import { ArrowRight, CheckCircle2, Loader2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { SEO } from "@/components/SEO";
import { getAuditOffer } from "@/lib/sanity.client";
import { trackEvent } from "@/components/Analytics";
import {
  INDUSTRIAL,
  industrialMeshStyle,
} from "@/lib/industrialStyle";

type AuditStep = 1 | 2 | 3 | 4;

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  turnaround: string;
}

function SuccessModal({ isOpen, onClose, email, turnaround }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0a1f1f]/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl overflow-hidden bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
            style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
          >
            <div className="h-1.5 w-full bg-md3-primary" />

            <div className="relative flex h-32 items-center justify-center overflow-hidden bg-[#0a1f1f]">
              <div className="absolute inset-0 opacity-[0.05]" style={industrialMeshStyle} />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/10 text-teal-400"
                style={{ borderWidth: "0.5px", borderColor: "rgba(45,212,191,0.2)" }}
              >
                <CheckCircle2 className="size-10" />
              </motion.div>
            </div>

            <div className="p-10 text-center">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600">
                Request Received
              </span>
              <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-[#1a1a1a]">
                Audit Request Received
              </h2>
              <p className="mx-auto mb-8 max-sm text-sm font-light leading-relaxed text-zinc-500">
                We&apos;ve received your request for a Lead System Audit. We&apos;ll reach out to{" "}
                <span className="font-semibold text-[#1a1a1a]">{email}</span> within {turnaround} to
                confirm details and provide the next steps.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Link
                  to="/"
                  className="flex w-full items-center justify-center border border-zinc-200 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600 transition-all hover:bg-zinc-50"
                >
                  Back to Home
                </Link>
                <Link
                  to="/contact?ref=audit-success"
                  className="flex w-full items-center justify-center bg-[#1a1a1a] py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-md3-primary"
                >
                  Book Strategy Call →
                </Link>
              </div>

              <div className="mt-8 border-t pt-8" style={{ borderTopWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400">
                  Ready to scale faster? <span className="text-zinc-500">Fast-track your growth with a strategy call.</span>
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-zinc-400 transition-colors hover:text-white"
            >
              <X className="size-5" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

const FALLBACK_AUDIT_AREAS = [
  {
    icon: "analytics",
    title: "Competitor Analysis",
    desc: "See exactly where your local rivals are winning and how to take those rankings back.",
  },
  {
    icon: "speed",
    title: "Performance & Technical Audit",
    desc: "Identify load speed issues, mobile problems, and technical gaps suppressing your rankings.",
  },
  {
    icon: "map",
    title: "Google Maps Audit",
    desc: "We review your GBP profile against top-ranking local competitors to find quick-win improvements.",
  },
];

const FALLBACK_FAQ = [
  {
    question: "Is this a sales call?",
    answer: "No. It's a paid diagnostic that shows you what is broken and what to fix first.",
  },
  {
    question: "How long does the audit take?",
    answer: "We'll send your personalised breakdown within 2 business days.",
  },
  {
    question: "What do I need to provide?",
    answer: "Just your name, email, phone number, and website URL.",
  },
];

export function Audit() {
  const [step, setStep] = React.useState<AuditStep>(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string>("");
  const [auditOffer, setAuditOffer] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [formData, setFormData] = React.useState({
    website: "",
    company: "",
    trade: "",
    leads: "",
    name: "",
    email: "",
    phone: "",
  });

  React.useEffect(() => {
    let active = true;

    async function fetchOffer() {
      setIsLoading(true);
      try {
        const data = await getAuditOffer();
        if (active && data) setAuditOffer(data);
      } catch (error) {
        console.error("Error fetching audit offer:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchOffer();

    return () => {
      active = false;
    };
  }, []);

  const nextStep = () => setStep((s) => (s + 1) as AuditStep);
  const prevStep = () => setStep((s) => (s - 1) as AuditStep);

  const auditPrice = auditOffer?.auditPrice ?? 497;
  const turnaround = auditOffer?.turnaround ?? "2 business days";
  const headline = auditOffer?.headline ?? "Lead System Audit";
  const subheadline =
    auditOffer?.subheadline ??
    "A manual, deep-dive diagnostic of your entire digital presence. $497 one-time investment to find exactly what's costing you calls.";
  const auditAreas = auditOffer?.auditAreas?.length > 0 ? auditOffer.auditAreas : FALLBACK_AUDIT_AREAS;
  const faqItems = auditOffer?.faq?.length > 0 ? auditOffer.faq : FALLBACK_FAQ;
  const trustStats =
    auditOffer?.trustStats?.length > 0
      ? auditOffer.trustStats
      : [
          { label: "Price", value: `$${auditPrice}` },
          { label: "Turnaround", value: turnaround },
          { label: "Format", value: "Video + action plan" },
        ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch("/api/lead-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          leadType: "audit",
          name: formData.name,
          email: formData.email,
          website: formData.website,
          company: formData.company,
          phone: formData.phone,
          trade: formData.trade,
          leads: formData.leads,
          source: "audit-page",
          _gotcha: "",
        }),
      });

      if (!response.ok) {
        throw new Error("Audit submission failed");
      }

      trackEvent("form_submit", { form: "audit" });
      setIsDone(true);
    } catch (error) {
      console.error("Error submitting audit request:", error);
      setSubmitError("Something went wrong submitting your audit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title={`Lead System Audit — $${auditPrice}`}
        description={subheadline}
        canonicalPath="/audit"
      />

      <div
        className="min-h-screen pb-32 pt-24 font-body tracking-tight antialiased"
        style={industrialMeshStyle}
      >
        <SuccessModal
          isOpen={isDone}
          onClose={() => setIsDone(false)}
          email={formData.email}
          turnaround={turnaround}
        />

        <div className="mx-auto max-w-3xl px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="inline-block rounded-full border border-md3-primary/20 bg-md3-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                Strategic Entry Offer
              </span>
            </div>
            <h1 className="mb-4 font-headline text-5xl font-bold tracking-tighter text-[#1a1a1a] md:text-6xl">
              {headline}
            </h1>
            <p className="mx-auto max-w-xl text-lg font-light text-zinc-600">
              {subheadline}
            </p>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">
              This is a paid engagement. We do not give strategic audits away free because your situation deserves real attention.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-xl" style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
            <div className="flex h-1.5 w-full bg-zinc-100">
              <div
                className="bg-md3-primary transition-all duration-500 ease-in-out"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="mb-8 font-headline text-2xl font-bold text-zinc-800">
                    What&apos;s your website?
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Website URL
                      </label>
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
                      <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Company Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Elite Electricians LLC"
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
                    className="mt-12 flex w-full items-center justify-center gap-3 bg-md3-primary py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-zinc-800 disabled:opacity-50"
                  >
                    Next Step
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="mb-8 font-headline text-2xl font-bold text-zinc-800">
                    What is your primary trade?
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      "Residential Electrician",
                      "Commercial Electrician",
                      "HVAC / Mechanical",
                      "Plumbing",
                      "Home Performance",
                      "Other Specialty Trade",
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
                        style={{ borderWidth: "0.5px" }}
                      >
                        <span className="text-sm font-medium">{trade}</span>
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={prevStep}
                    className="mt-8 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-600"
                  >
                    ← Back
                  </button>
                </div>
              )}

              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="mb-8 font-headline text-2xl font-bold text-zinc-800">
                    Current monthly lead volume?
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "0–5 leads / month (Starting out)",
                      "5–15 leads / month (Established)",
                      "15–50 leads / month (Scaling)",
                      "50+ leads / month (Dominating)",
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
                        style={{ borderWidth: "0.5px" }}
                      >
                        <span className="text-sm font-medium">{leads}</span>
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={prevStep}
                    className="mt-8 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-600"
                  >
                    ← Back
                  </button>
                </div>
              )}

              {step === 4 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="mb-8 font-headline text-2xl font-bold text-zinc-800">
                    Where should we send the audit?
                  </h2>
                  {submitError && (
                    <div className="mb-6 rounded-xl border border-md3-error/25 bg-md3-error/10 p-4 text-sm text-md3-error">
                      {submitError}
                    </div>
                  )}
                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full border-b border-zinc-200 py-4 text-xl font-light outline-none transition-colors focus:border-md3-primary"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        className="w-full border-b border-zinc-200 py-4 text-xl font-light outline-none transition-colors focus:border-md3-primary"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="(555) 000-0000"
                        className="w-full border-b border-zinc-200 py-4 text-xl font-light outline-none transition-colors focus:border-md3-primary"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="mt-12 flex w-full items-center justify-center gap-3 bg-md3-primary py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-zinc-800 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Generating Request...
                      </>
                    ) : (
                      <>
                        Book My Audit — ${auditPrice}
                        <ArrowRight className="size-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={prevStep}
                    className="mt-8 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-600"
                  >
                    ← Back
                  </button>

                  <p className="mt-8 text-center text-[10px] font-light text-zinc-400">
                    By clicking above, you agree to our Terms of Service and Privacy Policy. We respect your inbox and will only contact you regarding your audit.
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 grayscale opacity-50">
            <div className="text-[10px] font-bold uppercase tracking-widest">Trusted by contractors across</div>
            {trustStats.map((stat: any) => (
              <div key={stat.label} className="font-headline text-xs font-bold">
                {stat.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
