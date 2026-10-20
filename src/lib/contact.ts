import { companyInfo } from "@/data/site";

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  /** Honeypot — must stay empty / unchecked */
  botcheck?: string;
  /** Optional first-party attribution (only when user consented) */
  attribution?: Record<string, string>;
};

export type CareerFormPayload = {
  name: string;
  email: string;
  phone: string;
  role: string;
  linkedin: string;
  resumeUrl: string;
  message: string;
  /** Honeypot — must stay empty / unchecked */
  botcheck?: string;
  /** Optional first-party attribution (only when user consented) */
  attribution?: Record<string, string>;
};

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; error: string };

/** Inlined into the client bundle at build / dev start. */
export const FORM_ACCESS_KEY =
  process.env.NEXT_PUBLIC_FORM_ACCESS_KEY?.trim() || "";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

async function parseWeb3FormsResponse(
  response: Response
): Promise<Web3FormsResponse> {
  try {
    return (await response.json()) as Web3FormsResponse;
  } catch {
    return {};
  }
}

async function submitToWeb3Forms(
  body: Record<string, string>
): Promise<ContactSubmitResult> {
  if (!FORM_ACCESS_KEY) {
    return {
      ok: false,
      error:
        "Form is not configured. Set NEXT_PUBLIC_FORM_ACCESS_KEY in .env and restart the server.",
    };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: FORM_ACCESS_KEY,
        ...body,
      }),
    });

    const data = await parseWeb3FormsResponse(response);

    if (!response.ok || !data.success) {
      return { ok: false, error: data.message || "Failed to send" };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Network error while sending" };
  }
}

/** Contact form — free-tier JSON submit (delivered to your email). */
export async function submitContactForm(
  payload: ContactFormPayload
): Promise<ContactSubmitResult> {
  if (payload.botcheck) {
    return { ok: true };
  }

  return submitToWeb3Forms({
    subject: `New contact message from ${payload.name}`,
    from_name: companyInfo.name,
    name: payload.name,
    email: payload.email,
    phone: payload.phone || "—",
    company: payload.company || "—",
    service: payload.service,
    message: payload.message,
    replyto: payload.email,
    ...(payload.attribution ?? {}),
  });
}

/** Career application — free-tier JSON (no file attachments). */
export async function submitCareerApplication(
  payload: CareerFormPayload
): Promise<ContactSubmitResult> {
  if (payload.botcheck) {
    return { ok: true };
  }

  const messageParts = [
    payload.message || "(No cover note)",
    "",
    `Role: ${payload.role}`,
    `LinkedIn: ${payload.linkedin || "—"}`,
    `Resume / portfolio link: ${payload.resumeUrl || "—"}`,
  ];

  return submitToWeb3Forms({
    subject: `Career application from ${payload.name}`,
    from_name: companyInfo.name,
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    role: payload.role,
    linkedin: payload.linkedin || "—",
    resume_url: payload.resumeUrl || "—",
    message: messageParts.join("\n"),
    replyto: payload.email,
    ...(payload.attribution ?? {}),
  });
}
