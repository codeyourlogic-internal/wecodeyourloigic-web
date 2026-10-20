"use client";

import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { LegalList, LegalSection } from "@/components/legal/LegalDocument";
import { companyInfo } from "@/data/site";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader title={t("privacy.title")} subtitle={t("privacy.subtitle")} />
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <GlassCard>
              <p className="text-sm text-muted-foreground mb-10">{t("privacy.updated")}</p>

              <LegalSection title="1. Who we are">
                <p>
                  {companyInfo.legalName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a software engineering
                  and digital services company headquartered at {companyInfo.address}. We design,
                  build, and maintain custom software products and provide related consulting,
                  implementation, and support services to clients worldwide.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, store, and share personal
                  information when you visit {companyInfo.url}, contact us, apply for a role, or
                  engage us for services.
                </p>
              </LegalSection>

              <LegalSection title="2. Information we collect">
                <p>We may collect the following categories of information:</p>
                <LegalList
                  items={[
                    "Identity and contact details — name, email address, phone number, company name, and job title.",
                    "Inquiry and project details — service interest, message content, and other information you choose to share through our contact form or email.",
                    "Career application data — resume/CV, LinkedIn profile URL, role of interest, and any cover message you submit.",
                    "Technical data — IP address, browser type, device information, and approximate location derived from standard web server or analytics logs.",
                    "Client engagement data — information reasonably required to deliver contracted services, as described in a statement of work, proposal, or NDA.",
                  ]}
                />
                <p>
                  We do not intentionally collect sensitive personal data (such as health, biometric,
                  or financial account credentials) through this website unless you voluntarily
                  include it in a message or resume. Please avoid submitting such information unless
                  we expressly request it for a specific engagement.
                </p>
              </LegalSection>

              <LegalSection title="3. How we use your information">
                <p>We use personal information to:</p>
                <LegalList
                  items={[
                    "Respond to inquiries and provide proposals for software development or consulting services.",
                    "Communicate about projects, schedules, deliverables, and support.",
                    "Evaluate job applications and manage recruitment.",
                    "Operate, secure, and improve our website and business operations.",
                    "Comply with legal obligations and enforce our agreements.",
                    "Send service-related updates you request or that are necessary for an active engagement.",
                  ]}
                />
                <p>
                  We do not sell your personal information. We do not use contact-form or career data
                  for unrelated third-party marketing lists.
                </p>
              </LegalSection>

              <LegalSection title="4. Client project and confidential data">
                <p>
                  When you engage {companyInfo.legalName} as a service provider, you may share business,
                  product, or end-user data needed to perform the work. That data is handled under
                  the applicable contract, statement of work, and any non-disclosure agreement.
                </p>
                <p>
                  We use client project data only to deliver the agreed services, improve delivery
                  quality where permitted, and meet legal or security obligations. Access is limited
                  to team members and subprocessors who need it for the engagement.
                </p>
              </LegalSection>

              <LegalSection title="5. How we share information">
                <p>We may share information with:</p>
                <LegalList
                  items={[
                    "Service providers who help us operate our business — for example, website hosting, email delivery, and form processing (such as Web3Forms for contact and career submissions).",
                    "Professional advisors (legal, accounting) when reasonably required.",
                    "Authorities when required by law, court order, or to protect rights, safety, or security.",
                    "A successor entity in connection with a merger, acquisition, or business transfer, subject to appropriate safeguards.",
                  ]}
                />
                <p>
                  Third parties who process data on our behalf are expected to use it only for the
                  contracted purpose and to apply reasonable security measures.
                </p>
              </LegalSection>

              <LegalSection title="6. Cookies and similar technologies">
                <p>
                  We use cookies and similar technologies (including local storage) in three
                  categories. Necessary cookies are always on so the site can work. Analytics and
                  marketing cookies are optional — you choose them in our cookie banner or via
                  &quot;Cookie settings&quot; in the footer.
                </p>
                <LegalList
                  items={[
                    "Necessary — language preference, theme preference, and remembering your cookie choices. These do not require consent beyond using the site.",
                    "Analytics (optional) — help us understand which pages and CTAs convert (for example Google Analytics 4, when configured). Used to improve content and the sales funnel.",
                    "Marketing (optional) — support remarketing and ad measurement (for example Meta Pixel, when configured), and store campaign attribution such as UTM parameters so we know which ads or referrals produce inquiries.",
                  ]}
                />
                <p>
                  Optional scripts load only after you accept the matching category. You can change
                  or withdraw consent anytime from Cookie settings. Browser controls can also block
                  cookies; disabling necessary storage may affect features like saved language.
                </p>
                <p>
                  When you allow analytics or marketing cookies, we may attach first-party campaign
                  attribution (source, medium, campaign) to contact inquiries so our sales team can
                  prioritize high-intent leads and measure marketing ROI. We do not sell your
                  personal information.
                </p>
              </LegalSection>

              <LegalSection title="7. Data retention">
                <p>
                  We retain personal information only as long as needed for the purposes described
                  in this policy, including:
                </p>
                <LegalList
                  items={[
                    "Inquiry records — typically for a reasonable period to follow up and maintain business context.",
                    "Career applications — for the recruitment process and, where appropriate, for a limited time for future role consideration unless you ask us to delete them sooner.",
                    "Client engagement records — for the duration of the contract and thereafter as required for legal, tax, audit, or warranty purposes.",
                  ]}
                />
              </LegalSection>

              <LegalSection title="8. Security">
                <p>
                  We apply administrative, technical, and organizational measures appropriate to the
                  nature of our services — including access controls, secure development practices,
                  and careful handling of credentials and client environments. No method of
                  transmission or storage is completely secure; we work to reduce risk and respond
                  promptly if we become aware of an incident affecting your data.
                </p>
              </LegalSection>

              <LegalSection title="9. International transfers">
                <p>
                  We serve clients worldwide and may process information in India and other countries
                  where our team or service providers operate. Where required, we take steps to
                  ensure transfers receive an adequate level of protection consistent with applicable
                  law and our contracts.
                </p>
              </LegalSection>

              <LegalSection title="10. Your rights">
                <p>
                  Depending on your location, you may have rights to access, correct, update, or
                  delete personal information we hold about you, or to object to or restrict certain
                  processing. To exercise these rights, contact us using the details below. We may
                  need to verify your identity before responding.
                </p>
                <p>
                  If you are in a jurisdiction with a dedicated data-protection authority, you may
                  also lodge a complaint with that authority.
                </p>
              </LegalSection>

              <LegalSection title="11. Children">
                <p>
                  Our website and services are directed to businesses and professionals. We do not
                  knowingly collect personal information from children under 16. If you believe we
                  have collected such information, please contact us and we will take appropriate
                  steps to delete it.
                </p>
              </LegalSection>

              <LegalSection title="12. Changes to this policy">
                <p>
                  We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date
                  at the top of this page will change when we do. Continued use of the site after an
                  update constitutes notice of the revised policy, except where applicable law
                  requires additional consent.
                </p>
              </LegalSection>

              <LegalSection title="13. Contact us">
                <p>
                  For privacy questions or requests, contact:
                </p>
                <p>
                  <strong className="text-foreground">{companyInfo.legalName}</strong>
                  <br />
                  Email:{" "}
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-brand-accent hover:underline"
                  >
                    {companyInfo.email}
                  </a>
                  <br />
                  Address: {companyInfo.address}
                  <br />
                  Phone: {companyInfo.phone}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {companyInfo.trademark.mark}
                  {companyInfo.trademark.symbol} is a registered trademark of{" "}
                  {companyInfo.legalName}.
                </p>
              </LegalSection>
            </GlassCard>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
