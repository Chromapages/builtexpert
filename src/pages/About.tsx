import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";

// ─── Team ──────────────────────────────────────────────────────────────────────

const TEAM = [
  {
    name: "Marcus Webb",
    role: "Founder & Lead Growth Engineer",
    bio: "10 years building lead systems for trade businesses. Former electrician's apprentice — I know this industry from the job site up.",
  },
  {
    name: "Jordan Reyes",
    role: "Head of Local SEO",
    bio: "Specialist in Google Maps dominance for contractors. Managed over 300 GMB profiles across electrical, HVAC, and plumbing verticals.",
  },
  {
    name: "Taylor Singh",
    role: "Conversion Strategist",
    bio: "Runs all A/B testing and funnel analysis. Built the call-tracking system that drives our 3.2× lead average.",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export function About() {
  return (
    <>
      <SEO
        title="About"
        description="BuiltExpert operates as growth engineers for the trades—conversion-first websites, local SEO, and systems that turn digital presence into predictable revenue."
        canonical="/about"
      />

      <div
        className="pb-32 pt-24 font-body tracking-tight antialiased [letter-spacing:-0.01em] [&_h1]:normal-case [&_h2]:normal-case [&_h3]:normal-case [&_h4]:normal-case selection:bg-md3-primary-container selection:text-md3-on-primary-container"
        style={industrialMeshStyle}
      >
        {/* Hero */}
        <section className="mx-auto mb-24 max-w-7xl px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                Our Mission
              </span>
              <h1 className="mb-8 font-headline text-5xl font-light leading-[0.95] tracking-tighter md:text-7xl">
                <span className="block" style={industrialTextGradientStyle}>
                  We don&apos;t just build websites.
                </span>
                <span className="mt-1 block">
                  We build{" "}
                  <span className="font-bold text-md3-primary">Lead Engines</span>{" "}
                  for contractors.
                </span>
              </h1>
              <p
                className="mb-10 max-w-2xl text-xl font-light leading-relaxed"
                style={{ color: INDUSTRIAL.muted }}
              >
                At BuiltExpert, we&apos;ve retired the &quot;creative agency&quot;
                playbook. We operate as growth engineers for the trades, turning
                digital presence into predictable revenue.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  to="/contact"
                  className="bg-[#1a1a1a] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-md3-primary"
                >
                  Book a Free Audit
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 border-b py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a] [border-bottom-width:0.5px] transition-all hover:border-md3-primary hover:text-md3-primary"
                  style={{ borderColor: INDUSTRIAL.outline }}
                >
                  See our work
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="flex justify-end lg:col-span-4">
              <div
                className="w-full rounded-xl bg-white p-8 shadow-sm"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                <div className="mb-6 space-y-6">
                  {[
                    { value: "12M+", label: "Inbound calls & form fills", detail: "tracked across all client campaigns since 2021" },
                    { value: "94%", label: "Client retention rate", detail: "rolling 12-month average" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div
                        className="font-headline text-4xl font-light tracking-tighter text-md3-primary"
                      >
                        {s.value}
                      </div>
                      <p
                        className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em]"
                        style={{ color: INDUSTRIAL.charcoal }}
                      >
                        {s.label}
                      </p>
                      <p
                        className="mt-0.5 text-[10px] font-light"
                        style={{ color: INDUSTRIAL.muted }}
                      >
                        {s.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why a specialist — reframed from visitor's objection POV */}
        <section className="mx-auto mb-24 max-w-7xl px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div
              className="rounded-xl bg-white p-8 shadow-sm"
              style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
            >
              <h2
                className="mb-4 font-headline text-2xl font-semibold tracking-tight"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                Why a specialist beats a generalist.
              </h2>
              <div
                className="space-y-4 text-sm font-light leading-relaxed"
                style={{ color: INDUSTRIAL.muted }}
              >
                <p>
                  Generic agencies build templates. We build systems tuned
                  specifically to how electricians and HVAC contractors get
                  found, trusted, and hired online.
                </p>
                <p>
                  Specialisation means we&apos;ve already solved the problems
                  your business faces. We don&apos;t learn on your dollar.
                </p>
              </div>
            </div>
            <div
              className="flex flex-col rounded-xl bg-white p-8 shadow-sm"
              style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-md3-secondary-container">
                <span className="material-symbols-outlined text-xl text-md3-on-secondary-container">
                  electric_bolt
                </span>
              </div>
              <h4
                className="mb-3 font-headline text-xl font-semibold"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                Electricians
              </h4>
              <p className="text-sm font-light" style={{ color: INDUSTRIAL.muted }}>
                High-margin panel upgrades, EV charging installs, and
                commercial maintenance contracts — we know how customers
                search for these jobs and build pages that rank for them.
              </p>
            </div>
            <div
              className="flex flex-col rounded-xl bg-white p-8 shadow-sm"
              style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-md3-primary-container">
                <span className="material-symbols-outlined text-xl text-md3-on-primary-container">
                  hvac
                </span>
              </div>
              <h4
                className="mb-3 font-headline text-xl font-semibold"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                HVAC
              </h4>
              <p className="text-sm font-light" style={{ color: INDUSTRIAL.muted }}>
                Emergency repair searches, seasonal replacement campaigns,
                and maintenance contract pipelines — built around how
                homeowners actually look for HVAC help.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mx-auto mb-24 max-w-7xl px-8">
          <div className="mb-12 text-center md:text-left">
            <h2
              className="mb-4 font-headline text-3xl font-light tracking-tight"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              The BuiltExpert Philosophy
            </h2>
            <div className="mx-auto h-px w-24 bg-md3-primary md:mx-0" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div
              className="flex min-h-[20rem] flex-col justify-between rounded-xl border bg-white p-8 [border-width:0.5px]"
              style={{ borderColor: INDUSTRIAL.outline }}
            >
              <div>
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-md3-primary">
                  01. ROI over Ego
                </span>
                <h3
                  className="mb-4 font-headline text-2xl font-semibold"
                  style={{ color: INDUSTRIAL.charcoal }}
                >
                  If it doesn&apos;t book a job, it&apos;s a vanity project.
                </h3>
                <p className="text-sm font-light" style={{ color: INDUSTRIAL.muted }}>
                  We don&apos;t chase design awards. We chase conversion rates.
                  Every pixel is hired to make the phone ring.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span
                  className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: INDUSTRIAL.charcoal, backgroundColor: "#f3f4f6" }}
                >
                  Conversion Focus
                </span>
                <span
                  className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: INDUSTRIAL.charcoal, backgroundColor: "#f3f4f6" }}
                >
                  Data Driven
                </span>
              </div>
            </div>

            <div className="flex min-h-[20rem] flex-col justify-between rounded-xl bg-md3-primary p-8 text-md3-on-primary">
              <div>
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] opacity-90">
                  02. Strategy First
                </span>
                <h3 className="mb-4 font-headline text-2xl font-bold text-md3-on-primary">
                  Logic beats aesthetics every time.
                </h3>
                <p className="text-sm font-light text-md3-on-primary/85">
                  We map the customer journey from the first Google search to the
                  final invoice before we ever open a design tool.
                </p>
              </div>
              <span className="material-symbols-outlined text-3xl opacity-50">
                architecture
              </span>
            </div>

            <div
              className="flex min-h-[20rem] flex-col justify-between rounded-xl border bg-white p-8 [border-width:0.5px]"
              style={{ borderColor: INDUSTRIAL.outline }}
            >
              <div>
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-md3-primary">
                  03. The Operator Mindset
                </span>
                <h3
                  className="mb-4 font-headline text-2xl font-semibold"
                  style={{ color: INDUSTRIAL.charcoal }}
                >
                  We act as your CTO.
                </h3>
                <p className="text-sm font-light" style={{ color: INDUSTRIAL.muted }}>
                  We don&apos;t just deliver a file and disappear. We integrate
                  with your CRM, automate lead follow-ups, and monitor SEO 24/7.
                </p>
              </div>
              <span
                className="material-symbols-outlined text-3xl opacity-40"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                hub
              </span>
            </div>

            <div
              className="flex min-h-[20rem] flex-col justify-between rounded-xl border bg-white p-8 [border-width:0.5px]"
              style={{ borderColor: INDUSTRIAL.outline }}
            >
              <div>
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-md3-primary">
                  04. Industrial Grade
                </span>
                <h3
                  className="mb-4 font-headline text-2xl font-semibold"
                  style={{ color: INDUSTRIAL.charcoal }}
                >
                  Infrastructure, not just &quot;code&quot;.
                </h3>
                <p className="text-sm font-light" style={{ color: INDUSTRIAL.muted }}>
                  Your website is hosted on enterprise-grade architecture with
                  99.9% uptime. Reliable as the generators you install.
                </p>
              </div>
              <span className="material-symbols-outlined text-3xl text-md3-primary opacity-50">
                settings_suggest
              </span>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mx-auto mb-24 max-w-7xl px-8">
          <div className="mb-12">
            <h2
              className="mb-4 font-headline text-3xl font-light tracking-tight"
              style={{ color: INDUSTRIAL.charcoal }}
            >
              The people behind the system
            </h2>
            <div className="h-px w-24 bg-md3-primary" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="rounded-xl bg-white p-8"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-md3-primary/10"
                >
                  <span className="font-headline text-lg font-bold text-md3-primary">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <p
                  className="mb-1 font-headline text-lg font-semibold"
                  style={{ color: INDUSTRIAL.charcoal }}
                >
                  {member.name}
                </p>
                <p
                  className="mb-4 text-[10px] font-bold uppercase tracking-widest text-md3-primary"
                >
                  {member.role}
                </p>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: INDUSTRIAL.muted }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mx-auto mb-8 max-w-7xl px-8">
          <div
            className="relative overflow-hidden bg-white p-10 md:p-14"
            style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
          >
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2
                  className="mb-4 font-headline text-3xl font-light tracking-tight"
                  style={{ color: INDUSTRIAL.charcoal }}
                >
                  Results at a Glance
                </h2>
                <div className="mb-6 h-px w-16 bg-md3-primary" />
                <p className="text-sm font-light leading-relaxed" style={{ color: INDUSTRIAL.muted }}>
                  We operate with the same rigor you apply to a complex wiring
                  diagram. Precision is our baseline for every partnership.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-8">
                {[
                  { value: "12M+", label: "Leads Generated", detail: "since 2021" },
                  { value: "150+", label: "Active Partners", detail: "electricians & HVAC" },
                  { value: "94%", label: "Retention Rate", detail: "rolling 12-month" },
                  { value: "3.2×", label: "Avg Lead Increase", detail: "in first 90 days" },
                ].map((row) => (
                  <div key={row.label} className="text-center lg:text-left">
                    <div className="mb-1 font-headline text-4xl font-light tracking-tighter text-md3-primary">
                      {row.value}
                    </div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: INDUSTRIAL.muted }}
                    >
                      {row.label}
                    </div>
                    <div
                      className="mt-0.5 text-[10px] font-light"
                      style={{ color: INDUSTRIAL.muted }}
                    >
                      {row.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page CTA after stats — peak credibility moment */}
        <section className="mx-auto mb-24 max-w-7xl px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-xl bg-md3-primary px-10 py-8">
            <p className="font-headline text-lg font-light text-md3-on-primary">
              94% of our partners renew. See the results they&apos;re getting.
            </p>
            <Link
              to="/work"
              className="inline-flex shrink-0 items-center gap-2 bg-white px-8 py-3 text-[11px] font-bold uppercase tracking-[0.3em] text-md3-primary transition-all hover:bg-md3-on-primary hover:text-md3-primary"
            >
              View Case Studies
              <ArrowRight className="size-4 shrink-0" aria-hidden />
            </Link>
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
                Let&apos;s build your{" "}
                <span className="font-bold">lead engine.</span>
              </h2>
              <p
                className="mb-10 text-lg font-light leading-relaxed"
                style={{ color: INDUSTRIAL.muted }}
              >
                Free 15-minute audit. We&apos;ll look at your current site and
                show you exactly where you&apos;re losing jobs to competitors —
                no obligation, no sales pressure.
              </p>
              <div className="flex flex-col justify-center gap-6 sm:flex-row md:justify-start">
                <Link
                  to="/contact"
                  className="bg-[#1a1a1a] px-10 py-5 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-md3-primary"
                >
                  Book Your Free Audit
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 border-b py-5 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a] [border-bottom-width:0.5px] transition-all hover:border-md3-primary hover:text-md3-primary"
                  style={{ borderBottomColor: INDUSTRIAL.outline }}
                >
                  See Pricing
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 select-none overflow-hidden opacity-[0.03] lg:block">
              <svg
                className="h-full w-full scale-150 text-[#1a1a1a]"
                viewBox="0 0 100 100"
                aria-hidden={true}
              >
                <path
                  d="M0 0 L100 100 M100 0 L0 100 M50 0 V100 M0 50 H100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.1"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.1"
                />
                <rect
                  x="25"
                  y="25"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.1"
                />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
