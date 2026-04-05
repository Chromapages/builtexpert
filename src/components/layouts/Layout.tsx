import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { GlobalCTA } from "@/components/features/GlobalCTA";
import { FloatingActionButton } from "@/components/ui/FloatingActionButton";

const HIDE_GLOBAL_CTA_PATHS = [
    "/",
    "/about",
    "/services",
    "/who-we-help",
    "/pricing",
    "/process",
    "/contact",
    "/audit",
    "/thank-you",
    "/hvac-audit-intake",
    "/hvac-audit-landing",
    "/hvac-audit-thank-you",
    "/blog",
    "/journal",
    "/404",
    "/studio"
];

export function Layout() {
  const { pathname } = useLocation();
  
  // Hide GlobalCTA if:
  // 1. Path is explicitly in the exclusion list
  // 2. Path is a dynamic Service detail (/services/...)
  // 3. Path is a dynamic Trade detail (/who-we-help/...)
  // 4. Path is an individual Case Study (/work/...)
  // 5. Path is a Studio sub-page (/studio/...)
  const isCtaHidden = 
    HIDE_GLOBAL_CTA_PATHS.includes(pathname) ||
    pathname.startsWith("/services/") ||
    pathname.startsWith("/who-we-help/") ||
    pathname.startsWith("/work/") ||
    pathname.startsWith("/studio/");

  const showGlobalCTA = !isCtaHidden;

  return (
    <div className="flex min-h-[100dvh] flex-col bg-md3-surface text-md3-on-surface font-body">
      <Navbar />
      <main className="flex-1">
        <Outlet />
        {showGlobalCTA && <GlobalCTA />}
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
