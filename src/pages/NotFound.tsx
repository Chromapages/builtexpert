import * as React from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function NotFound() {
    return (
        <>
            <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
            <Section className="min-h-[80vh] flex items-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-5">
                    <div className="h-full w-full bg-[radial-gradient(#2C3892_1px,transparent_1px)] [background-size:24px_24px]" />
                </div>
                <div className="relative z-10 max-w-4xl">
                    <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted mb-4">
                        Not Found
                    </p>
                    <h1 className="text-[6rem] md:text-[9rem] font-display font-light text-ink/15 leading-none mb-4 select-none">
                        404
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-display font-light text-ink uppercase leading-none mb-6 max-w-3xl">
                        That Page Isn’t Here.
                    </h2>
                    <p className="text-lg text-muted leading-relaxed mb-12 max-w-prose">
                        The page you’re looking for doesn’t exist, has moved, or was never part of the current site structure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Link to="/">
                            <Button variant="primary" size="lg">Back to Home</Button>
                        </Link>
                        <Link to="/work">
                            <Button variant="secondary" size="lg">View Work</Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="secondary" size="lg">Contact</Button>
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 text-[10px] font-bold uppercase tracking-[0.25em] text-muted">
                        <Link to="/services" className="hover:text-ink transition-colors">Services</Link>
                        <Link to="/process" className="hover:text-ink transition-colors">Process</Link>
                        <Link to="/journal" className="hover:text-ink transition-colors">Journal</Link>
                    </div>
                </div>
            </Section>
        </>
    );
}
