import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, FileText, Calculator, Phone, ArrowRight, CheckCircle2, Clock } from "lucide-react";
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
    id: "6-month-boost",
    title: "6-Month Bookkeeping Boost",
    duration: "6 months",
    desc: "Dedicated bookkeeping support, monthly budget reviews, and weekly check-ins over half a year.",
    icon: BookOpen,
  },
  {
    id: "12-month-boost",
    title: "12-Month Bookkeeping Boost",
    duration: "12 months",
    desc: "A full year of bookkeeping, plus payroll and VAT registration handled for you.",
    icon: TrendingUp,
  },
  {
    id: "business-registration",
    title: "Registering Your Business",
    duration: "One-off",
    desc: "Sole trader or limited company registration, handled from consultation through to confirmation.",
    icon: FileText,
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
];

export default function Booking() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleBook = () => {
    toast.success("Booking feature coming soon! Please contact us directly to schedule.");
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
            className="max-w-3xl"
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

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-border/50">
              <h3 className="font-display font-bold text-2xl text-navy mb-6">
                Schedule Your {selected ? consultationTypes.find(t => t.id === selected)?.title : "Consultation"}
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleBook();
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Last Name</label>
                    <input
                      type="text"
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
                    className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Business Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                    placeholder="Your Company Ltd"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Message (Optional)</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none"
                    rows={4}
                    placeholder="Tell us briefly about your business and what you need help with..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
                >
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
