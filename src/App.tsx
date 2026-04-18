/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layouts/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Analytics } from "@/components/Analytics";
const StudioPage = lazy(() => import("@/pages/StudioPage"));
const Home = lazy(() => import("@/pages/Home").then((module) => ({ default: module.Home })));
const Services = lazy(() => import("@/pages/Services").then((module) => ({ default: module.Services })));
const Process = lazy(() => import("@/pages/Process").then((module) => ({ default: module.Process })));
const Work = lazy(() => import("@/pages/Work").then((module) => ({ default: module.Work })));
const CaseStudy = lazy(() => import("@/pages/CaseStudy").then((module) => ({ default: module.CaseStudy })));
const About = lazy(() => import("@/pages/About").then((module) => ({ default: module.About })));
const Pricing = lazy(() => import("@/pages/Pricing").then((module) => ({ default: module.Pricing })));
const Contact = lazy(() => import("@/pages/Contact").then((module) => ({ default: module.Contact })));
const Privacy = lazy(() => import("@/pages/Privacy").then((module) => ({ default: module.Privacy })));
const Terms = lazy(() => import("@/pages/Terms").then((module) => ({ default: module.Terms })));
const Blog = lazy(() => import("@/pages/Blog").then((module) => ({ default: module.Blog })));
const PostDetail = lazy(() => import("@/pages/PostDetail").then((module) => ({ default: module.PostDetail })));
const NotFound = lazy(() => import("@/pages/NotFound").then((module) => ({ default: module.NotFound })));
const WhoWeHelp = lazy(() => import("@/pages/WhoWeHelp").then((module) => ({ default: module.WhoWeHelp })));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail").then((module) => ({ default: module.ServiceDetail })));
const TradeDetail = lazy(() => import("@/pages/TradeDetail").then((module) => ({ default: module.TradeDetail })));
const LeadMagnet = lazy(() => import("@/pages/LeadMagnet").then((module) => ({ default: module.LeadMagnet })));
const HvacAuditLanding = lazy(() => import("@/pages/HvacAuditLanding").then((module) => ({ default: module.HvacAuditLanding })));
const HvacAuditIntake = lazy(() => import("@/pages/HvacAuditIntake").then((module) => ({ default: module.HvacAuditIntake })));
const HvacAuditThankYou = lazy(() => import("@/pages/HvacAuditThankYou").then((module) => ({ default: module.HvacAuditThankYou })));
const Audit = lazy(() => import("@/pages/Audit").then((module) => ({ default: module.Audit })));
const AuditSuccess = lazy(() => import("@/pages/AuditSuccess").then((module) => ({ default: module.AuditSuccess })));
const Checklist = lazy(() => import("@/pages/Checklist").then((module) => ({ default: module.Checklist })));
const ThankYou = lazy(() => import("@/pages/ThankYou").then((module) => ({ default: module.ThankYou })));

import { LoadingBar } from "@/components/ui/LoadingBar";
import { TransitionProvider } from "@/components/providers/TransitionProvider";

export default function App() {
  return (
    <BrowserRouter>
      <LoadingBar />
      <ScrollToTop />
      <Analytics />
      <TransitionProvider>
        <Suspense fallback={<div className="flex h-screen items-center justify-center bg-md3-surface text-md3-on-surface font-headline">Loading...</div>}>
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
        </Suspense>
      </TransitionProvider>
    </BrowserRouter>
  );
}
