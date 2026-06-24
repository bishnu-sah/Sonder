import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-[#FAF8F5] border-t border-brand-eggplant/5 px-6 py-8 md:px-12"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="font-serif text-xl font-bold tracking-tight text-brand-eggplant cursor-pointer"
          >
            sonder
          </motion.span>
          <span className="text-xs text-brand-eggplant/40 font-sans">
            &copy; {new Date().getFullYear()} Sonder. All rights reserved.
          </span>
        </div>

        {/* Right: Policy Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-brand-eggplant/60">
          <a href="#privacy" className="relative hover:text-brand-eggplant transition-colors duration-300 group">
            Privacy Policy
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-eggplant/40 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#terms" className="relative hover:text-brand-eggplant transition-colors duration-300 group">
            Terms of Service
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-eggplant/40 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact-support" className="relative hover:text-brand-eggplant transition-colors duration-300 group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-eggplant/40 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

      </div>
    </motion.footer>
  );
}
