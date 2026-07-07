import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Bookkeeping", href: "/services#bookkeeping" },
      { label: "Payroll", href: "/services#payroll" },
      { label: "VAT Returns", href: "/services#vat" },
      { label: "Year-End Accounts", href: "/services#year-end" },
      { label: "Business Advisory", href: "/services#advisory" },
      { label: "Tax Planning", href: "/services#tax" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "BOA Academy", href: "/academy" },
      { label: "Masterclasses", href: "/masterclasses" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Reviews", href: "/reviews" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
              <span className="font-display font-extrabold text-sm text-white tracking-tight">
                BK
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight text-navy">
                BK FINANCE
              </span>
              <span className="font-display text-xs tracking-[0.2em] text-navy/70 uppercase">
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
                      : scrolled
                      ? "text-navy hover:text-gold"
                      : "text-navy hover:text-gold"
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
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-mid transition-all duration-200 active:scale-[0.97]"
            >
              Book a Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-navy"
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
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="container py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-navy font-medium rounded-lg hover:bg-warm-white transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-8 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-navy/70 hover:text-gold transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/booking"
                  className="block w-full text-center px-6 py-3 bg-navy text-white font-semibold rounded-lg"
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
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <span className="font-display font-extrabold text-sm text-gold tracking-tight">
                  BK
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-lg">BK FINANCE</span>
                <span className="block text-xs tracking-[0.2em] text-white/60 uppercase">
                  Global
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Assisting Businesses Beyond the Books. Premium accounting, tax, and advisory services for ambitious businesses.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com/bkfinanceglobal" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://linkedin.com/company/bkfinanceglobal" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://twitter.com/bkfinanceglobal" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-gold">
              Services
            </h4>
            <ul className="space-y-3">
              {["Bookkeeping", "Payroll", "VAT Returns", "Year-End Accounts", "Business Advisory", "Tax Planning"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-white/60 hover:text-white transition-colors">
                    {s}
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
                { label: "Testimonials", href: "/testimonials" },
                { label: "Reviews", href: "/reviews" },
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
                <a href="mailto:info@bkfinanceglobal.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  info@bkfinanceglobal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-gold" />
                <a href="tel:+44000000000" className="text-sm text-white/60 hover:text-white transition-colors">
                  +44 (0) 000 000 000
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

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} BK Finance Global. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">Terms of Service</a>
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
