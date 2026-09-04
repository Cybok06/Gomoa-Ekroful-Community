import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/about",
    children: [
      { label: "About Gomoa Ekroful", path: "/about" },
      { label: "Our History", path: "/about#history" },
      { label: "Our Culture", path: "/about#culture" },
      { label: "Vision & Mission", path: "/about#mission" },
      { label: "Community Profile", path: "/about#profile" },
    ],
  },
  {
    label: "Leadership",
    path: "/leadership",
    children: [
      { label: "Traditional Leadership", path: "/leadership?filter=traditional" },
      { label: "Community Executives", path: "/leadership?filter=executive" },
      { label: "Assembly Representatives", path: "/leadership?filter=assembly" },
      { label: "Committees", path: "/leadership?filter=committees" },
    ],
  },
  { label: "Community Members", path: "/community-members" },
  {
    label: "Projects",
    path: "/projects",
    children: [
      { label: "Ongoing Projects", path: "/projects?status=ongoing" },
      { label: "Completed Projects", path: "/projects?status=completed" },
      { label: "Proposed Projects", path: "/projects?status=proposed" },
    ],
  },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Member Registration", path: "/member-registration" },
      { label: "Business Registration", path: "/business-registration" },
      { label: "Community Requests", path: "/services" },
      { label: "Report an Issue", path: "/report-issue" },
      { label: "Documents & Forms", path: "/documents" },
    ],
  },
  {
    label: "News & Events",
    path: "/news",
    children: [
      { label: "Latest News", path: "/news" },
      { label: "Announcements", path: "/news?tab=announcements" },
      { label: "Upcoming Events", path: "/events" },
      { label: "Community Notices", path: "/news?tab=notices" },
    ],
  },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path.split("?")[0]);
  };

  return (
    <>
      {/* Top info bar */}
      <div className="bg-forest-deep text-white text-xs hidden md:block">
        <div className="max-w-[1360px] mx-auto px-12 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="mailto:gomoaekrofulcommunity001@gmail.com" className="flex items-center gap-1.5 hover:text-amber-light transition-colors">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              gomoaekrofulcommunity001@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/60 text-xs">Follow Us:</span>
            {[
              { label: "Facebook", icon: "f" },
              { label: "Twitter", icon: "𝕏" },
              { label: "Instagram", icon: "ig" },
              { label: "YouTube", icon: "▶" },
            ].map((s) => (
              <a key={s.label} href="#" aria-label={s.label}
                className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-amber hover:text-forest-deep transition-all">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm border-b border-divider"}`}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[72px] lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              aria-label="Gomoa Ekroful Community — Home"
              className="group flex items-center gap-3 shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-4"
            >
              <img
                src="/brand/gomoa-ekroful-logo.png"
                alt="Gomoa Ekroful Community logo"
                width="64"
                height="64"
                className="h-14 w-14 lg:h-16 lg:w-16 shrink-0 rounded-full object-contain ring-1 ring-forest/20 shadow-sm transition-transform duration-300 group-hover:scale-[1.04]"
              />
              <div className="block leading-tight">
                <div className="font-bold text-ink text-[11px] sm:text-[13px] md:text-sm tracking-wide uppercase leading-none">
                  Gomoa Ekroful
                </div>
                <div className="font-bold text-ink text-[11px] sm:text-[13px] md:text-sm tracking-wide uppercase leading-none mt-0.5">
                  Community
                </div>
                <div className="hidden sm:block text-[9px] text-ink-muted tracking-widest mt-0.5">
                  Unity • Peace • Development
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div key={item.label} className="relative"
                  onMouseEnter={() => item.children ? handleMouseEnter(item.label) : undefined}
                  onMouseLeave={item.children ? handleMouseLeave : undefined}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-0.5 px-3 py-2 text-[12.5px] font-semibold tracking-wide uppercase transition-colors rounded-md ${
                      isActive(item.path)
                        ? "text-forest"
                        : "text-ink hover:text-forest"
                    }`}>
                    {item.label}
                    {item.children && (
                      <svg className={`w-3 h-3 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {isActive(item.path) && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber rounded-full" />
                    )}
                  </Link>

                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-1 z-50">
                      <div className="bg-white rounded-lg shadow-xl border border-divider py-1.5 min-w-[220px] animate-fade-in">
                        {item.children.map((child) => (
                          <Link key={child.label} to={child.path}
                            className="flex items-center gap-2 px-4 py-2.5 text-[12.5px] font-medium text-ink hover:bg-surface hover:text-forest transition-colors group">
                            <span className="w-1.5 h-1.5 rounded-full bg-divider group-hover:bg-amber transition-colors shrink-0" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden p-2 rounded-md text-ink hover:bg-surface transition-colors"
              aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-white animate-slide-in-right overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-divider bg-forest">
              <span className="font-bold text-white text-sm uppercase tracking-wide">Menu</span>
              <button onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="py-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-5 py-3 text-sm font-semibold text-ink uppercase tracking-wide hover:bg-surface transition-colors">
                        {item.label}
                        <svg className={`w-4 h-4 transition-transform text-ink-muted ${mobileExpanded === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="bg-surface border-y border-divider">
                          {item.children.map((child) => (
                            <Link key={child.label} to={child.path}
                              className="flex items-center gap-2 pl-8 pr-5 py-2.5 text-sm text-ink-muted hover:text-forest hover:bg-white transition-colors">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to={item.path}
                      className="flex items-center px-5 py-3 text-sm font-semibold text-ink uppercase tracking-wide hover:bg-surface hover:text-forest transition-colors">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="p-5 border-t border-divider mt-2">
              <a href="mailto:gomoaekrofulcommunity001@gmail.com" className="flex items-center gap-2 text-sm text-ink-muted mb-2">
                <svg className="w-4 h-4 shrink-0 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                gomoaekrofulcommunity001@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
