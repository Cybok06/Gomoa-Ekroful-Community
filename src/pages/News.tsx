import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { news, announcements } from "../data/content";
import ScrollReveal from "../components/ScrollReveal";
import { PageHero } from "./About";

const tabs = [
  { key: "news", label: "Latest News" },
  { key: "announcements", label: "Announcements" },
  { key: "notices", label: "Notices" },
] as const;

export default function News() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") as typeof tabs[number]["key"] | null;
  const [activeTab, setActiveTab] = useState<typeof tabs[number]["key"]>(
    tabs.some((t) => t.key === initialTab) ? initialTab! : "news"
  );

  const items = activeTab === "announcements"
    ? announcements.map((a) => ({ ...a, tab: "announcements" as const, category: a.category }))
    : news.filter((n) => n.tab === activeTab || (activeTab === "notices" && n.tab === "notices"));

  const displayItems = items.length > 0 ? items : news.filter((n) => n.tab === "news");

  return (
    <>
      <PageHero title="News & Announcements" subtitle="Stay Informed" breadcrumb="News" />

      {/* Tabs */}
      <section className="bg-white border-b border-divider sticky top-[64px] z-30">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="flex gap-0">
            {tabs.map((t) => (
              <button key={t.key} onClick={() => setActiveTab(t.key)}
                className={`px-6 py-4 text-sm font-bold uppercase tracking-wide border-b-2 transition-all ${activeTab === t.key ? "border-forest text-forest" : "border-transparent text-ink-muted hover:text-ink"}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface min-h-screen">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 50}>
                <Link to={`/news/${item.id}`}
                  className="block bg-white rounded-xl border border-divider shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className="aspect-[16/9] overflow-hidden bg-surface">
                    <img src={item.image} alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 bg-forest/10 text-forest rounded-full uppercase tracking-wide">{item.category}</span>
                      <span className="text-xs text-ink-muted">{item.date}</span>
                    </div>
                    <h3 className="font-bold text-ink text-base leading-snug mb-2 group-hover:text-forest transition-colors line-clamp-2">{item.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed line-clamp-3 mb-4">{item.excerpt}</p>
                    <span className="text-forest text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
