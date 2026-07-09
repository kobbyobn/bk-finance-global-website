import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, Eye, Heart, Award, ArrowRight, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const values = [
  { icon: Target, title: "Precision", desc: "Every number matters. We deliver meticulous accuracy in everything we do." },
  { icon: Eye, title: "Transparency", desc: "No hidden fees, no jargon. We communicate clearly and honestly." },
  { icon: Heart, title: "Client-First", desc: "Your success is our success. We go above and beyond for every client." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest professional standards in the industry." },
];

const trustPoints = [
  "Supporting businesses across the UK",
  "Real, hands-on financial support",
  "Consistently excellent client feedback",
];

export default function About() {
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
              About Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              Assisting Businesses Beyond the Books
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed">
              BK Finance Global was founded with a simple mission: to provide ambitious businesses with the premium financial support they deserve — without the corporate price tag or impersonal service.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl text-navy mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-text leading-relaxed">
                <p>
                  We started BK Finance Global because we saw a gap in the market. Too many small businesses were either overpaying for impersonal service from large firms, or settling for basic compliance work that didn&apos;t help them grow.
                </p>
                <p>
                  We believed there was a better way — combining the expertise and professionalism of a top-tier firm with the personal attention and genuine care of a boutique practice.
                </p>
                <p>
                  Today, we support many businesses across the UK, from solo entrepreneurs to scaling companies. Our team brings together decades of experience in accounting, tax planning, and business advisory.
                </p>
                <p>
                  But what truly sets us apart isn&apos;t our technical expertise — it&apos;s our commitment to understanding each client&apos;s unique goals and helping them achieve more than they thought possible.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/founder.png"
                alt="Founder of BK Finance Global"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-10 bg-navy">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-wrap justify-center gap-x-10 gap-y-4"
          >
            {trustPoints.map((point) => (
              <motion.div key={point} variants={fadeUp} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <p className="text-white font-semibold text-sm">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl text-navy mb-12 text-center">
              Our Values
            </motion.h2>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display font-semibold text-navy mb-2">{v.title}</h3>
                  <p className="text-slate-text text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl text-navy mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-slate-text text-lg mb-8 max-w-xl mx-auto">
              Join the many businesses who trust BK Finance Global with their financial future.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
            >
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
