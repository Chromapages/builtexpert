import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { submitToCRM } from "@/lib/crm";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormState = { name: string; email: string; trade: string };
type SubmitState = "idle" | "submitting" | "success" | "error";

// ─── Constants ────────────────────────────────────────────────────────────────

const TRADES = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Landscaping / Lawn Care",
  "Remodeling / General Contracting",
  "Pest Control",
  "Painting",
  "Other Trade",
];

const SEVEN_FIXES = [
  {
    n: "01",
    title: "Why most contractor websites fail to convert visitors into calls",
    teaser:
      "Most contractor sites make one fatal mistake before a visitor even reads a word. You're probably making it right now.",
  },
  {
    n: "02",
    title: "The #1 reason good leads slip through the cracks",
    teaser:
      "It's not your service quality. It's what happens — or doesn't happen — in the 4 hours after someone visits your site.",
  },
  {
    n: "03",
    title: "How to make your business look more credible online — fast",
    teaser:
      "Three trust signals that take under a day to add and dramatically shift how prospects see you before they call.",
  },
  {
    n: "04",
    title: "What local prospects need to see before they pick up the phone",
    teaser:
      "The answer surprises most contractors. It's not your reviews. It's not your price. And it's easy to fix.",
  },
  {
    n: "05",
    title: "How to filter out price shoppers before they waste your time",
    teaser:
      "A simple page copy change that pre-qualifies leads before they ever fill out a form.",
  },
  {
    n: "06",
    title: "The easiest follow-up fix that needs zero extra work from you",
    teaser:
      "Set it up once. Watch jobs close while you're still out in the field.",
  },
  {
    n: "07",
    title: "The full framework: turning your online presence into a lead engine",
    teaser:
      "How all 7 fixes work together to compound results over the first 90 days.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I was getting maybe a few calls a week, mostly price shoppers. After applying some of this stuff our call volume grew significantly. And the leads actually want to book.",
    name: "Ray D.",
    trade: "HVAC Contractor",
    location: "Charlotte, NC",
    result: "Significant growth in 60 days",
  },
  {
    quote:
      "I thought my website was fine. Turns out it was killing my close rate. Made the fixes over a weekend. First real estimate request came in Monday morning.",
    name: "Chris V.",
    trade: "AC & Heating Specialist",
    location: "Denver, CO",
    result: "First estimate request in 48 hrs",
  },
  {
    quote:
      "The follow-up section alone was worth it. I was losing so many leads just because I couldn't get back to them fast enough. Not anymore.",
    name: "Pete M.",
    trade: "Mechanical Services Owner",
    location: "Columbus, OH",
    result: "40% more jobs closed",
  },
];

// ─── Form component ───────────────────────────────────────────────────────────

interface FormBlockProps {
  form: FormState;
  submitState: SubmitState;
  touched: Partial<Record<keyof FormState, boolean>>;
  isFieldValid: (f: keyof FormState) => boolean;
  onChange: (f: keyof FormState, v: string) => void;
  onBlur: (f: keyof FormState) => void;
  onSubmit: (e: React.FormEvent) => void;
}

function FormBlock({
  form,
  submitState,
  touched,
  isFieldValid,
  onChange,
  onBlur,
  onSubmit,
}: FormBlockProps) {
  const base =
    "w-full rounded-none border bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-zinc-400 outline-none transition-all focus:border-md3-primary focus:ring-2 focus:ring-md3-primary/20";

  const fieldCls = (f: keyof FormState) => {
    const valid = isFieldValid(f);
    const error = touched[f] && !valid;
    const success = touched[f] && valid && f !== "trade";
    return cn(
      base,
      error && "border-red-400 ring-2 ring-red-400/20",
      success && "border-green-400/60 ring-2 ring-green-500/20",
      !error && !success && "border-zinc-200"
    );
  };

  if (submitState === "success") {
    return (
      <div className="bg-white p-10 text-center" style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
        <span className="material-symbols-outlined mb-4 block text-5xl text-teal-600">
          check_circle
        </span>
        <h3 className="mb-2 font-headline text-2xl font-bold text-[#1a1a1a]">You're in!</h3>
        <p className="mb-4 text-sm font-light leading-relaxed text-zinc-500">
          Your copy of <em>The Contractor Lead Fix</em> is on its way to{" "}
          <span className="font-semibold text-[#1a1a1a]">{form.email}</span>. Check your inbox in
          the next couple of minutes.
        </p>
        <p className="text-xs text-zinc-400">
          While you wait —{" "}
          <Link to="/pricing" className="text-md3-primary underline">
            see what working with us looks like
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div
      className="bg-white p-10"
      style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
    >
      {/* Form header */}
      <div className="mb-7">
        <div
          className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700"
          style={{ background: "#f0fdfa", borderWidth: "0.5px", borderColor: "#99f6e4" }}
        >
          <span className="material-symbols-outlined text-sm text-teal-600">download</span>
          Free Download
        </div>
        <h3 className="font-headline text-xl font-bold leading-snug tracking-tight text-[#1a1a1a]">
          Get The Contractor Lead Fix
        </h3>
        <p className="mt-1 text-xs font-light text-zinc-500">
          7 practical fixes. No fluff. No paywall.
        </p>
      </div>

      <form onSubmit={onSubmit} noValidate className="space-y-5">
        {/* Name */}
        <div>
          <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">
            First Name *
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="John"
              className={fieldCls("name")}
              value={form.name}
              onChange={(e) => onChange("name", e.target.value)}
              onBlur={() => onBlur("name")}
              required
            />
            {touched.name && isFieldValid("name") && (
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-base text-green-500">
                check_circle
              </span>
            )}
          </div>
          {touched.name && !isFieldValid("name") && (
            <p className="mt-1 text-[10px] text-red-500">Please enter your first name.</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="you@gmail.com"
              className={fieldCls("email")}
              value={form.email}
              onChange={(e) => onChange("email", e.target.value)}
              onBlur={() => onBlur("email")}
              required
            />
            {touched.email && isFieldValid("email") && (
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-base text-green-500">
                check_circle
              </span>
            )}
          </div>
          {touched.email && !isFieldValid("email") && (
            <p className="mt-1 text-[10px] text-red-500">Please enter a valid email address.</p>
          )}
          <p className="mt-1 text-[10px] text-zinc-400">We'll send the guide here. No spam, ever.</p>
        </div>

        {/* Trade */}
        <div>
          <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">
            Your Trade <span className="font-normal normal-case tracking-normal text-zinc-400">(optional — helps us personalise)</span>
          </label>
          <select
            className={cn(base, "cursor-pointer appearance-none border-zinc-200")}
            value={form.trade}
            onChange={(e) => onChange("trade", e.target.value)}
          >
            <option value="">Select your trade...</option>
            {TRADES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* CTA */}
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="mt-2 w-full bg-[#1a1a1a] py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-md3-primary disabled:opacity-60"
        >
          {submitState === "submitting" ? "Sending..." : "Download The Free Guide →"}
        </button>

        {submitState === "error" && (
          <p className="text-center text-xs text-red-500">
            Something went wrong. Email us at{" "}
            <a href="mailto:hello@builtexpert.com" className="underline">
              hello@builtexpert.com
            </a>
            .
          </p>
        )}

        <p className="text-center text-[10px] text-zinc-400">
          Free download. No spam.{" "}
          <Link to="/privacy" className="underline hover:text-md3-primary">
            Privacy policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

// ─── Modal component ──────────────────────────────────────────────────────────

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

function SuccessModal({ isOpen, onClose, email }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0a1f1f]/80 backdrop-blur-sm"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl overflow-hidden bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
            style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
          >
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-md3-primary" />

            {/* Pattern/Icon header */}
            <div className="relative flex h-32 items-center justify-center bg-[#0a1f1f] overflow-hidden">
               <div className="absolute inset-0 opacity-[0.05]" style={industrialMeshStyle} />
               <motion.div
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                 className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/10 text-teal-400"
                 style={{ borderWidth: "0.5px", borderColor: "rgba(45,212,191,0.2)" }}
               >
                 <span className="material-symbols-outlined text-4xl">check_circle</span>
               </motion.div>
            </div>

            <div className="p-10 text-center">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600">
                You're In
              </span>
              <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-[#1a1a1a]">
                The Guide Is On Its Way
              </h2>
              <p className="mx-auto mb-8 max-w-sm text-sm font-light leading-relaxed text-zinc-500">
                Check your inbox at <span className="font-semibold text-[#1a1a1a]">{email}</span> in the next 2 minutes. We've also included a bonus growth checklist inside.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  onClick={onClose}
                  className="w-full border border-zinc-200 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600 transition-all hover:bg-zinc-50"
                >
                  Close
                </button>
                <Link
                  to="/pricing"
                  className="flex w-full items-center justify-center bg-[#1a1a1a] py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-md3-primary"
                >
                  View Pricing →
                </Link>
              </div>

              <div className="mt-8 border-t pt-8" style={{ borderTopWidth: "0.5px", borderColor: INDUSTRIAL.outline }}>
                <p className="text-[10px] text-zinc-400">
                  Ready to move faster?{" "}
                  <Link to="/contact" className="font-bold text-md3-primary hover:underline">
                    Book an audit
                  </Link>
                </p>
              </div>
            </div>

            {/* Close icon button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-zinc-400 transition-colors hover:text-white"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function LeadMagnet() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", trade: "" });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isNameValid = form.name.trim().length >= 2;

  const isFieldValid = (f: keyof FormState) => {
    if (f === "email") return isEmailValid;
    if (f === "name") return isNameValid;
    return true;
  };

  const handleChange = (f: keyof FormState, v: string) =>
    setForm((prev) => ({ ...prev, [f]: v }));

  const handleBlur = (f: keyof FormState) =>
    setTouched((prev) => ({ ...prev, [f]: true }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true });
    if (!isNameValid || !isEmailValid) return;
    setSubmitState("submitting");

    // Submit to CRM
    submitToCRM({
      name: form.name,
      email: form.email,
      brandId: "builtexpert",
      sourceDetail: `Lead Magnet - ${form.trade || "General"}`,
    });

    try {
      const res = await fetch("https://formspree.io/f/mqakvjwe", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          trade: form.trade || "Not specified",
          source: "lead-magnet",
          guide: "The Contractor Lead Fix",
        }),
      });
      if (res.ok) {
        setSubmitState("success");
        setShowSuccessModal(true);
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  };

  const formProps = { form, submitState, touched, isFieldValid, onChange: handleChange, onBlur: handleBlur, onSubmit: handleSubmit };

  return (
    <>
      <SEO
        title="The Contractor Lead Fix — Free Guide"
        description="7 simple changes that help local contractors get more qualified calls without wasting money on bad marketing. Free download — no spam."
        canonicalPath="/contractor-lead-fix"
      />

      <div
        className="font-body tracking-tight antialiased [letter-spacing:-0.01em]"
        style={industrialMeshStyle}
      >

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="mx-auto mb-24 px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px] max-w-[1440px] pt-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">

            {/* Left: copy */}
            <div>
              {/* Guide label + trades */}
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <div
                  className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700"
                  style={{ background: "#f0fdfa", borderWidth: "0.5px", borderColor: "#99f6e4" }}
                >
                  Free Guide
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                  HVAC · Electrical · Plumbing · Roofing · and more
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-8 font-headline text-4xl font-light leading-[1.06] tracking-tighter sm:text-5xl md:text-7xl">
                <span className="block overflow-visible pb-[0.06em]" style={industrialTextGradientStyle}>
                  Get More Qualified
                </span>
                <span className="block font-bold text-md3-primary">Contractor Leads</span>
                <span className="block font-light text-[#1a1a1a]">
                  Without Paying For More Junk Traffic
                </span>
              </h1>

              <p className="mb-10 max-w-xl text-xl font-light leading-relaxed text-zinc-600">
                If your phones are inconsistent, your website feels outdated, or too many leads turn
                into price shoppers and dead ends — this free guide shows you{" "}
                <strong className="font-semibold text-[#1a1a1a]">
                  7 practical fixes that help contractors generate better local leads
                </strong>{" "}
                and stop leaking opportunities.
              </p>

              {/* Trust row */}
              <div className="mb-10 flex flex-wrap items-center gap-8">
                {[
                  { icon: "schedule", text: "7-minute read" },
                  { icon: "storefront", text: "Helping growth-minded contractors" },
                  { icon: "thumb_up", text: "Quality focused. Real fixes." },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-md3-primary">{icon}</span>
                    <span className="text-sm font-medium text-zinc-600">{text}</span>
                  </div>
                ))}
              </div>

              {/* Trade chips */}
              <div className="flex flex-wrap gap-2">
                {["HVAC", "Electrical", "Plumbing", "Roofing", "Landscaping", "Remodeling", "General Contracting"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500"
                      style={{ background: "white", borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right: form (sticky on scroll) */}
            <div className="lg:sticky lg:top-8">
              <FormBlock {...formProps} />
            </div>
          </div>
        </section>

        {/* ── Social proof strip ───────────────────────────────────────────── */}
        <section
          className="mb-24 py-8"
          style={{
            background: "white",
            borderTopWidth: "0.5px",
            borderBottomWidth: "0.5px",
            borderColor: INDUSTRIAL.outline,
          }}
        >
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
            <div className="flex flex-wrap items-center gap-8 lg:justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                Contractors we've helped:
              </p>
              <div className="flex flex-wrap gap-8">
                {TESTIMONIALS.map((t) => (
                  <div key={t.name} className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center text-xs font-bold text-white"
                      style={{ background: "#006565" }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#1a1a1a]">
                        {t.name} · {t.trade}
                      </p>
                      <p className="text-[10px] font-bold text-teal-600">{t.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Problem section ──────────────────────────────────────────────── */}
        <section className="mx-auto mb-32 max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

            {/* Copy */}
            <div>
              <h2 className="mb-6 font-headline text-4xl font-bold tracking-tight text-[#1a1a1a] md:text-5xl">
                Still relying on referrals, lead apps, and hope?
              </h2>
              <p className="mb-4 text-xl font-light text-zinc-600">
                You do solid work. That's not the problem.
              </p>
              <p className="mb-10 text-lg font-light leading-relaxed text-zinc-500">
                The problem is your lead flow probably looks something like this:
              </p>
              <ul className="space-y-5">
                {[
                  "Some weeks you're slammed — other weeks the phone goes quiet",
                  "You're getting too many bad leads or price shoppers",
                  "Your website isn't helping you close jobs",
                  "You're missing calls and forms while you're out in the field",
                  "You've tried marketing before — but it felt like paying for reports instead of results",
                  "You know your business should look more professional online but don't know where to start",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: "#1a1a1a" }}
                    >
                      ✗
                    </div>
                    <span className="text-base font-light leading-snug text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-10 border-l-4 border-md3-primary p-6"
                style={{ background: "#f0fdfa" }}
              >
                <p className="text-base font-semibold text-[#1a1a1a]">
                  That's exactly why we created this guide.
                </p>
              </div>
            </div>

            {/* Mock guide cover */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-xs">
                <div
                  className="relative overflow-hidden p-10"
                  style={{ background: "#0a1f1f", borderWidth: "0.5px", borderColor: "#163030" }}
                >
                  <div className="mb-8">
                    <div className="mb-3 h-px w-10" style={{ background: "#0d9488" }} />
                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.3em] text-teal-400">
                      BuiltExpert · Free Guide
                    </p>
                    <h3 className="font-headline text-xl font-bold leading-tight text-white">
                      The Contractor Lead Fix
                    </h3>
                  </div>

                  <div className="mb-8 space-y-2.5">
                    {["01", "02", "03", "04", "05", "06", "07"].map((n, i) => (
                      <div
                        key={n}
                        className="flex items-center gap-3"
                        style={{ opacity: 1 - i * 0.1 }}
                      >
                        <span className="text-[10px] font-bold text-teal-400">{n}</span>
                        <div className="h-px flex-1" style={{ background: "#1a4040" }} />
                      </div>
                    ))}
                  </div>

                  <div className="h-px w-full mb-5" style={{ background: "#163030" }} />
                  <p className="text-[9px] font-light uppercase tracking-[0.15em] leading-relaxed text-zinc-500">
                    7 Simple Changes · Local Contractors · More Qualified Calls
                  </p>

                  {/* Decorative rings */}
                  <div className="pointer-events-none absolute -right-8 -top-8 opacity-[0.06]">
                    <svg width="160" height="160" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="0.5" />
                    </svg>
                  </div>
                </div>
                {/* Shadow offset */}
                <div
                  className="absolute -bottom-3 -right-3 -z-10 h-full w-full"
                  style={{ background: "#0d9488", opacity: 0.12 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── What's inside — 7 fixes ──────────────────────────────────────── */}
        <section
          className="mb-32 py-24"
          style={{
            background: "white",
            borderTopWidth: "0.5px",
            borderBottomWidth: "0.5px",
            borderColor: INDUSTRIAL.outline,
          }}
        >
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
            <div className="mb-16">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                What's inside
              </span>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a] md:text-5xl">
                In this free guide, you'll learn:
              </h2>
            </div>

            <div
              className="grid grid-cols-1 gap-px bg-[#e5e7eb] md:grid-cols-2"
              style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
            >
              {SEVEN_FIXES.map((fix) => (
                <div
                  key={fix.n}
                  className="group flex gap-6 bg-white p-8 transition-colors hover:bg-zinc-50"
                >
                  <div className="flex-shrink-0 pt-0.5">
                    <span className="font-headline text-3xl font-light text-md3-primary opacity-30 transition-opacity group-hover:opacity-60">
                      {fix.n}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-base font-bold leading-snug text-[#1a1a1a]">
                      {fix.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-zinc-500">{fix.teaser}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 text-center">
              <p className="text-base font-light text-zinc-500">
                All 7 fixes. No paywall. No catch.
              </p>
              <a
                href="#bottom-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("bottom-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#1a1a1a] px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-md3-primary"
              >
                Download The Free Guide →
              </a>
            </div>
          </div>
        </section>

        {/* ── For you / Not for you ────────────────────────────────────────── */}
        <section className="mx-auto mb-32 max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          <div className="mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
              Is this right for you?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* For you */}
            <div
              className="p-10"
              style={{ borderWidth: "0.5px", borderColor: "#99f6e4", background: "#f0fdfa" }}
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl text-teal-600">check_circle</span>
                <h3 className="text-lg font-bold text-[#1a1a1a]">This is for you if:</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "You run a contracting business and want more consistent leads",
                  "You're tired of depending only on referrals",
                  "You've outgrown your current website",
                  "You want better jobs, not just more random inquiries",
                  "You know your business should look more professional online",
                  "You want simple systems that actually help you make more money",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-base text-teal-600">
                      check
                    </span>
                    <span className="text-sm font-light leading-snug text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for you */}
            <div
              className="p-10"
              style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline, background: "#fafafa" }}
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl text-zinc-400">cancel</span>
                <h3 className="text-lg font-bold text-[#1a1a1a]">This is not for you if:</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "You want overnight magic without putting in any effort",
                  "You don't want to invest in growing your business",
                  "You're happy chasing every low-quality lead that comes your way",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 text-sm font-bold text-zinc-400">✗</span>
                    <span className="text-sm font-light leading-snug text-zinc-500">{item}</span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-10 border-t pt-8"
                style={{ borderTopWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                <p className="text-sm font-light text-zinc-500">
                  Still here?{" "}
                  <span className="font-semibold text-[#1a1a1a]">Then this guide is for you.</span>{" "}
                  Most contractors who read it say they wished they'd had it 2 years ago.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────────── */}
        <section
          className="mb-32 py-24"
          style={{ background: "#0a1f1f", borderTopWidth: "0.5px", borderColor: "#163030" }}
        >
          <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
            <div className="mb-16">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-teal-400">
                Real contractors. Real results.
              </span>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-white">
                Contractors who made the fixes.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-px bg-zinc-800 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="bg-[#0a1f1f] p-10">
                  <p className="mb-8 text-base font-light leading-relaxed text-zinc-300">
                    "{t.quote}"
                  </p>
                  <div
                    className="flex items-center gap-4 border-t pt-6"
                    style={{ borderTopWidth: "0.5px", borderColor: "#163030" }}
                  >
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center text-sm font-bold text-white"
                      style={{ background: "#006565" }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t.name} · {t.trade}
                      </p>
                      <p className="text-[10px] text-zinc-500">{t.location}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-teal-400">
                        {t.result}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Credibility ──────────────────────────────────────────────────── */}
        <section className="mx-auto mb-32 max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                About BuiltExpert
              </span>
              <h2 className="mb-6 font-headline text-4xl font-bold tracking-tight text-[#1a1a1a]">
                Built for real contractors in competitive markets.
              </h2>
              <p className="mb-8 text-lg font-light leading-relaxed text-zinc-600">
                BuiltExpert helps contractors get more qualified leads through done-for-you websites,
                local SEO, sales funnels, and follow-up systems that reduce missed opportunities.
              </p>
              <p className="mb-10 text-base font-light leading-relaxed text-zinc-500">
                We focus on what matters: more qualified calls, better estimate requests, and less
                chaos in your lead flow.
              </p>
              <ul className="space-y-4">
                {[
                  "Done-for-you contractor websites",
                  "Local SEO targeting your actual service areas",
                  "Sales funnels that filter out price shoppers",
                  "Follow-up systems that close jobs while you're on site",
                  "Business automation that reduces admin overhead",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-base text-md3-primary">
                      check
                    </span>
                    <span className="text-sm font-light text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats grid */}
            <div className="flex flex-col justify-center">
              <div
                className="grid grid-cols-2 gap-px bg-[#e5e7eb]"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                {[
                  { stat: "Proven", label: "Contractor partners" },
                  { stat: "Significant", label: "Avg. call volume increase" },
                  { stat: "90 days", label: "To first measurable results" },
                  { stat: "Strong", label: "Partner renewal rate" },
                ].map(({ stat, label }) => (
                  <div key={stat} className="flex flex-col items-start justify-center bg-white p-10">
                    <span className="mb-2 font-headline text-4xl font-bold text-md3-primary">
                      {stat}
                    </span>
                    <span className="text-xs font-light text-zinc-500">{label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[10px] text-zinc-400">
                Tracked across all client campaigns since 2021.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA + Form ────────────────────────────────────────────── */}
        <section id="bottom-form" className="mx-auto mb-32 px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px] max-w-[1440px]">
          <div
            className="overflow-hidden"
            style={{ background: "#0a1f1f", borderWidth: "0.5px", borderColor: "#163030" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px]">
              {/* Left: copy */}
              <div className="p-8 sm:p-12 lg:p-16">
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-teal-400">
                  Free Download
                </span>
                <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Download The Free Guide Now
                </h2>
                <p className="mb-2 text-lg font-light text-zinc-300">The Contractor Lead Fix</p>
                <p className="mb-10 max-w-md text-sm font-light leading-relaxed text-zinc-400">
                  7 Simple Changes That Help Local Contractors Get More Qualified Calls Without
                  Wasting Money On Bad Marketing
                </p>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-base text-teal-400">lock</span>
                  <p className="text-sm font-light text-zinc-400">
                    Free download. No spam. Just practical growth advice for contractors.
                  </p>
                </div>
              </div>

              {/* Right: form */}
              <div
                className="p-8 lg:border-l"
                style={{ borderLeftWidth: "0.5px", borderColor: "#163030" }}
              >
                <FormBlock {...formProps} />
              </div>
            </div>
          </div>
        </section>



        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          email={form.email}
        />
      </div>
    </>
  );
}
