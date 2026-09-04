import { Link } from "react-router";
import { events } from "../data/content";
import ScrollReveal from "../components/ScrollReveal";
import { PageHero } from "./About";

const categories = ["All", "Community", "Governance", "Youth", "Culture"];

export default function Events() {
  return (
    <>
      <PageHero title="Upcoming Events" subtitle="Community Calendar" breadcrumb="Events" />

      <section className="py-16 bg-surface">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5">
              {events.map((e, i) => (
                <ScrollReveal key={e.id} delay={i * 60}>
                  <div className="bg-white rounded-2xl border border-divider shadow-sm overflow-hidden hover:shadow-md transition-all group">
                    <div className="flex flex-col sm:flex-row">
                      <div className="aspect-video sm:aspect-auto sm:w-56 overflow-hidden bg-surface shrink-0">
                        <img src={e.image} alt={e.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center gap-1.5 bg-forest rounded-lg px-3 py-2 text-center">
                              <span className="text-amber-light text-[10px] font-bold uppercase leading-none">{e.month}</span>
                              <span className="text-white text-xl font-extrabold leading-none">{e.day}</span>
                            </div>
                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                              e.category === "Culture" ? "bg-amber/15 text-amber" : "bg-forest/10 text-forest"
                            }`}>{e.category}</span>
                          </div>
                          <h3 className="font-bold text-ink text-lg mb-2 group-hover:text-forest transition-colors">{e.title}</h3>
                          <p className="text-ink-muted text-sm leading-relaxed mb-3">{e.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-ink-muted mb-4">
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {e.time}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {e.location}
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <Link to={`/events/${e.id}`}
                            className="px-4 py-2 bg-forest text-white text-xs font-bold rounded-lg hover:bg-forest-dark transition-colors">
                            View Details
                          </Link>
                          <button className="px-4 py-2 border border-divider text-ink-muted text-xs font-bold rounded-lg hover:border-forest hover:text-forest transition-colors">
                            Add to Calendar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-divider shadow-sm p-6">
                  <h3 className="font-bold text-ink text-sm uppercase tracking-wide mb-4">Filter by Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <button key={c} className="px-3 py-1.5 rounded-lg text-xs font-bold border border-divider text-ink-muted hover:border-forest hover:text-forest transition-all">
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <div className="bg-forest rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-base mb-2">Organise an Event</h3>
                  <p className="text-white/70 text-sm mb-4">Want to host a community event? Submit a request to the Community Secretariat.</p>
                  <Link to="/contact"
                    className="block text-center py-2.5 bg-amber text-forest-deep font-bold text-sm rounded-lg hover:bg-amber-light transition-colors">
                    Submit Request
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
