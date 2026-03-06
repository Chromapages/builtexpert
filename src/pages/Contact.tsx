import * as React from "react";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [formState, setFormState] = React.useState({
    name: "",
    company: "",
    email: "",
    website: "",
    goals: "",
    source: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isSimpleForm, setIsSimpleForm] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <Section className="pt-32 pb-24 min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <AnimateIn>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-indigo-900 mb-8">
              Let's Talk.
            </h1>
            <div className="space-y-8 text-lg text-neutral-600 leading-relaxed max-w-lg">
              <p>
                The discovery call is a 30-minute conversation to understand
                your business, your goals, and see if we're a good fit to work
                together. No pressure, no hard sell.
              </p>
              <div>
                <h3 className="font-bold text-neutral-900 mb-4">
                  What to prepare:
                </h3>
                <ul className="space-y-3 list-disc list-inside marker:text-teal-600">
                  <li>Your primary business goals for the next 6-12 months</li>
                  <li>Link to your current website (if applicable)</li>
                  <li>Your ideal launch timeline</li>
                  <li>A rough budget range for the project</li>
                </ul>
              </div>
              <div className="pt-8 border-t border-neutral-200">
                <p className="text-sm">
                  Prefer email? Reach out directly at{" "}
                  <a
                    href="mailto:hello@chromapages.com"
                    className="text-indigo-900 font-semibold hover:text-teal-600 transition-colors"
                  >
                    hello@chromapages.com
                  </a>
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Right Column: Form */}
          <AnimateIn
            delay={0.2}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-elevated border border-neutral-100"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  Request Received
                </h3>
                <p className="text-lg text-neutral-600 mb-8 max-w-md">
                  Thank you for reaching out. We'll review your information and
                  get back to you within 24 hours to schedule our call.
                </p>
                <Button variant="secondary" onClick={() => setIsSuccess(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {isSimpleForm ? "Send a Message" : "Book a Discovery Call"}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsSimpleForm(!isSimpleForm)}
                    className="text-sm font-medium text-teal-600 hover:text-indigo-900 transition-colors"
                  >
                    {isSimpleForm ? "Switch to booking" : "Not ready to book?"}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 transition-colors bg-off-white/50"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 transition-colors bg-off-white/50"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                {!isSimpleForm && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-neutral-700"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 transition-colors bg-off-white/50"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-neutral-700"
                      >
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formState.website}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 transition-colors bg-off-white/50"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label
                    htmlFor="goals"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    {isSimpleForm
                      ? "Message"
                      : "What are you trying to achieve?"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    required
                    rows={4}
                    value={formState.goals}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 transition-colors bg-off-white/50 resize-none"
                    placeholder={
                      isSimpleForm
                        ? "How can we help you?"
                        : "Briefly describe your goals and current challenges..."
                    }
                  />
                </div>

                {!isSimpleForm && (
                  <div className="space-y-2">
                    <label
                      htmlFor="source"
                      className="block text-sm font-medium text-neutral-700"
                    >
                      How did you hear about us?
                    </label>
                    <select
                      id="source"
                      name="source"
                      value={formState.source}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 transition-colors bg-off-white/50"
                    >
                      <option value="">Select an option</option>
                      <option value="search">Search Engine</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full mt-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : isSimpleForm
                      ? "Send Message"
                      : "Request Discovery Call"}
                </Button>
              </form>
            )}
          </AnimateIn>
        </div>
      </div>
    </Section>
  );
}
