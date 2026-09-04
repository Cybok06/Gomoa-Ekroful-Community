import { useParams, Link } from "react-router";
import { news, announcements } from "../data/content";

const allItems = [
  ...news,
  ...announcements.map((a) => ({ ...a, tab: "announcements" as const })),
];

export default function NewsArticle() {
  const { id } = useParams();
  const item = allItems.find((n) => n.id === Number(id)) ?? news[0];

  return (
    <>
      <div className="relative bg-forest-deep">
        <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative max-w-[1360px] mx-auto px-6 md:px-12 py-20">
          <div className="text-white/60 text-sm mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/news" className="hover:text-white">News</Link>
            <span className="mx-2">/</span>
            <span className="text-white line-clamp-1">{item.title}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold px-2.5 py-1 bg-white/10 text-amber-light rounded-full uppercase tracking-wide">{item.category}</span>
            <span className="text-white/60 text-sm">{item.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white max-w-3xl leading-tight">{item.title}</h1>
        </div>
      </div>

      <section className="py-16 bg-surface">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8 bg-white border border-divider">
                <img src={item.image} alt={item.title} className="w-full aspect-video object-cover" />
              </div>
              <div className="bg-white rounded-2xl border border-divider shadow-sm p-8 md:p-10">
                <p className="text-ink leading-relaxed text-lg mb-6 font-medium">{item.excerpt}</p>
                <p className="text-ink-muted leading-relaxed mb-6">
                  This development marks a significant milestone for the Gomoa Ekroful community. Residents have expressed strong support for the initiative, with community leaders pledging to ensure its success and sustainability.
                </p>
                <p className="text-ink-muted leading-relaxed mb-6">
                  The Community Executive Committee has been working closely with stakeholders to ensure that all residents benefit from this development. The project aligns with the community's long-term development plan and is expected to have a lasting positive impact.
                </p>
                <p className="text-ink-muted leading-relaxed">
                  Community members are encouraged to attend the next town hall meeting for further details and to share their feedback on how this initiative can be improved to better serve all residents of Gomoa Ekroful.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-divider shadow-sm p-6">
                <h3 className="font-bold text-ink text-sm uppercase tracking-wide mb-4 border-b border-divider pb-3">Article Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-ink-muted">Published</span>
                    <span className="font-medium text-ink">{item.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-muted">Category</span>
                    <span className="font-medium text-ink">{item.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-muted">Author</span>
                    <span className="font-medium text-ink">Community Secretariat</span>
                  </div>
                </div>
              </div>

              <div className="bg-forest rounded-2xl p-6 text-white">
                <h3 className="font-bold text-base mb-2">Stay Updated</h3>
                <p className="text-white/70 text-sm mb-4">Subscribe to get the latest community news delivered to your inbox.</p>
                <Link to="#newsletter" className="block text-center py-2.5 bg-amber text-forest-deep font-bold text-sm rounded-lg hover:bg-amber-light transition-colors">
                  Subscribe to Newsletter
                </Link>
              </div>

              <div className="bg-white rounded-2xl border border-divider shadow-sm p-6">
                <h3 className="font-bold text-ink text-sm uppercase tracking-wide mb-4">More News</h3>
                <div className="space-y-4">
                  {news.filter((n) => n.id !== item.id).slice(0, 3).map((n) => (
                    <Link key={n.id} to={`/news/${n.id}`} className="flex gap-3 group">
                      <div className="w-16 h-12 rounded-lg overflow-hidden bg-surface shrink-0">
                        <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-ink group-hover:text-forest transition-colors line-clamp-2 leading-snug">{n.title}</p>
                        <p className="text-[10px] text-ink-muted mt-1">{n.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
