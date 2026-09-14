import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import NotFound from "@/pages/NotFound";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const service = services.find((s) => s.id === params?.slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <Layout>
      <section className="pt-28 pb-12 bg-warm-white">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" /> All Services
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 mx-auto">
              <service.icon className="w-7 h-7 text-gold" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight mb-6">
              {service.title}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed mb-6">
              {service.longDesc}
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm text-navy/60 italic mb-8">
              <strong>Who it helps:</strong> {service.whoHelps}
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl bg-warm-white rounded-2xl p-8 lg:p-10"
          >
            <h2 className="font-display font-semibold text-xl text-navy mb-6">Key Benefits</h2>
            <div className="space-y-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-navy/80">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
              Have Questions or Need Guidance?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Get in touch and we&apos;ll help you identify exactly what your business needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-all duration-200 active:scale-[0.97]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
