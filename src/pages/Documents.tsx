import { useState } from "react";
import { PageHero } from "./About";
import ScrollReveal from "../components/ScrollReveal";
import { BarChart3, Building2, ClipboardList, FilePenLine, FileText, HandCoins, House, Users } from "lucide-react";

const docs = [
  { name: "Community Membership Certificate Application", category: "Membership", size: "PDF Form", icon: FileText },
  { name: "Proof of Residence Letter Request", category: "Residence", size: "PDF Form", icon: House },
  { name: "Business Operating Permit Application", category: "Business", size: "PDF Form", icon: Building2 },
  { name: "Land Ownership Verification Form", category: "Land", size: "PDF Form", icon: ClipboardList },
  { name: "Community Development Fund Application", category: "Development", size: "PDF Form", icon: HandCoins },
  { name: "Youth Group Registration Form", category: "Youth", size: "PDF Form", icon: Users },
  { name: "Community Meeting Minutes – March 2026", category: "Minutes", size: "PDF Document", icon: FilePenLine },
  { name: "2026 Community Budget & Development Plan", category: "Finance", size: "PDF Document", icon: BarChart3 },
];

const categories = ["All", "Membership", "Residence", "Business", "Land", "Development", "Youth", "Minutes", "Finance"];

export default function Documents() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? docs : docs.filter((d) => d.category === active);

  return (
    <>
      <PageHero title="Documents & Forms" subtitle="Community Resources" breadcrumb="Documents" />
      <section className="py-16 bg-surface min-h-screen">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((c) => (
              <button key={c} onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${active === c ? "bg-forest text-white" : "bg-white border border-divider text-ink-muted hover:text-ink hover:border-forest"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((d, i) => {
              const Icon = d.icon;
              return (
              <ScrollReveal key={d.name} delay={i * 40}>
                <div className="bg-white rounded-xl border border-divider shadow-sm p-5 flex items-center gap-4 hover:border-forest/30 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0 group-hover:bg-forest group-hover:text-white transition-colors">
                    <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-ink text-sm leading-snug mb-1">{d.name}</h3>
                    <div className="flex items-center gap-2 text-[11px] text-ink-muted">
                      <span className="bg-surface px-2 py-0.5 rounded-full border border-divider">{d.category}</span>
                      <span>{d.size}</span>
                    </div>
                  </div>
                  <button className="shrink-0 px-4 py-2 border border-forest text-forest text-xs font-bold rounded-lg hover:bg-forest hover:text-white transition-all">
                    Download
                  </button>
                </div>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
