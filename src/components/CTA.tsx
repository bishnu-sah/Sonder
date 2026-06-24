import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="w-full px-6 py-16 md:px-12 md:py-24 bg-white">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="max-w-5xl mx-auto rounded-3xl bg-brand-eggplant px-6 py-16 md:py-20 flex flex-col items-center text-center space-y-8 shadow-xl relative overflow-hidden"
      >

        {/* Soft decorative background glow */}
        <motion.div
          animate={{
            x: ["-20%", "-10%", "-20%"],
            y: ["-50%", "-45%", "-50%"],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-50%] left-[-20%] w-[80%] aspect-square rounded-full bg-brand-accent/20 blur-3xl pointer-events-none"
        ></motion.div>
        <motion.div
          animate={{
            x: ["-20%", "-15%", "-20%"],
            y: ["-50%", "-55%", "-50%"],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-50%] right-[-20%] w-[80%] aspect-square rounded-full bg-card-peach/10 blur-3xl pointer-events-none"
        ></motion.div>

        {/* Content Group */}
        <div className="max-w-3xl space-y-4 relative z-10">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-white leading-tight"
          >
            Better conversations create <br className="hidden sm:inline" /> better workplaces.
          </motion.h2>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-sans leading-relaxed"
          >
            Ready to elevate your team's communication skills? Practice with realistic AI characters in a risk-free environment today.
          </motion.p>
        </div>

        {/* CTA Button with soft pulse */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.a
            href="#get-started"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255,255,255,0.25)"
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 20px rgba(255,255,255,0.15)",
                "0 0 0px rgba(255,255,255,0)",
              ]
            }}
            transition={{
              boxShadow: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-brand-eggplant bg-white rounded-full hover:bg-slate-100 transition-colors duration-300"
          >
            Book a Demo
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}
