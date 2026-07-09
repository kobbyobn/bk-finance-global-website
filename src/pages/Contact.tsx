import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare, ChevronDown } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const faqs = [
  { q: "How much do your services cost?", a: "Pricing depends on which service fits your business. Book a 1:1 call and we'll give you a clear quote." },
  { q: "Do I need to be based in the UK?", a: "We primarily serve UK-based businesses, but we can work with international clients who have UK tax obligations or want to set up a UK company." },
  { q: "How quickly can you get started?", a: "We can typically onboard new clients within 1-2 weeks. For urgent matters, we offer expedited onboarding." },
  { q: "What accounting software do you use?", a: "We're proficient in Xero, QuickBooks, FreeAgent, and Sage. We'll recommend the best fit for your business during our initial consultation." },
  { q: "Can I switch from my current accountant?", a: "Absolutely. We handle the entire transition process, including contacting your previous accountant and transferring all records seamlessly." },
  { q: "Do you offer one-off services?", a: "Yes! Alongside our ongoing Bookkeeping Boost packages, we offer one-off services including business registration and a Finance Check Up." },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              Contact Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              Let&apos;s Start a Conversation
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed">
              Have a question or ready to get started? We&apos;d love to hear from you. Reach out and we&apos;ll respond within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-border/50">
                <h3 className="font-display font-bold text-2xl text-navy mb-6">Send Us a Message</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    toast.success("Message sent! We'll get back to you within 24 hours.");
                  }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none"
                      rows={5}
                      placeholder="Tell us about your enquiry..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
                  >
                    Send Message <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeUp}>
                <h3 className="font-display font-bold text-2xl text-navy mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy mb-1">Email</p>
                      <a href="mailto:bkfinanceltd@gmail.com" className="text-slate-text hover:text-gold transition-colors">
                        bkfinanceltd@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy mb-1">Phone</p>
                      <a href="tel:+447478729672" className="text-slate-text hover:text-gold transition-colors">
                        +44 7478 729672
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy mb-1">Location</p>
                      <p className="text-slate-text">London, United Kingdom</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy mb-1">Business Hours</p>
                      <p className="text-slate-text">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social */}
              <motion.div variants={fadeUp} className="bg-warm-white rounded-xl p-6">
                <h4 className="font-display font-semibold text-navy mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="https://instagram.com/bkfinanceglobal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center hover:bg-gold transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://linkedin.com/company/bkfinanceglobal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center hover:bg-gold transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://twitter.com/bkfinanceglobal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center hover:bg-gold transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-warm-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl text-navy mb-10 text-center">
              Frequently Asked Questions
            </motion.h2>
            <motion.div variants={stagger} className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white rounded-xl border border-border/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-navy pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-text shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-text text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
