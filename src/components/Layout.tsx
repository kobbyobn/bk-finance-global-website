import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Mail, MapPin, Landmark, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Accounts Preparation Management", href: "/services/accounts-preparation-management" },
      { label: "Registering Your Business", href: "/services/business-registration" },
      { label: "VAT Return", href: "/services/vat-return" },
      { label: "MTD Income Tax", href: "/services/mtd-income-tax" },
      { label: "Finance Check Up", href: "/services/finance-check-up" },
      { label: "Book a 1:1 Call", href: "/services/1-1-call" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "BOA Academy", href: "/academy" },
      { label: "Masterclasses", href: "/masterclasses" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  { label: "Latest News", href: "/news" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileSubOpen(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy ${
        scrolled ? "shadow-sm border-b border-white/10" : ""
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <img src="/logo.png" alt="BK Finance Global" className="w-14 h-14 shrink-0 object-contain" />
            <div className="flex flex-col -space-y-0.5">
              <span className="font-display font-bold text-base leading-tight text-gold">
                BK Finance
              </span>
              <span className="font-display text-xs leading-tight text-gold/70">
                Global
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.children && setOpenDropdown(link.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location === link.href
                      ? "text-gold"
                      : "text-white hover:text-gold"
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-border/50 p-2 z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-navy/80 hover:text-gold hover:bg-warm-white rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/booking"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-gold text-navy text-sm font-semibold rounded-lg hover:bg-gold-light transition-all duration-200 active:scale-[0.97]"
            >
              Book a Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <nav className="container py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      className="flex-1 block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        onClick={() =>
                          setMobileSubOpen(mobileSubOpen === link.label ? null : link.label)
                        }
                        className="p-3 text-white"
                        aria-label={`Toggle ${link.label} submenu`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileSubOpen === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {link.children && mobileSubOpen === link.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-8 space-y-1 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-white/70 hover:text-gold transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/booking"
                  className="block w-full text-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg"
                >
                  Book a Consultation
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="BK Finance Global" className="w-10 h-10 rounded-full shrink-0 object-cover border border-white/20" />
              <div>
                <span className="font-display font-bold text-lg text-gold">BK Finance</span>
                <span className="block text-xs text-gold/60">
                  Global
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Assisting Businesses Beyond the Books.
              <br />
              Premium accounting, tax, and advisory services for ambitious businesses.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/bkfinance_global/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-gold">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Accounts Preparation Management", slug: "accounts-preparation-management" },
                { label: "Registering Your Business", slug: "business-registration" },
                { label: "VAT Return", slug: "vat-return" },
                { label: "MTD Income Tax", slug: "mtd-income-tax" },
                { label: "Finance Check Up", slug: "finance-check-up" },
                { label: "Book a 1:1 Call", slug: "1-1-call" },
              ].map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-gold">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Latest News", href: "/news" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Partnerships", href: "/partnerships" },
                { label: "BOA Academy", href: "/academy" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-gold">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-gold" />
                <a href="mailto:bkfinanceltd@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  bkfinanceltd@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold" />
                <span className="text-sm text-white/60">
                  London, United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliations & Partnerships */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center bg-white rounded-lg px-4 py-3 border border-white/10">
              <img src="/partners/freeagent-badge.png" alt="FreeAgent Accredited Practitioner 2026" className="h-8 w-auto" />
            </div>
            <Link
              href="/booking"
              className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-3 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
              title="Schedule a call to open a Tide business account with us"
            >
              <Landmark className="w-4 h-4 text-gold shrink-0" />
              <span className="text-sm text-white/70">Tide Bank Affiliate Partner</span>
            </Link>
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
              <GraduationCap className="w-4 h-4 text-gold shrink-0" />
              <span className="text-sm text-white/70">BOA Academy Partner</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} BK Finance Global. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-sm text-white/40 hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="text-sm text-white/40 hover:text-white/70 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
