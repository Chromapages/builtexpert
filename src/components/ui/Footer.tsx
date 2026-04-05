import * as React from "react";
import { Link } from "react-router-dom";
import { trackEmailClick, trackPhoneClick } from "@/components/Analytics";

const PHONE_DISPLAY = "(951)-295-9085";
const PHONE_HREF = "tel:+19512959085";

const SERVICES_LINKS = [
  { name: "Contractor Websites", href: "/services/contractor-websites" },
  { name: "Landing Pages", href: "/services/landing-pages" },
  { name: "Local SEO", href: "/services/local-seo" },
  { name: "Growth Support", href: "/services/growth-support" },
];

const RESOURCE_LINKS = [
  { name: "Our Process", href: "/process" },
  { name: "Who We Help", href: "/who-we-help" },
  { name: "Lead System Audit", href: "/audit" },
  { name: "Journal", href: "/journal" },
];

const COMPANY_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer
      className="w-full border-t border-zinc-800 bg-[#0f1010] text-zinc-400"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="md:col-span-1">
          <Link
            to="/"
            className="mb-6 block text-xl font-bold text-white"
          >
            BuiltExpert
          </Link>
          <p className="mb-6 font-body text-sm leading-relaxed text-zinc-500">
            High-performance growth systems for contractors.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/builtexpert"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition-colors hover:bg-md3-primary hover:text-white"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a
              href="https://x.com/builtexpert"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition-colors hover:bg-md3-primary hover:text-white"
              aria-label="X (Twitter)"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-bold text-white uppercase text-[10px] tracking-[0.2em]">Services</h3>
          <ul className="space-y-4">
            {SERVICES_LINKS.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="font-body text-sm text-zinc-500 hover:text-md3-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 font-bold text-white uppercase text-[10px] tracking-[0.2em]">Resources</h3>
          <ul className="space-y-4">
            {RESOURCE_LINKS.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="font-body text-sm text-zinc-500 hover:text-md3-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 font-bold text-white uppercase text-[10px] tracking-[0.2em]">Company</h3>
          <ul className="space-y-4">
            {COMPANY_LINKS.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="font-body text-sm text-zinc-500 hover:text-md3-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 font-bold text-white uppercase text-[10px] tracking-[0.2em]">Support</h3>
          <p className="mb-4 text-sm text-zinc-500">
            Questions about growing your trades business?
          </p>
          <a
            className="block font-bold text-md3-primary hover:underline"
            href="mailto:hello@builtexpert.com"
            onClick={() => trackEmailClick("hello@builtexpert.com", "footer")}
          >
            hello@builtexpert.com
          </a>
          <a
            className="mt-3 block font-body text-sm text-zinc-400 transition-colors hover:text-white"
            href={PHONE_HREF}
            onClick={() => trackPhoneClick(PHONE_DISPLAY, "footer")}
          >
            Call {PHONE_DISPLAY}
          </a>
          <Link
            to="/audit"
            className="mt-4 inline-block bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
          >
            Start The Audit
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] border-t border-zinc-800 px-4 pb-8 pt-8 sm:px-6 lg:px-8">
        <p className="font-body text-xs text-zinc-500">
          © {new Date().getFullYear()} BuiltExpert. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
