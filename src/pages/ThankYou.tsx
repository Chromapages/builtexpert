import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { trackEmailClick, trackPhoneClick } from "@/components/Analytics";

const PHONE_DISPLAY = "(951)-295-9085";
const PHONE_HREF = "tel:+19512959085";

const NEXT_STEPS = [
  {
    title: "We review the details",
    body: "Our team looks at the information you sent so we can respond with the right next step.",
  },
  {
    title: "We reach out",
    body: "You should hear from us within one business day.",
  },
  {
    title: "We recommend the path",
    body: "If we’re a fit, we’ll outline the cleanest way to move forward.",
  },
];

export function ThankYou() {
  return (
    <>
      <SEO
        title="Thank You"
        description="Your request has been received. Expect a reply within one business day."
        canonical="/thank-you"
      />

      <Section className="min-h-[72vh] items-center" background="surface">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-md3-primary/10 text-md3-primary">
            <CheckCircle2 className="size-8" aria-hidden />
          </div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-md3-primary">
            Request Received
          </p>
          <h1 className="font-headline text-4xl font-light tracking-tight text-md3-on-surface sm:text-5xl">
            We&apos;ve got it — expect a reply within one business day.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-md3-on-surface-variant">
            We’ll review your request, look at the current opportunity, and send back the next best step.
          </p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            {NEXT_STEPS.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-md3-outline-variant bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-md3-primary">
                  0{index + 1}
                </p>
                <h2 className="mt-3 font-headline text-xl font-semibold text-md3-on-surface">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-md3-on-surface-variant">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/services" className="inline-flex">
              <Button variant="primary" size="lg">
                View Our Services
              </Button>
            </Link>
            <Link to="/pricing" className="inline-flex">
              <Button variant="secondary" size="lg">
                See Pricing
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-md3-on-surface-variant">
            Need to get in touch sooner?{" "}
            <a
              className="font-semibold text-md3-primary hover:underline"
              href={PHONE_HREF}
              onClick={() => trackPhoneClick(PHONE_DISPLAY, "thank_you")}
            >
              Call {PHONE_DISPLAY}
            </a>
            {" "}or{" "}
            <a
              className="font-semibold text-md3-primary hover:underline"
              href="mailto:hello@builtexpert.com"
              onClick={() => trackEmailClick("hello@builtexpert.com", "thank_you")}
            >
              hello@builtexpert.com
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
