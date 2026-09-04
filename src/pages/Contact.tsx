import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { PageHero } from "./About";
import { Clock, Mail, MapPin } from "lucide-react";

const subjects = [
  "General Enquiry",
  "Report an Issue",
  "Development Project Enquiry",
  "Member Registration",
  "Business Registration",
  "Leadership Contact",
  "Media & Press",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email is required";
    if (!form.subject) e.subject = "Please select a subject";
    if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSent(true);
  };

  const set = (field: string, val: string) => {
    setForm((f) => ({ ...f, [field]: val }));
    setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in Touch" breadcrumb="Contact" />

      <section className="py-16 bg-surface">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info sidebar */}
            <div className="space-y-5">
              <ScrollReveal>
                <div className="bg-forest rounded-2xl p-8 text-white">
                  <h3 className="font-bold text-lg mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    {[
                      { icon: MapPin, label: "Address", value: "Gomoa Ekroful, Central Region, Ghana" },
                      { icon: Mail, label: "Email", value: "gomoaekrofulcommunity001@gmail.com" },
                      { icon: Clock, label: "Office Hours", value: "Mon–Fri: 8:00 AM – 5:00 PM" },
                    ].map((c) => {
                      const Icon = c.icon;
                      return (
                      <div key={c.label} className="flex gap-4">
                        <Icon aria-hidden="true" size={22} strokeWidth={1.8} className="shrink-0 text-amber-light" />
                        <div>
                          <div className="text-amber-light text-xs font-bold uppercase tracking-wide mb-0.5">{c.label}</div>
                          <div className="text-white/85 text-sm">{c.value}</div>
                        </div>
                      </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <div className="bg-white rounded-2xl border border-divider shadow-sm p-6">
                  <h3 className="font-bold text-ink text-sm uppercase tracking-wide mb-4">FAQ</h3>
                  <div className="space-y-4 text-sm">
                    {[
                      { q: "How do I register as a member?", a: "Visit our Member Registration page or come to the community centre." },
                      { q: "How do I report a community issue?", a: "Use our Report an Issue form online or call the office." },
                    ].map((faq) => (
                      <div key={faq.q}>
                        <p className="font-semibold text-ink mb-1">{faq.q}</p>
                        <p className="text-ink-muted">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-divider shadow-sm p-8 md:p-10">
                  {sent ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-ink mb-2">Message Sent!</h2>
                      <p className="text-ink-muted">Thank you for reaching out. We will respond to your message within 2 business days.</p>
                      <button onClick={() => setSent(false)} className="mt-6 px-6 py-2.5 border border-divider text-ink-muted text-sm font-medium rounded-lg hover:border-forest hover:text-forest transition-colors">
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-ink mb-2">Send a Message</h2>
                      <p className="text-ink-muted text-sm mb-8">Fill in the form below and our team will get back to you as soon as possible.</p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-ink uppercase tracking-wide mb-1.5">Full Name *</label>
                            <input
                              value={form.name} onChange={(e) => set("name", e.target.value)}
                              placeholder="Your full name"
                              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all ${errors.name ? "border-red-400" : "border-divider focus:border-forest"}`}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-ink uppercase tracking-wide mb-1.5">Email Address *</label>
                            <input
                              type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
                              placeholder="gomoaekrofulcommunity001@gmail.com"
                              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all ${errors.email ? "border-red-400" : "border-divider focus:border-forest"}`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                          </div>
                        </div>
                        <div>
                          <div>
                            <label className="block text-xs font-bold text-ink uppercase tracking-wide mb-1.5">Subject *</label>
                            <select
                              value={form.subject} onChange={(e) => set("subject", e.target.value)}
                              className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all cursor-pointer ${errors.subject ? "border-red-400 text-ink" : "border-divider text-ink focus:border-forest"} ${!form.subject ? "text-ink-muted/50" : ""}`}>
                              <option value="">Select a subject</option>
                              {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-ink uppercase tracking-wide mb-1.5">Message *</label>
                          <textarea
                            rows={6} value={form.message} onChange={(e) => set("message", e.target.value)}
                            placeholder="Write your message here..."
                            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all resize-none ${errors.message ? "border-red-400" : "border-divider focus:border-forest"}`}
                          />
                          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>
                        <button type="submit"
                          className="w-full py-3.5 bg-forest text-white font-bold text-sm rounded-xl hover:bg-forest-dark transition-colors uppercase tracking-wide">
                          Send Message
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
