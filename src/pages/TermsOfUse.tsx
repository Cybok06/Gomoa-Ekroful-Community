import { PageHero } from "./About";

export default function TermsOfUse() {
  return (
    <>
      <PageHero title="Terms of Use" subtitle="Legal" breadcrumb="Terms of Use" />
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl border border-divider shadow-sm p-10">
            <p className="text-ink-muted text-sm mb-8">Last updated: June 1, 2026</p>
            {[
              { title: "1. Acceptance of Terms", body: "By accessing and using the Gomoa Ekroful Community website, you accept and agree to be bound by these Terms of Use. If you do not agree, please discontinue use of this site." },
              { title: "2. Use of the Website", body: "This website is provided for informational purposes and community services. You agree not to use the site for any unlawful purpose, to submit false information, or to interfere with the site's operation." },
              { title: "3. Community Services", body: "Community services including member registration, issue reporting, and document requests are subject to verification and approval by the Community Secretariat. Submission does not guarantee approval." },
              { title: "4. Content Accuracy", body: "While we strive to keep information accurate and current, the community makes no warranties about the completeness or accuracy of content on this website. Information may be updated without notice." },
              { title: "5. Intellectual Property", body: "All content on this website, including text, images, and logos, is the property of the Gomoa Ekroful Community. Reproduction without written permission is prohibited." },
              { title: "6. Limitation of Liability", body: "The Gomoa Ekroful Community shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or community services." },
              { title: "7. Changes to Terms", body: "We reserve the right to modify these terms at any time. Continued use of the website following changes constitutes acceptance of the revised terms." },
            ].map((s) => (
              <div key={s.title} className="mb-8">
                <h2 className="text-lg font-bold text-ink mb-3">{s.title}</h2>
                <p className="text-ink-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
