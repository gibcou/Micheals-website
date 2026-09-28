import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Check } from "lucide-react";

const ESTATE_TYPES = [
  "Primary residence",
  "Second home / vacation estate",
  "Investment property",
  "Commercial property",
  "Land / ranch",
];

const GOALS = [
  "Peace of mind while away",
  "Single point of contact for all services",
  "Preserve and protect property value",
  "Free up personal time",
  "Turnkey rental management",
];

const SERVICES = [
  "Property management",
  "Cleaning services",
  "Maintenance & contracting",
  "Seasonal care",
  "Security oversight",
  "Vendor coordination",
];

const TIMELINES = ["Immediately", "Within 1 month", "1-3 months", "Just exploring"];

const STEPS = ["Your Estate", "Your Vision", "Your Timeline", "Your Details"];

function Choice({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-cursor="ring"
      className={`flex w-full items-center justify-between border px-5 py-4 text-left text-sm transition-colors md:text-base ${
        active
          ? "border-accent bg-accent text-accent-foreground"
          : "border-border bg-background text-foreground hover:border-foreground/40"
      }`}
    >
      <span>{children}</span>
      <span
        className={`flex h-5 w-5 items-center justify-center border text-[10px] ${
          active ? "border-accent-foreground" : "border-foreground/30"
        }`}
      >
        {active && <Check className="h-3 w-3" />}
      </span>
    </button>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="mb-3 block text-[11px] uppercase tracking-luxe text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full border border-border bg-background px-5 py-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent";

export default function OnboardingPortal() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    estate_type: "",
    estate_location: "",
    primary_goal: "",
    services_needed: [],
    timeline: "",
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const toggleService = (s) =>
    setForm((f) => ({
      ...f,
      services_needed: f.services_needed.includes(s)
        ? f.services_needed.filter((x) => x !== s)
        : [...f.services_needed, s],
    }));

  const canNext = () => {
    if (step === 0) return form.estate_type && form.estate_location.trim();
    if (step === 1) return form.primary_goal && form.services_needed.length > 0;
    if (step === 2) return form.timeline;
    return true;
  };

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    setError("");
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please provide at least your name and email to begin the conversation.");
      return;
    }
    setSubmitting(true);
    try {
      await base44.entities.Lead.create({
        ...form,
        status: "new",
      });
      setDone(true);
      try {
        await base44.functions.invoke("sendLeadConfirmation", {
          name: form.name,
          email: form.email,
        });
      } catch (e) {}
    } catch (e) {
      setError("Something went wrong sending your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="onboarding" className="relative bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left — pitch */}
          <div className="md:col-span-5">
            <span className="text-[11px] uppercase tracking-luxe text-background/50">
              The Onboarding Portal
            </span>
            <h2 className="mt-6 font-display text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl">
              Begin the
              <br />
              <span className="italic font-normal">conversation.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-background/70 md:text-lg">
              This is not a contact form. It is a brief, private consultation:
              four questions that let us understand your estate before we ever
              speak. By the time you finish, we will already know how to care
              for what you have built.
            </p>

            <div className="mt-12 hidden md:block">
              <div className="horizon-line" />
              <p className="mt-6 text-sm leading-relaxed text-background/60">
                Selective by design. We take on a limited portfolio so every
                estate receives the attention it deserves.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-background/60">
                Engagements begin with a dedicated monthly retainer, tailored
                to each estate. We do not publish rates; every proposal is
                composed around the property it serves.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7">
            <div className="border border-background/15 bg-foreground p-6 md:p-10">
              {done ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent text-accent">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="mt-8 font-display text-3xl font-medium md:text-4xl">
                    Thank you, {form.name.split(" ")[0] || "and welcome"}.
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-background/70">
                    Your request has reached our principal team. A dedicated
                    advisor will be in touch within one business day to arrange
                    your private consultation.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Progress */}
                  <div className="mb-10 flex items-center gap-3">
                    {STEPS.flatMap((s, i) => [
                      <button
                        key={`step-${i}`}
                        onClick={() => i < step && setStep(i)}
                        className={`flex items-center gap-2 text-[10px] uppercase tracking-luxe transition-colors ${
                          i === step
                            ? "text-background"
                            : i < step
                            ? "text-accent"
                            : "text-background/30"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 items-center justify-center border text-[10px] ${
                            i === step
                              ? "border-background"
                              : i < step
                              ? "border-accent text-accent"
                              : "border-background/30"
                          }`}
                        >
                          {i < step ? <Check className="h-3 w-3" /> : i + 1}
                        </span>
                        <span className="hidden md:inline">{s}</span>
                      </button>,
                      i < STEPS.length - 1 ? (
                        <span key={`sep-${i}`} className="h-px flex-1 bg-background/15" />
                      ) : null,
                    ])}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {step === 0 && (
                        <div className="space-y-8">
                          <Field label="What best describes your estate?">
                            <div className="grid gap-2">
                              {ESTATE_TYPES.map((t) => (
                                <Choice
                                  key={t}
                                  active={form.estate_type === t}
                                  onClick={() => set("estate_type", t)}
                                >
                                  {t}
                                </Choice>
                              ))}
                            </div>
                          </Field>
                          <Field label="Where is it located?">
                            <input
                              className={inputClass}
                              placeholder="Bozeman, MT or city & area"
                              value={form.estate_location}
                              onChange={(e) => set("estate_location", e.target.value)}
                            />
                          </Field>
                        </div>
                      )}

                      {step === 1 && (
                        <div className="space-y-8">
                          <Field label="What is the primary goal for your estate?">
                            <div className="grid gap-2">
                              {GOALS.map((g) => (
                                <Choice
                                  key={g}
                                  active={form.primary_goal === g}
                                  onClick={() => set("primary_goal", g)}
                                >
                                  {g}
                                </Choice>
                              ))}
                            </div>
                          </Field>
                          <Field label="Which services are you considering? (Select all that apply)">
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                              {SERVICES.map((s) => (
                                <Choice
                                  key={s}
                                  active={form.services_needed.includes(s)}
                                  onClick={() => toggleService(s)}
                                >
                                  {s}
                                </Choice>
                              ))}
                            </div>
                          </Field>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-8">
                          <Field label="When would you like to begin?">
                            <div className="grid gap-2">
                              {TIMELINES.map((t) => (
                                <Choice
                                  key={t}
                                  active={form.timeline === t}
                                  onClick={() => set("timeline", t)}
                                >
                                  {t}
                                </Choice>
                              ))}
                            </div>
                          </Field>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-8">
                          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <Field label="Your name">
                              <input
                                className={inputClass}
                                placeholder="Full name"
                                value={form.name}
                                onChange={(e) => set("name", e.target.value)}
                              />
                            </Field>
                            <Field label="Email">
                              <input
                                type="email"
                                className={inputClass}
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={(e) => set("email", e.target.value)}
                              />
                            </Field>
                          </div>
                          <Field label="Phone (optional)">
                            <input
                              className={inputClass}
                              placeholder="(000) 000-0000"
                              value={form.phone}
                              onChange={(e) => set("phone", e.target.value)}
                            />
                          </Field>
                          <Field label="Anything you would like us to know? (optional)">
                            <textarea
                              rows={4}
                              className={`${inputClass} resize-none`}
                              placeholder="Tell us about your estate and what matters most to you."
                              value={form.details}
                              onChange={(e) => set("details", e.target.value)}
                            />
                          </Field>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {error && (
                    <p className="mt-6 text-sm text-destructive">{error}</p>
                  )}

                  {/* Controls */}
                  <div className="mt-10 flex items-center justify-between">
                    <button
                      onClick={back}
                      disabled={step === 0}
                      className="text-[11px] uppercase tracking-luxe text-background/50 transition-colors hover:text-background disabled:opacity-30"
                    >
                      Back
                    </button>
                    {step < STEPS.length - 1 ? (
                      <button
                        onClick={next}
                        disabled={!canNext()}
                        data-cursor="ring"
                        className="bg-accent px-8 py-4 text-[11px] uppercase tracking-luxe text-accent-foreground transition-colors hover:bg-background hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        onClick={submit}
                        disabled={submitting}
                        data-cursor="ring"
                        className="bg-accent px-8 py-4 text-[11px] uppercase tracking-luxe text-accent-foreground transition-colors hover:bg-background hover:text-foreground disabled:opacity-50"
                      >
                        {submitting ? "Sending…" : "Request Consultation"}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}