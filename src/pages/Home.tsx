import Layout from "@/components/Layout";
import PageSlider from "@/components/PageSlider";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, ShieldCheck, TrendingUp, UserCheck, Landmark, Eye, Lightbulb } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

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
      <section className="pt-28 pb-12 relative overflow-hidden">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(47,178,175,0.16) 0%, rgba(47,178,175,0) 70%)" }}
        />
        <div className="container relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center"
          >
            <motion.p variants={fadeUp} className="text-gold font-semibold text-sm uppercase tracking-[0.15em] mb-4">
              Assisting Businesses Beyond the Books
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-[clamp(1.75rem,3.8vw,3rem)] text-navy leading-[1.2] mb-6"
            >
              Real Numbers. Real Confidence.{" "}
              <span className="underline decoration-4 underline-offset-8" style={{ textDecorationColor: "var(--color-gold)" }}>
                Real Growth
              </span>
              !
            </motion.h1>

            <motion.div variants={fadeUp} className="mb-8">
              <PageSlider />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-slate-text text-lg mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              From bookkeeping to tax compliance, we provide the support you need to run a smarter, more profitable business.
            </motion.p>

            <motion.div variants={fadeUp} className="mb-8">
              <Link
                href="/booking"
                className="inline-flex items-center px-7 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid hover:shadow-gold-glow transition-all duration-200 active:scale-[0.97]"
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

      {/* Why Choose Us — Asymmetric with large stat callout */}
      <section className="py-12 relative">
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
                <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.15em] text-gold mb-3">Why Choose Us</motion.p>
                <motion.h2 variants={fadeUp} className="font-display font-bold text-2xl sm:text-3xl text-navy mb-6">
                  Built for Ambitious Businesses
                </motion.h2>
                <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed mb-8">
                  We combine the precision of traditional accounting with the innovation of modern fintech — so you get both reliability and growth.
                </motion.p>
              </div>

              {/* Right — features grid */}
              <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-5">
                {[
                  { icon: ShieldCheck, title: "Trusted & Reliable", desc: "Many businesses trust us with their finances. Consistent, accurate results every time." },
                  { icon: TrendingUp, title: "Growth-Focused", desc: "We don't just manage your books — we identify opportunities to grow and save." },
                  { icon: UserCheck, title: "Personal Service", desc: "Every client gets a dedicated team member who knows their business inside out." },
                  { icon: Landmark, title: "HMRC Compliant", desc: "Stay on the right side of regulations with our expert UK tax knowledge." },
                  { icon: Eye, title: "Transparent Pricing", desc: "No hidden fees. Clear, fixed-price packages tailored to your business." },
                  { icon: Lightbulb, title: "Proactive Advice", desc: "We anticipate problems before they arise and keep you informed every step." },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="group relative bg-warm-white rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border/30 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
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
      <section className="py-12 bg-warm-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="flex items-end justify-between mb-14">
              <div>
                <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.15em] text-navy/60 mb-3">Trusted by Business Owners</motion.p>
                <motion.h2 variants={fadeUp} className="font-display font-bold text-2xl sm:text-3xl text-navy">
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
                  className="bg-white rounded-xl p-8 shadow-sm border border-border/50 relative group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy rounded-2xl p-12 lg:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
            <div
              className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(47,178,175,0.25) 0%, rgba(47,178,175,0) 70%)" }}
            />
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-5 leading-tight">
                Ready to Take Control of Your Business Finances?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Book your free consultation today and let&apos;s take your business further.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center px-8 py-4 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light hover:shadow-gold-glow transition-all duration-200 active:scale-[0.97]"
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
