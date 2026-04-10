import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, ChevronRight, Loader2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { cn } from "@/lib/utils";
import { submitToCRM } from "@/lib/crm";

// ─── Static data ─────────────────────────────────────────────────────────────

const TOP_SERVICES = [
  "AC Installation",
  "AC Repair",
  "Furnace Installation",
  "Furnace Repair",
  "Heat Pump",
  "Mini-Split",
  "Emergency Repair",
  "Duct Work",
  "Indoor Air Quality",
  "Maintenance Plans",
  "Commercial HVAC",
];

const LEAD_SOURCES = [
  "Google Search (organic)",
  "Google Maps (GMB)",
  "Google Ads / PPC",
  "Google Local Service Ads",
  "Referrals / Word of mouth",
  "Facebook / Instagram Ads",
  "Yelp",
  "Angi / HomeAdvisor",
  "Door Knocking / Direct",
  "Other",
];

const CURRENT_TOOLS = [
  "ServiceTitan",
  "Housecall Pro",
  "Jobber",
  "Fergus",
  "FieldEdge",
  "Google Sheets / Excel",
  "No system yet",
  "Other",
];

// ─── Form state types ─────────────────────────────────────────────────────────

type FormStatus = "idle" | "submitting" | "success" | "error";

interface Fields {
  // Contact
  ownerName: string;
  businessName: string;
  email: string;
  phone: string;
  // Business
  websiteUrl: string;
  googleBusinessProfileUrl: string;
  serviceAreas: string;
  // Lead situation (optional)
  monthlyLeadVolume: string;
  runsGoogleAds: string;
  monthlyMarketingSpend: string;
  // Goals & pain
  primaryGoal: string;
  mainProblem: string;
  additionalNotes: string;
  // Timeline
  timeline: string;
}

// ─── Component ───────────────────────────────────────────────────────────────

export function HvacAuditIntake() {
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = React.useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
  const [selectedLeadSources, setSelectedLeadSources] = React.useState<string[]>([]);
  const [selectedTools, setSelectedTools] = React.useState<string[]>([]);

  const [fields, setFields] = React.useState<Fields>({
    ownerName: "",
    businessName: "",
    email: "",
    phone: "",
    websiteUrl: "",
    googleBusinessProfileUrl: "",
    serviceAreas: "",
    monthlyLeadVolume: "",
    runsGoogleAds: "",
    monthlyMarketingSpend: "",
    primaryGoal: "",
    mainProblem: "",
    additionalNotes: "",
    timeline: "",
  });

  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  // ── Validation ───────────────────────────────────────────────────────────

  const errors: Partial<Record<keyof Fields, string>> = {
    ownerName: !fields.ownerName.trim() ? "Required" : "",
    businessName: !fields.businessName.trim() ? "Required" : "",
    email: !fields.email.trim()
      ? "Required"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
        ? "Enter a valid email address"
        : "",
    phone: !fields.phone.trim() ? "Required" : "",
    websiteUrl: !fields.websiteUrl.trim()
      ? "Required"
      : !/^https?:\/\/.+/.test(fields.websiteUrl)
        ? "Must start with https://"
        : "",
    serviceAreas: !fields.serviceAreas.trim() ? "Required" : "",
    primaryGoal: !fields.primaryGoal.trim() ? "Required" : "",
    mainProblem: !fields.mainProblem.trim() ? "Required" : "",
    timeline: !fields.timeline.trim() ? "Required" : "",
  };

  const hasErrors = Object.values(errors).some(Boolean);

  // ── Handlers ─────────────────────────────────────────────────────────────

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const toggleItem = (
    item: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setter((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item],
    );
  };

  const handleRunsGoogleAds = (value: string) => {
    setFields((f) => ({ ...f, runsGoogleAds: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all required fields as touched
    const allTouched = Object.keys(errors).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {} as Record<string, boolean>,
    );
    setTouched(allTouched);

    if (hasErrors) return;

    setFormStatus("submitting");
    setErrorMessage("");

    // CRM submission
    submitToCRM({
      name: fields.ownerName,
      email: fields.email,
      company: fields.businessName,
      phone: fields.phone,
      brandId: "builtexpert",
      sourceDetail: "HVAC Audit Intake Form",
    });

    try {
      const body = {
        ...fields,
        topServices: selectedServices.join(", "),
        currentLeadSources: selectedLeadSources.join(", "),
        currentTools: selectedTools.join(", "),
        _subject: `HVAC Audit Intake — ${fields.businessName}`,
      };

      const res = await fetch("/api/hvac-audit-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setFormStatus("success");
        setTimeout(() => navigate("/hvac-audit-thank-you"), 1200);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(
          (data as { error?: string }).error ||
            "Something went wrong. Please try again or email us at hello@builtexpert.com.",
        );
        setFormStatus("error");
      }
    } catch {
      setErrorMessage(
        "Network error. Please check your connection and try again.",
      );
      setFormStatus("error");
    }
  };

  // ── Success state ─────────────────────────────────────────────────────────

  if (formStatus === "success") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#fcf9f8] px-4">
        <div className="w-full max-w-sm rounded-xl border border-[#e5e7eb] bg-white p-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#006565]">
            <Check className="h-7 w-7 text-white" />
          </div>
          <h2 className="font-headline text-xl font-bold text-[#1a1a1a]">
            Intake received
          </h2>
          <p className="mt-2 text-sm text-[#6b7280]">Redirecting you now…</p>
        </div>
      </div>
    );
  }

  // ── Form render ───────────────────────────────────────────────────────────

  return (
    <>
      <SEO
        title="HVAC Lead System Audit — Intake Form"
        description="Complete your intake form. The more specific you are, the sharper your audit findings will be."
        canonicalPath="/audit/intake"
      />
      <div className="bg-[#fcf9f8]">

        {/* ── Progress indicator ── */}
        <div className="border-b border-[#e5e7eb] bg-white">
          <div className="mx-auto max-w-2xl px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2 text-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#006565] text-[10px] font-bold text-white">
                ✓
              </span>
              <span className="text-[#6b7280]">Purchase complete</span>
              <ChevronRight className="h-3.5 w-3.5 text-[#bdc9c8]" />
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1a1a1a] text-[10px] font-bold text-white">
                2
              </span>
              <span className="font-medium text-[#1a1a1a]">Your intake form</span>
              <ChevronRight className="h-3.5 w-3.5 text-[#bdc9c8]" />
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#bdc9c8] text-[10px] font-medium text-[#6b7280]">
                3
              </span>
              <span className="text-[#6b7280]">Audit delivered</span>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
          {/* Intro */}
          <div className="mb-8">
            <h1 className="font-headline text-2xl font-bold text-[#1a1a1a] sm:text-3xl">
              Help us prepare your audit
            </h1>
            <p className="mt-2 text-[#6b7280]">
              Takes 2–3 minutes. The more specific you are, the sharper your
              audit findings will be.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">

            {/* ── Section 1: Contact Information ─────────────────────────── */}
            <Fieldset legend="Contact information">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Your name"
                  name="ownerName"
                  type="text"
                  autoComplete="name"
                  placeholder="Mike Hernandez"
                  value={fields.ownerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.ownerName ? errors.ownerName : ""}
                  required
                />
                <Field
                  label="Business name"
                  name="businessName"
                  type="text"
                  autoComplete="organization"
                  placeholder="Hernandez HVAC"
                  value={fields.businessName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.businessName ? errors.businessName : ""}
                  required
                />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="mike@hernandezhvac.com"
                  value={fields.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email ? errors.email : ""}
                  hint="We'll send your audit here"
                  required
                />
                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(555) 000-0000"
                  value={fields.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone ? errors.phone : ""}
                  required
                />
              </div>
            </Fieldset>

            {/* ── Section 2: Your Business ────────────────────────────────── */}
            <Fieldset legend="Your business">
              <Field
                label="Website URL"
                name="websiteUrl"
                type="url"
                autoComplete="url"
                placeholder="https://hernandezhvac.com"
                value={fields.websiteUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.websiteUrl ? errors.websiteUrl : ""}
                hint="We'll audit this for conversion gaps, speed, and local SEO"
                required
              />
              <div className="mt-4">
                <Field
                  label="Google Business Profile URL"
                  name="googleBusinessProfileUrl"
                  type="url"
                  autoComplete="url"
                  placeholder="https://maps.google.com/..."
                  value={fields.googleBusinessProfileUrl}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error=""
                  hint="Find it at g.co/kgs — helps us audit your local map presence"
                  optional
                />
              </div>
              <div className="mt-4">
                <TextareaField
                  label="Main service area"
                  name="serviceAreas"
                  placeholder="e.g. Dallas, TX — serving Plano, Frisco, McKinney, Allen"
                  value={fields.serviceAreas}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.serviceAreas ? errors.serviceAreas : ""}
                  hint="Primary city or metro + surrounding areas you serve"
                  rows={2}
                  required
                />
              </div>
              <div className="mt-5">
                <CheckboxGrid
                  label="Top services"
                  hint="Select all that apply (optional)"
                  items={TOP_SERVICES}
                  selected={selectedServices}
                  onToggle={(s) => toggleItem(s, setSelectedServices)}
                />
              </div>
            </Fieldset>

            {/* ── Section 3: Your Lead Situation ─────────────────────────── */}
            <Fieldset legend="Your lead situation" optional>
              <p className="mb-4 text-xs text-[#9ca3af]">
                Optional — add what you can, skip what you don't know yet.
              </p>

              <SelectField
                label="Monthly lead volume"
                name="monthlyLeadVolume"
                value={fields.monthlyLeadVolume}
                onChange={handleChange}
                onBlur={handleBlur}
                error=""
                hint="Roughly how many enquiries / calls does your business get per month?"
                options={[
                  { value: "", label: "Select an estimate" },
                  { value: "0–5", label: "0–5 leads / month" },
                  { value: "6–15", label: "6–15 leads / month" },
                  { value: "16–30", label: "16–30 leads / month" },
                  { value: "31–50", label: "31–50 leads / month" },
                  { value: "50+", label: "50+ leads / month" },
                  { value: "Not sure", label: "Not sure" },
                ]}
              />

              <div className="mt-5">
                <CheckboxGrid
                  label="Where are your current leads coming from?"
                  hint="Select all that apply"
                  items={LEAD_SOURCES}
                  selected={selectedLeadSources}
                  onToggle={(s) => toggleItem(s, setSelectedLeadSources)}
                  cols={2}
                />
              </div>

              <div className="mt-5">
                <p className="mb-2 text-sm font-medium text-[#1a1a1a]">
                  Do you currently run Google Ads or Local Service Ads (LSA)?
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Yes", "No", "Not sure"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleRunsGoogleAds(opt)}
                      className={cn(
                        "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                        fields.runsGoogleAds === opt
                          ? "border-[#006565] bg-[#e3fffe] text-[#006565]"
                          : "border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#006565]/40",
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <CheckboxGrid
                  label="What tools or software do you use?"
                  hint="Select all that apply"
                  items={CURRENT_TOOLS}
                  selected={selectedTools}
                  onToggle={(s) => toggleItem(s, setSelectedTools)}
                  cols={2}
                />
              </div>

              <div className="mt-4">
                <SelectField
                  label="Monthly marketing spend"
                  name="monthlyMarketingSpend"
                  value={fields.monthlyMarketingSpend}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error=""
                  hint="What you currently invest in marketing per month (ads, SEO, etc.)"
                  options={[
                    { value: "", label: "Select a range" },
                    { value: "Not currently investing", label: "Not currently investing" },
                    { value: "Under $500", label: "Under $500 / month" },
                    { value: "$500–$1,500", label: "$500–$1,500 / month" },
                    { value: "$1,500–$3,000", label: "$1,500–$3,000 / month" },
                    { value: "$3,000–$5,000", label: "$3,000–$5,000 / month" },
                    { value: "$5,000+", label: "$5,000+ / month" },
                  ]}
                />
              </div>
            </Fieldset>

            {/* ── Section 4: Goals & Pain ─────────────────────────────────── */}
            <Fieldset legend="Goals & pain points">
              <SelectField
                label="What's your primary goal right now?"
                name="primaryGoal"
                value={fields.primaryGoal}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.primaryGoal ? errors.primaryGoal : ""}
                required
                options={[
                  { value: "", label: "Select your main goal" },
                  { value: "More calls from Google", label: "Get more calls from Google search" },
                  { value: "Better quality leads", label: "Get better quality / higher-ticket leads" },
                  { value: "Dominate a service area", label: "Dominate a specific service area or city" },
                  { value: "Reduce referral dependency", label: "Reduce dependence on referrals" },
                  { value: "Grow maintenance agreements", label: "Grow recurring maintenance agreements" },
                  { value: "Capture seasonal demand", label: "Capture seasonal demand more effectively" },
                  { value: "Something else", label: "Something else" },
                ]}
              />
              <div className="mt-4">
                <TextareaField
                  label="What's your biggest frustration with your current lead situation?"
                  name="mainProblem"
                  placeholder="e.g. Our site gets traffic from Google but we rarely get calls from it. Most jobs still come from referrals. Not sure if the site is the issue or something else entirely."
                  value={fields.mainProblem}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.mainProblem ? errors.mainProblem : ""}
                  hint="Be as specific as you like — this shapes what we focus on in the audit"
                  rows={4}
                  required
                />
              </div>
              <div className="mt-4">
                <TextareaField
                  label="Anything else you'd like us to know?"
                  name="additionalNotes"
                  placeholder="e.g. We're launching in a new city next quarter and want to get ahead of it..."
                  value={fields.additionalNotes}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error=""
                  hint="Optional — any context that would help us give you a better audit"
                  rows={2}
                  optional
                />
              </div>
            </Fieldset>

            {/* ── Section 5: Timeline ─────────────────────────────────────── */}
            <Fieldset legend="Your timeline">
              <SelectField
                label="When would you like to act on the audit findings?"
                name="timeline"
                value={fields.timeline}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.timeline ? errors.timeline : ""}
                required
                options={[
                  { value: "", label: "Select your timeline" },
                  { value: "Immediately", label: "Immediately — ready to move now" },
                  { value: "1 month", label: "Within the next 30 days" },
                  { value: "3 months", label: "Within the next 90 days" },
                  { value: "Exploring", label: "Just researching for now" },
                ]}
              />
            </Fieldset>

            {/* ── Error banner ─────────────────────────────────────────────── */}
            {formStatus === "error" && errorMessage && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMessage}
              </div>
            )}

            {/* ── Submit ───────────────────────────────────────────────────── */}
            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className={cn(
                "flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-headline text-base font-semibold text-white transition-all",
                formStatus === "submitting"
                  ? "cursor-not-allowed bg-[#006565]/60"
                  : "bg-[#006565] hover:bg-[#004f4f] active:scale-[0.99]",
              )}
            >
              {formStatus === "submitting" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting…
                </>
              ) : (
                "Submit My Intake →"
              )}
            </button>

            <p className="text-center text-xs text-[#6b7280]">
              Your audit will be delivered within{" "}
              <strong className="text-[#1a1a1a]">3 business days</strong> of
              receiving this form.
            </p>
          </form>
        </main>
      </div>
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

// Fieldset wrapper
function Fieldset({
  legend,
  children,
  optional = false,
}: {
  legend: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <fieldset className="rounded-xl border border-[#e5e7eb] bg-white p-6">
      <legend className="mb-4 flex items-center gap-2 font-headline text-sm font-semibold uppercase tracking-wider text-[#006565]">
        {legend}
        {optional && (
          <span className="rounded-full bg-[#f3f4f6] px-2 py-0.5 text-[10px] font-medium normal-case tracking-normal text-[#9ca3af]">
            Optional
          </span>
        )}
      </legend>
      {children}
    </fieldset>
  );
}

// Checkbox pill grid
function CheckboxGrid({
  label,
  hint,
  items,
  selected,
  onToggle,
  cols = 3,
}: {
  label: string;
  hint?: string;
  items: string[];
  selected: string[];
  onToggle: (item: string) => void;
  cols?: 2 | 3;
}) {
  return (
    <div>
      <p className="mb-1 text-sm font-medium text-[#1a1a1a]">{label}</p>
      {hint && <p className="mb-3 text-xs text-[#6b7280]">{hint}</p>}
      <div
        className={cn(
          "grid gap-2",
          cols === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3",
        )}
      >
        {items.map((item) => {
          const checked = selected.includes(item);
          return (
            <button
              key={item}
              type="button"
              onClick={() => onToggle(item)}
              aria-pressed={checked}
              className={cn(
                "flex min-h-[44px] items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors",
                checked
                  ? "border-[#006565] bg-[#e3fffe] text-[#006565]"
                  : "border-[#e5e7eb] bg-white text-[#1a1a1a] hover:border-[#bdc9c8]",
              )}
            >
              <span
                className={cn(
                  "flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border transition-colors",
                  checked
                    ? "border-[#006565] bg-[#006565]"
                    : "border-[#bdc9c8] bg-white",
                )}
                aria-hidden
              >
                {checked && <Check className="h-2.5 w-2.5 text-white" />}
              </span>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Field

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  hint?: string;
  required?: boolean;
  optional?: boolean;
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  hint,
  required,
  optional,
}: FieldProps) {
  const id = `field-${name}`;
  const hintId = `hint-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-[#1a1a1a]">
        {label}
        {required && <span className="text-[#006565]" aria-hidden>*</span>}
        {optional && (
          <span className="text-xs font-normal text-[#9ca3af]">(optional)</span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="mb-1.5 text-xs text-[#6b7280]">
          {hint}
        </p>
      )}
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        aria-required={required}
        aria-describedby={hint ? hintId : undefined}
        className={cn(
          "w-full rounded-lg border px-3 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors placeholder:text-[#9ca3af]",
          "focus:border-[#006565] focus:ring-2 focus:ring-[#006565]/15",
          error ? "border-red-400 bg-red-50" : "border-[#e5e7eb] bg-white",
        )}
      />
      {error && <p className="mt-1 text-xs text-red-600" role="alert">{error}</p>}
    </div>
  );
}

// Textarea field

interface TextareaFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
  hint?: string;
  rows?: number;
  required?: boolean;
  optional?: boolean;
}

function TextareaField({
  label,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  hint,
  rows = 3,
  required,
  optional,
}: TextareaFieldProps) {
  const id = `field-${name}`;
  const hintId = `hint-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-[#1a1a1a]"
      >
        {label}
        {required && <span className="text-[#006565]" aria-hidden>*</span>}
        {optional && (
          <span className="text-xs font-normal text-[#9ca3af]">(optional)</span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="mb-1.5 text-xs text-[#6b7280]">
          {hint}
        </p>
      )}
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        aria-required={required}
        aria-describedby={hint ? hintId : undefined}
        className={cn(
          "w-full resize-y rounded-lg border px-3 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors placeholder:text-[#9ca3af]",
          "focus:border-[#006565] focus:ring-2 focus:ring-[#006565]/15",
          error ? "border-red-400 bg-red-50" : "border-[#e5e7eb] bg-white",
        )}
      />
      {error && (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

// Select field

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error?: string;
  hint?: string;
  options: { value: string; label: string }[];
  required?: boolean;
}

function SelectField({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  hint,
  options,
  required,
}: SelectFieldProps) {
  const id = `field-${name}`;
  const hintId = `hint-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-[#1a1a1a]"
      >
        {label}
        {required && <span className="text-[#006565]" aria-hidden>*</span>}
      </label>
      {hint && (
        <p id={hintId} className="mb-1.5 text-xs text-[#6b7280]">
          {hint}
        </p>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        aria-required={required}
        aria-describedby={hint ? hintId : undefined}
        className={cn(
          "w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition-colors",
          "focus:border-[#006565] focus:ring-2 focus:ring-[#006565]/15",
          error ? "border-red-400 bg-red-50" : "border-[#e5e7eb] bg-white",
          !value ? "text-[#9ca3af]" : "text-[#1a1a1a]",
        )}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
