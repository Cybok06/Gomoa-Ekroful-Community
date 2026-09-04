import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router";
import ScrollReveal from "../components/ScrollReveal";
import { announcements, events, projects, leaders, news } from "../data/content";
import {
  BarChart3,
  Building2,
  CalendarDays,
  Construction,
  House,
  Landmark,
  Mail,
  Megaphone,
  UserRound,
  Users,
} from "lucide-react";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1568025848823-86404cd04ad1?w=1920&h=1080&fit=crop&auto=format",
    subtitle: "Welcome to",
    title: "Gomoa Ekroful",
    description: "Together for a united, peaceful and progressive Gomoa Ekroful.",
    primary: { label: "About Our Community", to: "/about" },
    secondary: { label: "Contact Leaders", to: "/contact" },
  },
  {
    image: "https://images.unsplash.com/photo-1670159269224-7b66ca9387f7?w=1920&h=1080&fit=crop&auto=format",
    subtitle: "Building Together",
    title: "Our Community",
    description: "Uniting every household to build resilient infrastructure and a thriving community for all.",
    primary: { label: "View Our Projects", to: "/projects" },
    secondary: { label: "Get Involved", to: "/member-registration" },
  },
  {
    image: "https://images.unsplash.com/photo-1785355805907-b95663dfb621?w=1920&h=1080&fit=crop&auto=format",
    subtitle: "Preserving Our",
    title: "Rich Heritage",
    description: "Honouring the culture, traditions and history that make Gomoa Ekroful unique.",
    primary: { label: "Discover Our Culture", to: "/about#culture" },
    secondary: { label: "View Gallery", to: "/gallery" },
  },
  {
    image: "https://images.unsplash.com/photo-1636783187659-3804c75da971?w=1920&h=1080&fit=crop&auto=format",
    subtitle: "Investing in Our",
    title: "Future",
    description: "Education, technology and youth development are at the heart of our community's growth.",
    primary: { label: "Our Vision", to: "/about#mission" },
    secondary: { label: "Youth Programs", to: "/services" },
  },
];

const quickActions = [
  { icon: UserRound, title: "Member Registration", desc: "Register and join our community.", to: "/member-registration" },
  { icon: Megaphone, title: "Announcements", desc: "Latest news and updates.", to: "/news?tab=announcements" },
  { icon: CalendarDays, title: "Events Calendar", desc: "View upcoming events.", to: "/events" },
  { icon: Landmark, title: "Leadership", desc: "Meet your leaders and representatives.", to: "/leadership" },
  { icon: Construction, title: "Development Projects", desc: "Our ongoing and completed projects.", to: "/projects" },
  { icon: Mail, title: "Contact Us", desc: "Get in touch with us.", to: "/contact" },
];

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const steps = 60;
        const increment = end / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-4xl font-extrabold text-forest tabular-nums">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

function ProgressBar({ value, visible }: { value: number; visible: boolean }) {
  return (
    <div className="h-2 bg-divider rounded-full overflow-hidden">
      <div
        className="h-full bg-forest rounded-full transition-[width] duration-[1.2s] ease-out"
        style={{ width: visible ? `${value}%` : "0%" }}
      />
    </div>
  );
}

const statusColors: Record<string, string> = {
  ONGOING: "bg-amber/15 text-amber border-amber/30",
  COMPLETED: "bg-forest/10 text-forest border-forest/20",
  PROPOSED: "bg-ink-muted/10 text-ink-muted border-ink-muted/20",
};

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [newsTab, setNewsTab] = useState<"news" | "announcements" | "notices">("news");
  const [projectsVisible, setProjectsVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((idx: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setSlide(idx);
      setTransitioning(false);
    }, 300);
  }, [transitioning]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      goTo((slide + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(t);
  }, [slide, paused, goTo]);

  useEffect(() => {
    const el = projectsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setProjectsVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const current = heroSlides[slide];
  const filteredNews = news.filter((n) => n.tab === newsTab);

  return (
    <>
      {/* ─── Hero Carousel ─── */}
      <section
        className="relative h-[90vh] min-h-[520px] max-h-[820px] overflow-hidden bg-forest-deep select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
        {/* Background images */}
        {heroSlides.map((s, i) => (
          <div key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === slide && !transitioning ? 1 : 0 }}>
            <img src={s.image} alt={s.title}
              className="w-full h-full object-cover scale-105 transition-transform duration-[8s] ease-out"
              style={{ transform: i === slide ? "scale(1)" : "scale(1.05)" }}
            />
          </div>
        ))}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 to-transparent" />

        {/* Content */}
        <div className="relative h-full max-w-[1360px] mx-auto px-6 md:px-12 flex items-center">
          <div key={slide} className="max-w-xl">
            <p className="text-amber-light text-sm font-semibold uppercase tracking-[0.2em] mb-3 animate-fade-up">
              {current.subtitle}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-5 animate-fade-up-delay-1 uppercase tracking-tight">
              {current.title}
            </h1>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 animate-fade-up-delay-2 max-w-md">
              {current.description}
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up-delay-3">
              <Link to={current.primary.to}
                className="px-7 py-3 bg-forest text-white font-bold text-sm rounded-lg hover:bg-forest-dark transition-colors border-2 border-forest hover:border-forest-dark">
                {current.primary.label}
              </Link>
              <Link to={current.secondary.to}
                className="px-7 py-3 bg-amber text-forest-deep font-bold text-sm rounded-lg hover:bg-amber-light transition-colors">
                {current.secondary.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button onClick={() => goTo((slide - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/25 transition-all"
          aria-label="Previous slide">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={() => goTo((slide + 1) % heroSlides.length)}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/25 transition-all"
          aria-label="Next slide">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`rounded-full transition-all ${i === slide ? "w-8 h-2.5 bg-amber" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ─── Quick Action Bar ─── */}
      <section className="bg-white border-b border-divider shadow-md relative z-10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {quickActions.map((a) => {
              const Icon = a.icon;
              return (
              <Link key={a.title} to={a.to}
                className="flex flex-col items-center text-center gap-2 py-6 px-3 border-r border-divider last:border-r-0 hover:bg-surface transition-all group">
                <Icon aria-hidden="true" size={24} strokeWidth={1.8} className="text-forest transition-transform group-hover:-translate-y-0.5" />
                <div>
                  <div className="font-bold text-ink text-xs uppercase tracking-wide group-hover:text-forest transition-colors">{a.title}</div>
                  <div className="text-ink-muted text-[11px] leading-tight mt-0.5 hidden md:block">{a.desc}</div>
                </div>
                <svg className="w-3.5 h-3.5 text-divider group-hover:text-amber group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Community Introduction ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-surface">
                  <img
                    src="https://images.unsplash.com/photo-1636783187659-3804c75da971?w=800&h=600&fit=crop&auto=format"
                    alt="Gomoa Ekroful Community"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-amber text-forest-deep rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-extrabold">Est.</div>
                  <div className="text-2xl font-extrabold leading-none">1924</div>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="text-amber text-sm font-bold uppercase tracking-widest mb-3">Our Community</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-ink leading-tight mb-5">
                  Welcome to<br />Gomoa Ekroful
                </h2>
                <p className="text-ink-muted leading-relaxed mb-5">
                  Gomoa Ekroful is a vibrant community in the Central Region of Ghana, united by a shared heritage, culture, and vision for a better future. We are committed to transparency, development, and active citizen participation.
                </p>
                <p className="text-ink-muted leading-relaxed mb-8">
                  Our community brings together diverse voices to address common challenges, celebrate our rich traditions, and build lasting infrastructure that will benefit generations to come.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-5 mb-8">
                {[
                  { end: 2485, suffix: "+", label: "Community Members" },
                  { end: 183, suffix: "+", label: "Registered Businesses" },
                  { end: 25, suffix: "+", label: "Development Projects" },
                  { end: 20, suffix: "+", label: "Community Leaders" },
                ].map((s) => (
                  <ScrollReveal key={s.label} className="bg-surface rounded-xl p-5 border border-divider">
                    <Counter end={s.end} suffix={s.suffix} />
                    <div className="text-sm text-ink-muted font-medium mt-1">{s.label}</div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <Link to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-white font-bold text-sm rounded-lg hover:bg-forest-dark transition-colors group">
                  Discover Our Community
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Dashboard: Announcements / Events / Projects / Stats ─── */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* Announcements */}
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-xl border border-divider shadow-sm overflow-hidden h-full flex flex-col">
                <div className="bg-forest px-5 py-3 flex items-center gap-2">
                  <Megaphone aria-hidden="true" size={20} strokeWidth={1.8} className="shrink-0 text-white" />
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide">Announcements</h3>
                </div>
                <div className="flex-1 divide-y divide-divider">
                  {announcements.slice(0, 3).map((a) => (
                    <div key={a.id} className="px-5 py-4">
                      <div className="font-semibold text-ink text-sm leading-snug mb-1">{a.title}</div>
                      <div className="text-amber text-[11px] font-medium mb-1.5">{a.date}</div>
                      <p className="text-ink-muted text-xs leading-relaxed line-clamp-2">{a.excerpt}</p>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-divider">
                  <Link to="/news?tab=announcements" className="text-forest text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all group">
                    View All Announcements
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Events */}
            <ScrollReveal delay={80}>
              <div className="bg-white rounded-xl border border-divider shadow-sm overflow-hidden h-full flex flex-col">
                <div className="bg-forest px-5 py-3 flex items-center gap-2">
                  <CalendarDays aria-hidden="true" size={20} strokeWidth={1.8} className="shrink-0 text-white" />
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide">Upcoming Events</h3>
                </div>
                <div className="flex-1 divide-y divide-divider">
                  {events.slice(0, 3).map((e) => (
                    <div key={e.id} className="flex gap-4 px-5 py-4">
                      <div className="shrink-0 w-12 text-center bg-forest rounded-lg py-2 px-1">
                        <div className="text-amber-light text-[10px] font-bold uppercase">{e.month}</div>
                        <div className="text-white text-2xl font-extrabold leading-none">{e.day}</div>
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-ink text-sm leading-snug mb-1">{e.title}</div>
                        <div className="flex items-center gap-1 text-[11px] text-ink-muted">
                          <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {e.time}
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-ink-muted mt-0.5">
                          <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {e.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-divider">
                  <Link to="/events" className="text-forest text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    View All Events
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Projects */}
            <ScrollReveal delay={160}>
              <div className="bg-white rounded-xl border border-divider shadow-sm overflow-hidden h-full flex flex-col">
                <div className="bg-forest px-5 py-3 flex items-center gap-2">
                  <Construction aria-hidden="true" size={20} strokeWidth={1.8} className="shrink-0 text-white" />
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide">Development Projects</h3>
                </div>
                <div className="flex-1 divide-y divide-divider">
                  {projects.slice(0, 2).map((p) => (
                    <div key={p.id} className="px-5 py-4">
                      <div className="flex gap-3">
                        <div className="w-16 h-14 rounded-lg overflow-hidden shrink-0 bg-surface">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-ink text-sm leading-snug mb-1 line-clamp-1">{p.title}</div>
                          <p className="text-ink-muted text-[11px] leading-relaxed line-clamp-2 mb-2">{p.description}</p>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-divider rounded-full overflow-hidden">
                              <div className="h-full bg-amber rounded-full" style={{ width: `${p.progress}%` }} />
                            </div>
                            <span className="text-[10px] font-bold text-forest shrink-0">{p.progress}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-divider">
                  <Link to="/projects" className="text-forest text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    View All Projects
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Stats */}
            <ScrollReveal delay={240}>
              <div className="bg-white rounded-xl border border-divider shadow-sm overflow-hidden h-full flex flex-col">
                <div className="bg-forest px-5 py-3 flex items-center gap-2">
                  <BarChart3 aria-hidden="true" size={20} strokeWidth={1.8} className="shrink-0 text-white" />
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide">Quick Stats</h3>
                </div>
                <div className="flex-1 divide-y divide-divider">
                  {[
                    { icon: Users, label: "Total Members", value: "2,485" },
                    { icon: UserRound, label: "Male Members", value: "1,210" },
                    { icon: UserRound, label: "Female Members", value: "1,275" },
                    { icon: House, label: "Total Households", value: "645" },
                    { icon: Building2, label: "Businesses Registered", value: "183" },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                    <div key={s.label} className="flex items-center justify-between px-5 py-3">
                      <div className="flex items-center gap-2 text-sm text-ink-muted">
                        <Icon aria-hidden="true" size={18} strokeWidth={1.8} className="shrink-0 text-forest" />
                        {s.label}
                      </div>
                      <span className="font-bold text-ink text-sm">{s.value}</span>
                    </div>
                    );
                  })}
                </div>
                <div className="px-5 py-3 border-t border-divider">
                  <Link to="/community-members" className="text-forest text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    View Full Reports
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Featured Development Projects ─── */}
      <section className="py-20 bg-white" ref={projectsRef}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-amber text-sm font-bold uppercase tracking-widest mb-2">Our Work</p>
                <h2 className="text-4xl font-extrabold text-ink">Development Projects</h2>
                <p className="text-ink-muted mt-2">Building a stronger Gomoa Ekroful together.</p>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-2 text-forest font-bold text-sm hover:gap-3 transition-all group shrink-0">
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 60}>
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
                    <div className="flex items-center gap-2 text-xs text-ink-muted mb-3">
                      <span>Started: {p.startDate}</span>
                      <span className="text-divider">•</span>
                      <span>Budget: {p.budget}</span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-ink-muted">Progress</span>
                        <span className="text-forest">{p.progress}%</span>
                      </div>
                      <ProgressBar value={p.progress} visible={projectsVisible} />
                    </div>
                    <Link to={`/projects/${p.id}`}
                      className="inline-flex items-center gap-1.5 text-forest text-xs font-bold hover:gap-2.5 transition-all group/btn">
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
        </div>
      </section>

      {/* ─── News & Announcements ─── */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-amber text-sm font-bold uppercase tracking-widest mb-2">Community Updates</p>
                <h2 className="text-4xl font-extrabold text-ink">Latest From Our Community</h2>
              </div>
              <div className="flex gap-1 bg-white rounded-lg p-1 border border-divider self-start md:self-end">
                {([["news", "Latest News"], ["announcements", "Announcements"], ["notices", "Notices"]] as const).map(([tab, label]) => (
                  <button key={tab} onClick={() => setNewsTab(tab)}
                    className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wide transition-all ${newsTab === tab ? "bg-forest text-white" : "text-ink-muted hover:text-ink"}`}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(filteredNews.length > 0 ? filteredNews : news).slice(0, 3).map((n, i) => (
              <ScrollReveal key={n.id} delay={i * 60}>
                <Link to={`/news/${n.id}`} className="block bg-white rounded-xl border border-divider shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className="aspect-[16/9] overflow-hidden bg-surface">
                    <img src={n.image} alt={n.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 bg-forest/10 text-forest rounded-full uppercase tracking-wide">{n.category}</span>
                      <span className="text-xs text-ink-muted">{n.date}</span>
                    </div>
                    <h3 className="font-bold text-ink text-base leading-snug mb-2 group-hover:text-forest transition-colors line-clamp-2">{n.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed line-clamp-2 mb-4">{n.excerpt}</p>
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

          <ScrollReveal className="text-center mt-10">
            <Link to="/news" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-forest text-forest font-bold text-sm rounded-lg hover:bg-forest hover:text-white transition-all">
              View All News & Announcements
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Upcoming Events ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-amber text-sm font-bold uppercase tracking-widest mb-2">Calendar</p>
                <h2 className="text-4xl font-extrabold text-ink">Upcoming Events</h2>
              </div>
              <Link to="/events" className="inline-flex items-center gap-2 text-forest font-bold text-sm hover:gap-3 transition-all shrink-0">
                View All Events
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {events.map((e, i) => (
              <ScrollReveal key={e.id} delay={i * 60}>
                <div className="flex gap-5 bg-white rounded-xl border border-divider shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                  <div className="shrink-0 w-16 h-16 bg-forest rounded-xl flex flex-col items-center justify-center">
                    <div className="text-amber-light text-[10px] font-bold uppercase">{e.month}</div>
                    <div className="text-white text-2xl font-extrabold leading-none">{e.day}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 ${
                      e.category === "Culture" ? "bg-amber/15 text-amber" : "bg-forest/10 text-forest"
                    }`}>{e.category}</span>
                    <h3 className="font-bold text-ink text-sm mb-2 group-hover:text-forest transition-colors">{e.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-ink-muted mb-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {e.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {e.location}
                      </span>
                    </div>
                    <Link to={`/events/${e.id}`} className="text-forest text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all w-fit">
                      View Details
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Community Leadership ─── */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <ScrollReveal className="text-center mb-12">
            <p className="text-amber text-sm font-bold uppercase tracking-widest mb-2">Our Leaders</p>
            <h2 className="text-4xl font-extrabold text-ink mb-3">Meet Our Leadership</h2>
            <p className="text-ink-muted max-w-xl mx-auto">Dedicated individuals committed to the development, unity and welfare of Gomoa Ekroful.</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {leaders.map((l, i) => (
              <ScrollReveal key={l.id} delay={i * 50}>
                <Link to={`/leadership/${l.id}`}
                  className="bg-white rounded-xl border border-divider shadow-sm overflow-hidden text-center hover:shadow-md hover:-translate-y-1 transition-all group block">
                  <div className="aspect-square overflow-hidden bg-surface">
                    <img src={l.image} alt={l.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-ink text-xs leading-snug mb-1 group-hover:text-forest transition-colors line-clamp-2">{l.name}</h3>
                    <p className="text-ink-muted text-[10px] leading-tight">{l.position}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <Link to="/leadership" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-forest text-forest font-bold text-sm rounded-lg hover:bg-forest hover:text-white transition-all">
              View All Leaders
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Gallery Preview ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-amber text-sm font-bold uppercase tracking-widest mb-2">Visual Stories</p>
                <h2 className="text-4xl font-extrabold text-ink">Community Gallery</h2>
              </div>
              <Link to="/gallery" className="inline-flex items-center gap-2 text-forest font-bold text-sm hover:gap-3 transition-all shrink-0">
                View Full Gallery
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: "https://images.unsplash.com/photo-1568025848823-86404cd04ad1?w=600&h=400&fit=crop&auto=format", title: "Aerial View", span: "col-span-2 row-span-2" },
                { src: "https://images.unsplash.com/photo-1785355805907-b95663dfb621?w=400&h=300&fit=crop&auto=format", title: "Cultural Festival" },
                { src: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=400&h=300&fit=crop&auto=format", title: "Road Project" },
                { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop&auto=format", title: "Town Hall" },
                { src: "https://images.unsplash.com/photo-1779950657706-a40aefeedabb?w=400&h=300&fit=crop&auto=format", title: "Leadership" },
              ].map((img) => (
                <Link key={img.title} to="/gallery" className={`${img.span ?? ""} rounded-xl overflow-hidden bg-surface aspect-video relative group`}>
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/50 transition-all flex items-center justify-center">
                    <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">{img.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 bg-forest relative overflow-hidden">
        {/* Subtle Kente-inspired pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, white 0, white 2px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, white 0, white 2px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px"
        }} />
        <div className="relative max-w-[1360px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <p className="text-amber-light text-sm font-bold uppercase tracking-widest mb-4">Join Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Let's Build a Better<br />Gomoa Ekroful Together!
            </h2>
            <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10">
              Your participation helps us create a peaceful, united and progressive community for everyone.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/member-registration"
                className="px-8 py-3.5 bg-amber text-forest-deep font-bold text-sm rounded-lg hover:bg-amber-light transition-colors uppercase tracking-wide">
                Join the Community
              </Link>
              <Link to="/contact"
                className="px-8 py-3.5 border-2 border-white text-white font-bold text-sm rounded-lg hover:bg-white hover:text-forest-deep transition-all uppercase tracking-wide">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
