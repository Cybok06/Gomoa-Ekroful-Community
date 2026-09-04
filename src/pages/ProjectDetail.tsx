import { useParams, Link } from "react-router";
import { projects } from "../data/content";
import ScrollReveal from "../components/ScrollReveal";
import { Check, Circle } from "lucide-react";

const statusColors: Record<string, string> = {
  ONGOING: "bg-amber/15 text-amber border-amber/30",
  COMPLETED: "bg-forest/10 text-forest border-forest/20",
  PROPOSED: "bg-ink-muted/10 text-ink-muted border-ink-muted/20",
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id)) ?? projects[0];

  return (
    <>
      <div className="relative bg-forest-deep pt-16 pb-0 overflow-hidden">
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="text-white/60 text-sm mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/projects" className="hover:text-white">Projects</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{project.title}</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wide ${statusColors[project.status]}`}>
              {project.status}
            </span>
            <span className="text-amber-light text-xs font-medium">{project.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">{project.title}</h1>
        </div>
        <div className="relative aspect-[21/7] max-h-72 overflow-hidden mt-6">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-transparent" />
        </div>
      </div>

      <section className="py-16 bg-surface">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-divider shadow-sm p-8">
                  <h2 className="font-bold text-ink text-xl mb-4">Project Overview</h2>
                  <p className="text-ink-muted leading-relaxed mb-4">{project.description}</p>
                  <p className="text-ink-muted leading-relaxed">
                    This project represents a significant investment in the infrastructure and welfare of Gomoa Ekroful. The community has been actively involved in planning and oversight to ensure the project meets local needs.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={60}>
                <div className="bg-white rounded-2xl border border-divider shadow-sm p-8">
                  <h2 className="font-bold text-ink text-xl mb-6">Progress Tracker</h2>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span className="text-ink-muted">Overall Completion</span>
                      <span className="text-forest text-lg">{project.progress}%</span>
                    </div>
                    <div className="h-3 bg-divider rounded-full overflow-hidden">
                      <div className="h-full bg-forest rounded-full transition-[width] duration-[1.2s]" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {["Planning", "Procurement", "Construction", "Completion"].map((stage, i) => (
                      <div key={stage} className={`rounded-lg p-4 text-center ${i * 25 <= project.progress ? "bg-forest/10 border border-forest/20" : "bg-surface border border-divider"}`}>
                        <div className={`text-xl font-bold mb-1 ${i * 25 <= project.progress ? "text-forest" : "text-divider"}`}>
                          {i * 25 <= project.progress ? (
                            <Check aria-hidden="true" size={20} strokeWidth={2} className="mx-auto" />
                          ) : (
                            <Circle aria-hidden="true" size={18} strokeWidth={1.8} className="mx-auto" />
                          )}
                        </div>
                        <div className="text-xs font-medium text-ink-muted">{stage}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <div className="bg-white rounded-2xl border border-divider shadow-sm p-8">
                  <h2 className="font-bold text-ink text-xl mb-4">Community Impact</h2>
                  <p className="text-ink-muted leading-relaxed">{project.impact}</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-divider shadow-sm p-6">
                  <h3 className="font-bold text-ink text-base mb-4 border-b border-divider pb-3">Project Details</h3>
                  {[
                    { label: "Status", value: project.status },
                    { label: "Category", value: project.category },
                    { label: "Start Date", value: project.startDate },
                    { label: "Expected Completion", value: project.expectedCompletion },
                    { label: "Budget", value: project.budget },
                  ].map((d) => (
                    <div key={d.label} className="flex justify-between py-2.5 border-b border-divider last:border-0 text-sm">
                      <span className="text-ink-muted">{d.label}</span>
                      <span className="font-semibold text-ink">{d.value}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={60}>
                <div className="bg-forest rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-base mb-3">Have a Question?</h3>
                  <p className="text-white/70 text-sm mb-4">Contact the development committee for more information about this project.</p>
                  <Link to="/contact"
                    className="block text-center py-2.5 bg-amber text-forest-deep font-bold text-sm rounded-lg hover:bg-amber-light transition-colors">
                    Contact Us
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <Link to="/projects"
                  className="flex items-center gap-2 text-forest text-sm font-bold hover:gap-3 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to All Projects
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
