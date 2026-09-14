import Layout from "@/components/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Privacy() {
  return (
    <Layout>
      <section className="pt-28 pb-10 bg-warm-white">
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
              Privacy Policy
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-text text-lg leading-relaxed">
              Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-10 text-slate-text leading-relaxed"
          >
            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">1. Who We Are</h2>
              <p>
                BK Finance Global (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides bookkeeping, business registration, and financial advisory services. This policy explains how we collect, use, and protect your personal data when you visit our website, get in touch, or become a client, in line with UK GDPR and the Data Protection Act 2018.
              </p>
              <p className="mt-3">
                Contact: <a href="mailto:bkfinanceltd@gmail.com" className="text-navy underline hover:text-gold transition-colors">bkfinanceltd@gmail.com</a>
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">2. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-navy">Contact details</strong> you give us via our booking or contact forms — name, email, phone number, and business name.</li>
                <li><strong className="text-navy">Message content</strong> you submit through our forms, including any details about your business or enquiry.</li>
                <li><strong className="text-navy">Financial and business information</strong> you share with us if you become a client, as needed to provide bookkeeping, registration, or advisory services.</li>
                <li><strong className="text-navy">Basic technical data</strong> such as browser type and general usage, to keep the website working properly.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Respond to enquiries and arrange consultations</li>
                <li>Deliver the services you&apos;ve engaged us for</li>
                <li>Meet our legal and regulatory obligations, including HMRC requirements where relevant</li>
                <li>Improve our website and services</li>
              </ul>
              <p className="mt-3">We do not sell your personal data to third parties.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">4. Sharing Your Information</h2>
              <p>
                We share information with trusted third-party services strictly to operate our business, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-navy">Web3Forms</strong> — to process and deliver contact and booking form submissions to us by email</li>
                <li><strong className="text-navy">HMRC and relevant authorities</strong> — where required to deliver compliance-related services or as legally obligated</li>
              </ul>
              <p className="mt-3">We do not share your data with third parties for their own marketing purposes.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">5. Data Retention</h2>
              <p>
                We keep personal data only as long as necessary for the purposes it was collected, including to meet legal, accounting, or reporting requirements. Client financial records are typically retained for the period required by UK tax law (currently at least 6 years).
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">6. Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Access the personal data we hold about you</li>
                <li>Ask us to correct inaccurate data</li>
                <li>Ask us to delete your data, where we&apos;re not legally required to keep it</li>
                <li>Object to or restrict certain processing</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at <a href="mailto:bkfinanceltd@gmail.com" className="text-navy underline hover:text-gold transition-colors">bkfinanceltd@gmail.com</a>. If you&apos;re unhappy with how we&apos;ve handled your data, you can complain to the UK Information Commissioner&apos;s Office (ICO) at ico.org.uk.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">7. Cookies</h2>
              <p>
                We use one essential cookie to remember your cookie preference, and an optional cookie from Instagram to power embedded testimonial content &mdash; only loaded once you accept it. See our{" "}
                <Link href="/cookie-policy" className="text-navy underline hover:text-gold transition-colors">Cookie Policy</Link> for full details and to manage your preference.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">8. Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
