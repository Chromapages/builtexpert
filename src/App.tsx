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
import { NotFound } from "@/pages/NotFound";
import { WhoWeHelp } from "@/pages/WhoWeHelp";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="process" element={<Process />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<CaseStudy />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="journal" element={<Blog />} />
          <Route path="who-we-help" element={<WhoWeHelp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
