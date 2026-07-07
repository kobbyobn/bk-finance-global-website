import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  BookOpen,
  Users,
  FileText,
  Calculator,
  TrendingUp,
  Shield,
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
    id: "bookkeeping",
    icon: BookOpen,
    title: "Bookkeeping Services",
    desc: "Accurate, up-to-date books to keep your business on track.",
    longDesc: "We maintain your financial records with precision, ensuring every transaction is properly categorized and reconciled. Our cloud-based approach means you always have real-time visibility into your business finances.",
    benefits: ["Monthly reconciliation", "Cloud-based accounting", "Real-time financial visibility", "Dedicated bookkeeper"],
    whoHelps: "Small businesses, freelancers, and growing companies who need reliable financial records without the overhead of an in-house team.",
  },
  {
    id: "payroll",
    icon: Users,
    title: "Payroll Services",
    desc: "Hassle-free payroll management for you and your team.",
    longDesc: "From calculating wages and deductions to filing RTI submissions with HMRC, we handle every aspect of your payroll. Your team gets paid on time, every time.",
    benefits: ["PAYE management", "RTI submissions", "Pension auto-enrolment", "Payslip generation"],
    whoHelps: "Businesses with employees who want to ensure compliance and accuracy without the complexity of managing payroll in-house.",
  },
  {
    id: "vat",
    icon: FileText,
    title: "VAT Return Preparation",
    desc: "We handle your VAT returns accurately and on time.",
    longDesc: "Never miss a VAT deadline again. We prepare and submit your VAT returns, ensuring you claim everything you're entitled to while remaining fully compliant with HMRC regulations.",
    benefits: ["Quarterly VAT returns", "MTD compliance", "VAT scheme advice", "Deadline management"],
    whoHelps: "VAT-registered businesses who want peace of mind knowing their returns are accurate and submitted on time.",
  },
  {
    id: "year-end",
    icon: Calculator,
    title: "Year End Accounts & Tax Preparation",
    desc: "Professional accounts preparation and tax filing made simple.",
    longDesc: "We prepare your annual accounts and corporation tax returns to the highest standard, ensuring compliance while identifying legitimate ways to minimise your tax liability.",
    benefits: ["Annual accounts preparation", "Corporation tax returns", "Self-assessment returns", "Tax efficiency planning"],
    whoHelps: "Limited companies, sole traders, and partnerships who need professional year-end accounts and want to minimise their tax burden legally.",
  },
  {
    id: "advisory",
    icon: TrendingUp,
    title: "Business Advisory",
    desc: "Strategic advice to help you grow and increase profits.",
    longDesc: "Go beyond the numbers. Our advisory service provides strategic insights, cash flow forecasting, and growth planning to help you make informed decisions that drive your business forward.",
    benefits: ["Cash flow forecasting", "Growth strategy", "Profit optimisation", "Business planning"],
    whoHelps: "Ambitious business owners who want a financial partner, not just an accountant — someone who helps them see the bigger picture.",
  },
  {
    id: "tax",
    icon: Shield,
    title: "Tax Planning",
    desc: "Proactive tax strategies to keep more of what you earn.",
    longDesc: "Don't just react to tax — plan for it. We develop bespoke tax strategies that legally minimise your liability, whether you're a sole trader, limited company, or property investor.",
    benefits: ["Personal tax planning", "Corporate tax strategy", "Dividend planning", "Capital gains advice"],
    whoHelps: "High-earning professionals, company directors, and property investors who want to structure their affairs tax-efficiently.",
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
              Book a free discovery call and we&apos;ll help you identify exactly what your business needs.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center px-8 py-4 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-all duration-200 active:scale-[0.97]"
            >
              Book a Free Discovery Call
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
