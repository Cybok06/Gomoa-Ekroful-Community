import { useState } from "react";
import { Link } from "react-router";
import { PageHero } from "./About";
import { CircleCheck, TriangleAlert } from "lucide-react";

const issueTypes = [
  "Road / Infrastructure",
  "Water Supply",
  "Electricity / Lighting",
  "Sanitation & Waste",
  "Environmental Hazard",
  "Security Concern",
  "Community Facility",
  "Other",
];

export default function ReportIssue() {
  const [form, setForm] = useState({ type: "", location: "", description: "", name: "", urgent: false });
  const [submitted, setSubmitted] = useState(false);
  const set = (f: string, v: string | boolean) => setForm((p) => ({ ...p, [f]: v }));

  const inputCls = "w-full px-4 py-2.5 rounded-lg border border-divider text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all";
  const labelCls = "block text-xs font-bold text-ink uppercase tracking-wide mb-1.5";

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-surface px-6">
        <div className="bg-white rounded-2xl border border-divider shadow-sm p-12 text-center max-w-lg w-full">
          <div className="w-16 h-16 rounded-full bg-amber/15 flex items-center justify-center mx-auto mb-4">
            <CircleCheck aria-hidden="true" size={30} strokeWidth={1.8} className="text-forest" />
          </div>
          <h2 className="text-2xl font-bold text-ink mb-2">Issue Reported</h2>
          <p className="text-ink-muted mb-2">Your report has been received and assigned a tracking number.</p>
          <div className="bg-surface rounded-xl p-4 mb-8">
            <div className="text-xs text-ink-muted mb-1">Reference Number</div>
            <div className="text-xl font-bold text-forest">GE-2026-{Math.floor(Math.random() * 9000 + 1000)}</div>
          </div>
          <Link to="/" className="inline-flex items-center gap-2 px-8 py-3 bg-forest text-white font-bold text-sm rounded-xl hover:bg-forest-dark transition-colors">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero title="Report an Issue" subtitle="Community Support" breadcrumb="Report an Issue" />
      <section className="py-16 bg-surface">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-amber/10 border border-amber/30 rounded-xl p-5 mb-8 flex gap-3">
            <TriangleAlert aria-hidden="true" size={24} strokeWidth={1.8} className="shrink-0 text-amber" />
            <div>
              <p className="font-bold text-ink text-sm mb-1">Emergency?</p>
              <p className="text-ink-muted text-sm">For life-threatening emergencies, contact the National Emergency Services immediately.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-divider shadow-sm p-8">
            <h2 className="font-bold text-ink text-xl mb-2">Submit an Issue Report</h2>
            <p className="text-ink-muted text-sm mb-8">Help us improve our community by reporting infrastructure problems, safety hazards, and other concerns.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
              <div>
                <label className={labelCls}>Issue Type *</label>
                <select value={form.type} onChange={(e) => set("type", e.target.value)} className={`${inputCls} cursor-pointer`} required>
                  <option value="">Select issue type</option>
                  {issueTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Location / Description of Location *</label>
                <input value={form.location} onChange={(e) => set("location", e.target.value)} placeholder="Where is the issue located?" className={inputCls} required />
              </div>
              <div>
                <label className={labelCls}>Issue Description *</label>
                <textarea rows={5} value={form.description} onChange={(e) => set("description", e.target.value)} placeholder="Describe the issue in detail..." className={`${inputCls} resize-none`} required />
              </div>
              <div className="flex items-center gap-3 bg-surface rounded-lg p-4 border border-divider cursor-pointer"
                onClick={() => set("urgent", !form.urgent)}>
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${form.urgent ? "bg-amber border-amber" : "border-divider"}`}>
                  {form.urgent && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>}
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">Mark as Urgent</div>
                  <div className="text-xs text-ink-muted">This issue requires immediate attention</div>
                </div>
              </div>
              <div className="border-t border-divider pt-5">
                <p className="text-xs font-bold text-ink uppercase tracking-wide mb-4">Your Contact Details (Optional)</p>
                <div>
                  <div>
                    <label className={labelCls}>Your Name</label>
                    <input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Full name" className={inputCls} />
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full py-3.5 bg-forest text-white font-bold text-sm rounded-xl hover:bg-forest-dark transition-colors uppercase tracking-wide">
                Submit Report
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
