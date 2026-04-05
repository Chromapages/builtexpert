import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { trackEmailClick, trackPhoneClick } from "@/components/Analytics";
import { DURATIONS, EASINGS } from "@/lib/animation";

const PHONE_DISPLAY = "(951)-295-9085";
const PHONE_HREF = "tel:+19512959085";

const NAV_LINKS: { name: string; href: string }[] = [
  { name: "Services", href: "/services" },
  { name: "Who We Help", href: "/who-we-help" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/journal" },
  { name: "About", href: "/about" },
];

function isNavLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b [border-bottom-width:0.5px]",
          isScrolled
            ? "border-zinc-200 bg-white/90 py-2 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.1)] backdrop-blur-xl"
            : "border-zinc-100 bg-white py-5"
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          {/* Logo */}
          <Link
            to="/"
            className="font-headline text-xl font-black tracking-tighter text-zinc-900 transition-colors hover:text-md3-primary md:text-2xl"
            aria-label="BuiltExpert — home"
          >
            BuiltExpert<span className="text-md3-primary">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex lg:gap-4" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              const active = isNavLinkActive(location.pathname, link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "relative cursor-pointer px-4 py-2 font-headline text-[13px] font-bold tracking-tight transition-colors duration-300",
                    active ? "text-md3-primary" : "text-zinc-500 hover:text-zinc-900"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="relative z-10">{link.name}</span>
                  {active && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-md3-primary"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={PHONE_HREF}
              className="group flex flex-col items-end"
              onClick={() => trackPhoneClick(PHONE_DISPLAY, "navbar_desktop")}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-md3-primary transition-colors">Direct Support</span>
              <span className="font-headline text-sm font-black text-zinc-900">{PHONE_DISPLAY}</span>
            </a>
            <Link
              to="/audit"
              className="relative overflow-hidden bg-zinc-950 px-6 py-3 text-[13px] font-black uppercase tracking-tighter text-white transition-all hover:bg-md3-primary hover:px-8"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Your Audit <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center text-zinc-900 md:hidden"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative h-4 w-6">
              <span className={cn(
                "absolute left-0 top-0 block h-0.5 w-full bg-zinc-900 transition-all duration-300",
                isMobileMenuOpen && "top-2 -rotate-45"
              )} />
              <span className={cn(
                "absolute left-0 top-2 block h-0.5 w-full bg-zinc-900 transition-all duration-300",
                isMobileMenuOpen && "opacity-0 scale-x-0"
              )} />
              <span className={cn(
                "absolute left-0 top-4 block h-0.5 w-full bg-zinc-900 transition-all duration-300",
                isMobileMenuOpen && "top-2 rotate-45"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASINGS.industrial }}
              className="overflow-hidden border-t border-zinc-100 bg-white md:hidden"
            >
              <nav className="flex flex-col p-6" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "block border-b border-zinc-50 py-4 font-headline text-lg font-black tracking-tight transition-colors",
                        isNavLinkActive(location.pathname, link.href)
                          ? "text-md3-primary"
                          : "text-zinc-900 active:text-md3-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 flex flex-col gap-4"
                >
                  <Link
                    to="/audit"
                    className="flex w-full items-center justify-center bg-zinc-950 py-5 text-sm font-black uppercase tracking-tighter text-white"
                  >
                    Start The System Audit →
                  </Link>
                  <a
                    href={PHONE_HREF}
                    className="flex w-full items-center justify-center border border-zinc-200 py-5 text-sm font-black uppercase tracking-tighter text-zinc-900"
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
