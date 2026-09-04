import { useParams, Link } from "react-router";
import { events } from "../data/content";
import { CalendarDays, Clock, MapPin, Tag } from "lucide-react";

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id)) ?? events[0];

  return (
    <>
      <div className="relative bg-forest-deep py-20">
        <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="text-white/60 text-sm mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/events" className="hover:text-white">Events</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{event.title}</span>
          </div>
          <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 ${
            event.category === "Culture" ? "bg-amber/30 text-amber-light" : "bg-white/20 text-white"
          }`}>{event.category}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">{event.title}</h1>
        </div>
      </div>

      <section className="py-16 bg-surface">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                <img src={event.image} alt={event.title} className="w-full aspect-video object-cover" />
              </div>
              <div className="bg-white rounded-2xl border border-divider shadow-sm p-8">
                <h2 className="font-bold text-ink text-xl mb-4">About This Event</h2>
                <p className="text-ink-muted leading-relaxed mb-6">{event.description}</p>
                <p className="text-ink-muted leading-relaxed">
                  All community members are warmly invited to attend and participate. This event is organised by the Gomoa Ekroful Community Executive Committee in partnership with local stakeholders.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-divider shadow-sm p-6">
                <h3 className="font-bold text-ink text-sm uppercase tracking-wide mb-4 border-b border-divider pb-3">Event Details</h3>
                {[
                  { icon: CalendarDays, label: "Date", value: `${event.month} ${event.day}, 2026` },
                  { icon: Clock, label: "Time", value: event.time },
                  { icon: MapPin, label: "Location", value: event.location },
                  { icon: Tag, label: "Category", value: event.category },
                ].map((d) => {
                  const Icon = d.icon;
                  return (
                  <div key={d.label} className="flex items-start gap-3 py-3 border-b border-divider last:border-0">
                    <Icon aria-hidden="true" size={18} strokeWidth={1.8} className="mt-0.5 shrink-0 text-forest" />
                    <div>
                      <div className="text-xs text-ink-muted">{d.label}</div>
                      <div className="text-sm font-semibold text-ink">{d.value}</div>
                    </div>
                  </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3">
                <button className="w-full py-3 bg-forest text-white font-bold text-sm rounded-xl hover:bg-forest-dark transition-colors">
                  Add to Calendar
                </button>
                <Link to="/contact"
                  className="block text-center py-3 border-2 border-forest text-forest font-bold text-sm rounded-xl hover:bg-forest hover:text-white transition-all">
                  Contact Organiser
                </Link>
                <Link to="/events"
                  className="flex items-center gap-2 text-forest text-sm font-bold hover:gap-3 transition-all justify-center mt-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
