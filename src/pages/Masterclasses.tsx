import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Masterclasses() {
  return (
    <Layout>
      <section className="pt-32 pb-24 min-h-[60vh] flex items-center">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Masterclasses
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              Coming Soon
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed mb-8">
              We&apos;re putting together a series of live financial workshops. Details will be announced here soon.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="mailto:bkfinanceltd@gmail.com?subject=Masterclasses"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
            >
              <Mail className="w-4 h-4" /> Email Us for More Information
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
