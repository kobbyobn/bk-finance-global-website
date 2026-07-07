import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Play, Tag, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const upcoming = [
  {
    title: "Tax Planning Strategies for 2025/26",
    date: "August 15, 2025",
    time: "7:00 PM GMT",
    price: "£47",
    spots: 12,
    desc: "Learn proven strategies to legally minimise your tax bill and keep more of what you earn.",
  },
  {
    title: "Cash Flow Mastery for SMEs",
    date: "September 5, 2025",
    time: "6:30 PM GMT",
    price: "£37",
    spots: 20,
    desc: "Master the art of cash flow management and never worry about running out of money again.",
  },
  {
    title: "Scaling Your Business Finances",
    date: "September 20, 2025",
    time: "7:00 PM GMT",
    price: "£57",
    spots: 8,
    desc: "Financial frameworks for businesses ready to scale from 6 to 7 figures.",
  },
];

const recordings = [
  { title: "VAT Essentials Workshop", duration: "1h 45m", attendees: 89 },
  { title: "Year-End Accounts Prep", duration: "2h 10m", attendees: 124 },
  { title: "Dividend vs Salary Strategy", duration: "1h 30m", attendees: 67 },
  { title: "Bookkeeping Best Practices", duration: "1h 20m", attendees: 156 },
];

const bundles = [
  { name: "Single Masterclass", price: "£37-57", features: ["1 live session", "Recording access", "Q&A included", "Workbook"] },
  { name: "Quarterly Bundle", price: "£97", features: ["3 masterclasses", "All recordings", "Priority Q&A", "Bonus resources", "Community access"], popular: true },
  { name: "Annual Pass", price: "£297", features: ["All masterclasses", "Full recording library", "1-on-1 follow-up", "All resources", "VIP community", "Early access"] },
];

export default function Masterclasses() {
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
              Masterclasses
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              Expert-Led Financial Workshops
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed">
              Live, interactive sessions designed to give you actionable financial knowledge. Learn from our experts and transform how you manage your business finances.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl text-navy mb-10">
              Upcoming Events
            </motion.h2>
            <motion.div variants={stagger} className="space-y-6">
              {upcoming.map((event) => (
                <motion.div
                  key={event.title}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-6 lg:p-8 border border-border/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
                    <div>
                      <h3 className="font-display font-bold text-xl text-navy mb-3">{event.title}</h3>
                      <p className="text-slate-text text-sm mb-4">{event.desc}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-text">
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gold" /> {event.date}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gold" /> {event.time}</span>
                        <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-gold" /> {event.spots} spots left</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-display font-bold text-2xl text-navy">{event.price}</span>
                      <button
                        onClick={() => toast.info("Registration coming soon!")}
                        className="px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97] whitespace-nowrap"
                      >
                        Reserve Spot
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Previous Recordings */}
      <section className="py-20 bg-warm-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl text-navy mb-10">
              Previous Recordings
            </motion.h2>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recordings.map((rec) => (
                <motion.div
                  key={rec.title}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-6 border border-border/50 hover:shadow-md transition-all duration-300 cursor-pointer group"
                  onClick={() => toast.info("Recording access coming soon!")}
                >
                  <div className="w-full aspect-video bg-navy/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy/10 transition-colors">
                    <Play className="w-8 h-8 text-navy/40 group-hover:text-gold transition-colors" />
                  </div>
                  <h4 className="font-display font-semibold text-navy text-sm mb-2">{rec.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-slate-text">
                    <span>{rec.duration}</span>
                    <span>&middot;</span>
                    <span>{rec.attendees} attended</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl text-navy mb-4">
              Choose Your Plan
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-text text-lg">
              Invest in your financial education with flexible options.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {bundles.map((bundle) => (
              <motion.div
                key={bundle.name}
                variants={fadeUp}
                className={`rounded-xl p-8 border-2 transition-all duration-300 ${
                  bundle.popular
                    ? "border-gold bg-white shadow-lg scale-[1.02] relative"
                    : "border-border/50 bg-white hover:shadow-md"
                }`}
              >
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <h3 className="font-display font-bold text-lg text-navy mb-2">{bundle.name}</h3>
                <p className="font-display font-extrabold text-3xl text-navy mb-6">{bundle.price}</p>
                <ul className="space-y-3 mb-8">
                  {bundle.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-navy/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => toast.info("Purchase flow coming soon!")}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 active:scale-[0.97] ${
                    bundle.popular
                      ? "bg-navy text-white hover:bg-navy-mid"
                      : "bg-warm-white text-navy hover:bg-navy hover:text-white"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
