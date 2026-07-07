import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  BookOpen,
  TrendingUp,
  FileText,
  Calculator,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    id: "6-month-boost",
    icon: BookOpen,
    title: "6-Month Bookkeeping Boost",
    desc: "Hands-on bookkeeping, budgeting, and goal-setting for half a year.",
    longDesc: "A 6-month package for business owners who want dedicated support with their books, budgets, and goals. You get regular 1-1 consultations, a budget planner reviewed monthly by your accountant, and full management of your bookkeeping, backed by weekly check-ins so nothing falls through the cracks.",
    benefits: ["1-1 consultations", "Budget planner, reviewed monthly", "Weekly check-ins", "Full bookkeeping management", "Monthly performance review", "Business goals & targets", "Meeting debrief notes after every session"],
    whoHelps: "Business owners who want a dedicated accountant managing their books and finances over the next six months.",
  },
  {
    id: "12-month-boost",
    icon: TrendingUp,
    title: "12-Month Bookkeeping Boost",
    desc: "A full year of bookkeeping, payroll, and VAT support.",
    longDesc: "Everything in the 6-Month Bookkeeping Boost, extended across a full year, plus payroll and VAT registration handled for you. Built for businesses ready to commit to a longer-term financial partnership.",
    benefits: ["Everything in the 6-Month Boost", "Payroll: payslips & PAYE submissions", "VAT registration preparation & submission", "12 months of goals and targets", "Monthly performance reviews"],
    whoHelps: "Growing businesses that want a full year of bookkeeping, payroll, and VAT support in one package.",
  },
  {
    id: "business-registration",
    icon: FileText,
    title: "Registering Your Business",
    desc: "Get your company or self-assessment registered, done for you.",
    longDesc: "Setting up as a sole trader or registering a limited company in the UK, handled from start to finish — from an initial consultation through documentation, submission, and confirmation.",
    benefits: ["Expert guidance on the right structure", "Fast registration, no red tape", "Tailored to sole traders or limited companies", "Support after registration"],
    whoHelps: "New entrepreneurs setting up their business for the first time in the UK.",
  },
  {
    id: "finance-check-up",
    icon: Calculator,
    title: "Finance Check Up",
    desc: "A one-off deep dive into your numbers and next steps.",
    longDesc: "A one-off review of your business finances: a performance review, a budget planner, and clear goals to work towards, with a personal check-in session to walk through it all.",
    benefits: ["Full performance review", "Budget planner", "Clear financial goals", "One-off check-in session", "Meeting debrief notes"],
    whoHelps: "Business owners who want an outside perspective on their numbers without committing to an ongoing package.",
  },
  {
    id: "1-1-call",
    icon: Phone,
    title: "Book a 1:1 Call",
    desc: "Direct, personalised financial guidance whenever you need it.",
    longDesc: "A direct one-to-one call for personalised financial guidance — ask questions, talk through challenges, and get practical advice specific to your business.",
    benefits: ["Personalised advice", "Financial Q&A", "Business support", "Includes a free budget template"],
    whoHelps: "Anyone who wants direct, personal guidance without signing up for a package.",
  },
];

export default function Services() {
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
              Our Services
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              Financial Services That Drive Growth
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed">
              From day-to-day bookkeeping to strategic advisory, we provide comprehensive financial services designed to help your business thrive.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <motion.div variants={fadeUp}>
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy mb-4">
                      {service.title}
                    </h2>
                    <p className="text-slate-text text-lg leading-relaxed mb-6">
                      {service.longDesc}
                    </p>
                    <p className="text-sm text-navy/60 italic mb-6">
                      <strong>Who it helps:</strong> {service.whoHelps}
                    </p>
                    <Link
                      href="/booking"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>

                <motion.div
                  variants={fadeUp}
                  className={`bg-warm-white rounded-2xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <h4 className="font-display font-semibold text-navy mb-6">Key Benefits</h4>
                  <div className="space-y-4">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                        <span className="text-navy/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy rounded-2xl p-10 lg:p-16 text-center"
          >
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Book a 1:1 call and we&apos;ll help you identify exactly what your business needs.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center px-8 py-4 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-all duration-200 active:scale-[0.97]"
            >
              Book a 1:1 Call
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
