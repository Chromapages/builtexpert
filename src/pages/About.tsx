import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { HeaderSection } from "@/components/ui/HeaderSection";
import { CTASection } from "@/components/ui/CTASection";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialDarkMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";

// Team data removed for launch v1
const TEAM: any[] = [];

// ─── Component ─────────────────────────────────────────────────────────────────

export function About() {
  return (
    <>
      <SEO
        title="About"
        description="BuiltExpert operates as growth engineers for the trades—conversion-first websites, local SEO, and systems that turn digital presence into predictable revenue."
        canonicalPath="/about"
      />

      <div className="font-body tracking-tight antialiased [letter-spacing:-0.01em] [&_h1]:normal-case [&_h2]:normal-case [&_h3]:normal-case selection:bg-md3-primary-container selection:text-md3-on-primary-container">
        
        <HeaderSection 
          badge="Our Mission"
          title={
            <>
              We don&apos;t just build websites. <br />
              We build <span className="font-bold text-md3-primary">Lead Engines.</span>
            </>
          }
          description="BuiltExpert operates as growth engineers for the trades—conversion-first websites, local SEO, and systems that turn digital presence into predictable revenue."
          imageSrc="/images/about-hero.png"
          imageAlt="Strategic Planning"
        />

        {/* Philosophy & Approach */}
        <div className="pb-32 pt-24" style={industrialMeshStyle}>
          <section className="mx-auto mb-24 max-w-[1440px] px-6 lg:px-8">
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
                  specifically to how HVAC contractors get
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
                  ac_unit
                </span>
              </div>
              <h4
                className="mb-3 font-headline text-xl font-semibold"
                style={{ color: INDUSTRIAL.charcoal }}
              >
                Heat Pumps & IAQ
              </h4>
              <p className="text-sm font-light" style={{ color: INDUSTRIAL.muted }}>
                High-margin heat pump installs, ductless mini-splits, and 
                indoor air quality solutions — we know how customers 
                search for these comfort upgrades and build pages that rank for them.
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
        <section className="mx-auto mb-24 max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
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

        {/* Mission Statement */}
        <section className="mx-auto mb-24 max-w-[1440px] px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          <div className="mx-auto max-w-4xl rounded-xl bg-[#1a1a1a] p-10 text-white md:p-16">
            <h2 className="mb-8 font-headline text-3xl font-light tracking-tight md:text-5xl">
              Our <span className="font-bold text-md3-primary">Commitment</span> to the Trades
            </h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="space-y-4 text-sm font-light leading-relaxed opacity-90">
                <p>
                  Most marketing agencies look at contractors as just another &quot;vertical&quot; in a spreadsheet. They use the same generic templates for a plumber that they use for a law firm.
                </p>
                <p>
                  We built BuiltExpert because we saw a massive gap in the market. Contractors don&apos;t need &quot;branding.&quot; They need calls. They need systems that integrate with ServiceTitan. They need to rank #1 in the map pack.
                </p>
              </div>
              <div className="space-y-4 text-sm font-light leading-relaxed opacity-90">
                <p>
                  We operate as your technical partners. We handle the heavy lifting of digital growth—SEO, landing pages, and call tracking—so you can focus on the job site.
                </p>
                <p>
                  Our goal is simple: to make BuiltExpert the most dependable member of your team.
                </p>
              </div>
            </div>
          </div>
        </section>



        <CTASection />
      </div>
    </div>
  </>
);
}
