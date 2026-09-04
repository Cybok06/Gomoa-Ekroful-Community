import { useState } from "react";
import { Link } from "react-router";
import { PageHero } from "./About";
import { Check } from "lucide-react";

export default function MemberRegistration() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "", lastName: "", dob: "", gender: "", email: "",
    address: "", occupation: "", household: "", ghana_card: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (f: string, v: string) => setForm((p) => ({ ...p, [f]: v }));

  const inputCls = "w-full px-4 py-2.5 rounded-lg border border-divider text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all";
  const labelCls = "block text-xs font-bold text-ink uppercase tracking-wide mb-1.5";

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-surface px-6">
        <div className="bg-white rounded-2xl border border-divider shadow-sm p-12 text-center max-w-lg w-full">
          <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-ink mb-2">Registration Submitted!</h2>
          <p className="text-ink-muted mb-2">Thank you, {form.firstName}. Your registration has been received.</p>
          <p className="text-ink-muted text-sm mb-8">You will receive a confirmation SMS/email within 2 business days after verification by the community secretariat.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-8 py-3 bg-forest text-white font-bold text-sm rounded-xl hover:bg-forest-dark transition-colors">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero title="Member Registration" subtitle="Join Our Community" breadcrumb="Member Registration" />

      <section className="py-16 bg-surface">
        <div className="max-w-2xl mx-auto px-6">
          {/* Steps */}
          <div className="flex items-center gap-0 mb-10">
            {[1, 2, 3].map((s, i) => (
              <div key={s} className="flex items-center flex-1 last:flex-none">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${s < step ? "bg-forest text-white" : s === step ? "bg-forest text-white ring-4 ring-forest/20" : "bg-divider text-ink-muted"}`}>
                  {s < step ? <Check aria-hidden="true" size={17} strokeWidth={2} /> : s}
                </div>
                <div className="text-xs font-medium ml-2 mr-auto hidden sm:block text-ink-muted">
                  {s === 1 ? "Personal Info" : s === 2 ? "Contact & Address" : "Review"}
                </div>
                {i < 2 && <div className={`flex-1 h-0.5 mx-3 ${s < step ? "bg-forest" : "bg-divider"}`} />}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-divider shadow-sm p-8">
            {step === 1 && (
              <>
                <h2 className="font-bold text-ink text-xl mb-6">Personal Information</h2>
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>First Name *</label>
                      <input value={form.firstName} onChange={(e) => set("firstName", e.target.value)} placeholder="First name" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Last Name *</label>
                      <input value={form.lastName} onChange={(e) => set("lastName", e.target.value)} placeholder="Last name" className={inputCls} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Date of Birth *</label>
                      <input type="date" value={form.dob} onChange={(e) => set("dob", e.target.value)} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Gender *</label>
                      <select value={form.gender} onChange={(e) => set("gender", e.target.value)} className={`${inputCls} cursor-pointer`}>
                        <option value="">Select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Ghana Card / National ID</label>
                    <input value={form.ghana_card} onChange={(e) => set("ghana_card", e.target.value)} placeholder="GHA-XXXXXXXXXX-X" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Occupation</label>
                    <input value={form.occupation} onChange={(e) => set("occupation", e.target.value)} placeholder="Your occupation" className={inputCls} />
                  </div>
                </div>
                <button onClick={() => setStep(2)}
                  className="mt-8 w-full py-3 bg-forest text-white font-bold text-sm rounded-xl hover:bg-forest-dark transition-colors">
                  Next: Contact & Address
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="font-bold text-ink text-xl mb-6">Contact & Address</h2>
                <div className="space-y-5">
                  <div>
                    <label className={labelCls}>Email Address</label>
                    <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="gomoaekrofulcommunity001@gmail.com" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Residential Address *</label>
                    <textarea rows={3} value={form.address} onChange={(e) => set("address", e.target.value)} placeholder="Your address in Gomoa Ekroful" className={`${inputCls} resize-none`} />
                  </div>
                  <div>
                    <label className={labelCls}>Household Head Name</label>
                    <input value={form.household} onChange={(e) => set("household", e.target.value)} placeholder="Head of household (if applicable)" className={inputCls} />
                  </div>
                </div>
                <div className="flex gap-3 mt-8">
                  <button onClick={() => setStep(1)} className="flex-1 py-3 border border-divider text-ink font-bold text-sm rounded-xl hover:border-forest hover:text-forest transition-colors">Back</button>
                  <button onClick={() => setStep(3)} className="flex-1 py-3 bg-forest text-white font-bold text-sm rounded-xl hover:bg-forest-dark transition-colors">Review Application</button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="font-bold text-ink text-xl mb-6">Review & Submit</h2>
                <div className="bg-surface rounded-xl p-5 space-y-3 mb-6 text-sm">
                  {[
                    ["Full Name", `${form.firstName} ${form.lastName}`],
                    ["Date of Birth", form.dob || "—"],
                    ["Gender", form.gender || "—"],
                    ["Email", form.email || "—"],
                    ["Occupation", form.occupation || "—"],
                    ["Address", form.address || "—"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between border-b border-divider pb-2 last:border-0">
                      <span className="text-ink-muted">{label}</span>
                      <span className="font-medium text-ink text-right max-w-[60%]">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-ink-muted text-xs mb-6">
                  By submitting this form, you confirm that all information provided is accurate and you agree to the community's membership terms and conditions.
                </p>
                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="flex-1 py-3 border border-divider text-ink font-bold text-sm rounded-xl hover:border-forest hover:text-forest transition-colors">Edit</button>
                  <button onClick={() => setSubmitted(true)} className="flex-1 py-3 bg-forest text-white font-bold text-sm rounded-xl hover:bg-forest-dark transition-colors">Submit Registration</button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
