import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Lock, LogIn } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Academy() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Portal login is launching soon — we'll be in touch once it's ready!");
  };

  return (
    <Layout>
      <section className="pt-28 pb-16 min-h-[70vh] flex items-center">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-md mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-8">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-5">
                <Lock className="w-7 h-7 text-gold" />
              </div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                BOA Academy
              </p>
              <h1 className="font-display font-bold text-3xl text-navy mb-3">
                Member Portal
              </h1>
              <p className="text-slate-text leading-relaxed">
                This portal is exclusively for BOA Academy members. Enter your access code to continue.
              </p>
            </motion.div>

            <motion.form
              variants={fadeUp}
              onSubmit={handleLogin}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Access Code</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                  placeholder="Enter your access code"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
              >
                Log In <LogIn className="w-4 h-4" />
              </button>
            </motion.form>

            <motion.div variants={fadeUp} className="text-center mt-8 pt-8 border-t border-border/50">
              <p className="text-slate-text text-sm mb-3">Not a member yet?</p>
              <a
                href="mailto:bkfinanceltd@gmail.com?subject=BOA Academy"
                className="text-sm font-semibold text-navy hover:text-gold transition-colors underline underline-offset-4"
              >
                Get in touch to find out about membership
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
