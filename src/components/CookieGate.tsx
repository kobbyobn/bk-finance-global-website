import { Link } from "wouter";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

export default function CookieGate({ label, children }: { label: string; children: React.ReactNode }) {
  const { consent, accept } = useCookieConsent();

  if (consent === "accepted") {
    return <>{children}</>;
  }

  return (
    <div className="bg-warm-white rounded-2xl border border-border/50 p-10 text-center">
      <p className="text-navy font-semibold mb-2">{label} requires optional cookies</p>
      <p className="text-slate-text text-sm mb-6 max-w-md mx-auto">
        This content is provided by a third party and sets its own cookies. Accept optional cookies to view it, or read our{" "}
        <Link href="/cookie-policy" className="text-navy underline hover:text-gold transition-colors">
          Cookie Policy
        </Link>{" "}
        first.
      </p>
      <button
        onClick={accept}
        className="inline-flex items-center px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
      >
        Accept Cookies &amp; Show Content
      </button>
    </div>
  );
}
