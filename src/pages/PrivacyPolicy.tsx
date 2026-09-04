import { PageHero } from "./About";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="Legal" breadcrumb="Privacy Policy" />
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl border border-divider shadow-sm p-10 prose prose-sm max-w-none">
            <p className="text-ink-muted text-sm mb-8">Last updated: June 1, 2026</p>
            {[
              { title: "1. Information We Collect", body: "We collect personal information that you voluntarily provide when registering as a community member, submitting reports, or contacting us. This includes your name, contact details, national identification numbers, and address." },
              { title: "2. How We Use Your Information", body: "Your information is used solely for community management purposes: maintaining the community register, processing service requests, communicating community news and events, and improving our services to residents." },
              { title: "3. Data Security", body: "We implement appropriate technical and administrative safeguards to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Access to personal data is restricted to authorised community officers only." },
              { title: "4. Data Sharing", body: "We do not sell, trade, or rent your personal information to third parties. We may share information with government agencies when required by law, or with service providers who assist in community operations, under strict confidentiality agreements." },
              { title: "5. Your Rights", body: "You have the right to access, correct, or request deletion of your personal data held by the community. To exercise these rights, contact our secretariat at gomoaekrofulcommunity001@gmail.com." },
              { title: "6. Cookies", body: "Our website uses minimal cookies for essential functionality and analytics. You may disable cookies through your browser settings, though this may affect some site features." },
              { title: "7. Contact", body: "For privacy-related enquiries, contact the Community Secretariat at gomoaekrofulcommunity001@gmail.com or visit the community office during office hours." },
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
