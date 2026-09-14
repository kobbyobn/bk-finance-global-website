import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, Handshake } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const partners = [
  {
    name: "Tide Banking",
    desc: "We've partnered with Tide to offer our clients seamless business banking that integrates directly with their accounting. Open an account and enjoy exclusive benefits.",
    benefits: ["Free business account", "Integrated invoicing", "Automatic bookkeeping sync", "Cashback rewards"],
    cta: "Book a Call to Open a Tide Account",
    href: "/booking",
  },
  {
    name: "BOA Academy",
    desc: "Our educational platform designed to empower business owners with financial literacy. Access courses, workshops, and resources to take control of your finances.",
    benefits: ["Self-paced courses", "Live workshops", "Downloadable resources", "Community access"],
    cta: "Explore BOA Academy",
    href: "/academy",
  },
  {
    name: "Future Affiliates",
    desc: "We're always looking for strategic partnerships that benefit our clients. If you offer a product or service that complements our mission, let's talk.",
    benefits: ["Revenue sharing", "Co-marketing opportunities", "Client referrals", "Brand alignment"],
    cta: "Become a Partner",
    href: "/contact",
  },
];

export default function Partnerships() {
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
              Partnerships
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              Strategic Partners for Your Growth
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed">
              We collaborate with industry-leading brands to bring you exclusive benefits, tools, and opportunities that accelerate your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-12"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                        <Handshake className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="font-display font-bold text-2xl text-navy">{partner.name}</h3>
                    </div>
                    <p className="text-slate-text leading-relaxed mb-6">{partner.desc}</p>
                    {partner.href.startsWith("/") ? (
                      <Link
                        href={partner.href}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
                      >
                        {partner.cta} <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <a
                        href={partner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
                      >
                        {partner.cta} <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="bg-warm-white rounded-xl p-6">
                    <h4 className="font-display font-semibold text-navy text-sm uppercase tracking-wider mb-4">
                      Partner Benefits
                    </h4>
                    <ul className="space-y-3">
                      {partner.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm text-navy/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="py-8 bg-warm-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs text-slate-text leading-relaxed">
              <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. This means we may earn a commission if you sign up through our links, at no additional cost to you. We only partner with brands we genuinely believe will benefit our clients.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
