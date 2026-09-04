import { Link } from "react-router";
import { services } from "../data/content";
import ScrollReveal from "../components/ScrollReveal";
import { PageHero } from "./About";

export default function Services() {
  return (
    <>
      <PageHero title="Community Services" subtitle="How We Help" breadcrumb="Services" />

      <section className="py-16 bg-surface">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <ScrollReveal className="text-center mb-12">
            <p className="text-ink-muted max-w-2xl mx-auto text-lg">
              Gomoa Ekroful Community provides a range of services to support residents, businesses, and stakeholders. Use the services below or visit the community office for assistance.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
              <ScrollReveal key={s.title} delay={i * 50}>
                <Link to={s.link}
                  className="block bg-white rounded-2xl border border-divider shadow-sm p-7 hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-forest/10 text-forest flex items-center justify-center mb-5 group-hover:bg-forest group-hover:text-white group-hover:-translate-y-0.5 transition-all">
                    <Icon aria-hidden="true" size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-bold text-ink text-base mb-2 group-hover:text-forest transition-colors">{s.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-4">{s.description}</p>
                  <span className="flex items-center gap-1 text-forest text-xs font-bold group-hover:gap-2 transition-all">
                    Open Service
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="mt-16 bg-forest rounded-2xl p-10 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-3">Need Help with a Service?</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">Our community officers are available Monday to Friday, 8:00 AM to 5:00 PM, at the Community Centre.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact"
                className="px-8 py-3 bg-amber text-forest-deep font-bold text-sm rounded-xl hover:bg-amber-light transition-colors">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
