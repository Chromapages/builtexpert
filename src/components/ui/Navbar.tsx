import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NAV_LINKS: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Who We Help", href: "/who-we-help" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

function isNavLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-headline text-2xl font-extrabold tracking-tighter text-zinc-900"
        >
          BuiltExpert
        </Link>

        <nav className="hidden items-center space-x-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = isNavLinkActive(location.pathname, link.href);
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "font-headline text-sm font-bold tracking-tight transition-colors duration-200",
                  active
                    ? "border-b-2 border-teal-700 pb-1 text-teal-700"
                    : "text-zinc-600 hover:text-zinc-900",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden bg-md3-primary px-6 py-2.5 text-sm font-bold tracking-tight text-md3-on-primary shadow-sm transition-all duration-200 hover:bg-md3-primary-container active:scale-95 md:inline-flex"
          >
            Get A Free Audit
          </Link>
          <Link
            to="#"
            className="hidden border border-zinc-200 px-6 py-2.5 text-sm font-bold tracking-tight text-zinc-900 transition-all duration-200 hover:bg-zinc-50 active:scale-95 md:inline-flex"
            style={{ borderWidth: "0.5px" }}
          >
            Go to App
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-900 md:hidden"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-zinc-900 transition-transform dark:bg-white",
                  isMobileMenuOpen && "translate-y-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-zinc-900 transition-opacity dark:bg-white",
                  isMobileMenuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-zinc-900 transition-transform dark:bg-white",
                  isMobileMenuOpen && "-translate-y-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-zinc-200 transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => {
            const active = isNavLinkActive(location.pathname, link.href);
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "rounded-lg px-3 py-3 font-headline text-sm font-bold",
                  active
                    ? "bg-teal-50 text-teal-800"
                    : "text-zinc-700",
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-2 flex items-center justify-center bg-md3-primary px-6 py-3 text-sm font-bold text-md3-on-primary"
          >
            Get A Free Audit
          </Link>
          <Link
            to="#"
            className="mt-2 flex items-center justify-center border border-zinc-200 px-6 py-3 text-sm font-bold text-zinc-900"
            style={{ borderWidth: "0.5px" }}
          >
            Go to App
          </Link>
        </nav>
      </div>
    </header>
  );
}
