import { useState } from "react";
import { Link } from "react-router";
import { PageHero } from "./About";
import { Building2 } from "lucide-react";

export default function BusinessRegistration() {
  const [form, setForm] = useState({ name: "", type: "", owner: "", email: "", address: "", description: "" });
  const [submitted, setSubmitted] = useState(false);
  const set = (f: string, v: string) => setForm((p) => ({ ...p, [f]: v }));

  const inputCls = "w-full px-4 py-2.5 rounded-lg border border-divider text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all";
  const labelCls = "block text-xs font-bold text-ink uppercase tracking-wide mb-1.5";

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-surface px-6">
        <div className="bg-white rounded-2xl border border-divider shadow-sm p-12 text-center max-w-lg w-full">
          <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
            <Building2 aria-hidden="true" size={30} strokeWidth={1.8} className="text-forest" />
          </div>
          <h2 className="text-2xl font-bold text-ink mb-2">Business Registered!</h2>
          <p className="text-ink-muted mb-8">Your business "{form.name}" has been submitted for verification. You will be contacted within 5 business days.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-8 py-3 bg-forest text-white font-bold text-sm rounded-xl hover:bg-forest-dark transition-colors">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero title="Business Registration" subtitle="Register Your Business" breadcrumb="Business Registration" />
      <section className="py-16 bg-surface">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-divider shadow-sm p-8">
            <h2 className="font-bold text-ink text-xl mb-2">Business Information</h2>
            <p className="text-ink-muted text-sm mb-8">Register your business with Gomoa Ekroful Community for official recognition and access to community business support programmes.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
              <div>
                <label className={labelCls}>Business Name *</label>
                <input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your business name" className={inputCls} required />
              </div>
              <div>
                <label className={labelCls}>Business Type *</label>
                <select value={form.type} onChange={(e) => set("type", e.target.value)} className={`${inputCls} cursor-pointer`} required>
                  <option value="">Select business type</option>
                  <option>Retail / Trading</option>
                  <option>Food & Beverage</option>
                  <option>Agriculture</option>
                  <option>Construction & Real Estate</option>
                  <option>Services</option>
                  <option>Technology</option>
                  <option>Education</option>
                  <option>Healthcare</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Owner / Proprietor Name *</label>
                <input value={form.owner} onChange={(e) => set("owner", e.target.value)} placeholder="Full name of owner" className={inputCls} required />
              </div>
              <div>
                <label className={labelCls}>Email</label>
                <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="gomoaekrofulcommunity001@gmail.com" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Business Address *</label>
                <input value={form.address} onChange={(e) => set("address", e.target.value)} placeholder="Location in Gomoa Ekroful" className={inputCls} required />
              </div>
              <div>
                <label className={labelCls}>Business Description</label>
                <textarea rows={4} value={form.description} onChange={(e) => set("description", e.target.value)} placeholder="Brief description of your business and services..." className={`${inputCls} resize-none`} />
              </div>
              <button type="submit" className="w-full py-3.5 bg-forest text-white font-bold text-sm rounded-xl hover:bg-forest-dark transition-colors uppercase tracking-wide">
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
