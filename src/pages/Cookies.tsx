import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const cookieTable = [
  { name: "bkfinance-cookie-consent", provider: "BK Finance Global", purpose: "Remembers your cookie preference so we don't ask on every visit.", type: "Strictly necessary", duration: "Persistent (until cleared)" },
  { name: "Instagram embed cookies", provider: "Instagram (Meta)", purpose: "Powers the embedded video testimonial on our Testimonials page.", type: "Optional / functional", duration: "Set by Instagram" },
];

export default function Cookies() {
  const { consent, accept, reject } = useCookieConsent();

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
              Cookie Policy
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
              <h2 className="font-display font-bold text-2xl text-navy mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help websites function, remember preferences, and in some cases power embedded third-party content.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">2. Your Current Preference</h2>
              <div className="bg-warm-white rounded-xl border border-border/50 p-6 not-prose">
                <p className="text-navy font-semibold mb-4">
                  Status: {consent === "accepted" ? "You've accepted optional cookies." : consent === "rejected" ? "You've rejected optional cookies." : "You haven't made a choice yet."}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={reject}
                    className="px-5 py-2.5 border border-navy text-navy text-sm font-semibold rounded-lg hover:bg-navy hover:text-white transition-all duration-200"
                  >
                    Reject Non-Essential
                  </button>
                  <button
                    onClick={accept}
                    className="px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">3. Cookies We Use</h2>
              <p className="mb-4">
                We keep this to a minimum. We don&apos;t use cookies for advertising or cross-site tracking. Optional cookies below are only set once you accept them, and only when you actually view the page containing that embedded content.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-3 pr-4 text-navy font-semibold">Cookie</th>
                      <th className="py-3 pr-4 text-navy font-semibold">Provider</th>
                      <th className="py-3 pr-4 text-navy font-semibold">Purpose</th>
                      <th className="py-3 pr-4 text-navy font-semibold">Type</th>
                      <th className="py-3 text-navy font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieTable.map((row) => (
                      <tr key={row.name} className="border-b border-border/50 align-top">
                        <td className="py-3 pr-4 font-medium text-navy">{row.name}</td>
                        <td className="py-3 pr-4">{row.provider}</td>
                        <td className="py-3 pr-4">{row.purpose}</td>
                        <td className="py-3 pr-4">{row.type}</td>
                        <td className="py-3">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">4. How We Ask for Consent</h2>
              <p>
                On your first visit, we show a banner letting you accept or reject optional cookies. If you reject them, the Instagram video embed is replaced with a placeholder until you choose to accept &mdash; it is never loaded without your consent. Strictly necessary cookies (just the one that remembers your choice) are used regardless, since the site can&apos;t function without them.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">5. Managing Cookies</h2>
              <p>
                You can change your preference at any time using the buttons above, or by clearing your browser&apos;s local storage for this site. You can also block cookies entirely through your browser settings, though this may affect how some pages display.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-navy mb-4">6. More Information</h2>
              <p>
                For how we handle personal data more broadly, see our <a href="/privacy-policy" className="text-navy underline hover:text-gold transition-colors">Privacy Policy</a>. If you have questions, contact us at <a href="mailto:bkfinanceltd@gmail.com" className="text-navy underline hover:text-gold transition-colors">bkfinanceltd@gmail.com</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
