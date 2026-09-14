import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  { src: "/screenshots/home.png", label: "Home" },
  { src: "/screenshots/services.png", label: "Services" },
  { src: "/screenshots/about.png", label: "About Us" },
  { src: "/screenshots/booking.png", label: "Booking" },
  { src: "/screenshots/testimonials.png", label: "Testimonials" },
];

const INTERVAL_MS = 3500;

export default function PageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Laptop screen */}
      <div className="bg-navy rounded-t-2xl rounded-b-md p-2.5 sm:p-3 shadow-xl relative">
        {/* Camera dot */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />

        <div className="rounded-lg overflow-hidden bg-warm-white">
          {/* Browser chrome */}
          <div className="bg-warm-white border-b border-border/50 px-4 py-2.5 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-navy/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-navy/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-navy/15" />
            </div>
            <div className="flex-1 flex justify-center">
              <span className="text-xs text-slate-text bg-white rounded-full px-4 py-1 border border-border/50">
                {slides[index].label}
              </span>
            </div>
          </div>

          {/* Sliding screens */}
          <div className="relative aspect-[16/10] bg-warm-white overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={slides[index].src}
                src={slides[index].src}
                alt={`${slides[index].label} page preview`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Laptop base */}
      <div className="relative">
        <div
          className="h-3 sm:h-4 bg-navy-mid mx-[-6%]"
          style={{ clipPath: "polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)" }}
        />
        <div className="h-1 sm:h-1.5 w-16 sm:w-20 bg-navy-mid/70 mx-auto rounded-b-md" />
      </div>

      {/* Dots */}
      <div className="pt-5 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => setIndex(i)}
            aria-label={`Show ${slide.label} preview`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-gold" : "w-1.5 bg-navy/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
