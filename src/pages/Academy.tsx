import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { GraduationCap, BookOpen, Video, Download, Users, Lock, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const features = [
  { icon: Video, title: "Live Sessions", desc: "Weekly live workshops with Q&A" },
  { icon: BookOpen, title: "Course Library", desc: "Self-paced modules on key topics" },
  { icon: Download, title: "Resources", desc: "Templates, guides, and checklists" },
  { icon: Users, title: "Community", desc: "Connect with fellow business owners" },
];

const courses = [
  { title: "Tax Essentials for Business Owners", modules: 8, duration: "4 hours", level: "Beginner" },
  { title: "Cash Flow Mastery", modules: 6, duration: "3 hours", level: "Intermediate" },
  { title: "Scaling Your Finances", modules: 10, duration: "5 hours", level: "Advanced" },
  { title: "VAT Demystified", modules: 5, duration: "2.5 hours", level: "Beginner" },
  { title: "Payroll & Employment Law", modules: 7, duration: "3.5 hours", level: "Intermediate" },
  { title: "Financial Planning for Growth", modules: 9, duration: "4.5 hours", level: "Advanced" },
];

export default function Academy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy text-white">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-gold" />
              </div>
              <span className="font-display font-bold text-xl">BOA Academy</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Master Your Business Finances
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed mb-8">
              The BOA Academy is your premium learning platform for financial education. Gain the knowledge and confidence to make smarter financial decisions.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <button
                onClick={() => toast.info("Portal login coming soon!")}
                className="inline-flex items-center px-7 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-all duration-200 active:scale-[0.97]"
              >
                Access Portal <Lock className="w-4 h-4 ml-2" />
              </button>
              <Link
                href="/masterclasses"
                className="inline-flex items-center px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                View Masterclasses
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display font-semibold text-navy mb-2">{f.title}</h3>
                <p className="text-slate-text text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-warm-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl text-navy mb-3">
              Course Library
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-text text-lg mb-10">
              Structured learning paths designed for business owners at every stage.
            </motion.p>

            <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <motion.div
                  key={course.title}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-6 border border-border/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      course.level === "Beginner" ? "bg-green-100 text-green-700" :
                      course.level === "Intermediate" ? "bg-blue-100 text-blue-700" :
                      "bg-purple-100 text-purple-700"
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-navy mb-3">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-text">
                    <span>{course.modules} modules</span>
                    <span>&middot;</span>
                    <span>{course.duration}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl text-navy mb-4">
              Ready to Level Up Your Financial Knowledge?
            </h2>
            <p className="text-slate-text text-lg mb-8 max-w-xl mx-auto">
              Join the many business owners who are taking control of their finances through BOA Academy.
            </p>
            <button
              onClick={() => toast.info("Portal registration coming soon!")}
              className="inline-flex items-center px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
            >
              Join BOA Academy <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
