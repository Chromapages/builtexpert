import * as React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { reportWebVitals } from "@/lib/performance";

// Replace with actual GA4 Measurement ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

export const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize GA4
        ReactGA.initialize(GA_MEASUREMENT_ID);

        // Start performance reporting
        reportWebVitals();
    }, []);

    useEffect(() => {
        // Track page view on route change
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname + location.search
        });

        // Log for verification (remove in production)
        console.debug(`[GA4] Page View: ${location.pathname}`);
    }, [location]);

    return null;
};

export function trackEvent(event: string, params?: Record<string, any>) {
  ReactGA.event(event, params);
}

export function trackPhoneClick(phone: string, location?: string) {
  ReactGA.event("phone_click", {
    phone,
    location,
  });
}

export function trackEmailClick(email: string, location?: string) {
  ReactGA.event("email_click", {
    email,
    location,
  });
}
