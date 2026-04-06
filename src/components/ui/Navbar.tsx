import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { trackPhoneClick } from "@/components/Analytics";
import { EASINGS } from "@/lib/animation";

const PHONE_DISPLAY = "(951)-295-9085";
const PHONE_HREF = "tel:+19512959085";

const NAV_LINKS: { name: string; href: string }[] = [
  { name: "Services", href: "/services" },
  { name: "Who We Help", href: "/who-we-help" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/journal" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function isNavLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

// Each letter rolls up and a fresh copy rolls in from below — staggered
function RollingText({ text, isHovered, isActive }: { text: string; isHovered: boolean; isActive: boolean }) {
  const letters = text.split("");
  // Smooth cubic-bezier — eases in gently, doesn't overshoot
  const ease: [number, number, number, number] = [0.4, 0, 0.2, 1];

  return (
    <span className="relative inline-flex overflow-hidden leading-none py-[0.15em]" aria-hidden>
      {/* Layer 1 — original, rolls up on hover */}
      <span className="flex">
        {letters.map((char, i) => (
          <motion.span
            key={`top-${i}`}
            animate={{ y: isHovered && !isActive ? "-120%" : "0%" }}
            transition={{ duration: 0.38, delay: i * 0.012, ease }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
      {/* Layer 2 — clone rolls in from below */}
      <span className="absolute inset-0 flex">
        {letters.map((char, i) => (
          <motion.span
            key={`bot-${i}`}
            animate={{ y: isHovered && !isActive ? "0%" : "120%" }}
            transition={{ duration: 0.38, delay: i * 0.012, ease }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const hamburgerRef = React.useRef<HTMLButtonElement>(null);
  const firstLinkRef = React.useRef<HTMLAnchorElement>(null);
  const lastLinkRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  React.useEffect(() => {
    if (!isMobileMenuOpen) return;
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const first = firstLinkRef.current;
      const last = lastLinkRef.current;
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
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
          <nav
            className="hidden items-center gap-1 md:flex lg:gap-2"
            aria-label="Primary navigation"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {NAV_LINKS.map((link) => {
              const active = isNavLinkActive(location.pathname, link.href);
              const hovered = hoveredLink === link.name;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  className={cn(
                    "relative cursor-pointer px-4 py-2 font-headline text-[13px] font-bold tracking-tight",
                    active ? "text-md3-primary" : "text-zinc-500"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {/* Shared sliding pill — glides between hovered items */}
                  {hovered && !active && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-sm bg-zinc-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Letter-roll text — visible label for a11y, visual via RollingText */}
                  <span className="sr-only">{link.name}</span>
                  <span
                    className={cn(
                      "relative z-10 transition-colors duration-150",
                      hovered && !active ? "text-zinc-900" : ""
                    )}
                  >
                    <RollingText text={link.name} isHovered={hovered} isActive={active} />
                  </span>

                  {/* Active spring underline */}
                  {active && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-md3-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
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
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-md3-primary">Direct Support</span>
              <span className="font-headline text-sm font-black text-zinc-900">{PHONE_DISPLAY}</span>
            </a>
            <Link
              to="/audit"
              className="group relative overflow-hidden bg-zinc-950 px-6 py-3 text-[13px] font-black uppercase tracking-tighter text-white transition-all duration-300 hover:bg-md3-primary"
            >
              {/* Shimmer sweep on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/10 transition-transform duration-500 group-hover:translate-x-[200%]"
              />
              <span className="relative z-10 flex items-center gap-2">
                Get Your Audit
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            type="button"
            className="flex h-12 w-12 cursor-pointer items-center justify-center text-zinc-900 md:hidden"
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
                {NAV_LINKS.map((link, i) => {
                  const active = isNavLinkActive(location.pathname, link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ x: -24, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.06 + 0.08, ease: [0.215, 0.61, 0.355, 1], duration: 0.35 }}
                    >
                      <Link
                        ref={i === 0 ? firstLinkRef : undefined}
                        to={link.href}
                        className={cn(
                          "group flex items-center justify-between border-b border-zinc-100 py-4 font-headline text-lg font-black tracking-tight transition-all duration-200",
                          active
                            ? "pl-3 text-md3-primary border-l-2 border-l-md3-primary"
                            : "pl-0 text-zinc-900 hover:pl-3 hover:text-md3-primary"
                        )}
                      >
                        {link.name}
                        <motion.span
                          initial={false}
                          animate={{
                            opacity: active ? 1 : 0,
                            x: active ? 0 : -8,
                          }}
                          className="text-md3-primary group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.42 }}
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
                    ref={lastLinkRef}
                    onClick={() => trackPhoneClick(PHONE_DISPLAY, "navbar_mobile")}
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
