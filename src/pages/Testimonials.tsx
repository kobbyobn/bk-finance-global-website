import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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

      {/* Video Testimonial */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">Watch Client Stories</p>
            <h2 className="font-display font-bold text-2xl text-navy mb-8">Hear It Straight From Our Clients</h2>
            <div className="rounded-2xl overflow-hidden shadow-sm max-w-[540px] mx-auto">
              <iframe
                src="https://www.instagram.com/p/DYzRjIxjAd-/embed"
                width="100%"
                height="780"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Client video testimonial on Instagram"
              />
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

    </Layout>
  );
}
