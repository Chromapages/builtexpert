import * as React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export function Layout() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-off-white">
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
