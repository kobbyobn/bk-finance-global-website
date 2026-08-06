import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Terms() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-warm-white">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-extrabold text-4xl sm:text-5xl text-navy leading-tight mb-6">
              Terms of Service
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed">
              Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-10 text-slate-text leading-relaxed"
          >
            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">1. About These Terms</h2>
              <p>
                These Terms of Service govern your use of the BK Finance Global website and the services we provide. By using our website or engaging our services, you agree to these terms. If you don&apos;t agree, please don&apos;t use our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">2. Our Services</h2>
              <p>
                We provide bookkeeping, business registration, financial check-ups, and advisory consultations as described on our Services pages. The specific scope, deliverables, and pricing for any engagement will be confirmed with you directly before work begins &mdash; nothing on this website constitutes a binding quote or offer until agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">3. Not Financial Advice</h2>
              <p>
                General information on this website (including blog-style or educational content) is provided for informational purposes only and does not constitute formal financial, tax, or legal advice. Formal advice is only given as part of a direct client engagement, tailored to your specific circumstances.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">4. Client Responsibilities</h2>
              <p>
                To deliver our services accurately and on time, we rely on you to provide complete, accurate, and timely information and documentation. We are not responsible for errors, delays, or compliance issues arising from incomplete or inaccurate information provided to us.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">5. Fees and Payment</h2>
              <p>
                Fees for our services will be agreed with you before work begins. Payment terms will be set out at the point of engagement. Late or non-payment may result in a pause of ongoing services until resolved.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">6. Cancellations</h2>
              <p>
                You may cancel a booked consultation or ongoing engagement in line with the notice terms agreed at the start of that engagement. Where no specific notice period has been agreed, we ask for reasonable advance notice to avoid disruption to scheduling.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">7. Limitation of Liability</h2>
              <p>
                We provide our services with reasonable skill and care, but we do not guarantee specific financial outcomes. To the extent permitted by law, BK Finance Global is not liable for indirect or consequential losses arising from the use of our website or services, except where liability cannot legally be excluded (for example, in cases of negligence causing death or personal injury, or fraud).
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">8. Confidentiality</h2>
              <p>
                We treat all client information as confidential and will not disclose it to third parties except as necessary to deliver our services, as required by law, or with your consent. See our <a href="/privacy-policy" className="text-navy underline hover:text-gold transition-colors">Privacy Policy</a> for more detail on how we handle personal data.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">9. Intellectual Property</h2>
              <p>
                All content on this website &mdash; including text, graphics, and branding &mdash; belongs to BK Finance Global unless otherwise stated, and may not be reproduced without our permission.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">10. Changes to These Terms</h2>
              <p>
                We may update these terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">11. Governing Law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">12. Contact</h2>
              <p>
                Questions about these terms? Reach us at <a href="mailto:bkfinanceltd@gmail.com" className="text-navy underline hover:text-gold transition-colors">bkfinanceltd@gmail.com</a> or <a href="tel:+447478729672" className="text-navy underline hover:text-gold transition-colors">+44 7478 729672</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
