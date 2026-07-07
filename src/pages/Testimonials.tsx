import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const testimonials = [
  {
    quote: "Friendly, professional, and explains everything in plain English. BK Finance has helped me navigate the financial aspect of my business with confidence. I highly recommend for any small business owner!",
    name: "Eluid Yorke",
    role: "Director, Pneuma Audio",
    rating: 5,
    type: "written",
  },
  {
    quote: "BK Finance has allowed a space where I can focus on the expansion of my business finances. Amazing customer service and no questions are off limits.",
    name: "Alicia Kabina",
    role: "Director, LocsByAK",
    rating: 5,
    type: "written",
  },
  {
    quote: "Working with BK Finance has been a true blessing to Capitaolondon. Their professionalism, integrity, and attention to detail have brought clarity and peace to our financial processes. We are grateful to partner with a service that consistently delivers excellence, allowing us to focus more effectively on our core work.",
    name: "Sophia Capitao",
    role: "Director, Capitaolondon",
    rating: 5,
    type: "written",
  },
  {
    quote: "I have had an excellent experience working with BK Finance. They are professional, knowledgeable, and always responsive whenever I need advice or support. Their attention to detail and ability to explain complex financial matters in a clear and straightforward way has given me real confidence in managing my accounts. What stands out most is their reliability and proactive approach — they consistently ensure everything is completed accurately and on time.",
    name: "Taliyah Marrett",
    role: "Director, WithTaliyahMarrett",
    rating: 5,
    type: "written",
  },
];

const outcomes = [
  { before: "Disorganised books, missed deadlines", after: "Clean records, always compliant", client: "Construction firm" },
  { before: "Overpaying tax by £12k+", after: "Tax-efficient structure saving £15k/year", client: "E-commerce brand" },
  { before: "No visibility on cash flow", after: "Monthly forecasts and growth plan", client: "SaaS startup" },
];

export default function Testimonials() {
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
              Testimonials
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              Trusted by Businesses Like Yours
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed">
              Don&apos;t just take our word for it — hear from the business owners we&apos;ve helped grow, save, and succeed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonial Placeholder */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-navy rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto flex items-center justify-center cursor-pointer group"
            onClick={() => toast("Video testimonials coming soon!")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-navy-mid to-navy" />
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                <Play className="w-8 h-8 text-gold fill-gold" />
              </div>
              <p className="text-white font-display font-semibold text-lg">Watch Client Stories</p>
              <p className="text-white/60 text-sm mt-1">Video testimonials coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="bg-white rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-gold/30 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-navy/80 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-navy">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{t.name}</p>
                    <p className="text-slate-text text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 bg-warm-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl text-navy mb-12 text-center">
              Real Results, Real Impact
            </motion.h2>
            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8">
              {outcomes.map((o) => (
                <motion.div
                  key={o.client}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-8 border border-border/50"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-4">{o.client}</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-text uppercase tracking-wider mb-1">Before</p>
                      <p className="text-navy/70 text-sm line-through">{o.before}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gold uppercase tracking-wider mb-1">After</p>
                      <p className="text-navy font-medium text-sm">{o.after}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
