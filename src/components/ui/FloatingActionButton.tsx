import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/components/Analytics";

export function FloatingActionButton() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show after 400px scroll
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't show on audit pages or contact
  const hidePaths = ["/audit", "/contact", "/thank-you", "/hvac-audit-intake", "/hvac-audit-landing"];
  if (hidePaths.includes(pathname)) return null;

  return (
    <div
      className={cn(
        "fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-6 z-50 transition-all duration-300 transform md:hidden",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <Link
        to="/audit"
        onClick={() => trackEvent("click_cta", { location: "floating_action_button", label: "Start The Audit" })}
        className="flex h-14 items-center justify-center gap-2 rounded-full bg-md3-primary px-6 font-headline text-xs font-bold uppercase tracking-[0.25em] text-white shadow-2xl active:scale-[0.95]"
      >
        <Search className="size-4" />
        Start The Audit
      </Link>
    </div>
  );
}
