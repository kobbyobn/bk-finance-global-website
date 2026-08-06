import Layout from "@/components/Layout";
import CookieGate from "@/components/CookieGate";
import { motion } from "framer-motion";
import { BookOpen, FileText, Calculator, Phone, Landmark, Receipt, FileSpreadsheet, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const consultationTypes = [
  {
    id: "accounts-preparation-management",
    title: "Accounts Preparation Management",
    duration: "6 or 12 months",
    desc: "Dedicated bookkeeping, monthly budget reviews, and weekly check-ins on a 6 or 12-month term. The 12-month term also includes payroll and VAT registration.",
    icon: BookOpen,
  },
  {
    id: "business-registration",
    title: "Registering Your Business",
    duration: "One-off",
    desc: "Sole trader or limited company registration, handled from consultation through to confirmation.",
    icon: FileText,
  },
  {
    id: "vat-return",
    title: "VAT Return",
    duration: "Ongoing",
    desc: "VAT registration, quarterly returns, and full HMRC compliance handled for you.",
    icon: Receipt,
  },
  {
    id: "mtd-income-tax",
    title: "MTD Income Tax",
    duration: "Ongoing",
    desc: "Making Tax Digital for Income Tax — digital record-keeping and quarterly HMRC submissions.",
    icon: FileSpreadsheet,
  },
  {
    id: "finance-check-up",
    title: "Finance Check Up",
    duration: "One-off",
    desc: "A performance review, budget planner, and check-in session to reset your business finances.",
    icon: Calculator,
  },
  {
    id: "1-1-call",
    title: "Book a 1:1 Call",
    duration: "Consultation",
    desc: "Direct, personalised financial guidance for whatever's on your mind.",
    icon: Phone,
  },
  {
    id: "tide-account",
    title: "Open a Tide Business Account",
    duration: "Consultation",
    desc: "We'll walk you through opening a business account with our banking partner, Tide.",
    icon: Landmark,
  },
];

const WEB3FORMS_ACCESS_KEY = "a51660b9-9bdb-445b-8daa-e9bd95d5aecb";

export default function Booking() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New booking enquiry from BK Finance website");

    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Message sent! We'll get back to you shortly.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please email us directly at bkfinanceltd@gmail.com.");
      }
    } catch {
      toast.error("Something went wrong. Please email us directly at bkfinanceltd@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-warm-white">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Book a Consultation
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              Let&apos;s Talk About Your Business
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed">
              Choose the consultation type that best fits your needs. Every conversation starts with understanding your goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {consultationTypes.map((type) => (
              <motion.div
                key={type.id}
                variants={fadeUp}
                onClick={() => setSelected(type.id)}
                className={`relative bg-white rounded-xl p-8 border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                  selected === type.id
                    ? "border-gold shadow-lg scale-[1.02]"
                    : "border-border/50 hover:-translate-y-1"
                }`}
              >
                {selected === type.id && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle2 className="w-6 h-6 text-gold" />
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5">
                  <type.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-2">{type.title}</h3>
                <span className="inline-flex items-center gap-1 text-sm text-slate-text mb-4">
                  <Clock className="w-3.5 h-3.5" /> {type.duration}
                </span>
                <p className="text-slate-text text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Calendly Scheduling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h3 className="font-display font-bold text-2xl text-navy mb-2 text-center">
              Pick a Time That Works for You
            </h3>
            <p className="text-slate-text text-center mb-6">
              {selected ? `Booking: ${consultationTypes.find(t => t.id === selected)?.title}` : "Choose a slot below and we'll take it from there."}
            </p>
            <CookieGate label="Booking calendar">
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm">
                <iframe
                  src="https://calendly.com/kobby678/30min?hide_gdpr_banner=1"
                  width="100%"
                  height="700"
                  style={{ border: 0 }}
                  title="Schedule a call with BK Finance"
                />
              </div>
            </CookieGate>
          </motion.div>

          {/* Fallback Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-border/50">
              <h3 className="font-display font-bold text-2xl text-navy mb-2">
                Can&apos;t Find a Time?
              </h3>
              <p className="text-slate-text text-sm mb-6">
                Send us a message instead and we&apos;ll get back to you to arrange something that works.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                      placeholder="Smith"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Business Name</label>
                  <input
                    type="text"
                    name="business_name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                    placeholder="Your Company Ltd"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none"
                    rows={4}
                    placeholder="Tell us briefly about your business and what you need help with..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"} <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
