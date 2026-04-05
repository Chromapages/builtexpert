import * as React from "react";
import { CheckCircle2, Calendar, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { SEO } from "@/components/SEO";
import { INDUSTRIAL, industrialMeshStyle } from "@/lib/industrialStyle";

export function AuditSuccess() {
  return (
    <>
      <SEO 
        title="Audit Initiated — Chromapages"
        description="Your Lead System Audit has been successfully initiated. Check your email for next steps."
      />
      
      <div className="min-h-screen pt-32 pb-24" style={industrialMeshStyle}>
        <div className="mx-auto max-w-2xl px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border p-12 shadow-2xl relative overflow-hidden text-center"
            style={{ borderColor: INDUSTRIAL.outline }}
          >
            <div className="absolute top-0 left-0 h-1.5 w-full bg-md3-primary" />
            
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-md3-primary/10 text-md3-primary border border-md3-primary/20">
                <CheckCircle2 className="size-10" />
              </div>
            </div>

            <span className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-md3-primary">
              Payment Confirmed
            </span>
            <h1 className="mb-6 font-headline text-4xl font-bold tracking-tight md:text-5xl uppercase">
              Audit <span className="text-md3-primary">Initiated.</span>
            </h1>
            
            <p className="mb-12 text-zinc-600 font-light leading-relaxed">
              We&apos;ve received your diagnostic data and payment successfully. Our team is now performing a manual teardown of your digital presence and local competition.
            </p>

            <div className="grid grid-cols-1 gap-6 text-left mb-12">
               <div className="group flex gap-5 border p-6 transition-all hover:bg-zinc-50" style={{ borderColor: INDUSTRIAL.outline }}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-zinc-900 text-white">
                    <Calendar className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest mb-1">Timeline</h3>
                    <p className="text-sm text-zinc-500 font-light">Expect your video audit and 47-point checklist in your inbox within 48 business hours.</p>
                  </div>
               </div>

               <div className="group flex gap-5 border p-6 transition-all hover:bg-zinc-50" style={{ borderColor: INDUSTRIAL.outline }}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-zinc-900 text-white">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest mb-1">Check Your Email</h3>
                    <p className="text-sm text-zinc-500 font-light">We just sent a receipt and a brief follow-up questionnaire to ensure we have full context.</p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <Link 
                  to="/" 
                  className="flex-1 border border-zinc-200 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:bg-zinc-50 transition-all text-center"
               >
                 Back to Home
               </Link>
               <Link 
                  to="/contact?ref=audit-success" 
                  className="flex-1 bg-[#1a1a1a] py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:bg-md3-primary transition-all text-center flex items-center justify-center gap-2"
               >
                 Book Strategy Call <ArrowRight className="size-4" />
               </Link>
            </div>

            <div className="mt-12 border-t pt-8">
               <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-400">
                 Questions? Email us at <span className="text-md3-primary">ops@chromapages.tech</span>
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
