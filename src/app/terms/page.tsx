"use client";

import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { LegalList, LegalSection } from "@/components/legal/LegalDocument";
import { companyInfo } from "@/data/site";

export default function TermsOfServicePage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader title={t("terms.title")} subtitle={t("terms.subtitle")} />
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <GlassCard>
              <p className="text-sm text-muted-foreground mb-10">{t("terms.updated")}</p>

              <LegalSection title="1. Agreement to these terms">
                <p>
                  These Terms of Service (&quot;Terms&quot;) govern your use of the website operated by{" "}
                  {companyInfo.legalName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) at {companyInfo.url}, and
                  form the general framework for inquiries and discussions about our software
                  engineering and digital services.
                </p>
                <p>
                  By accessing this website or submitting a contact or career form, you agree to
                  these Terms and our Privacy Policy. If you do not agree, please do not use the
                  site.
                </p>
                <p>
                  Formal client engagements are governed by a separate proposal, statement of work
                  (SOW), master services agreement, or other written contract. Where those documents
                  conflict with these Terms, the signed engagement documents control for that
                  project.
                </p>
              </LegalSection>

              <LegalSection title="2. Our services">
                <p>
                  {companyInfo.legalName} provides professional services that may include, without
                  limitation:
                </p>
                <LegalList
                  items={[
                    "Custom web, mobile, and desktop application development",
                    "Cloud infrastructure, DevOps, and related engineering",
                    "AI, machine learning, and blockchain-related solutions",
                    "UI/UX design, API development, SaaS product engineering, and maintenance",
                    "Consulting, architecture advisory, and digital transformation support",
                  ]}
                />
                <p>
                  Descriptions on this website are informational. They do not constitute an offer
                  to perform specific work until we issue and you accept a written proposal or
                  contract that defines scope, fees, timeline, and deliverables.
                </p>
              </LegalSection>

              <LegalSection title="3. Website use">
                <p>You agree to use this website only for lawful purposes. You must not:</p>
                <LegalList
                  items={[
                    "Attempt to disrupt, probe, or compromise the site or related systems.",
                    "Submit false, misleading, or harmful content through forms or email.",
                    "Scrape, copy, or reuse site content for commercial purposes without our prior written consent.",
                    "Impersonate any person or entity, or misrepresent your affiliation with a client or employer.",
                  ]}
                />
                <p>
                  We may suspend or restrict access to the site if we reasonably believe these Terms
                  have been violated.
                </p>
              </LegalSection>

              <LegalSection title="4. Inquiries, proposals, and engagements">
                <p>
                  Submitting an inquiry does not create a client relationship or obligate either
                  party to proceed. Any estimate, timeline, or approach discussed before a signed
                  agreement is indicative only.
                </p>
                <p>
                  Each paid engagement typically requires written acceptance of scope, commercial
                  terms, and any assumptions or dependencies. Changes to scope may affect fees and
                  schedules and should be agreed in writing (including email where the contract
                  allows).
                </p>
              </LegalSection>

              <LegalSection title="5. Client responsibilities">
                <p>When you engage us, you are responsible for:</p>
                <LegalList
                  items={[
                    "Providing timely access to stakeholders, materials, environments, and approvals needed for delivery.",
                    "Ensuring you have the rights to share content, data, and credentials you provide to us.",
                    "Making decisions and providing feedback within agreed review windows.",
                    "Paying invoices according to the payment schedule in the applicable contract.",
                  ]}
                />
                <p>
                  Delays attributable to missing inputs, access, or approvals may shift delivery
                  dates and may incur additional fees if agreed in the contract.
                </p>
              </LegalSection>

              <LegalSection title="6. Fees and payment">
                <p>
                  Fees, billing milestones, expenses, and taxes are defined in the applicable
                  proposal or contract. Unless otherwise stated in writing, invoices are due as
                  specified therein, and late payments may pause work or accrue charges as allowed
                  by the contract and applicable law.
                </p>
                <p>
                  Website content that mentions capabilities or past work does not imply fixed
                  pricing for new projects.
                </p>
              </LegalSection>

              <LegalSection title="7. Intellectual property">
                <p>
                  Unless otherwise agreed in a signed contract: (a) we retain ownership of our
                  pre-existing tools, frameworks, know-how, and generic components; (b) upon full
                  payment of amounts due for the relevant deliverables, you receive the rights to
                  custom work product expressly assigned or licensed under that contract; and (c)
                  open-source or third-party components remain subject to their respective licenses.
                </p>
                <p>
                  Portfolio references, anonymized case studies, and non-confidential descriptions
                  of our work may be used to describe our capabilities, unless a contract or NDA
                  restricts such use.
                </p>
                <p>
                  All trademarks, logos, text, and design on this website are owned by{" "}
                  {companyInfo.legalName} or our licensors and may not be used without permission.
                  The name and mark{" "}
                  <strong className="text-foreground">
                    {companyInfo.trademark.mark}
                    {companyInfo.trademark.symbol}
                  </strong>{" "}
                  are registered trademarks of {companyInfo.legalName}.
                </p>
              </LegalSection>

              <LegalSection title="8. Trademarks">
                <p>
                  {companyInfo.trademark.mark}
                  {companyInfo.trademark.symbol} and related logos, brand assets, and trade dress
                  are registered trademarks of {companyInfo.legalName}. Unauthorized use,
                  reproduction, imitation, or registration of confusingly similar marks is
                  prohibited.
                </p>
                <p>
                  Nothing on this website grants any license or right to use our trademarks,
                  service marks, or logos without our prior written consent, except for accurate
                  nominative references that do not imply sponsorship or endorsement.
                </p>
                <p>
                  Third-party product and company names mentioned on this site may be trademarks
                  of their respective owners and are used only for identification.
                </p>
              </LegalSection>

              <LegalSection title="9. Confidentiality">
                <p>
                  Both parties should treat non-public business, technical, and personal information
                  shared during an inquiry or engagement as confidential, and use it only for
                  evaluating or performing the services — except for information that is public,
                  independently developed, or required to be disclosed by law.
                </p>
                <p>
                  Formal NDAs or confidentiality clauses in a master agreement will take precedence
                  for covered information.
                </p>
              </LegalSection>

              <LegalSection title="10. Careers and applications">
                <p>
                  Submitting a career application does not create an employment relationship or
                  guarantee an interview or offer. Application materials are handled as described in
                  our Privacy Policy.
                </p>
              </LegalSection>

              <LegalSection title="11. Disclaimers">
                <p>
                  This website and its content are provided on an &quot;as is&quot; and &quot;as
                  available&quot; basis. To the fullest extent permitted by law, we disclaim
                  warranties of merchantability, fitness for a particular purpose, and
                  non-infringement regarding the site itself.
                </p>
                <p>
                  Warranties for deliverables under a client engagement, if any, are solely those
                  stated in the applicable written contract.
                </p>
              </LegalSection>

              <LegalSection title="12. Limitation of liability">
                <p>
                  To the fullest extent permitted by law, {companyInfo.legalName} and its directors,
                  employees, and contractors will not be liable for indirect, incidental, special,
                  consequential, or punitive damages, or for loss of profits, revenue, data, or
                  business opportunity, arising from your use of this website.
                </p>
                <p>
                  For paid services, liability is limited as set out in the governing contract. If
                  that contract is silent, our aggregate liability related to the website or a
                  pre-contract inquiry is limited to INR 5,000.
                </p>
              </LegalSection>

              <LegalSection title="13. Indemnity">
                <p>
                  You agree to indemnify and hold harmless {companyInfo.legalName} from claims, losses,
                  and expenses (including reasonable legal fees) arising from your misuse of this
                  website, your breach of these Terms, or content or materials you submit that
                  infringe third-party rights — except to the extent caused by our willful
                  misconduct.
                </p>
              </LegalSection>

              <LegalSection title="14. Termination">
                <p>
                  You may stop using the website at any time. We may update, suspend, or discontinue
                  the site or any part of it without notice. Provisions that by nature should
                  survive (including IP, confidentiality, disclaimers, liability limits, and
                  governing law) will continue to apply.
                </p>
                <p>
                  Termination of a client engagement is governed by the applicable contract.
                </p>
              </LegalSection>

              <LegalSection title="15. Governing law and disputes">
                <p>
                  These Terms are governed by the laws of India. Courts in Jamshedpur, Jharkhand,
                  shall have exclusive jurisdiction over disputes arising from these Terms or your
                  use of the website, subject to any different dispute-resolution clause in a signed
                  client contract.
                </p>
              </LegalSection>

              <LegalSection title="16. Changes">
                <p>
                  We may revise these Terms periodically. The &quot;Last updated&quot; date reflects
                  the latest version. Material changes may be highlighted on this page. Continued
                  use of the site after changes take effect constitutes acceptance of the updated
                  Terms.
                </p>
              </LegalSection>

              <LegalSection title="17. Contact">
                <p>Questions about these Terms may be sent to:</p>
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
              </LegalSection>
            </GlassCard>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
