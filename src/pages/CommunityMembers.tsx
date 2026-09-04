import ScrollReveal from "../components/ScrollReveal";
import { PageHero } from "./About";
import { Link } from "react-router";
import { Building2, House, LockKeyhole, UserRound, Users, UsersRound } from "lucide-react";

const stats = [
  { label: "Total Members", value: 2485, icon: Users, color: "bg-forest" },
  { label: "Male Members", value: 1210, icon: UserRound, color: "bg-forest-dark" },
  { label: "Female Members", value: 1275, icon: UserRound, color: "bg-amber" },
  { label: "Total Households", value: 645, icon: House, color: "bg-forest" },
  { label: "Youth (18–35)", value: 890, icon: UsersRound, color: "bg-forest-dark" },
  { label: "Registered Businesses", value: 183, icon: Building2, color: "bg-amber" },
];

const demographics = [
  { label: "Under 18", pct: 28, color: "bg-forest" },
  { label: "18–35", pct: 36, color: "bg-amber" },
  { label: "36–60", pct: 24, color: "bg-forest-dark" },
  { label: "Over 60", pct: 12, color: "bg-ink-muted" },
];

export default function CommunityMembers() {
  return (
    <>
      <PageHero title="Community Members" subtitle="Our People" breadcrumb="Community Members" />

      <section className="py-16 bg-surface">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
              <ScrollReveal key={s.label} delay={i * 40}>
                <div className="bg-white rounded-2xl border border-divider shadow-sm p-6 text-center">
                  <Icon aria-hidden="true" size={28} strokeWidth={1.8} className="mx-auto mb-2 text-forest" />
                  <div className="text-3xl font-extrabold text-ink mb-1">{s.value.toLocaleString()}</div>
                  <div className="text-xs text-ink-muted font-medium">{s.label}</div>
                </div>
              </ScrollReveal>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Age distribution */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-divider shadow-sm p-8">
                <h3 className="font-bold text-ink text-lg mb-6">Age Distribution</h3>
                <div className="space-y-5">
                  {demographics.map((d) => (
                    <div key={d.label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-ink">{d.label}</span>
                        <span className="font-bold text-ink-muted">{d.pct}%</span>
                      </div>
                      <div className="h-2.5 bg-divider rounded-full overflow-hidden">
                        <div className={`h-full ${d.color} rounded-full`} style={{ width: `${d.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-divider flex gap-4 flex-wrap">
                  {demographics.map((d) => (
                    <div key={d.label} className="flex items-center gap-1.5 text-xs text-ink-muted">
                      <div className={`w-3 h-3 rounded-full ${d.color}`} />
                      {d.label}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Gender split */}
            <ScrollReveal delay={80}>
              <div className="bg-white rounded-2xl border border-divider shadow-sm p-8">
                <h3 className="font-bold text-ink text-lg mb-6">Gender Split</h3>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex-1">
                    <div className="text-4xl font-extrabold text-forest mb-1">1,210</div>
                    <div className="text-sm text-ink-muted">Male (48.7%)</div>
                    <div className="mt-3 h-2 bg-divider rounded-full overflow-hidden">
                      <div className="h-full bg-forest rounded-full" style={{ width: "48.7%" }} />
                    </div>
                  </div>
                  <div className="w-px h-16 bg-divider" />
                  <div className="flex-1">
                    <div className="text-4xl font-extrabold text-amber mb-1">1,275</div>
                    <div className="text-sm text-ink-muted">Female (51.3%)</div>
                    <div className="mt-3 h-2 bg-divider rounded-full overflow-hidden">
                      <div className="h-full bg-amber rounded-full" style={{ width: "51.3%" }} />
                    </div>
                  </div>
                </div>
                <div className="bg-surface rounded-xl p-4 text-sm text-ink-muted">
                  <strong className="text-ink">2,485</strong> total registered members across <strong className="text-ink">645</strong> households.
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Privacy notice */}
          <ScrollReveal>
            <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6 text-center">
              <LockKeyhole aria-hidden="true" size={24} strokeWidth={1.8} className="mx-auto mb-3 text-forest" />
              <h3 className="font-bold text-ink text-lg mb-2">Privacy Protected Member Directory</h3>
              <p className="text-ink-muted text-sm max-w-xl mx-auto mb-4">
                Individual member information is protected and only accessible by authorised community officers. To access the private directory, you must be a registered member and log in.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <button className="px-6 py-2.5 bg-forest text-white font-bold text-sm rounded-xl hover:bg-forest-dark transition-colors">
                  Member Login
                </button>
                <Link to="/member-registration"
                  className="px-6 py-2.5 border border-forest text-forest font-bold text-sm rounded-xl hover:bg-forest hover:text-white transition-all">
                  Register as Member
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
