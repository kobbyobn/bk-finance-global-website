import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-10 bg-warm-white">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
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

      {/* Banner Image */}
      <section className="pb-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg aspect-[21/9]"
          >
            <img
              src="/team-brainstorm.jpg"
              alt="A team of business professionals collaborating around laptops"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-text text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-warm-white">
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
