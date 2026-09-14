import { Link } from "wouter";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

export default function CookieConsentBanner() {
  const { consent, accept, reject } = useCookieConsent();

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-navy border-t border-white/10 shadow-2xl">
      <div className="container py-5 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-white/80 text-sm leading-relaxed flex-1">
          We use essential cookies to run this site, plus an optional cookie from Instagram to power testimonial content. We only load it after you say it&apos;s okay.{" "}
          <Link href="/cookie-policy" className="text-gold underline hover:text-gold-light transition-colors">
            Read our Cookie Policy
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-5 py-2.5 border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 bg-gold text-navy text-sm font-bold rounded-lg hover:bg-gold-light transition-all duration-200 active:scale-[0.97]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
