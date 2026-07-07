import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Star, ThumbsUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const reviews = [
  { name: "Alex Thompson", rating: 5, date: "2 weeks ago", text: "Exceptional service from start to finish. They took the stress out of my year-end accounts and found savings I didn't know existed.", helpful: 12 },
  { name: "Rebecca Chen", rating: 5, date: "1 month ago", text: "Professional, responsive, and genuinely invested in my business success. The monthly reports are clear and actionable.", helpful: 8 },
  { name: "Marcus Williams", rating: 5, date: "1 month ago", text: "Switched from a big firm and the difference is night and day. Personal service, better advice, and more affordable.", helpful: 15 },
  { name: "Sophie Anderson", rating: 5, date: "2 months ago", text: "They helped me set up my limited company and have been managing everything since. Couldn't ask for better support.", helpful: 6 },
  { name: "Daniel Okafor", rating: 5, date: "2 months ago", text: "The payroll service is flawless. My team gets paid on time every month and I never have to worry about HMRC compliance.", helpful: 9 },
  { name: "Emma Richardson", rating: 4, date: "3 months ago", text: "Great advisory service. They helped me understand my numbers and make better decisions for growth. Highly recommend.", helpful: 4 },
  { name: "Raj Patel", rating: 5, date: "3 months ago", text: "BK Finance Global transformed our financial processes. Everything is now streamlined and we have complete visibility.", helpful: 11 },
  { name: "Charlotte Hughes", rating: 5, date: "4 months ago", text: "The best accountants I've ever worked with. They're proactive, not reactive — always thinking ahead for my business.", helpful: 7 },
];

export default function Reviews() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

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
              Reviews
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              What People Are Saying
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed">
              Read genuine reviews from our clients on Google. We&apos;re proud of the relationships we build.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 flex flex-col sm:flex-row items-center gap-8 max-w-2xl"
          >
            <div className="text-center">
              <p className="font-display font-bold text-5xl text-navy">{avgRating}</p>
              <div className="flex gap-0.5 justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-slate-text mt-2">Based on {reviews.length} reviews</p>
            </div>
            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = reviews.filter((r) => r.rating === rating).length;
                const pct = (count / reviews.length) * 100;
                return (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm text-navy w-3">{rating}</span>
                    <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                    <div className="flex-1 h-2 bg-border/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gold rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs text-slate-text w-6">{count}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 pb-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.name}
                variants={fadeUp}
                className="bg-white rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-navy">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{review.name}</p>
                      <p className="text-xs text-slate-text">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
                <p className="text-navy/80 text-sm leading-relaxed mb-4">{review.text}</p>
                <div className="flex items-center gap-2 text-xs text-slate-text">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{review.helpful} found this helpful</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
