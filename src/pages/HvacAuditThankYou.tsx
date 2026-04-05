import * as React from "react";
import { Link } from "react-router-dom";
import { Check, FileText, Video, ListChecks, Mail, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const TURNAROUND = "3 business days";

const STEPS = [
  {
    num: 1,
    label: "Purchase confirmed",
    desc: "You're in. Your spot is reserved.",
    done: true,
  },
  {
    num: 2,
    label: "Intake form received",
    desc: "We have what we need to begin.",
    done: true,
  },
  {
    num: 3,
    label: "Audit in progress",
    desc: `We're reviewing your website, local visibility, and lead flow. Delivery within ${TURNAROUND}.`,
    done: false,
    active: true,
  },
  {
    num: 4,
    label: "Audit delivered",
    desc: "Your PDF, Loom walkthrough, and action plan land in your inbox.",
    done: false,
  },
];

const DELIVERABLES = [
  {
    icon: FileText,
    title: "Branded PDF audit",
    desc: "A structured report covering all four areas of your lead system with specific findings.",
  },
  {
    icon: Video,
    title: "Personalized Loom walkthrough",
    desc: "A recorded video walkthrough of your audit — your actual site, your actual issues.",
  },
  {
    icon: ListChecks,
    title: "Priority action plan",
    desc: "Clear next steps ranked by impact so you know exactly what to fix first.",
  },
];

export function HvacAuditThankYou() {
  return (
    <>
      <SEO
        titleFull="Audit Confirmed — What Happens Next | BuiltExpert"
        description="Your HVAC Lead System Audit is confirmed. Here's what to expect over the next 3 business days."
      />
      <div className="bg-[#fcf9f8]">

        <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16">
          {/* Confirmation badge */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#006565]">
              <Check className="h-7 w-7 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="font-headline text-2xl font-bold text-[#1a1a1a] sm:text-3xl">
              You're confirmed.
            </h1>
            <p className="mt-2 text-[#6b7280]">
              Your HVAC Lead System Audit is underway. Here's what happens next.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-8 rounded-xl border border-[#e5e7eb] bg-white p-6">
            <h2 className="mb-5 font-headline text-sm font-semibold uppercase tracking-wider text-[#006565]">
              Your timeline
            </h2>
            <ol className="space-y-0">
              {STEPS.map((step, i) => (
                <li key={step.num} className="flex gap-4">
                  {/* Step indicator + connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className={
                        step.done
                          ? "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#006565]"
                          : step.active
                            ? "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#006565] bg-white"
                            : "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#e5e7eb] bg-white"
                      }
                    >
                      {step.done ? (
                        <Check className="h-4 w-4 text-white" strokeWidth={2.5} />
                      ) : (
                        <span
                          className={`text-sm font-semibold ${step.active ? "text-[#006565]" : "text-[#bdc9c8]"}`}
                        >
                          {step.num}
                        </span>
                      )}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div
                        className={`mt-1 w-px flex-1 ${step.done ? "bg-[#006565]" : "bg-[#e5e7eb]"}`}
                        style={{ minHeight: "1.5rem" }}
                      />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="pb-5 pt-0.5">
                    <p
                      className={`font-headline font-semibold ${
                        step.done
                          ? "text-[#1a1a1a]"
                          : step.active
                            ? "text-[#006565]"
                            : "text-[#bdc9c8]"
                      }`}
                    >
                      {step.label}
                      {step.active && (
                        <span className="ml-2 inline-block rounded-full bg-[#e3fffe] px-2 py-0.5 text-xs font-medium text-[#006565]">
                          In progress
                        </span>
                      )}
                    </p>
                    <p
                      className={`mt-0.5 text-sm ${step.done || step.active ? "text-[#6b7280]" : "text-[#bdc9c8]"}`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* What you're getting */}
          <div className="mb-8 rounded-xl border border-[#e5e7eb] bg-white p-6">
            <h2 className="mb-5 font-headline text-sm font-semibold uppercase tracking-wider text-[#006565]">
              What you'll receive
            </h2>
            <div className="space-y-4">
              {DELIVERABLES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#e5e7eb] bg-[#f6f3f2]">
                    <Icon className="h-4 w-4 text-[#006565]" />
                  </div>
                  <div>
                    <p className="font-headline font-semibold text-[#1a1a1a]">{title}</p>
                    <p className="mt-0.5 text-sm text-[#6b7280]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact block */}
          <div className="mb-8 rounded-xl border border-[#e5e7eb] bg-[#f6f3f2] p-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#e5e7eb] bg-white">
                <Mail className="h-4 w-4 text-[#006565]" />
              </div>
              <div>
                <p className="font-headline font-semibold text-[#1a1a1a]">
                  Questions? We're here.
                </p>
                <p className="mt-0.5 text-sm text-[#6b7280]">
                  If you have questions before or after your audit arrives, reach
                  out directly at{" "}
                  <a
                    href="mailto:hello@builtexpert.co"
                    className="font-medium text-[#006565] hover:underline"
                  >
                    hello@builtexpert.co
                  </a>
                  . We aim to respond within one business day.
                </p>
              </div>
            </div>
          </div>

          {/* Upsell bridge — soft, non-pushy */}
          <div className="rounded-xl border border-[#1a1a1a] bg-[#1a1a1a] p-6 text-white">
            <p className="font-headline text-xs font-semibold uppercase tracking-wider text-[#76d6d5]">
              After your audit
            </p>
            <h2 className="mt-2 font-headline text-xl font-bold">
              Ready to fix what we find?
            </h2>
            <p className="mt-2 text-sm text-[#9ca3af]">
              Many HVAC businesses use the audit as the starting point for a
              larger project — a new website, a local SEO campaign, or a full
              lead system rebuild. If the findings point in that direction, we'll
              be ready to talk through options. No pressure built into the audit.
            </p>
            <a
              href="mailto:hello@builtexpert.co?subject=Post-Audit%20Project%20Inquiry"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#3e4949] bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get in touch after your audit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </main>


      </div>
    </>
  );
}
