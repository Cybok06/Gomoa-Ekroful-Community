import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import ScrollReveal from "../components/ScrollReveal";
import { leaders } from "../data/content";
import { PageHero } from "./About";

const filters = ["All", "Traditional Leadership", "Community Executive", "Assembly Representatives", "Committees"];

export default function Leadership() {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get("filter");
  const [active, setActive] = useState(
    initialFilter === "traditional" ? "Traditional Leadership"
    : initialFilter === "executive" ? "Community Executive"
    : initialFilter === "assembly" ? "Assembly Representatives"
    : initialFilter === "committees" ? "Committees"
    : "All"
  );

  const filtered = active === "All" ? leaders : leaders.filter((l) => l.category === active);

  return (
    <>
      <PageHero title="Community Leadership" subtitle="Our Leaders" breadcrumb="Leadership" />

      {/* Filter tabs */}
      <section className="bg-white border-b border-divider sticky top-[64px] z-30">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${active === f ? "bg-forest text-white" : "text-ink-muted hover:text-ink hover:bg-surface"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface min-h-screen">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
            {filtered.map((l, i) => (
              <ScrollReveal key={l.id} delay={i * 40}>
                <Link to={`/leadership/${l.id}`}
                  className="bg-white rounded-xl border border-divider shadow-sm overflow-hidden text-center hover:shadow-md hover:-translate-y-1 transition-all group block">
                  <div className="aspect-square overflow-hidden bg-surface">
                    <img src={l.image} alt={l.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] font-bold text-amber uppercase tracking-wide mb-1">{l.category}</div>
                    <h3 className="font-bold text-ink text-xs leading-snug mb-1 group-hover:text-forest transition-colors">{l.name}</h3>
                    <p className="text-ink-muted text-[10px] leading-tight">{l.position}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-ink-muted">
              No leaders found for this category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
