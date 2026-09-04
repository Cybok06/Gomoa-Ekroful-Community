import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface px-6">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-extrabold text-divider mb-4">404</div>
        <div className="w-16 h-1 bg-amber rounded-full mx-auto mb-8" />
        <h1 className="text-3xl font-extrabold text-ink mb-4">Page Not Found</h1>
        <p className="text-ink-muted mb-10 leading-relaxed">
          The page you are looking for may have been moved, renamed, or does not exist. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/"
            className="px-8 py-3 bg-forest text-white font-bold text-sm rounded-xl hover:bg-forest-dark transition-colors">
            Go to Homepage
          </Link>
          <Link to="/contact"
            className="px-8 py-3 border-2 border-forest text-forest font-bold text-sm rounded-xl hover:bg-forest hover:text-white transition-all">
            Contact Us
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
          {[
            { label: "About Us", to: "/about" },
            { label: "Leadership", to: "/leadership" },
            { label: "Projects", to: "/projects" },
            { label: "News", to: "/news" },
            { label: "Events", to: "/events" },
            { label: "Gallery", to: "/gallery" },
          ].map((l) => (
            <Link key={l.label} to={l.to}
              className="text-ink-muted hover:text-forest transition-colors font-medium">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
