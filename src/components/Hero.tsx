import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center text-center bg-gradient-to-b from-brand-cream to-white overflow-hidden">

      {/* Heading Group */}
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-brand-eggplant tracking-tight leading-[1.1] md:leading-[1.15]"
        >
          The Leading AI Roleplay <br className="hidden sm:inline" /> Platform
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-brand-eggplant/70 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          Empowering teams to practice, learn, and excel through realistic AI-driven scenarios. Boost confidence and improve performance.
        </motion.p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="w-full sm:w-auto"
        >
          <a
            href="/dashboard"
            className="block w-full sm:w-auto text-center px-8 py-3.5 text-base font-semibold text-white bg-brand-eggplant rounded-full hover:bg-brand-hover hover:scale-105 hover:shadow-[0_10px_25px_rgba(52,18,46,0.2)] active:scale-98 transition-all duration-300 transform origin-center"
          >
            Get Started
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="w-full sm:w-auto"
        >
          <button
            className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-brand-eggplant border border-brand-eggplant/25 rounded-full hover:bg-brand-eggplant/5 hover:scale-105 hover:shadow-[0_10px_25px_rgba(52,18,46,0.1)] active:scale-98 transition-all duration-300 flex items-center justify-center gap-2.5 origin-center"
          >
            <Play className="w-4 h-4 fill-current text-brand-eggplant" />
            Download - MobileApp
          </button>
        </motion.div>
      </div>

      {/* Hero Illustration Showcase */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
        className="mt-16 w-full flex justify-center px-4 overflow-x-auto"
      >
        <motion.div
          animate={{
            y: [-6, 6, -6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            width: '1024px',
            height: '576px',
            borderRadius: '24px',
            border: '1px solid rgba(209,195,201,0.20)',
            boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
            background: 'linear-gradient(135deg, #D9EAA3 0%, #E5BAD4 50%, #FFDBD0 100%)',
          }}
          className="relative overflow-hidden shrink-0 select-none animate-prefers-reduced"
        >
          {/* Mint Panel */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '9%',
              width: '82%',
              height: '74%',
              borderRadius: '14px',
              backgroundColor: '#C7DBD8',
            }}
          />

          {/* Illustration */}
          <img
            src="/ava.png"
            alt="AI Agent Coach"
            style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '542px',
              objectFit: 'contain',
            }}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400";
            }}
          />

          {/* Floating Card */}
          <div
            style={{
              position: 'absolute',
              top: '42px',
              right: '38px',
              width: '220px',
              height: '110px',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid rgba(209,195,201,0.20)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <h4
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#23152C',
                lineHeight: '1.2',
                marginBottom: '4px',
              }}
            >
              Live Coaching
            </h4>
            <p
              style={{
                fontSize: '11px',
                lineHeight: '16px',
                color: 'rgba(35, 21, 44, 0.7)',
                textAlign: 'center',
              }}
            >
              Try softening your tone here. Acknowledge their perspective before offering your feedback.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Partner Trust Logos */}
      <div className="relative mt-16 w-full max-w-5xl border-t border-brand-eggplant/10 pt-10">
        <p className="text-xs font-semibold text-brand-eggplant/40 uppercase tracking-widest mb-6">Trusted by leading companies</p>

        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 bottom-0 top-[60px] w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 top-[60px] w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="overflow-hidden w-full select-none marquee-container py-2">
          <div className="flex w-max animate-marquee">
            {/* Group 1 */}
            <div className="flex gap-16 items-center pr-16 shrink-0">
              <span className="font-serif text-lg font-bold tracking-tight text-brand-eggplant opacity-70 hover:opacity-100 hover:scale-108 transition-all duration-300 cursor-pointer transform origin-center">Salesforce</span>
              <span className="font-sans text-xl font-bold tracking-tighter text-brand-eggplant opacity-70 hover:opacity-100 hover:scale-108 transition-all duration-300 cursor-pointer transform origin-center">stripe</span>
              <span className="font-sans text-lg font-bold text-brand-eggplant flex items-center gap-1 opacity-70 hover:opacity-100 hover:scale-108 transition-all duration-300 cursor-pointer transform origin-center">
                <span className="w-3 h-3 rounded-full bg-brand-eggplant"></span> monday.com
              </span>
              <span className="font-serif text-lg italic font-semibold text-brand-eggplant opacity-70 hover:opacity-100 hover:scale-108 transition-all duration-300 cursor-pointer transform origin-center">Delivery</span>
              <span className="font-sans text-lg font-semibold tracking-wide text-brand-eggplant opacity-70 hover:opacity-100 hover:scale-108 transition-all duration-300 cursor-pointer transform origin-center">DocuSign</span>
            </div>
            {/* Group 2 (Duplicate for infinite seamless marquee) */}
            <div className="flex gap-16 items-center pr-16 shrink-0">
              <span className="font-serif text-lg font-bold tracking-tight text-brand-eggplant opacity-70 hover:opacity-100 hover:scale-108 transition-all duration-300 cursor-pointer transform origin-center">Salesforce</span>
              <span className="font-sans text-xl font-bold tracking-tighter text-brand-eggplant opacity-70 hover:opacity-100 hover:scale-108 transition-all duration-300 cursor-pointer transform origin-center">stripe</span>
              <span className="font-sans text-lg font-bold text-brand-eggplant flex items-center gap-1 opacity-70 hover:opacity-100 hover:scale-108 transition-all duration-300 cursor-pointer transform origin-center">
                <span className="w-3 h-3 rounded-full bg-brand-eggplant"></span> monday.com
              </span>
              <span className="font-serif text-lg italic font-semibold text-brand-eggplant opacity-70 hover:opacity-100 hover:scale-108 transition-all duration-300 cursor-pointer transform origin-center">Delivery</span>
              <span className="font-sans text-lg font-semibold tracking-wide text-brand-eggplant opacity-70 hover:opacity-100 hover:scale-108 transition-all duration-300 cursor-pointer transform origin-center">DocuSign</span>
            </div>
          </div>
        </div>

        {/* Custom Styles for Infinite Loop animation */}
        <style>{`
          @keyframes marquee {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }
          .animate-marquee {
            animation: marquee 22s linear infinite;
          }
          .marquee-container:hover .animate-marquee {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee {
              animation: none !important;
            }
            .marquee-container {
              overflow-x: auto;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
