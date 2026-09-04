import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router";
import { Eye, Handshake, HeartHandshake, Landmark, Lightbulb, Sprout, Star, Target } from "lucide-react";

const timeline = [
  { year: "1924", event: "Gomoa Ekroful Community Founded" },
  { year: "1957", event: "Ghana's Independence — Community joins the nation's development" },
  { year: "1975", event: "First community school established" },
  { year: "1992", event: "Formation of the Community Executive Committee" },
  { year: "2005", event: "Community Health Centre opened" },
  { year: "2015", event: "Installation of Nana Kweku Entsie II as Chief" },
  { year: "2020", event: "Community digital transformation initiative launched" },
  { year: "2026", event: "Major infrastructure development programme begins" },
];

const values = [
  { icon: Handshake, title: "Unity", desc: "Fostering togetherness across all households and families." },
  { icon: HeartHandshake, title: "Peace", desc: "Maintaining harmony and resolving conflicts constructively." },
  { icon: Sprout, title: "Development", desc: "Driving progress through infrastructure and education." },
  { icon: Eye, title: "Transparency", desc: "Open governance and accountability to every resident." },
  { icon: Landmark, title: "Heritage", desc: "Preserving and celebrating our rich cultural traditions." },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing modern solutions for community challenges." },
];

function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle: string; breadcrumb: string }) {
  return (
    <div className="relative bg-forest-deep py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, white 0, white 2px, transparent 0, transparent 30px)`,
      }} />
      <img
        src="https://images.unsplash.com/photo-1636783187659-3804c75da971?w=1920&h=600&fit=crop&auto=format"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="text-white/60 text-sm mb-4">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{breadcrumb}</span>
        </div>
        <p className="text-amber-light text-sm font-bold uppercase tracking-widest mb-3">{subtitle}</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">{title}</h1>
      </div>
    </div>
  );
}

export { PageHero };

export default function About() {
  return (
    <>
      <PageHero title="About Gomoa Ekroful" subtitle="Our Story" breadcrumb="About Us" />

      {/* About intro */}
      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-surface">
                <img
                  src="https://images.unsplash.com/photo-1568025848823-86404cd04ad1?w=800&h=600&fit=crop&auto=format"
                  alt="Gomoa Ekroful"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal>
                <p className="text-amber text-sm font-bold uppercase tracking-widest mb-3">Who We Are</p>
                <h2 className="text-4xl font-extrabold text-ink mb-5">About Gomoa Ekroful</h2>
                <p className="text-ink-muted leading-relaxed mb-4">
                  Gomoa Ekroful is a thriving community in the Central Region of Ghana, situated along the Cape Coast–Accra highway. Our community is home to over 2,485 registered residents across 645 households, united by a shared heritage and vision for a better future.
                </p>
                <p className="text-ink-muted leading-relaxed mb-4">
                  The community is governed by a blend of traditional leadership and elected representatives who work together to deliver essential services, foster development, and preserve the rich cultural identity of our people.
                </p>
                <p className="text-ink-muted leading-relaxed">
                  From road construction to education, healthcare, and digital innovation, Gomoa Ekroful is committed to creating opportunities for every resident — young and old — to thrive.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-surface">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <ScrollReveal className="text-center mb-14">
            <p className="text-amber text-sm font-bold uppercase tracking-widest mb-2">Direction</p>
            <h2 className="text-4xl font-extrabold text-ink">Mission & Vision</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-forest rounded-2xl p-10 text-white h-full">
                <Target aria-hidden="true" size={36} strokeWidth={1.8} className="mb-4 text-amber-light" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  To unite all residents of Gomoa Ekroful in building a peaceful, progressive and self-reliant community through inclusive governance, infrastructure development, and the preservation of our cultural heritage.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-amber rounded-2xl p-10 text-forest-deep h-full">
                <Star aria-hidden="true" size={36} strokeWidth={1.8} className="mb-4 text-forest-deep" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-forest-dark leading-relaxed">
                  To be a model community in Ghana — recognised for its unity, transparency, cultural pride, and sustainable development that provides every resident with dignity, opportunity, and a high quality of life.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <ScrollReveal className="text-center mb-12">
            <p className="text-amber text-sm font-bold uppercase tracking-widest mb-2">What We Stand For</p>
            <h2 className="text-4xl font-extrabold text-ink">Core Values</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
              <ScrollReveal key={v.title} delay={i * 50}>
                <div className="bg-surface rounded-xl p-6 border border-divider hover:border-forest/30 hover:shadow-md transition-all">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-bold text-ink text-lg mb-2">{v.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="history" className="py-20 bg-surface">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <ScrollReveal className="text-center mb-14">
            <p className="text-amber text-sm font-bold uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="text-4xl font-extrabold text-ink">Community Milestones</h2>
          </ScrollReveal>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-divider" />
            {timeline.map((t, i) => (
              <ScrollReveal key={t.year} delay={i * 60} className="flex gap-6 mb-8 relative">
                <div className="shrink-0 w-12 h-12 rounded-full bg-forest flex items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-amber" />
                </div>
                <div className="bg-white rounded-xl border border-divider p-5 flex-1 shadow-sm">
                  <div className="text-amber font-bold text-sm mb-1">{t.year}</div>
                  <div className="text-ink font-semibold text-sm">{t.event}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="culture" className="py-16 bg-forest">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white mb-4">Become Part of Our Story</h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Join Gomoa Ekroful's growing community of residents committed to unity, peace and development.
            </p>
            <Link to="/member-registration"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber text-forest-deep font-bold text-sm rounded-lg hover:bg-amber-light transition-colors uppercase tracking-wide">
              Register as a Member
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
