import * as React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export function Layout() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-md3-surface text-md3-on-surface font-body">
      <Navbar />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
