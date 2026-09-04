import { useParams, Link } from "react-router";
import { leaders } from "../data/content";
import ScrollReveal from "../components/ScrollReveal";

export default function LeaderProfile() {
  const { id } = useParams();
  const leader = leaders.find((l) => l.id === Number(id)) ?? leaders[0];

  return (
    <>
      <div className="bg-forest-deep py-12">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="text-white/60 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/leadership" className="hover:text-white transition-colors">Leadership</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{leader.name}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">{leader.name}</h1>
          <p className="text-amber-light mt-1">{leader.position}</p>
        </div>
      </div>

      <section className="py-16 bg-surface">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <ScrollReveal className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-divider shadow-sm overflow-hidden">
                <div className="aspect-square bg-surface">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center border-t border-divider">
                  <div className="text-[11px] font-bold text-amber uppercase tracking-widest mb-2">{leader.category}</div>
                  <h2 className="font-extrabold text-ink text-xl mb-1">{leader.name}</h2>
                  <p className="text-ink-muted text-sm">{leader.position}</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-divider shadow-sm p-8">
                  <h3 className="font-bold text-ink text-lg mb-4">Biography</h3>
                  <p className="text-ink-muted leading-relaxed mb-4">{leader.bio}</p>
                  <p className="text-ink-muted leading-relaxed">
                    As a dedicated community leader, {leader.name.split(" ")[0]} works tirelessly to represent the interests of all residents, promote development initiatives, and maintain the cultural heritage that makes Gomoa Ekroful unique.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <div className="bg-white rounded-2xl border border-divider shadow-sm p-8">
                  <h3 className="font-bold text-ink text-lg mb-4">Responsibilities</h3>
                  <ul className="space-y-3">
                    {["Representing community interests in governance matters",
                      "Overseeing development projects and community welfare",
                      "Mediating disputes and fostering community unity",
                      "Liaising with government agencies and NGOs",
                      "Preserving cultural traditions and heritage"].map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm text-ink-muted">
                        <span className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <div className="bg-white rounded-2xl border border-divider shadow-sm p-8">
                  <h3 className="font-bold text-ink text-lg mb-4">Contact Office</h3>
                  <div className="space-y-3 text-sm text-ink-muted">
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-forest shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      gomoaekrofulcommunity001@gmail.com
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-forest shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      Gomoa Ekroful Community Centre
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-forest shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Mon–Fri: 9:00 AM – 4:00 PM
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
