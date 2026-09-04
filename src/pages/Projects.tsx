import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { projects } from "../data/content";
import ScrollReveal from "../components/ScrollReveal";
import { PageHero } from "./About";
import { SearchX } from "lucide-react";

const statusFilters = ["All", "ONGOING", "COMPLETED", "PROPOSED"];
const categoryFilters = ["All Categories", "Roads", "Education", "Healthcare", "Sanitation", "Water", "Technology", "Community Infrastructure"];

const statusColors: Record<string, string> = {
  ONGOING: "bg-amber/15 text-amber border-amber/30",
  COMPLETED: "bg-forest/10 text-forest border-forest/20",
  PROPOSED: "bg-ink-muted/10 text-ink-muted border-ink-muted/20",
};

export default function Projects() {
  const [searchParams] = useSearchParams();
  const initialStatus = searchParams.get("status")?.toUpperCase();
  const [status, setStatus] = useState(initialStatus && statusFilters.includes(initialStatus) ? initialStatus : "All");
  const [category, setCategory] = useState("All Categories");

  const filtered = projects.filter((p) => {
    const statusOk = status === "All" || p.status === status;
    const catOk = category === "All Categories" || p.category === category;
    return statusOk && catOk;
  });

  return (
    <>
      <PageHero title="Development Projects" subtitle="Our Work" breadcrumb="Projects" />

      {/* Filters */}
      <section className="bg-white border-b border-divider sticky top-[64px] z-30">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-3 flex flex-wrap gap-3 items-center">
          <div className="flex gap-1">
            {statusFilters.map((f) => (
              <button key={f} onClick={() => setStatus(f)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all ${status === f ? "bg-forest text-white" : "text-ink-muted hover:text-ink hover:bg-surface"}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="h-5 w-px bg-divider hidden md:block" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-xs font-medium text-ink border border-divider rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:border-forest cursor-pointer">
            {categoryFilters.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-surface border-b border-divider">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-4 flex gap-8">
          {[
            { label: "Ongoing", value: projects.filter((p) => p.status === "ONGOING").length, color: "text-amber" },
            { label: "Completed", value: projects.filter((p) => p.status === "COMPLETED").length, color: "text-forest" },
            { label: "Proposed", value: projects.filter((p) => p.status === "PROPOSED").length, color: "text-ink-muted" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className={`text-2xl font-extrabold ${s.color}`}>{s.value}</span>
              <span className="text-sm text-ink-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-surface min-h-screen">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 50}>
                <div className="bg-white rounded-xl border border-divider shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className="aspect-[16/9] overflow-hidden bg-surface relative">
                    <img src={p.image} alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wide ${statusColors[p.status]}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] text-ink-muted font-medium uppercase tracking-wider mb-1.5">{p.category}</div>
                    <h3 className="font-bold text-ink text-base mb-2 leading-snug">{p.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed mb-4 line-clamp-2">{p.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-ink-muted mb-4">
                      <div><span className="font-medium text-ink">Started:</span> {p.startDate}</div>
                      <div><span className="font-medium text-ink">Budget:</span> {p.budget}</div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-ink-muted">Completion</span>
                        <span className="text-forest">{p.progress}%</span>
                      </div>
                      <div className="h-2 bg-divider rounded-full overflow-hidden">
                        <div className="h-full bg-forest rounded-full transition-[width] duration-[1.2s]" style={{ width: `${p.progress}%` }} />
                      </div>
                    </div>
                    <Link to={`/projects/${p.id}`}
                      className="inline-flex items-center gap-1.5 text-forest text-xs font-bold hover:gap-2.5 transition-all">
                      View Project
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-ink-muted">
              <SearchX aria-hidden="true" size={36} strokeWidth={1.8} className="mx-auto mb-4 text-forest" />
              <p className="font-medium">No projects found for the selected filters.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
