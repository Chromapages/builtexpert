import * as React from "react";
import { Link } from "react-router-dom";

const SERVICES_LINKS = [
  { name: "Electrician Websites", href: "/services" },
  { name: "HVAC Websites", href: "/services" },
  { name: "Local SEO", href: "/services" },
];

const COMPANY_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer
      className="w-full border-t border-emerald-200/60 bg-emerald-50 dark:border-emerald-800/50 dark:bg-emerald-950"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link
            to="/"
            className="mb-6 block text-xl font-bold text-zinc-900 dark:text-white"
          >
            BuiltExpert
          </Link>
          <p className="mb-6 font-body text-sm leading-relaxed text-zinc-500">
            High-performance growth systems for electrical and HVAC contractors.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/builtexpert"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-zinc-200 text-zinc-600 transition-colors hover:bg-md3-primary hover:text-white dark:bg-zinc-800 dark:text-zinc-400"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
            </a>
            <a
              href="https://x.com/builtexpert"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-zinc-200 text-zinc-600 transition-colors hover:bg-md3-primary hover:text-white dark:bg-zinc-800 dark:text-zinc-400"
              aria-label="Social"
            >
              <span className="material-symbols-outlined text-[18px]">thumb_up</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-bold text-zinc-900 dark:text-white">Services</h3>
          <ul className="space-y-4">
            {SERVICES_LINKS.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="font-body text-sm text-zinc-500 decoration-teal-500/30 underline-offset-4 transition-colors hover:text-teal-600 hover:underline dark:hover:text-teal-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 font-bold text-zinc-900 dark:text-white">Company</h3>
          <ul className="space-y-4">
            {COMPANY_LINKS.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="font-body text-sm text-zinc-500 decoration-teal-500/30 underline-offset-4 transition-colors hover:text-teal-600 hover:underline dark:hover:text-teal-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 font-bold text-zinc-900 dark:text-white">Support</h3>
          <p className="mb-4 text-sm text-zinc-500">
            Questions about growing your trades business?
          </p>
          <a
            className="font-bold text-teal-700 hover:underline dark:text-teal-400"
            href="mailto:hello@builtexpert.com"
          >
            hello@builtexpert.com
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-emerald-200/60 px-8 pb-8 pt-8 dark:border-emerald-800/50">
        <p className="font-body text-xs text-zinc-500">
          © {new Date().getFullYear()} BuiltExpert. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
