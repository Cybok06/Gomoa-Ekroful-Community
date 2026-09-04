import { Link } from "react-router";
import { useState } from "react";
import { Heart } from "lucide-react";

const quickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Leadership", path: "/leadership" },
  { label: "Projects", path: "/projects" },
  { label: "Events", path: "/events" },
  { label: "Gallery", path: "/gallery" },
  { label: "News", path: "/news" },
];

const serviceLinks = [
  { label: "Member Registration", path: "/member-registration" },
  { label: "Business Registration", path: "/business-registration" },
  { label: "Report an Issue", path: "/report-issue" },
  { label: "Community Documents", path: "/documents" },
  { label: "Contact Leadership", path: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-forest-deep text-white">
      {/* Newsletter band */}
      <div className="bg-forest border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="text-center md:text-left shrink-0">
              <h3 className="text-lg font-bold tracking-wide mb-1">Stay Connected With Gomoa Ekroful</h3>
              <p className="text-white/70 text-sm">Subscribe for community news, announcements and updates.</p>
            </div>
            {subscribed ? (
              <div className="flex-1 flex items-center gap-2 text-amber-light font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex-1 flex flex-col sm:flex-row gap-3 w-full md:max-w-xl">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-amber focus:bg-white/15 transition-all"
                />
                <button type="submit"
                  className="px-6 py-2.5 bg-amber text-forest-deep font-bold text-sm rounded-lg hover:bg-amber-light transition-colors shrink-0 uppercase tracking-wide">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 – Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/brand/gomoa-ekroful-logo.png"
                alt="Gomoa Ekroful Community logo"
                width="52"
                height="52"
                loading="lazy"
                className="h-[52px] w-[52px] shrink-0 rounded-full object-contain ring-1 ring-white/20 shadow-sm"
              />
              <div className="leading-tight">
                <div className="font-bold text-sm uppercase tracking-wide">Gomoa Ekroful</div>
                <div className="font-bold text-sm uppercase tracking-wide">Community</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              A united, peaceful and progressive community in the Central Region of Ghana. Together we build a better tomorrow.
            </p>
            <div className="flex gap-2">
              {["f", "𝕏", "ig", "▶"].map((icon, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-amber hover:text-forest-deep transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 – Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-amber-light">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path}
                    className="flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors group">
                    <svg className="w-3 h-3 text-amber group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" fill="none" />
                    </svg>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-amber-light">Community Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path}
                    className="flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors group">
                    <svg className="w-3 h-3 text-amber group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" fill="none" />
                    </svg>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-amber-light">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-white/65">
                <svg className="w-4 h-4 text-amber mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Gomoa Ekroful, Central Region, Ghana</span>
              </li>
              <li>
                <a href="mailto:gomoaekrofulcommunity001@gmail.com" className="flex items-center gap-3 text-sm text-white/65 hover:text-white transition-colors">
                  <svg className="w-4 h-4 text-amber shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  gomoaekrofulcommunity001@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/65">
                <svg className="w-4 h-4 text-amber mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon–Fri: 8:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>© 2026 Gomoa Ekroful Community. All Rights Reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <span className="hover:text-white transition-colors cursor-pointer">Sitemap</span>
          </div>
          <span className="inline-flex items-center gap-1.5">
            Designed with <Heart aria-hidden="true" size={13} strokeWidth={1.8} className="text-amber" /> for Gomoa Ekroful
          </span>
        </div>
      </div>
    </footer>
  );
}
