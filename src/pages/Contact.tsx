import { useState } from "react";
import type {
  ChangeEvent,
  FocusEvent,
  FormEvent,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useSearchParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { cn } from "@/lib/utils";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";

// ─── Service type map (handles ?service= and ?tier= params) ──────────────────

const SERVICE_OPTIONS = [
  { value: "Electrician", label: "Electrician" },
  { value: "HVAC", label: "HVAC" },
  { value: "Plumbing", label: "Plumbing" },
  { value: "Other", label: "Other" },
] as const;

type ServiceType = (typeof SERVICE_OPTIONS)[number]["value"];

function resolveServiceType(param: string | null): ServiceType {
  if (!param) return "Electrician";
  const map: Record<string, ServiceType> = {
    electrician: "Electrician",
    hvac: "HVAC",
    plumbing: "Plumbing",
    "website-redesign": "Electrician",
    "local-seo": "Electrician",
    "landing-pages": "Electrician",
    "lead-capture": "Electrician",
    "ongoing-growth": "Electrician",
  };
  return map[param.toLowerCase()] ?? "Electrician";
}

// ─── Context-aware hero copy ──────────────────────────────────────────────────

function getContextCopy(tier: string | null, ref: string | null) {
  if (tier === "foundation")
    return {
      badge: "Foundation Tier Selected",
      sub: "Fill out the form below and we'll confirm your start date, website scope, and first call within one business day.",
    };
  if (tier === "growth")
    return {
      badge: "Growth Tier Selected",
      sub: "Fill out the form and we'll reach out within one business day to confirm your onboarding and kick off your new site.",
    };
  if (tier === "dominance")
    return {
      badge: "Applying for Dominance",
      sub: "Our team reviews Dominance applications manually. Fill out the form — we'll be in touch within 24 hours.",
    };
  if (ref === "audit")
    return {
      badge: "Free Audit Requested",
      sub: "Fill out the form and we'll send a personalised video breakdown of your site — what's broken, what competitors are doing, and what to fix first.",
    };
  return {
    badge: null,
    sub: "Fill out the form below. We'll review your site and send a free video audit within 2 business days — no obligation.",
  };
}

// ─── Objection Q&As ───────────────────────────────────────────────────────────

const OBJECTIONS = [
  {
    q: "Is this a sales call?",
    a: "No. It's a 15-minute technical audit. We look at your site and tell you what's broken — whether you work with us or not.",
  },
  {
    q: "How long does the audit take?",
    a: "We'll send your personalised video breakdown within 2 business days of receiving your form.",
  },
  {
    q: "What do I need to provide?",
    a: "Just your name, email, and website URL. The goals field is optional — fill in as much or as little as you like.",
  },
];

// ─── Form types ───────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  website: string;
  serviceType: string;
  goals: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  website?: string;
  submit?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Contact() {
  const [searchParams] = useSearchParams();
  const tierParam = searchParams.get("tier");
  const refParam = searchParams.get("ref");
  const serviceParam = searchParams.get("service");

  const ctx = getContextCopy(tierParam, refParam);
  const defaultService = resolveServiceType(serviceParam ?? tierParam);

  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    website: "",
    serviceType: defaultService,
    goals: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (state: FormState): FormErrors => {
    const newErrors: FormErrors = {};
    if (!state.name.trim()) newErrors.name = "Please enter your name";
    if (!state.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      newErrors.email = "That doesn't look right — try you@gmail.com";
    }
    if (state.website.trim()) {
      try {
        const u = state.website.includes("://")
          ? state.website
          : `https://${state.website}`;
        new URL(u);
      } catch {
        newErrors.website = "Please use a full URL — e.g. https://mycompany.com";
      }
    }
    return newErrors;
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors(validate(formState));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const newState = { ...formState, [name]: value };
    setFormState(newState);
    if (touched[name]) setErrors(validate(newState));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formState);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, website: true });
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("https://formspree.io/f/mqakvjwe", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          companyWebsite: formState.website,
          serviceType: formState.serviceType,
          goals: formState.goals,
          tier: tierParam ?? undefined,
          source: refParam ?? undefined,
          subject: "Free Website & SEO Audit Request",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormState({ name: "", email: "", website: "", serviceType: defaultService, goals: "" });
        setTouched({});
      } else {
        setErrors({ submit: "Something went wrong. Please try again or email us directly." });
      }
    } catch {
      setErrors({ submit: "Connection failed. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Returns true when a required field has been touched, has a value, and has no error
  const isFieldValid = (field: keyof FormState) =>
    touched[field] &&
    !errors[field as keyof FormErrors] &&
    formState[field].trim() !== "";

  const inputClass =
    "w-full border bg-white p-4 text-md3-on-surface transition-all placeholder:text-md3-on-surface-variant/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-md3-primary/30 [border-width:0.5px]";
  const inputStyle = { borderColor: INDUSTRIAL.outline } as const;

  return (
    <>
      <SEO
        title="Contact Us"
        titleFull="Get Your Free Contractor Site Audit | BuiltExpert"
        description="Find out exactly why your phone isn't ringing. Free 15-min audit for electricians & HVAC contractors — video breakdown delivered within 2 business days."
        canonical="/contact"
      />

      <div
        className="pb-32 pt-24 font-body tracking-tight antialiased [letter-spacing:-0.01em] [&_h1]:normal-case [&_h2]:normal-case [&_h3]:normal-case [&_h4]:normal-case selection:bg-md3-primary-container selection:text-md3-on-primary-container"
        style={industrialMeshStyle}
      >
        {/* Hero */}
        <section className="mx-auto mb-24 max-w-7xl px-8">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">

            {/* Left — headline + context */}
            <div className="max-w-2xl">
              {ctx.badge ? (
                <span className="mb-6 inline-block bg-md3-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                  {ctx.badge}
                </span>
              ) : (
                <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                  Free Audit
                </span>
              )}
              <h1 className="mb-8 font-headline text-5xl font-light leading-[1.08] tracking-tighter md:text-7xl md:leading-[1.06]">
                <span
                  className="block overflow-visible pb-[0.12em]"
                  style={industrialTextGradientStyle}
                >
                  Find out exactly why
                </span>
                <span className="mt-1 block">
                  your{" "}
                  <span className="font-bold text-md3-primary">phone isn&apos;t</span>{" "}
                  ringing.
                </span>
              </h1>
              <p
                className="mb-12 max-w-lg text-lg font-light leading-relaxed"
                style={{ color: INDUSTRIAL.muted }}
              >
                {ctx.sub}
              </p>

              {/* Stats strip */}
              <div
                className="flex flex-wrap items-start gap-8 border-t pt-8"
                style={{ borderColor: INDUSTRIAL.outline }}
              >
                {[
                  { val: "3.2×", label: "Avg Lead Increase", detail: "in first 90 days" },
                  { val: "150+", label: "Active Partners", detail: "electricians & HVAC" },
                  { val: "94%", label: "Retention Rate", detail: "rolling 12-month" },
                ].map(({ val, label, detail }, i, arr) => (
                  <>
                    <div key={label}>
                      <p className="mb-1 font-headline text-3xl font-light tracking-tighter text-md3-primary">
                        {val}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: INDUSTRIAL.muted }}>
                        {label}
                      </p>
                      <p className="text-[10px] font-light" style={{ color: INDUSTRIAL.muted }}>
                        {detail}
                      </p>
                    </div>
                    {i < arr.length - 1 && (
                      <div key={`div-${i}`} className="h-10 w-px self-start mt-2" style={{ backgroundColor: INDUSTRIAL.outline }} />
                    )}
                  </>
                ))}
              </div>
            </div>

            {/* Right — what happens next */}
            <div>
              <div
                className="bg-white p-8 shadow-sm"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                  What happens after you submit
                </p>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "We review your site",
                      body: "Our team manually audits your website, Google Maps presence, and top 3 local competitors.",
                    },
                    {
                      step: "02",
                      title: "We record your breakdown",
                      body: "You get a personalised video walkthrough of exactly what's costing you leads — no fluff, just specifics.",
                    },
                    {
                      step: "03",
                      title: "You decide what's next",
                      body: "No pressure. The audit is yours to keep. If you want to work together, we'll talk options. If not, you still got a free roadmap.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <span className="shrink-0 font-headline text-2xl font-light tracking-tighter text-md3-primary/30">
                        {item.step}
                      </span>
                      <div>
                        <p className="mb-1 font-headline text-base font-semibold" style={{ color: INDUSTRIAL.charcoal }}>
                          {item.title}
                        </p>
                        <p className="text-sm font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial in the right column */}
                <div
                  className="mt-8 rounded-xl bg-md3-primary/5 p-5"
                  style={{ borderWidth: "0.5px", borderColor: "rgba(0,101,101,0.12)" }}
                >
                  <div className="mb-2 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-sm text-md3-primary">★</span>
                    ))}
                  </div>
                  <p className="mb-3 text-sm font-light leading-relaxed" style={{ color: INDUSTRIAL.charcoal }}>
                    &ldquo;I almost didn&apos;t fill out the form. Did it anyway. Three days later I had a video showing me exactly why I was losing to a smaller competitor. That video alone was worth it.&rdquo;
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: INDUSTRIAL.muted }}>
                    Derek H. · Electrician · Dallas, TX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audit form */}
        <section className="mx-auto mb-24 max-w-7xl px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

            {/* Left — what's included + objection Q&As */}
            <div className="lg:col-span-5">
              <h2
                className="mb-4 font-headline text-4xl font-light tracking-tight"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                Request Your Free Audit
              </h2>
              <div className="mb-8 h-px w-24 bg-md3-primary" />
              <p className="mb-12 font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                We&apos;ll manually review your site and send a detailed video
                breakdown of your opportunities — delivered within 2 business days.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: "analytics",
                    title: "Competitor Analysis",
                    body: "See exactly where your local rivals are winning — and how to take those rankings back.",
                  },
                  {
                    icon: "speed",
                    title: "Performance & Technical Audit",
                    body: "Identify load speed issues, mobile problems, and technical gaps suppressing your rankings.",
                  },
                  {
                    icon: "map",
                    title: "Google Maps Audit",
                    body: "We review your GMB profile against top-ranking local competitors to find quick-win improvements.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-md3-primary/10 text-md3-primary">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: INDUSTRIAL.charcoal }}>{item.title}</p>
                      <p className="text-sm font-light" style={{ color: INDUSTRIAL.muted }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Inline objection Q&As */}
              <div className="mt-12 space-y-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: INDUSTRIAL.muted }}>
                  Common Questions
                </p>
                {OBJECTIONS.map((obj) => (
                  <div key={obj.q}>
                    <p className="mb-1 text-sm font-semibold" style={{ color: INDUSTRIAL.charcoal }}>
                      {obj.q}
                    </p>
                    <p className="text-sm font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                      {obj.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <div
                className="bg-white p-10 shadow-sm"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div
                        className="mb-6 flex h-16 w-16 items-center justify-center bg-md3-primary/10 text-md3-primary"
                        style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
                      >
                        <span className="material-symbols-outlined text-3xl">check</span>
                      </div>
                      <h3
                        className="mb-4 font-headline text-2xl font-semibold"
                        style={{ color: INDUSTRIAL.charcoal }}
                      >
                        Audit Request Received
                      </h3>
                      <p className="mb-2 max-w-md font-light" style={{ color: INDUSTRIAL.muted }}>
                        We&apos;ll review your site and send your personalised video breakdown within 2 business days.
                      </p>
                      <p className="mb-8 text-sm font-light" style={{ color: INDUSTRIAL.muted }}>
                        Check your inbox — we&apos;ll reach out from{" "}
                        <span style={{ color: INDUSTRIAL.charcoal }}>hello@builtexpert.com</span>
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsSuccess(false)}
                        className="border px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-md3-surface-container-low [border-width:0.5px]"
                        style={{ borderColor: INDUSTRIAL.outline, color: INDUSTRIAL.charcoal }}
                      >
                        Submit another request
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onSubmit={handleSubmit}
                      className="grid grid-cols-1 gap-6 md:grid-cols-2"
                    >
                      {/* Honeypot */}
                      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                      {errors.submit && (
                        <div className="rounded-xl border border-md3-error/25 bg-md3-error/10 p-4 text-sm text-md3-error md:col-span-2">
                          {errors.submit}
                        </div>
                      )}

                      <div className="space-y-2">
                        <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: INDUSTRIAL.muted }}>
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            id="name" name="name" type="text" autoComplete="name"
                            value={formState.name} onChange={handleChange} onBlur={handleBlur}
                            placeholder="Your name"
                            className={cn(
                              inputClass,
                              isFieldValid("name") && "border-green-400/60 ring-1 ring-green-500/30",
                            )}
                            style={isFieldValid("name") ? undefined : inputStyle}
                          />
                          {isFieldValid("name") && (
                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-base leading-none">✓</span>
                          )}
                        </div>
                        {errors.name && touched.name && (
                          <p className="text-xs font-medium text-md3-error">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: INDUSTRIAL.muted }}>
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            id="email" name="email" type="email" autoComplete="email"
                            value={formState.email} onChange={handleChange} onBlur={handleBlur}
                            placeholder="you@gmail.com"
                            className={cn(
                              inputClass,
                              isFieldValid("email") && "border-green-400/60 ring-1 ring-green-500/30",
                            )}
                            style={isFieldValid("email") ? undefined : inputStyle}
                          />
                          {isFieldValid("email") && (
                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-base leading-none">✓</span>
                          )}
                        </div>
                        {errors.email && touched.email ? (
                          <p className="text-xs font-medium text-md3-error">{errors.email}</p>
                        ) : (
                          <p className="text-[10px] font-light" style={{ color: INDUSTRIAL.muted }}>
                            We&apos;ll send your audit here. No spam, ever.
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="website" className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: INDUSTRIAL.muted }}>
                          Your Website{" "}
                          <span className="font-light normal-case tracking-normal">(optional)</span>
                        </label>
                        <input
                          id="website" name="website" type="text" autoComplete="url"
                          inputMode="url"
                          value={formState.website} onChange={handleChange} onBlur={handleBlur}
                          placeholder="mycompany.com"
                          className={inputClass} style={inputStyle}
                        />
                        {errors.website && touched.website && (
                          <p className="text-xs font-medium text-md3-error">{errors.website}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="serviceType" className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: INDUSTRIAL.muted }}>
                          Your Trade
                        </label>
                        <select
                          id="serviceType" name="serviceType"
                          value={formState.serviceType} onChange={handleChange} onBlur={handleBlur}
                          className={inputClass} style={inputStyle}
                        >
                          {SERVICE_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="goals" className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: INDUSTRIAL.muted }}>
                          Any context you&apos;d like us to know?{" "}
                          <span className="font-light normal-case tracking-normal">(optional)</span>
                        </label>
                        <textarea
                          id="goals" name="goals" rows={3}
                          value={formState.goals} onChange={handleChange} onBlur={handleBlur}
                          placeholder="e.g. Not enough calls, losing to competitors on Google, website looks outdated..."
                          className={inputClass} style={inputStyle}
                        />
                      </div>

                      {/* Testimonial above submit button — QW-4 */}
                      <div
                        className="flex items-start gap-4 rounded-xl p-5 md:col-span-2"
                        style={{ backgroundColor: "#f9fafb", borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
                      >
                        <div className="flex shrink-0 gap-0.5 pt-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className="text-xs text-md3-primary">★</span>
                          ))}
                        </div>
                        <div>
                          <p className="text-sm font-light leading-relaxed" style={{ color: INDUSTRIAL.charcoal }}>
                            &ldquo;I&apos;ve worked with three agencies before BuiltExpert. They&apos;re the first ones who could actually explain what they were doing and why. My phone is proof it works.&rdquo;
                          </p>
                          <p className="mt-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: INDUSTRIAL.muted }}>
                            Ray D. · HVAC Contractor · Charlotte, NC · 3× call volume in 60 days
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 md:col-span-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#1a1a1a] py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-md3-primary disabled:opacity-60"
                        >
                          {isSubmitting ? "Sending..." : "Get My Free Audit →"}
                        </button>
                        <p className="mt-3 text-center text-xs font-light" style={{ color: INDUSTRIAL.muted }}>
                          Zero obligation. No sales calls. Video delivered within 2 business days.
                        </p>
                        <p className="mt-1 text-center text-[10px] font-light" style={{ color: INDUSTRIAL.muted }}>
                          <Link to="/privacy" className="underline underline-offset-2 hover:text-md3-primary transition-colors">
                            Read our privacy policy
                          </Link>
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="mx-auto mb-24 max-w-7xl px-8">
          <div
            className="flex flex-wrap items-center justify-center gap-8 rounded-xl bg-white px-8 py-6 text-center"
            style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
          >
            {[
              { stat: "2 business days", detail: "Video audit turnaround" },
              { stat: "150+ partners", detail: "Electricians & HVAC contractors" },
              { stat: "No obligation", detail: "Audit is yours to keep" },
              { stat: "hello@builtexpert.com", detail: "Direct team access" },
            ].map(({ stat, detail }) => (
              <div key={stat} className="px-4">
                <p className="font-headline text-base font-bold tracking-tight" style={{ color: INDUSTRIAL.charcoal }}>
                  {stat}
                </p>
                <p className="mt-0.5 text-[11px] font-light" style={{ color: INDUSTRIAL.muted }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-7xl px-8">
          <div
            className="relative overflow-hidden bg-white p-12 text-left md:p-20"
            style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
          >
            <div className="relative z-10 mx-auto max-w-3xl text-center md:text-left">
              <h2
                className="mb-6 font-headline text-4xl font-light leading-tight tracking-tight md:text-5xl"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                Prefer email?{" "}
                <span className="font-bold">We respond within one business day.</span>
              </h2>
              <p className="mb-10 text-lg font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                For project briefs, partnerships, or press — reach the team directly.
              </p>
              <div className="flex flex-col justify-center gap-6 sm:flex-row md:justify-start">
                <a
                  href="mailto:hello@builtexpert.com"
                  className="bg-[#1a1a1a] px-10 py-5 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-md3-primary"
                >
                  Email The Team
                </a>
                <Link
                  to="/pricing"
                  className="border-b py-5 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a] [border-bottom-width:0.5px] transition-all hover:border-md3-primary hover:text-md3-primary"
                  style={{ borderBottomColor: INDUSTRIAL.outline }}
                >
                  See Pricing →
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 select-none overflow-hidden opacity-[0.03] lg:block">
              <svg className="h-full w-full scale-150 text-[#1a1a1a]" viewBox="0 0 100 100" aria-hidden={true}>
                <path d="M0 0 L100 100 M100 0 L0 100 M50 0 V100 M0 50 H100" fill="none" stroke="currentColor" strokeWidth="0.1" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" />
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.1" />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
