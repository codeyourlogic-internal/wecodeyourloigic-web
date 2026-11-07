"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { companyInfo } from "@/data/site";
import { submitCareerApplication } from "@/lib/contact";
import { trackConversion, trackFormStart } from "@/lib/cookies/analytics";
import { getAttributionSummary } from "@/lib/cookies/attribution";
import { validateEmailAndPhone, type ContactFieldErrors } from "@/lib/validation";
import { cn } from "@/lib/utils";

const CAREERS_EMAIL = "contact@codeyourlogic.com";

export function CareerApplicationForm() {
  const { t } = useTranslation();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const formStarted = useRef(false);

  const markFormStart = () => {
    if (formStarted.current) return;
    formStarted.current = true;
    trackFormStart("career_application", "Career application");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();

    const nextFieldErrors = validateEmailAndPhone(email, phone, {
      email: t("common.validation.email"),
      phone: t("common.validation.phone"),
    });

    if (nextFieldErrors.email || nextFieldErrors.phone) {
      setFieldErrors(nextFieldErrors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    const role = String(formData.get("role") || "").trim();
    const result = await submitCareerApplication({
      name: String(formData.get("name") || "").trim(),
      email,
      phone,
      role,
      linkedin: String(formData.get("linkedin") || "").trim(),
      resumeUrl: String(formData.get("resumeUrl") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      botcheck: String(formData.get("botcheck") || "").trim(),
      attribution: getAttributionSummary(),
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setError(result.error || t("careers.apply.error"));
      return;
    }

    trackConversion("submit_application", {
      role,
      form_id: "career_application",
      lead_type: "career",
    });
    form.reset();
    router.push("/thank-you/?type=application");
  };

  const fieldClass =
    "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500 transition-colors";

  return (
    <form onSubmit={handleSubmit} onFocusCapture={markFormStart} className="space-y-6" noValidate>
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        style={{ display: "none" }}
        aria-hidden="true"
      />

      <div className="rounded-[10px] border border-zinc-200 bg-zinc-50 p-4">
        <p className="text-[13px] text-zinc-600 leading-5">
          {t("careers.apply.hint", { email: CAREERS_EMAIL })}{" "}
          <a
            href={`mailto:${CAREERS_EMAIL}`}
            className="font-semibold text-zinc-900 underline-offset-2 hover:underline"
          >
            {CAREERS_EMAIL}
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="career-name" className="block text-sm font-semibold text-zinc-700 mb-2">
            {t("careers.apply.name")}{" "}
            <span className="text-orange-600" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="career-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t("careers.apply.namePlaceholder")}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="career-email" className="block text-sm font-semibold text-zinc-700 mb-2">
            {t("careers.apply.email")}{" "}
            <span className="text-orange-600" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="career-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder={t("careers.apply.emailPlaceholder")}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "career-email-error" : undefined}
            onChange={() => setFieldErrors((prev) => ({ ...prev, email: undefined }))}
            className={cn(fieldClass, fieldErrors.email && "border-red-500/60 focus:ring-red-500")}
          />
          {fieldErrors.email && (
            <p id="career-email-error" className="mt-1.5 text-sm text-red-500" role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="career-phone" className="block text-sm font-semibold text-zinc-700 mb-2">
            {t("careers.apply.phone")}{" "}
            <span className="text-orange-600" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="career-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder={t("careers.apply.phonePlaceholder")}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "career-phone-error" : undefined}
            onChange={() => setFieldErrors((prev) => ({ ...prev, phone: undefined }))}
            className={cn(fieldClass, fieldErrors.phone && "border-red-500/60 focus:ring-red-500")}
          />
          {fieldErrors.phone && (
            <p id="career-phone-error" className="mt-1.5 text-sm text-red-500" role="alert">
              {fieldErrors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="career-role" className="block text-sm font-semibold text-zinc-700 mb-2">
            {t("careers.apply.role")}{" "}
            <span className="text-orange-600" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="career-role"
            name="role"
            type="text"
            required
            placeholder={t("careers.apply.rolePlaceholder")}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="career-linkedin" className="block text-sm font-semibold text-zinc-700 mb-2">
          {t("careers.apply.linkedin")}{" "}
          <span className="text-orange-600" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="career-linkedin"
          name="linkedin"
          type="url"
          required
          autoComplete="url"
          placeholder={t("careers.apply.linkedinPlaceholder")}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="career-resume-url" className="block text-sm font-semibold text-zinc-700 mb-2">
          {t("careers.apply.resumeUrl")}
        </label>
        <input
          id="career-resume-url"
          name="resumeUrl"
          type="url"
          autoComplete="url"
          placeholder={t("careers.apply.resumeUrlPlaceholder")}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="career-message" className="block text-sm font-semibold text-zinc-700 mb-2">
          {t("careers.apply.message")}
        </label>
        <textarea
          id="career-message"
          name="message"
          rows={5}
          placeholder={t("careers.apply.messagePlaceholder")}
          className={`${fieldClass} resize-none min-h-[120px]`}
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
        className="rounded-lg bg-orange-600 hover:bg-orange-500 shadow-lg shadow-orange-600/25"
      >
        {isSubmitting ? (
          t("careers.apply.sending")
        ) : (
          <>
            {t("careers.apply.submit")}
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="sr-only">
        {companyInfo.name} careers applications
      </p>
    </form>
  );
}
