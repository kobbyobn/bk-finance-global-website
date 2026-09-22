import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Lock, LogIn, ArrowRight, GraduationCap, LogOut } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { getEmailValidationError } from "@/lib/validateEmail";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// Client-side access gate only — this code lives in the shipped JS bundle
// and is not a real security boundary. It just keeps casual visitors out
// of the sign-up form until they've been given the code directly.
const ACCESS_CODE = "BOA@BKFG26";
const UNLOCK_STORAGE_KEY = "boa_academy_unlocked";
const WEB3FORMS_ACCESS_KEY = "a51660b9-9bdb-445b-8daa-e9bd95d5aecb";

export default function Academy() {
  const [unlocked, setUnlocked] = useState(
    () => typeof window !== "undefined" && localStorage.getItem(UNLOCK_STORAGE_KEY) === "true"
  );
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const code = (formData.get("access_code") as string)?.trim();

    if (code === ACCESS_CODE) {
      localStorage.setItem(UNLOCK_STORAGE_KEY, "true");
      setUnlocked(true);
      toast.success("Welcome! You now have access to BOA Academy sign-up.");
    } else {
      toast.error("Incorrect access code. Please double-check and try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(UNLOCK_STORAGE_KEY);
    setUnlocked(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const emailError = getEmailValidationError(formData.get("email") as string);
    if (emailError) {
      toast.error(emailError);
      return;
    }

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New BOA Academy consultation booking");
    formData.append("consultation_type", "BOA Academy Sign-Up");

    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Message sent! We'll be in touch to arrange your consultation.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please email us directly at bkfinanceltd@gmail.com.");
      }
    } catch {
      toast.error("Something went wrong. Please email us directly at bkfinanceltd@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!unlocked) {
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
                    name="access_code"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all tracking-widest"
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

  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-5">
                <GraduationCap className="w-7 h-7 text-gold" />
              </div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                BOA Academy
              </p>
              <h1 className="font-display font-bold text-3xl text-navy mb-3">
                Book Your Sign-Up Consultation
              </h1>
              <p className="text-slate-text leading-relaxed">
                You're in. Send us your details and we'll arrange a time to walk you through joining BOA Academy.
              </p>
            </motion.div>

            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-border/50 space-y-5"
            >
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
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
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white/50 text-navy placeholder:text-slate-text/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none"
                  rows={4}
                  placeholder="Tell us a bit about what you're hoping to get from BOA Academy..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Book Consultation"} <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>

            <motion.div variants={fadeUp} className="text-center mt-8">
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 text-sm text-slate-text hover:text-navy transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" /> Exit member portal
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
