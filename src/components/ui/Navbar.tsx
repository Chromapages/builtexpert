import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", {
        "bg-white/80 backdrop-blur-md shadow-subtle": isScrolled,
        "bg-transparent": !isScrolled,
      })}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link
            to="/"
            className="font-display text-2xl font-black tracking-tighter text-indigo-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-900 focus-visible:ring-offset-2"
          >
            Chromapages
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-indigo-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-900 focus-visible:ring-offset-2 rounded-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link to="/contact" tabIndex={-1}>
            <Button variant="primary" size="sm">
              Book A Call
            </Button>
          </Link>
        </div>

        <div className="flex md:hidden items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-20 z-40 bg-white shadow-card md:hidden"
          >
            <div className="space-y-1 px-4 pb-6 pt-2 sm:px-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block rounded-md px-3 py-4 text-base font-medium text-neutral-900 hover:bg-neutral-50 hover:text-indigo-900"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-6 px-3">
                <Link to="/contact" tabIndex={-1}>
                  <Button variant="primary" className="w-full justify-center">
                    Book A Call
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
