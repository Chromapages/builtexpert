import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { trackEmailClick, trackPhoneClick } from "@/components/Analytics";

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
      {/* Skip-to-content — WCAG 2.1 Level A */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-md3-primary focus:outline focus:outline-2 focus:outline-md3-primary"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b [border-bottom-width:0.5px]",
          isScrolled
            ? "border-zinc-200 bg-white/95 py-2 shadow-sm backdrop-blur-md"
            : "border-zinc-100 bg-white py-4"
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-12 2xl:px-16 3xl:max-w-screen-2xl 4xl:max-w-[1728px]">
          {/* Logo */}
          <Link
            to="/"
            className="font-headline text-xl font-extrabold tracking-tighter text-zinc-900 transition-colors hover:text-md3-primary md:text-2xl"
            aria-label="BuiltExpert — home"
          >
            BuiltExpert
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 md:flex lg:gap-7" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              const active = isNavLinkActive(location.pathname, link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "cursor-pointer font-headline text-sm font-bold tracking-tight transition-colors duration-200",
                    active
                      ? "border-b-2 border-md3-primary pb-0.5 text-md3-primary"
                      : "text-zinc-600 hover:text-zinc-900"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick(PHONE_DISPLAY, "navbar_desktop")}
              className="cursor-pointer border px-5 py-2 text-sm font-bold tracking-tight text-zinc-700 transition-colors duration-200 hover:bg-zinc-50 [border-width:0.5px]"
              style={{ borderColor: "#d4d4d4" }}
            >
              Call {PHONE_DISPLAY}
            </a>
            <Link
              to="/audit"
              className="cursor-pointer bg-md3-primary px-6 py-2.5 text-sm font-bold tracking-tight text-white transition-colors duration-200 hover:bg-[#1a1a1a]"
            >
              Start The Audit →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center text-zinc-900 md:hidden"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-zinc-900 transition-transform duration-200",
                  isMobileMenuOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-zinc-900 transition-opacity duration-200",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-zinc-900 transition-transform duration-200",
                  isMobileMenuOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={cn(
            "overflow-hidden border-t border-zinc-100 transition-all duration-300 md:hidden [border-top-width:0.5px]",
            isMobileMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          )}
          style={{ background: "white" }}
        >
          <nav className="flex flex-col gap-0.5 px-6 py-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const active = isNavLinkActive(location.pathname, link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "cursor-pointer px-3 py-3 font-headline text-sm font-bold tracking-tight transition-colors",
                    active
                      ? "bg-teal-50 text-teal-800"
                      : "text-zinc-700 hover:bg-zinc-50"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 px-6 pb-6 pt-2">
            <Link
              to="/audit"
              className="flex cursor-pointer items-center justify-center bg-md3-primary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1a1a1a]"
            >
              Start The Audit →
            </Link>
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick(PHONE_DISPLAY, "navbar_mobile")}
              className="flex cursor-pointer items-center justify-center border px-6 py-3.5 text-sm font-bold text-zinc-800 transition-colors hover:bg-zinc-50 [border-width:0.5px]"
              style={{ borderColor: "#d4d4d4" }}
            >
              Call {PHONE_DISPLAY}
            </a>
            <Link
              to="/contact"
              className="flex cursor-pointer items-center justify-center text-sm font-bold text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Prefer email? Contact us
            </Link>
            <a
              href="mailto:hello@builtexpert.com"
              onClick={() => trackEmailClick("hello@builtexpert.com", "navbar_mobile")}
              className="mt-1 text-center text-xs font-light text-zinc-400 transition-colors hover:text-md3-primary"
            >
              hello@builtexpert.com
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
