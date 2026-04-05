/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layouts/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Analytics } from "@/components/Analytics";
import { Home } from "@/pages/Home";
import { Services } from "@/pages/Services";
import { Process } from "@/pages/Process";
import { Work } from "@/pages/Work";
import { CaseStudy } from "@/pages/CaseStudy";
import { About } from "@/pages/About";
import { Pricing } from "@/pages/Pricing";
import { Contact } from "@/pages/Contact";
import { Privacy } from "@/pages/Privacy";
import { Terms } from "@/pages/Terms";
import { Blog } from "@/pages/Blog";
import { PostDetail } from "@/pages/PostDetail";
import { NotFound } from "@/pages/NotFound";
import { WhoWeHelp } from "@/pages/WhoWeHelp";
import { ServiceDetail } from "@/pages/ServiceDetail";
import { TradeDetail } from "@/pages/TradeDetail";
import { LeadMagnet } from "@/pages/LeadMagnet";
import { HvacAuditLanding } from "@/pages/HvacAuditLanding";
import { HvacAuditIntake } from "@/pages/HvacAuditIntake";
import { HvacAuditThankYou } from "@/pages/HvacAuditThankYou";
import { Audit } from "@/pages/Audit";
import { AuditSuccess } from "@/pages/AuditSuccess";
import { Checklist } from "@/pages/Checklist";
import { ThankYou } from "@/pages/ThankYou";
import { lazy, Suspense } from "react";
const StudioPage = lazy(() => import("@/pages/StudioPage"));

import { LoadingBar } from "@/components/ui/LoadingBar";
import { TransitionProvider } from "@/components/providers/TransitionProvider";

export default function App() {
  return (
    <BrowserRouter>
      <LoadingBar />
      <ScrollToTop />
      <Analytics />
      <TransitionProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contractor-lead-fix" element={<LeadMagnet />} />
            <Route path="hvac-lead-system-audit" element={<HvacAuditLanding />} />
            <Route path="hvac-audit-intake" element={<HvacAuditIntake />} />
            <Route path="hvac-audit-thank-you" element={<HvacAuditThankYou />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="process" element={<Process />} />
            <Route path="work" element={<Work />} />
            <Route path="work/:slug" element={<CaseStudy />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="about" element={<About />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="thank-you" element={<ThankYou />} />
            <Route path="journal" element={<Blog />} />
            <Route path="journal/:slug" element={<PostDetail />} />
            <Route path="who-we-help" element={<WhoWeHelp />} />
            <Route path="who-we-help/:slug" element={<TradeDetail />} />
            <Route path="audit" element={<Audit />} />
            <Route path="audit/success" element={<AuditSuccess />} />
            <Route path="checklist" element={<Checklist />} />
            <Route
              path="studio/*"
              element={
                <Suspense fallback={<div className="flex h-screen items-center justify-center bg-zinc-950 text-white font-headline">Loading Studio...</div>}>
                  <StudioPage />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </TransitionProvider>
    </BrowserRouter>
  );
}
