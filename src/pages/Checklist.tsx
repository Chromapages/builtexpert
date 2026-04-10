import * as React from "react";
import { ArrowRight, CheckCircle2, Download, Loader2, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";
import { motion, AnimatePresence } from "motion/react";
import { submitToCRM } from "@/lib/crm";
import {
  INDUSTRIAL,
  industrialMeshStyle,
  industrialTextGradientStyle,
} from "@/lib/industrialStyle";
import { HeaderSection } from "@/components/ui/HeaderSection";
import { Link } from "react-router-dom";

export function Checklist() {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Submit to CRM
    submitToCRM({
      name: "Checklist Lead", // No name field on this form
      email: email,
      brandId: "builtexpert",
      sourceDetail: "Checklist Download",
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsDone(true);
  };

  const checklistItems = [
    { title: "The 'Ghost' Phone Number", description: "Is your tracking number actually forwarding, or are you paying for dead air?" },
    { title: "The 3-Second Trust Test", description: "Can a homeowner tell you're licensed and local before they even scroll?" },
    { title: "The Mobile Friction Point", description: "Is your 'Book Now' button hiding behind a menu on iPhone 15s?" },
    { title: "The Review Gap", description: "Why fresh reviews aren't showing up on your landing pages automatically." },
    { title: "The Conversion Leak", description: "Where 40% of contractors lose leads between the click and the call." },
  ];

  return (
    <>
      <SEO
        title="HVAC Lead Leak Checklist — 21 Quick Checks"
        description="Stop guessing why your phone isn't ringing. Download the 21-point HVAC-specific checklist to find exactly where you're losing leads."
        canonicalPath="/checklist"
      />

      <div className="min-h-screen pb-32">
        <HeaderSection
          badge="Free Resource"
          title={
            <>
              Stop Guessing Why Your <span style={industrialTextGradientStyle}>Phone Isn't Ringing.</span>
            </>
          }
          description="The HVAC Lead Leak Checklist: 21 Quick Checks to Find What’s Costing You Calls and Jobs. Immediate download."
          imageSrc="/images/contractor-hero-bg.png"
          imageAlt="HVAC contractor workspace with blueprints and checklist"
        />

        <div className="mx-auto max-w-4xl px-8 mt-12">
          {!isDone ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Preview Side */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-headline text-2xl font-bold text-zinc-800">
                    What's Inside the Checklist:
                  </h2>
                  <div className="space-y-6">
                    {checklistItems.map((item, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-md3-primary/10 text-md3-primary transition-colors group-hover:bg-md3-primary group-hover:text-white">
                          <CheckCircle2 className="size-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-800">{item.title}</h3>
                          <p className="text-sm text-zinc-500 font-light leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                    <div className="pt-4">
                      <div className="h-px w-full bg-zinc-100 mb-4" />
                      <p className="text-xs font-medium text-zinc-400 italic">
                        + 16 more critical checks for local SEO, messaging, and trust.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div 
                className="bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden"
                style={{ borderWidth: "0.5px", borderColor: INDUSTRIAL.outline }}
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={industrialMeshStyle} />
                
                <h3 className="mb-6 font-headline text-xl font-bold text-zinc-800 relative z-10">
                  Get the Full Checklist PDF
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Work Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-0 top-1/2 -translate-y-1/2 size-4 text-zinc-300" />
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        className="w-full border-b border-zinc-200 py-4 pl-8 text-lg font-light outline-none transition-colors focus:border-md3-primary"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting || !email}
                    className="flex w-full items-center justify-center gap-3 bg-md3-primary py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-zinc-800 disabled:opacity-50 shadow-lg shadow-md3-primary/20"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Download Checklist
                        <Download className="size-4" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-[10px] font-light text-zinc-400">
                    We'll email you the PDF immediately. No spam. You can unsubscribe anytime.
                  </p>
                </form>


              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto bg-white p-12 text-center shadow-xl border border-zinc-100"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                <CheckCircle2 className="size-10" />
              </div>
              <h2 className="mb-4 font-headline text-3xl font-bold text-zinc-800">Checklist Sent!</h2>
              <p className="mb-8 text-zinc-500 font-light">
                We've sent the **HVAC Lead Leak Checklist** to <span className="font-semibold text-zinc-800">{email}</span>. Check your inbox (and spam folder) in the next 2 minutes.
              </p>
              
              <div className="h-px w-full bg-zinc-100 my-10" />
              
              <div className="space-y-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-md3-primary">
                  Ready to fast-track your results?
                </p>
                <p className="text-zinc-600 font-light max-w-sm mx-auto">
                  If you'd rather have us run through this for you—and show you exactly how to fix it—book a Lead System Audit.
                </p>
                <Link
                  to="/audit"
                  className="inline-flex items-center gap-3 bg-zinc-800 py-4 px-8 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-zinc-700"
                >
                  Start The $297 Audit
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          )}

          <div className="mt-24 bg-zinc-50 p-10 md:p-16 border border-zinc-100">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h3 className="font-headline text-2xl font-bold text-zinc-800">Why are we giving this away?</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                Most contractors are spending thousands on ads while their website is "leaking" leads through simple, avoidable mistakes. We want to show you exactly where those leaks are—so when you're ready to fix them for good, you know exactly who to call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
