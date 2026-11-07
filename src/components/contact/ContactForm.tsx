"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactServices } from "@/data/site";
import { submitContactForm } from "@/lib/contact";
import { resolveContactServiceFromInterest } from "@/lib/contactInterest";
import { trackConversion, trackFormStart } from "@/lib/cookies/analytics";
import { getAttributionSummary } from "@/lib/cookies/attribution";
import { validateEmailAndPhone, type ContactFieldErrors } from "@/lib/validation";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500 transition-colors";

export function ContactForm() {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const interest = searchParams.get("interest") || "";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [preselectedService, setPreselectedService] = useState("");
  const formStarted = useRef(false);

  const markFormStart = () => {
    if (formStarted.current) return;
    formStarted.current = true;
    trackFormStart("contact_form", "Contact form");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();

    const nextFieldErrors = validateEmailAndPhone(
      email,
      phone,
      {
        email: t("common.validation.email"),
        phone: t("common.validation.phone"),
      },
      { phoneRequired: false }
    );

    if (nextFieldErrors.email || nextFieldErrors.phone) {
      setFieldErrors(nextFieldErrors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    const service = String(formData.get("service") || "").trim();
    const result = await submitContactForm({
      name: String(formData.get("name") || "").trim(),
      email,
      phone,
      company: String(formData.get("company") || "").trim(),
      service,
      message: String(formData.get("message") || "").trim(),
      botcheck: String(formData.get("botcheck") || "").trim(),
      attribution: {
        ...getAttributionSummary(),
        ...(interest ? { interest } : {}),
      },
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setError(result.error || t("contact.form.error"));
      return;
    }

    trackConversion("generate_lead", {
      service,
      lead_type: interest ? "hire_or_interest" : "contact",
      interest: interest || undefined,
      form_id: "contact_form",
    });
    form.reset();
    router.push("/thank-you/");
  };

  useEffect(() => {
    if (!interest) return;
    const match = resolveContactServiceFromInterest(interest);
    if (match) setPreselectedService(match);
  }, [interest]);

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={markFormStart}
      className="space-y-5"
      noValidate
      data-form-id="contact_form"
    >
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        style={{ display: "none" }}
        aria-hidden="true"
      />
      {interest ? <input type="hidden" name="interest" value={interest} /> : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 mb-2">
            {t("contact.form.name")}{" "}
            <span className="text-orange-600" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-2">
            {t("contact.form.email")}{" "}
            <span className="text-orange-600" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
            onChange={() => setFieldErrors((prev) => ({ ...prev, email: undefined }))}
            className={cn(fieldClass, fieldErrors.email && "border-red-500 focus:ring-red-500")}
          />
          {fieldErrors.email && (
            <p id="contact-email-error" className="mt-1.5 text-sm text-red-500" role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-zinc-700 mb-2">
            {t("contact.form.phone")}{" "}
            <span className="text-zinc-400 font-normal">
              ({t("contact.form.optional")})
            </span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={t("contact.form.phonePlaceholder")}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "contact-phone-error" : undefined}
            onChange={() => setFieldErrors((prev) => ({ ...prev, phone: undefined }))}
            className={cn(fieldClass, fieldErrors.phone && "border-red-500 focus:ring-red-500")}
          />
          {fieldErrors.phone && (
            <p id="contact-phone-error" className="mt-1.5 text-sm text-red-500" role="alert">
              {fieldErrors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-zinc-700 mb-2">
            {t("contact.form.company")}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-zinc-700 mb-2">
          {t("contact.form.service")}{" "}
          <span className="text-orange-600" aria-hidden="true">
            *
          </span>
        </label>
        <select
          id="service"
          name="service"
          required
          className={fieldClass}
          value={preselectedService}
          onChange={(e) => setPreselectedService(e.target.value)}
        >
          <option value="">{t("contact.form.selectService")}</option>
          {contactServices.map((svc) => (
            <option key={svc} value={svc}>
              {t(`contact.services.${svc}`)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-zinc-700 mb-2">
          {t("contact.form.message")}{" "}
          <span className="text-orange-600" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={cn(fieldClass, "resize-none min-h-[120px]")}
        />
      </div>

      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        data-track="contact_form_submit"
        data-track-location="contact_page"
        className="rounded-lg bg-orange-600 hover:bg-orange-500 shadow-lg shadow-orange-600/25"
      >
        {isSubmitting ? (
          t("contact.form.sending")
        ) : (
          <>
            {t("contact.form.submit")}
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
