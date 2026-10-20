/** Practical email check — requires local@domain.tld */
const EMAIL_RE = /^[a-z0-9._%+-]+@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/i;

/** Allows +, spaces, dashes, parentheses; digit count must be 10–15 (E.164). */
const PHONE_CHAR_RE = /^\+?[\d\s().-]{10,22}$/;

export function isValidEmail(value: string): boolean {
  const email = value.trim();
  if (!email || email.length > 254) return false;
  if (email.includes("..")) return false;
  return EMAIL_RE.test(email);
}

export function isValidPhone(value: string): boolean {
  const phone = value.trim();
  if (!phone || !PHONE_CHAR_RE.test(phone)) return false;
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export type ContactFieldErrors = {
  email?: string;
  phone?: string;
};

export function validateEmailAndPhone(
  email: string,
  phone: string,
  messages: { email: string; phone: string },
  options?: { phoneRequired?: boolean }
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  if (!isValidEmail(email)) errors.email = messages.email;
  const phoneRequired = options?.phoneRequired ?? true;
  if (phoneRequired || phone.trim()) {
    if (!isValidPhone(phone)) errors.phone = messages.phone;
  }
  return errors;
}
