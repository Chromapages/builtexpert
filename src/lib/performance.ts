import ReactGA from "react-ga4";

export function reportWebVitals() {
    if (typeof window === "undefined") return;

    // Function to send metrics to GA4
    const sendToAnalytics = ({ name, value, id }: { name: string; value: number; id: string }) => {
        ReactGA.event({
            category: "Web Vitals",
            action: name,
            value: Math.round(name === "CLS" ? value * 1000 : value), // GA4 value must be integer
            label: id,
            nonInteraction: true,
        });
    };

    try {
        // LCP
        new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                sendToAnalytics({
                    name: "LCP",
                    value: entry.startTime,
                    id: entry.name,
                });
            }
        }).observe({ type: "largest-contentful-paint", buffered: true });

        // CLS
        new PerformanceObserver((entryList) => {
            let clsValue = 0;
            for (const entry of entryList.getEntries() as any) {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                }
            }
            sendToAnalytics({
                name: "CLS",
                value: clsValue,
                id: "cumulative-layout-shift",
            });
        }).observe({ type: "layout-shift", buffered: true });

        // FID
        new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries() as any) {
                const value = entry.processingStart - entry.startTime;
                sendToAnalytics({
                    name: "FID",
                    value,
                    id: entry.name,
                });
            }
        }).observe({ type: "first-input", buffered: true });

        // FCP
        new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                if (entry.name === "first-contentful-paint") {
                    sendToAnalytics({
                        name: "FCP",
                        value: entry.startTime,
                        id: entry.name,
                    });
                }
            }
        }).observe({ type: "paint", buffered: true });

    } catch (e) {
        console.warn("PerformanceObserver not supported", e);
    }
}
