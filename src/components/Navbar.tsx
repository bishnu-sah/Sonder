import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="mx-auto max-w-[1120px] px-5">
        <nav
          className={`h-[72px] rounded-full flex items-center justify-between px-8 border transition-all duration-300 ${isScrolled
              ? "bg-white/80 backdrop-blur-lg border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              : "bg-white/95 backdrop-blur-md border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            }`}
        >

          {/* Logo */}
          <a
            href="/"
            className="font-serif text-[24px] text-[#34122E] font-medium transition-opacity duration-300 hover:opacity-80"
          >
            Sonder
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#features" className="text-[15px] text-[#34122E]/75 hover:text-[#34122E] transition-colors duration-300">
              Features
            </a>

            <a href="#how-it-works" className="text-[15px] text-[#34122E]/75 hover:text-[#34122E] transition-colors duration-300">
              How it Works
            </a>

            <a href="#testimonials" className="text-[15px] text-[#34122E]/75 hover:text-[#34122E] transition-colors duration-300">
              Testimonials
            </a>

            <a href="#pricing" className="text-[15px] text-[#34122E]/75 hover:text-[#34122E] transition-colors duration-300">
              Pricing
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-[#34122E] px-7 py-3 text-white text-sm font-medium hover:scale-[1.04] hover:shadow-[0_10px_25px_rgba(52,18,46,0.25)] active:scale-[0.98] transition-all duration-300 ease-out"
            >
              Download for Web
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 text-[#34122E] hover:opacity-75 transition-opacity"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-4 rounded-3xl bg-white shadow-lg p-6 md:hidden overflow-hidden"
            >
              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="block py-3 text-[#34122E] hover:opacity-70 transition-opacity"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                onClick={() => setIsOpen(false)}
                className="block py-3 text-[#34122E] hover:opacity-70 transition-opacity"
              >
                How it Works
              </a>

              <a
                href="#testimonials"
                onClick={() => setIsOpen(false)}
                className="block py-3 text-[#34122E] hover:opacity-70 transition-opacity"
              >
                Testimonials
              </a>

              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="block py-3 text-[#34122E] hover:opacity-70 transition-opacity"
              >
                Pricing
              </a>

              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex justify-center rounded-full bg-[#34122E] py-3 text-white hover:opacity-90 transition-opacity"
              >
                Download for Web
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}