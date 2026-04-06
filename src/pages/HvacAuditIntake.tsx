import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, ChevronRight, Loader2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { cn } from "@/lib/utils";
import { submitToCRM } from "@/lib/crm";

const TOP_SERVICES = [
  "AC Installation",
  "AC Repair",
  "Furnace Installation",
  "Furnace Repair",
  "Heat Pump",
  "Mini-Split",
  "Duct Work",
  "Indoor Air Quality",
  "Maintenance Plans",
  "Commercial HVAC",
];

type FormState = "idle" | "submitting" | "success" | "error";

export function HvacAuditIntake() {
  const navigate = useNavigate();
  const [formState, setFormState] = React.useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);

  const [fields, setFields] = React.useState({
    ownerName: "",
    businessName: "",
    email: "",
    yearsInBusiness: "",
    websiteUrl: "",
    googleBusinessProfileUrl: "",
    serviceAreas: "",
    competitorNames: "",
    monthlyLeadVolume: "",
    mainProblem: "",
    currentTools: "",
    budgetRange: "",
  });

  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  const errors = {
    ownerName: !fields.ownerName.trim() ? "Required" : "",
    businessName: !fields.businessName.trim() ? "Required" : "",
    email: !fields.email.trim()
      ? "Required"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
        ? "Enter a valid email address"
        : "",
    websiteUrl: !fields.websiteUrl.trim()
      ? "Required"
      : !/^https:\/\/.+/.test(fields.websiteUrl)
        ? "Must start with https://"
        : "",
    serviceAreas: !fields.serviceAreas.trim() ? "Required" : "",
    mainProblem: !fields.mainProblem.trim() ? "Required" : "",
    budgetRange: !fields.budgetRange.trim() ? "Required" : "",
  };

  const hasErrors = Object.values(errors).some(Boolean);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  }

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Mark all fields as touched to show errors
    const allTouched = Object.keys(errors).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {},
    );
    setTouched(allTouched);

    if (hasErrors) return;

    setFormState("submitting");
    setErrorMessage("");

    // Submit to CRM
    submitToCRM({
      name: fields.ownerName,
      email: fields.email,
      company: fields.businessName,
      phone: "", // No phone field in this specific form state, but can add if available
      brandId: "builtexpert",
      sourceDetail: "HVAC Audit Intake Form",
    });

    try {
      const body = {
        ...fields,
        topServices: selectedServices.join(", "),
        _subject: `HVAC Audit Intake — ${fields.businessName}`,
      };

      const API_URL = "/api/hvac-audit-intake";
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setFormState("success");
        setTimeout(() => navigate("/hvac-audit-thank-you"), 1200);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(
          (data as { error?: string }).error ||
            "Something went wrong with the intake endpoint. Please try again.",
        );
        setFormState("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  }

  return (
    <>
      <SEO
        titleFull="HVAC Lead System Audit — Intake Form | BuiltExpert"
        description="Complete your intake form to start your HVAC Lead System Audit. Takes about 5 minutes."
      />
      <div className="bg-[#fcf9f8]">

        {/* ── Progress indicator ── */}
        <div className="bg-white border-b border-[#e5e7eb]">
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
              Tell us about your business
            </h1>
            <p className="mt-2 text-[#6b7280]">
              This takes about 5 minutes. The more specific you are, the more
              useful your audit will be.
            </p>
          </div>

          {formState === "success" ? (
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#006565]">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h2 className="font-headline text-xl font-bold text-[#1a1a1a]">
                Intake received
              </h2>
              <p className="mt-2 text-[#6b7280]">Redirecting you now…</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Business identity */}
              <fieldset className="rounded-xl border border-[#e5e7eb] bg-white p-6">
                <legend className="mb-4 font-headline text-sm font-semibold uppercase tracking-wider text-[#006565]">
                  Your business
                </legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    name="ownerName"
                    type="text"
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
                    placeholder="Hernandez HVAC"
                    value={fields.businessName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.businessName ? errors.businessName : ""}
                    required
                  />
                </div>
                <div className="mt-4">
                  <Field
                    label="Email address"
                    name="email"
                    type="email"
                    placeholder="mike@hernandezhvac.com"
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email ? errors.email : ""}
                    hint="We'll send your audit here"
                    required
                  />
                </div>
                <div className="mt-4">
                  <Field
                    label="Years in business"
                    name="yearsInBusiness"
                    type="number"
                    placeholder="e.g. 12"
                    value={fields.yearsInBusiness}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error=""
                    hint="Approximate is fine"
                  />
                </div>
              </fieldset>

              {/* Website */}
              <fieldset className="rounded-xl border border-[#e5e7eb] bg-white p-6">
                <legend className="mb-4 font-headline text-sm font-semibold uppercase tracking-wider text-[#006565]">
                  Your website
                </legend>
                <Field
                  label="Website URL"
                  name="websiteUrl"
                  type="url"
                  placeholder="https://hernandezhvac.com"
                  value={fields.websiteUrl}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.websiteUrl ? errors.websiteUrl : ""}
                  hint="Include https://"
                  required
                />
                <div className="mt-4">
                  <Field
                    label="Google Business Profile URL"
                    name="googleBusinessProfileUrl"
                    type="url"
                    placeholder="https://maps.google.com/..."
                    value={fields.googleBusinessProfileUrl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error=""
                    hint="Find it at maps.google.com — helps us audit your local presence faster"
                  />
                </div>
              </fieldset>

              {/* Market */}
              <fieldset className="rounded-xl border border-[#e5e7eb] bg-white p-6">
                <legend className="mb-4 font-headline text-sm font-semibold uppercase tracking-wider text-[#006565]">
                  Your market
                </legend>
                <TextareaField
                  label="Service areas"
                  name="serviceAreas"
                  placeholder="e.g. Dallas, TX — serving Plano, Frisco, McKinney, Allen"
                  value={fields.serviceAreas}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.serviceAreas ? errors.serviceAreas : ""}
                  hint="City/region you primarily serve"
                  rows={2}
                  required
                />

                {/* Top services checkboxes */}
                <div className="mt-5">
                  <p className="mb-3 text-sm font-medium text-[#1a1a1a]">
                    Top services{" "}
                    <span className="font-normal text-[#6b7280]">(select all that apply)</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {TOP_SERVICES.map((service) => {
                      const checked = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={cn(
                            "flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors",
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
                          >
                            {checked && <Check className="h-2.5 w-2.5 text-white" />}
                          </span>
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Competitor names */}
                <div className="mt-5">
                  <TextareaField
                    label="Top 2–3 competitors"
                    name="competitorNames"
                    placeholder={"e.g. ABC HVAC Dallas — abc-hvac.com\nComfort Pro — comfortpro.com"}
                    value={fields.competitorNames}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error=""
                    hint="Who you compete with on Google Maps"
                    rows={2}
                  />
                </div>

                {/* Monthly lead volume */}
                <div className="mt-4">
                  <SelectField
                    label="Monthly lead volume"
                    name="monthlyLeadVolume"
                    value={fields.monthlyLeadVolume}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error=""
                    hint="How many leads does your business get per month?"
                    options={[
                      { value: "", label: "Select an option" },
                      { value: "0–5", label: "0–5" },
                      { value: "6–15", label: "6–15" },
                      { value: "16–30", label: "16–30" },
                      { value: "31–50", label: "31–50" },
                      { value: "50+", label: "50+" },
                      { value: "Not sure yet", label: "Not sure yet" },
                    ]}
                  />
                </div>
              </fieldset>

              {/* Lead issues */}
              <fieldset className="rounded-xl border border-[#e5e7eb] bg-white p-6">
                <legend className="mb-4 font-headline text-sm font-semibold uppercase tracking-wider text-[#006565]">
                  Your lead situation
                </legend>
                <TextareaField
                  label="What's the main problem you're trying to solve?"
                  name="mainProblem"
                  placeholder="e.g. Our site gets decent traffic from Google but we rarely get calls from it. Most of our jobs still come from referrals. Not sure if our site is the issue or if it's something else."
                  value={fields.mainProblem}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.mainProblem ? errors.mainProblem : ""}
                  hint="Be as specific as you like — this helps us focus the audit"
                  rows={4}
                  required
                />
                <div className="mt-4">
                  <TextareaField
                    label="What CRM, scheduling, or follow-up tools are you currently using?"
                    name="currentTools"
                    placeholder="e.g. ServiceTitan, Jobber, Housecall Pro, or just Google Sheets and phone calls"
                    value={fields.currentTools}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error=""
                    hint="Optional — helps us evaluate your follow-up flow"
                    rows={2}
                  />
                </div>
                <div className="mt-4">
                  <SelectField
                    label="Budget range for solving the problem"
                    name="budgetRange"
                    value={fields.budgetRange}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.budgetRange ? errors.budgetRange : ""}
                    required
                    options={[
                      { value: "", label: "Select a budget range" },
                      { value: "Under $1,000", label: "Under $1,000" },
                      { value: "$1,000–$2,500", label: "$1,000–$2,500" },
                      { value: "$2,500–$5,000", label: "$2,500–$5,000" },
                      { value: "$5,000–$10,000", label: "$5,000–$10,000" },
                      { value: "$10,000+", label: "$10,000+" },
                      { value: "Just exploring options", label: "Just exploring options" },
                    ]}
                  />
                </div>
              </fieldset>

              {/* Error banner */}
              {formState === "error" && errorMessage && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === "submitting"}
                className={cn(
                  "flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-headline text-base font-semibold text-white transition-all",
                  formState === "submitting"
                    ? "cursor-not-allowed bg-[#006565]/60"
                    : "bg-[#006565] hover:bg-[#004f4f] active:scale-[0.99]",
                )}
              >
                {formState === "submitting" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Submit My Intake Form"
                )}
              </button>

              <p className="text-center text-xs text-[#6b7280]">
                Your audit will be delivered within {" "}
                <strong className="text-[#1a1a1a]">3 business days</strong> of
                receiving this form.
              </p>
            </form>
          )}
        </main>


      </div>
    </>
  );
}

// ─── Field sub-components ──────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  hint?: string;
  required?: boolean;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  hint,
  required,
}: FieldProps) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
        {label}
        {required && <span className="ml-0.5 text-[#006565]">*</span>}
      </label>
      {hint && <p className="mb-1.5 text-xs text-[#6b7280]">{hint}</p>}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={type === "email" ? "email" : type === "url" ? "url" : "on"}
        className={cn(
          "w-full rounded-lg border px-3 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors placeholder:text-[#9ca3af]",
          "focus:border-[#006565] focus:ring-2 focus:ring-[#006565]/15",
          error ? "border-red-400 bg-red-50" : "border-[#e5e7eb] bg-white",
        )}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

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
}: TextareaFieldProps) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
        {label}
        {required && <span className="ml-0.5 text-[#006565]">*</span>}
      </label>
      {hint && <p className="mb-1.5 text-xs text-[#6b7280]">{hint}</p>}
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={cn(
          "w-full resize-y rounded-lg border px-3 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors placeholder:text-[#9ca3af]",
          "focus:border-[#006565] focus:ring-2 focus:ring-[#006565]/15",
          error ? "border-red-400 bg-red-50" : "border-[#e5e7eb] bg-white",
        )}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

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
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
        {label}
        {required && <span className="ml-0.5 text-[#006565]">*</span>}
      </label>
      {hint && <p className="mb-1.5 text-xs text-[#6b7280]">{hint}</p>}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={cn(
          "w-full rounded-lg border px-3 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors",
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
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
