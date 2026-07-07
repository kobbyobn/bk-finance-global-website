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
  Star,
  CheckCircle2,
  Phone,
  ClipboardCheck,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const services = [
  { icon: BookOpen, title: "6-Month Bookkeeping Boost", desc: "Hands-on bookkeeping, budgeting, and goal-setting for half a year.", href: "/services#6-month-boost" },
  { icon: TrendingUp, title: "12-Month Bookkeeping Boost", desc: "A full year of bookkeeping, payroll, and VAT support.", href: "/services#12-month-boost" },
  { icon: FileText, title: "Registering Your Business", desc: "Get your company or self-assessment registered, done for you.", href: "/services#business-registration" },
  { icon: Calculator, title: "Finance Check Up", desc: "A one-off deep dive into your numbers and next steps.", href: "/services#finance-check-up" },
  { icon: Phone, title: "Book a 1:1 Call", desc: "Direct, personalised financial guidance whenever you need it.", href: "/services#1-1-call" },
];

const steps = [
  { icon: Phone, num: "01", title: "Book a Call", desc: "Choose a time that works for you." },
  { icon: ClipboardCheck, num: "02", title: "We Review", desc: "We assess your business and finances." },
  { icon: Lightbulb, num: "03", title: "We Recommend", desc: "A tailored plan to save you time and money." },
  { icon: HeartHandshake, num: "04", title: "We Support", desc: "We handle the numbers so you can grow." },
];

const testimonials = [
  {
    quote: "Friendly, professional, and explains everything in plain English. BK Finance has helped me navigate the financial aspect of my business with confidence.",
    name: "Eluid Yorke",
    role: "Director, Pneuma Audio",
  },
  {
    quote: "BK Finance has allowed a space where I can focus on the expansion of my business finances. Amazing customer service and no questions are off limits.",
    name: "Alicia Kabina",
    role: "Director, LocsByAK",
  },
  {
    quote: "Working with BK Finance has been a true blessing to Capitaolondon. Their professionalism, integrity, and attention to detail have brought clarity and peace to our financial processes.",
    name: "Sophia Capitao",
    role: "Director, Capitaolondon",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section — Simple, editorial single column */}
      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} className="text-gold font-semibold text-sm uppercase tracking-[0.15em] mb-4">
              Assisting Businesses Beyond the Books
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold text-[clamp(2.25rem,4.5vw,3.75rem)] text-navy leading-[1.15] mb-8"
            >
              Stop guessing with your{" "}
              <span className="underline decoration-4 underline-offset-8" style={{ textDecorationColor: "var(--color-gold)" }}>
                business finances
              </span>
              .
            </motion.h1>

            <motion.div variants={fadeUp} className="rounded-xl overflow-hidden mb-8 max-w-sm">
              <img
                src="/founder.png"
                alt="Founder of BK Finance Global"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-slate-text text-lg mb-8 leading-relaxed"
            >
              From bookkeeping to tax compliance, we provide the support you need to run a smarter, more profitable business.
            </motion.p>

            <motion.div variants={fadeUp} className="mb-8">
              <Link
                href="/booking"
                className="inline-flex items-center px-7 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
              >
                Book a Free Consultation
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/services" className="text-sm font-semibold text-navy hover:text-gold transition-colors underline underline-offset-4">
                See our services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services — Asymmetric layout with gold accent line */}
      <section className="py-24 bg-warm-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="flex items-end justify-between mb-14">
              <div>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-[2px] bg-gold" />
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-navy/60">How We Can Help</p>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl text-navy">
                  Comprehensive Financial Services
                </motion.h2>
              </div>
              <motion.div variants={fadeUp} className="hidden md:block">
                <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors">
                  View All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-11 h-11 rounded-lg bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                    <service.icon className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-navy text-sm mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-text text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-gold transition-colors"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works — Full navy panel with editorial layout */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gold/30" />
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-gold" />
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">How It Works</p>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                From Chaos to Clarity in Four Steps
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed mb-8">
                We make the process effortless so you can focus on what matters — growing your business.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  href="/booking"
                  className="inline-flex items-center px-7 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-all duration-200 active:scale-[0.97]"
                >
                  Start With Step 1 <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-6"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  className="flex items-start gap-5 group"
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full border-2 border-gold/40 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all">
                      <span className="font-display font-bold text-gold text-sm">{step.num}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-6 bg-gold/30" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h4 className="font-display font-semibold text-white mb-1 text-lg">
                      {step.title}
                    </h4>
                    <p className="text-white/50 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — Asymmetric with large stat callout */}
      <section className="py-24 relative">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
              {/* Left — sticky headline */}
              <div className="lg:sticky lg:top-32">
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-[2px] bg-gold" />
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Why Choose Us</p>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl text-navy mb-6">
                  Built for Ambitious Businesses
                </motion.h2>
                <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed mb-8">
                  We combine the precision of traditional accounting with the innovation of modern fintech — so you get both reliability and growth.
                </motion.p>
                {/* Large stat */}
                <motion.div variants={fadeUp} className="bg-navy rounded-xl p-6 inline-block">
                  <p className="font-display font-extrabold text-4xl text-gold mb-1">98%</p>
                  <p className="text-white/70 text-sm">Client Retention Rate</p>
                </motion.div>
              </div>

              {/* Right — features grid */}
              <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-5">
                {[
                  { icon: Shield, title: "Trusted & Reliable", desc: "Hundreds of businesses trust us with their finances. Consistent, accurate results every time." },
                  { icon: TrendingUp, title: "Growth-Focused", desc: "We don't just manage your books — we identify opportunities to grow and save." },
                  { icon: Users, title: "Personal Service", desc: "Every client gets a dedicated team member who knows their business inside out." },
                  { icon: CheckCircle2, title: "HMRC Compliant", desc: "Stay on the right side of regulations with our expert UK tax knowledge." },
                  { icon: Calculator, title: "Transparent Pricing", desc: "No hidden fees. Clear, fixed-price packages tailored to your business." },
                  { icon: Lightbulb, title: "Proactive Advice", desc: "We anticipate problems before they arise and keep you informed every step." },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="bg-warm-white rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-border/30"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-display font-semibold text-navy text-base mb-2">{item.title}</h3>
                    <p className="text-slate-text text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials — Editorial with large quote */}
      <section className="py-24 bg-warm-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="flex items-end justify-between mb-14">
              <div>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-[2px] bg-gold" />
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-navy/60">Trusted by Business Owners</p>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl sm:text-4xl text-navy">
                  What Our Clients Say
                </motion.h2>
              </div>
              <motion.div variants={fadeUp} className="hidden md:block">
                <Link href="/testimonials" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors">
                  All Testimonials <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-8 shadow-sm border border-border/50 relative group hover:shadow-md transition-all duration-300"
                >
                  <div className="absolute top-0 left-8 w-8 h-0.5 bg-gold" />
                  <div className="flex gap-0.5 mb-5 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-navy/80 text-sm leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-navy">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{t.name}</p>
                      <p className="text-slate-text text-xs">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA — Bold, confident */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy rounded-2xl p-12 lg:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
                Ready to Take Control of Your Business Finances?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Book your free consultation today and let&apos;s take your business further.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center px-8 py-4 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-all duration-200 active:scale-[0.97]"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
