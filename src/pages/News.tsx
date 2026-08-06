import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Newspaper, ArrowUpRight } from "lucide-react";
import { news } from "@/data/news";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function News() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-warm-white">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Latest News
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              Updates & Announcements
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed">
              News from BK Finance Global, plus the latest HMRC updates that matter to your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* News List */}
      <section className="py-20">
        <div className="container">
          {news.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto text-center py-16"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Newspaper className="w-7 h-7 text-gold" />
              </div>
              <h2 className="font-display font-bold text-2xl text-navy mb-3">
                No Updates Yet
              </h2>
              <p className="text-slate-text leading-relaxed">
                Check back soon for the latest from BK Finance Global and HMRC.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="max-w-3xl mx-auto space-y-6"
            >
              {news.map((item) => {
                const Wrapper = item.url ? "a" : "div";
                return (
                  <motion.div key={item.id} variants={fadeUp}>
                    <Wrapper
                      {...(item.url ? { href: item.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`block bg-white rounded-xl p-8 shadow-sm border border-border/50 transition-all duration-300 ${item.url ? "hover:shadow-lg hover:-translate-y-1" : ""}`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${item.source === "HMRC" ? "bg-navy/5 text-navy" : "bg-gold/10 text-gold"}`}>
                          {item.source}
                        </span>
                        <span className="text-xs text-slate-text">{item.date}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-navy mb-2 flex items-center gap-2">
                        {item.title}
                        {item.url && <ArrowUpRight className="w-4 h-4 shrink-0" />}
                      </h3>
                      <p className="text-slate-text text-sm leading-relaxed">
                        {item.excerpt}
                      </p>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
