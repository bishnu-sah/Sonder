import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Bell,
  Settings,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

/* ─────────── EQ metrics ─────────── */
const eqMetrics = [
  { label: 'Empathy',         value: 92, color: '#5A9B6E' },
  { label: 'Clarity',         value: 74, color: '#E8734A' },
  { label: 'Resilience',      value: 85, color: '#5B7FBE' },
  { label: 'Active Listening',value: 89, color: '#8B5E9B' },
];

/* ─────────── Animation variants ─────────── */
const pageVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const slideUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
});

const scaleIn = (delay = 0) => ({
  hidden:  { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
});

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerChild = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

/* ─────────── Reusable whileInView wrapper ─────────── */
function InView({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={slideUp(delay)}
    >
      {children}
    </motion.div>
  );
}

/* ─────────── Score Ring ─────────── */
function ScoreRing({ score }: { score: number }) {
  const radius = 72;
  const stroke = 9;
  const norm   = radius - stroke / 2;
  const circ   = 2 * Math.PI * norm;
  const offset = circ - (score / 100) * circ;

  return (
    <div className="relative flex items-center justify-center" style={{ width: 160, height: 160 }}>
      <svg width={160} height={160} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={80} cy={80} r={norm} fill="none" stroke="#F0ECE8" strokeWidth={stroke} />
        <motion.circle
          cx={80} cy={80} r={norm}
          fill="none"
          stroke="#5A9B6E"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <span className="text-[34px] font-serif font-semibold text-[#23152C] leading-none">{score}%</span>
        <span className="text-[11px] font-sans text-[#23152C]/40 mt-1 tracking-wide">Empathy Score</span>
      </motion.div>
    </div>
  );
}

/* ─────────── Animated EQ Bar ─────────── */
function EQBar({ label, value, color, delay }: { label: string; value: number; color: string; delay: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[13px] font-sans font-medium text-[#23152C]/70">{label}</span>
        <motion.span
          className="text-[13px] font-sans font-semibold text-[#23152C]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.6, duration: 0.3 }}
        >
          {value}%
        </motion.span>
      </div>
      <div className="w-full h-[7px] bg-[#F0ECE8] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

/* ─────────── Card hover wrapper ─────────── */
function HoverCard({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={slideUp(delay)}
      whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.10)', transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════ */
export default function Roleplay() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex h-screen w-screen overflow-hidden bg-[#FAF7F5]"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ════ SIDEBAR (shared, location-aware) ════ */}
      <Sidebar />

      {/* ════ MAIN ════ */}
      <div className="flex-1 ml-[220px] flex flex-col h-screen overflow-hidden">

        {/* ── Top Nav Bar ── */}
        <motion.header
          className="h-[72px] shrink-0 flex items-center justify-between px-8 border-b border-black/[0.05] bg-[#FAF7F5]"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <nav className="flex items-center gap-7">
            {[
              { label: 'Dashboard', path: '/dashboard' },
              { label: 'Library',   path: '/library'   },
              { label: 'Analytics', path: '#'          },
            ].map(({ label, path }) => (
              <button
                key={label}
                onClick={() => path !== '#' && navigate(path)}
                className="text-[13.5px] font-sans font-medium text-[#23152C]/50 hover:text-[#23152C]/80 transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="p-2 rounded-lg hover:bg-black/[0.04] transition-colors relative"
            >
              <Bell size={18} strokeWidth={1.6} className="text-[#23152C]/50" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#E8734A] rounded-full" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="p-2 rounded-lg hover:bg-black/[0.04] transition-colors"
            >
              <Settings size={18} strokeWidth={1.6} className="text-[#23152C]/50" />
            </motion.button>
            <motion.img
              whileHover={{ scale: 1.08 }}
              src="/profile-avatar.png"
              alt="Ishaan"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-black/[0.06] ml-1 cursor-pointer"
            />
          </div>
        </motion.header>

        {/* ── Scrollable Content ── */}
        <main className="flex-1 overflow-y-auto px-10 py-8">

          {/* ── Breadcrumb + Heading ── */}
          <motion.div
            className="mb-7"
            variants={slideUp(0.05)}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-1.5 text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#23152C]/35 hover:text-[#23152C]/60 transition-colors mb-3"
              whileHover={{ x: -3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft size={13} strokeWidth={2} />
              Session Debrief
            </motion.button>
            <motion.h1
              className="text-[30px] font-serif font-semibold text-[#23152C] leading-snug"
              variants={slideUp(0.1)}
              initial="hidden"
              animate="visible"
            >
              Performance Review:<br />
              Maya Jain – Debrief
            </motion.h1>
          </motion.div>

          {/* ── Success Card ── */}
          <motion.div
            className="bg-white rounded-2xl px-6 py-5 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-black/[0.04] flex items-start gap-5 mb-6"
            variants={scaleIn(0.15)}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -4, boxShadow: '0 8px 28px rgba(0,0,0,0.09)', transition: { duration: 0.25 } }}
          >
            <motion.div
              className="w-11 h-11 rounded-full bg-[#EAF5EE] flex items-center justify-center shrink-0 mt-0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.35 }}
            >
              <CheckCircle2 size={22} className="text-[#5A9B6E]" strokeWidth={1.8} />
            </motion.div>
            <div>
              <h3 className="text-[16px] font-serif font-semibold text-[#23152C] mb-1">Great job, Ishaan!</h3>
              <p className="text-[13.5px] font-sans text-[#23152C]/55 leading-relaxed max-w-2xl">
                You navigated a difficult conversation with Maya while maintaining trust. Your ability to balance
                performance feedback with personal support was outstanding.
              </p>
            </div>
          </motion.div>

          {/* ── Score + Strengths Row ── */}
          <motion.div
            className="grid grid-cols-2 gap-5 mb-6"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Overall Score Card */}
            <motion.div
              variants={staggerChild}
              className="bg-white rounded-2xl p-7 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-black/[0.04]"
              whileHover={{ y: -4, boxShadow: '0 8px 28px rgba(0,0,0,0.09)', transition: { duration: 0.25 } }}
            >
              <p className="text-[11px] font-sans font-bold tracking-[0.12em] text-[#23152C]/35 uppercase mb-5">
                Overall Score
              </p>
              <div className="flex flex-col items-center">
                <ScoreRing score={88} />
                <motion.p
                  className="mt-6 text-[13px] font-serif italic text-[#23152C]/40 text-center max-w-[220px] leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  "A harmonious balance of leadership and vulnerability."
                </motion.p>
              </div>
            </motion.div>

            {/* Strengths & Opportunities Card */}
            <motion.div
              variants={staggerChild}
              className="bg-white rounded-2xl p-7 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-black/[0.04]"
              whileHover={{ y: -4, boxShadow: '0 8px 28px rgba(0,0,0,0.09)', transition: { duration: 0.25 } }}
            >
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Strengths */}
                <div>
                  <p className="text-[11px] font-sans font-bold tracking-[0.12em] text-[#23152C]/35 uppercase mb-4">
                    Strengths
                  </p>
                  <motion.div className="space-y-3" variants={stagger} initial="hidden" animate="visible">
                    {['Active Listening', 'Validation'].map((s) => (
                      <motion.div
                        key={s}
                        variants={staggerChild}
                        className="flex items-center gap-2.5 bg-[#EAF5EE] rounded-xl px-4 py-3 cursor-default"
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#5A9B6E] shrink-0" />
                        <span className="text-[13px] font-sans font-medium text-[#23152C]/75">{s}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Opportunities */}
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-black/[0.05]" />
                  <div className="pl-4">
                    <p className="text-[11px] font-sans font-bold tracking-[0.12em] text-[#23152C]/35 uppercase mb-4">
                      Opportunities
                    </p>
                    <motion.div className="space-y-3" variants={stagger} initial="hidden" animate="visible">
                      {['Directness', 'Budget Transparency'].map((o) => (
                        <motion.div
                          key={o}
                          variants={staggerChild}
                          className="flex items-center gap-2.5 bg-[#FFF3ED] rounded-xl px-4 py-3 cursor-default"
                          whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        >
                          <div className="w-2 h-2 rounded-full bg-[#E8734A] shrink-0" />
                          <span className="text-[13px] font-sans font-medium text-[#23152C]/75">{o}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── EQ Metrics Breakdown ── */}
          <InView delay={0}>
            <motion.div
              className="bg-white rounded-2xl p-7 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-black/[0.04] mb-6"
              whileHover={{ y: -4, boxShadow: '0 8px 28px rgba(0,0,0,0.09)', transition: { duration: 0.25 } }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[16px] font-serif font-semibold text-[#23152C]">EQ Metrics Breakdown</h3>
                <motion.button
                  className="text-[12px] font-sans font-medium text-[#E8734A]"
                  whileHover={{ scale: 1.03 }}
                >
                  Detailed Analytics
                </motion.button>
              </div>
              <div className="space-y-5">
                {eqMetrics.map((m, i) => (
                  <EQBar key={m.label} {...m} delay={0.1 + i * 0.1} />
                ))}
              </div>
            </motion.div>
          </InView>

          {/* ── Transcript Review ── */}
          <InView delay={0.05}>
            <motion.div
              className="bg-white rounded-2xl p-7 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-black/[0.04] mb-6"
              whileHover={{ y: -4, boxShadow: '0 8px 28px rgba(0,0,0,0.09)', transition: { duration: 0.25 } }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[16px] font-serif font-semibold text-[#23152C]">Transcript Review</h3>
                <motion.button
                  className="flex items-center gap-1.5 text-[12px] font-sans font-medium text-[#E8734A]"
                  whileHover={{ scale: 1.03 }}
                >
                  <Sparkles size={13} strokeWidth={1.8} />
                  AI-Highlighted Moments
                </motion.button>
              </div>

              <div className="space-y-4">
                {/* Ishaan message */}
                <motion.div className="flex items-start gap-3" variants={slideUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <img src="/profile-avatar.png" alt="Ishaan" className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5 ring-1 ring-black/[0.06]" />
                  <div className="max-w-[70%]">
                    <p className="text-[10.5px] font-sans font-semibold text-[#23152C]/35 mb-1.5">Ishaan (Manager)</p>
                    <div className="bg-[#F5F0F3] rounded-2xl rounded-tl-sm px-4 py-3">
                      <p className="text-[13px] font-sans text-[#23152C]/75 leading-relaxed">
                        Maya, I've noticed you've been putting in incredible hours lately. I want to make sure we talk about your workload and see how I can support you better.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Maya message */}
                <motion.div className="flex items-start gap-3 justify-end" variants={slideUp(0.08)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="max-w-[70%] flex flex-col items-end">
                    <p className="text-[10.5px] font-sans font-semibold text-[#23152C]/35 mb-1.5">Maya Jain</p>
                    <div className="bg-[#EDF4F0] rounded-2xl rounded-tr-sm px-4 py-3">
                      <p className="text-[13px] font-sans text-[#23152C]/75 leading-relaxed">
                        Honestly, I've been struggling a bit. I feel like the expectations keep shifting and I'm not sure what success looks like anymore.
                      </p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#C7DBD8] flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-sans font-bold text-[#3A6460]">
                    MJ
                  </div>
                </motion.div>

                {/* AI highlight block — soft glow pulse */}
                <motion.div
                  className="rounded-2xl border border-[#5A9B6E]/25 bg-[#F0F8F3] px-5 py-4"
                  variants={slideUp(0.12)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  animate={{ boxShadow: ['0 0 0px rgba(90,155,110,0)', '0 0 16px rgba(90,155,110,0.18)', '0 0 0px rgba(90,155,110,0)'] }}
                  transition={{ boxShadow: { duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#5A9B6E]" />
                    <span className="text-[10.5px] font-sans font-bold tracking-[0.08em] uppercase text-[#5A9B6E]">
                      High Impact: Validation
                    </span>
                  </div>
                  <p className="text-[12.5px] font-sans text-[#23152C]/60 leading-relaxed">
                    Ishaan acknowledged Maya's feelings before offering solutions — a strong validation moment that built psychological safety and opened the door for honest dialogue.
                  </p>
                </motion.div>

                {/* Ishaan second message */}
                <motion.div className="flex items-start gap-3" variants={slideUp(0.16)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <img src="/profile-avatar.png" alt="Ishaan" className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5 ring-1 ring-black/[0.06]" />
                  <div className="max-w-[70%]">
                    <p className="text-[10.5px] font-sans font-semibold text-[#23152C]/35 mb-1.5">Ishaan (Manager)</p>
                    <div className="bg-[#F5F0F3] rounded-2xl rounded-tl-sm px-4 py-3">
                      <p className="text-[13px] font-sans text-[#23152C]/75 leading-relaxed">
                        That makes complete sense, and I hear you. The shifting expectations are partly on me — I should have been clearer about the Q3 priorities. Let's fix that together.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </InView>

          {/* ── Leadership Reflection ── */}
          <InView delay={0.05}>
            <div className="flex flex-col items-center text-center py-10 mb-6">
              <p className="text-[16px] font-serif italic text-[#23152C]/55 leading-relaxed max-w-xl mb-3">
                "Empathy is not about agreeing with everything, but about understanding why the other person feels that way."
              </p>
              <span className="text-[10.5px] font-sans font-bold tracking-[0.14em] uppercase text-[#23152C]/30">
                Leadership Reflection
              </span>
            </div>
          </InView>

          {/* ── Next Steps ── */}
          <InView delay={0.08}>
            <motion.div
              className="rounded-3xl p-8 mb-9"
              style={{ background: '#35172E' }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(53,23,46,0.35)', transition: { duration: 0.3 } }}
            >
              <h3 className="text-[20px] font-serif font-semibold text-white mb-3">Next Steps</h3>
              <p className="text-[13.5px] font-sans text-white/50 leading-relaxed max-w-2xl mb-7">
                Based on your results, we recommend practicing your clarity and directness. Maya responded well to your
                empathy, but was left slightly confused about the budget timeline.
              </p>

              <motion.div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.07)' }}
                whileHover={{ background: 'rgba(255,255,255,0.10)', transition: { duration: 0.2 } }}
              >
                <span className="text-[10px] font-sans font-bold tracking-[0.14em] uppercase text-white/35 block mb-3">
                  Recommended Scenario
                </span>
                <h4 className="text-[17px] font-serif font-semibold text-white leading-snug mb-1">
                  Delivering a Change Management Announcement
                </h4>
                <p className="text-[12.5px] font-sans text-white/40 mb-6">
                  Focus: Directness &amp; Navigating Uncertainty
                </p>
                <motion.button
                  className="inline-flex items-center gap-2 bg-[#F0B08A] text-[#2D1529] text-[13px] font-sans font-semibold px-6 py-2.5 rounded-full"
                  whileHover={{ scale: 1.03, backgroundColor: '#E8A47A', transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start Next Simulation
                  <ChevronRight size={15} strokeWidth={2.2} />
                </motion.button>
              </motion.div>
            </motion.div>
          </InView>

          {/* ── Footer ── */}
          <footer className="border-t border-black/[0.05] pt-5 pb-6 flex items-center justify-between">
            <p className="text-[11px] font-sans font-medium text-[#23152C]/30 uppercase tracking-wide">
              &copy; 2026 Sonder Radical Empathy Training
            </p>
            <div className="flex items-center gap-5">
              {['Privacy', 'Terms', 'Support'].map((l) => (
                <a key={l} href="#" className="text-[11px] font-sans text-[#23152C]/35 hover:text-[#23152C]/60 transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </footer>

        </main>
      </div>
    </motion.div>
  );
}
