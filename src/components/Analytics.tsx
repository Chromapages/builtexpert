import * as React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { reportWebVitals } from "@/lib/performance";

// Replace with actual GA4 Measurement ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
const HAS_VALID_GA_ID = Boolean(
    GA_MEASUREMENT_ID &&
    GA_MEASUREMENT_ID !== "G-XXXXXXXXXX"
);

export const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        if (!HAS_VALID_GA_ID) return;

        // Initialize GA4
        ReactGA.initialize(GA_MEASUREMENT_ID);

        // Start performance reporting
        reportWebVitals();
    }, []);

    useEffect(() => {
        if (!HAS_VALID_GA_ID) return;

        // Track page view on route change
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname + location.search
        });
    }, [location]);

    return null;
};

export function trackEvent(event: string, params?: Record<string, any>) {
  if (!HAS_VALID_GA_ID) return;
  ReactGA.event(event, params);
}

export function trackPhoneClick(phone: string, location?: string) {
  if (!HAS_VALID_GA_ID) return;
  ReactGA.event("phone_click", {
    phone,
    location,
  });
}

export function trackEmailClick(email: string, location?: string) {
  if (!HAS_VALID_GA_ID) return;
  ReactGA.event("email_click", {
    email,
    location,
  });
}
