import { useState } from "react";
import { galleryImages } from "../data/content";
import ScrollReveal from "../components/ScrollReveal";
import { PageHero } from "./About";

const categories = ["All", "Community", "Development", "Culture", "Events", "Leadership"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<typeof galleryImages[0] | null>(null);

  const filtered = active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <>
      <PageHero title="Community Gallery" subtitle="Visual Stories" breadcrumb="Gallery" />

      {/* Filter */}
      <section className="bg-white border-b border-divider sticky top-[64px] z-30">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-3 flex gap-1 overflow-x-auto">
          {categories.map((c) => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${active === c ? "bg-forest text-white" : "text-ink-muted hover:text-ink hover:bg-surface"}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 bg-surface min-h-screen">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={img.id} delay={i * 30} className="break-inside-avoid mb-4">
                <button onClick={() => setLightbox(img)} className="block w-full rounded-xl overflow-hidden bg-white border border-divider shadow-sm group relative">
                  <img src={img.src} alt={img.title} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/50 transition-all flex items-end p-4">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-bold text-sm">{img.title}</p>
                      <p className="text-amber-light text-xs">{img.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[70] bg-forest-deep/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)} aria-label="Close">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl max-h-[85vh] w-full">
            <img src={lightbox.src.replace("w=600", "w=1200")} alt={lightbox.title}
              className="w-full max-h-[75vh] object-contain rounded-xl" />
            <div className="text-center mt-4">
              <p className="text-white font-bold">{lightbox.title}</p>
              <p className="text-amber-light text-sm">{lightbox.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
