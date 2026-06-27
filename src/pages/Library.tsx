import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Clock,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';



/* ─── difficulty filters ─── */
const difficulties = ['Easy', 'Medium', 'Hard'] as const;

/* ─── topic filters ─── */
const topics = ['Conflict', 'Growth', 'Feedback', 'DEI'] as const;

/* ─── scenario cards ─── */
const scenarios = [
  {
    difficulty: 'Medium',
    time: '10 mins',
    title: 'Giving Constructive Feedback on Late Deliverables',
    tags: ['#Empathy', '#Clarity'],
  },
  {
    difficulty: 'Hard',
    time: '15 mins',
    title: 'Navigating a High-Stakes Salary Negotiation',
    tags: ['#Negotiation', '#Retention'],
  },
  {
    difficulty: 'Easy',
    time: '5 mins',
    title: 'Active Listening in Daily 1-on-1s',
    tags: ['#Listening', '#Trust'],
  },
  {
    difficulty: 'Medium',
    time: '12 mins',
    title: 'Mediating Conflict Between Two Senior Peers',
    tags: ['#Mediation', '#Conflict'],
  },
  {
    difficulty: 'Medium',
    time: '8 mins',
    title: 'Delivering a Change Management Announcement',
    tags: ['#Change', '#Communication'],
  },
];

/* ─── animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── helpers ─── */
function difficultyColor(d: string) {
  switch (d) {
    case 'Easy':
      return 'bg-[#E8F5E9] text-[#2E7D32]';
    case 'Medium':
      return 'bg-[#FFF3ED] text-[#E8734A]';
    case 'Hard':
      return 'bg-[#FDEAEA] text-[#C62828]';
    default:
      return '';
  }
}

export default function Library() {
  const [searchValue, setSearchValue] = useState('');
  const [activeDifficulty, setActiveDifficulty] = useState<string>('Medium');
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#FAF7F5]">
      {/* ════════════════ SIDEBAR ════════════════ */}
      <Sidebar />

      {/* ════════════════ MAIN ════════════════ */}
      <div className="flex-1 ml-[220px] flex flex-col h-screen overflow-hidden">
        {/* Scrollable Content (no separate header bar — title is inside scroll area) */}
        <main className="flex-1 overflow-y-auto">
          <div className="px-10 py-9">
            {/* ─── Page Header ─── */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="flex items-start justify-between mb-8"
            >
              <div className="max-w-xl">
                <h1 className="text-[30px] font-serif font-semibold text-[#23152C] leading-tight">
                  Scenario Library
                </h1>
                <p className="text-[14px] font-sans text-[#23152C]/50 mt-2 leading-relaxed">
                  Explore real-world leadership challenges designed to build
                  emotional intelligence and practical management skills.
                </p>
              </div>

              {/* Search */}
              <div className="relative shrink-0">
                <Search
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#23152C]/30"
                  strokeWidth={1.8}
                />
                <input
                  type="text"
                  placeholder="Search scenarios..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="h-[40px] w-[240px] pl-10 pr-4 rounded-xl bg-white border border-black/[0.06] text-[13px] font-sans text-[#23152C] placeholder:text-[#23152C]/30 focus:outline-none focus:ring-1 focus:ring-[#4D2946]/20 transition-all"
                />
              </div>
            </motion.div>

            {/* ─── Featured Learning Path Card ─── */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden mb-9"
              style={{
                background: 'linear-gradient(135deg, #4D2946 0%, #3A1D36 50%, #2D1529 100%)',
                minHeight: '300px',
              }}
            >
              <div className="flex items-center h-[300px]">
                {/* Left content */}
                <div className="flex-1 pl-10 pr-6 py-10 relative z-10">
                  <span className="inline-block text-[10px] font-sans font-bold tracking-[0.14em] uppercase text-white/50 mb-4">
                    Featured Learning Path
                  </span>
                  <h2 className="text-[28px] font-serif font-semibold text-white leading-tight mb-3">
                    Building DEI Competence
                  </h2>
                  <p className="text-[13.5px] font-sans text-white/50 leading-relaxed max-w-sm mb-7">
                    A curated multi-scenario journey to develop your ability to
                    lead diverse teams with confidence, fairness, and empathy.
                  </p>
                  <button className="inline-flex items-center gap-2 bg-[#F0B08A] hover:bg-[#E8A47A] text-[#2D1529] text-[13px] font-sans font-semibold px-6 py-3 rounded-xl transition-colors duration-200">
                    Start Learning Path
                    <ArrowRight size={15} strokeWidth={2.2} />
                  </button>
                </div>

                {/* Right illustration */}
                <div className="w-[340px] h-full shrink-0 relative overflow-hidden">
                  {/* Soft glow behind illustration */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#4D2946]/30 to-[#4D2946]" />
                  <img
                    src="/people.png"
                    alt="DEI Learning Path"
                    className="absolute right-0 bottom-0 h-full w-full object-cover object-center opacity-80"
                  />
                </div>
              </div>

              {/* Decorative soft glow */}
              <div className="absolute top-[-40%] right-[-10%] w-[50%] aspect-square rounded-full bg-[#E8734A]/8 blur-3xl pointer-events-none" />
            </motion.div>

            {/* ─── Filters ─── */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="flex items-center gap-6 mb-7"
            >
              {/* Difficulty */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-sans font-semibold text-[#23152C]/35 uppercase tracking-wide mr-1">
                  Difficulty
                </span>
                {difficulties.map((d) => (
                  <button
                    key={d}
                    onClick={() => setActiveDifficulty(d)}
                    className={`px-4 py-1.5 rounded-full text-[12px] font-sans font-medium transition-all duration-200 ${
                      activeDifficulty === d
                        ? 'bg-[#4D2946] text-white'
                        : 'bg-white text-[#23152C]/60 border border-black/[0.06] hover:bg-[#F3EEF5] hover:text-[#23152C]/80'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-5 bg-black/[0.08]" />

              {/* Topics */}
              <div className="flex items-center gap-2">
                {topics.map((t) => (
                  <button
                    key={t}
                    onClick={() =>
                      setActiveTopic(activeTopic === t ? null : t)
                    }
                    className={`px-4 py-1.5 rounded-full text-[12px] font-sans font-medium transition-all duration-200 ${
                      activeTopic === t
                        ? 'bg-[#4D2946] text-white'
                        : 'bg-white text-[#23152C]/60 border border-black/[0.06] hover:bg-[#F3EEF5] hover:text-[#23152C]/80'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* ─── Scenario Grid ─── */}
            <div className="grid grid-cols-3 gap-5 mb-9">
              {scenarios.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial="hidden"
                  animate="visible"
                  custom={3 + i}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-5 shadow-[0_1px_4px_rgba(0,0,0,0.04)] border border-black/[0.04] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer group"
                >
                  {/* Top row: difficulty + time */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-[10px] font-sans font-bold tracking-[0.06em] uppercase px-2.5 py-1 rounded-md ${difficultyColor(
                          card.difficulty
                        )}`}
                      >
                        {card.difficulty}
                      </span>
                      <span className="flex items-center gap-1 text-[11.5px] font-sans text-[#23152C]/40">
                        <Clock size={12} strokeWidth={1.8} />
                        {card.time}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-[15px] font-serif font-semibold text-[#23152C] leading-snug mb-3 group-hover:text-[#4D2946] transition-colors">
                      {card.title}
                    </h4>

                    {/* Tags */}
                    <div className="flex items-center gap-2 mb-5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-sans text-[#23152C]/35"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <button className="w-full py-2.5 rounded-xl border border-black/[0.06] text-[12.5px] font-sans font-semibold text-[#23152C]/60 hover:bg-[#4D2946] hover:text-white hover:border-[#4D2946] transition-all duration-200">
                    View Details
                  </button>
                </motion.div>
              ))}

              {/* ─── Quote Card (card 6) ─── */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={8}
                variants={fadeUp}
                className="bg-[#FDF2EF] rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-[#F5DDD4]/60 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <Quote
                  size={28}
                  className="text-[#E8734A]/30 mb-4 rotate-180"
                  strokeWidth={1.5}
                />
                <p className="text-[14px] font-serif italic text-[#23152C]/70 leading-relaxed mb-5 max-w-[220px]">
                  "Empathy is not just a feeling; it's a practice of
                  professional courage."
                </p>
                <span className="text-[11px] font-sans font-semibold text-[#23152C]/30 uppercase tracking-wider">
                  Journal Reflection
                </span>
              </motion.div>
            </div>

            {/* ─── "Ready to dive deeper?" Section ─── */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={9}
              variants={fadeUp}
              className="flex flex-col items-center text-center py-10 mb-6"
            >
              <Quote
                size={32}
                className="text-[#4D2946]/15 mb-4 rotate-180"
                strokeWidth={1.5}
              />
              <h3 className="text-[22px] font-serif font-semibold text-[#23152C] mb-3">
                Ready to dive deeper?
              </h3>
              <p className="text-[14.5px] font-serif italic text-[#23152C]/50 leading-relaxed max-w-md">
                "The most important thing in communication is hearing what isn't
                said."
              </p>
              <p className="text-[12.5px] font-sans text-[#23152C]/35 mt-2">
                — Peter Drucker
              </p>
            </motion.div>

            {/* ─── Growth Recommendation Card ─── */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={10}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.04)] border border-black/[0.04] mb-9"
            >
              <span className="text-[10px] font-sans font-bold tracking-[0.12em] text-[#23152C]/30 uppercase mb-2 block">
                Growth Recommendation
              </span>
              <p className="text-[14px] font-sans text-[#23152C]/65 leading-relaxed max-w-2xl mb-3">
                Based on your recent modules, we recommend the 'Managing Up'
                series to help refine your communication with executive
                stakeholders.
              </p>
              <button className="inline-flex items-center gap-1.5 text-[13px] font-sans font-semibold text-[#E8734A] hover:underline">
                Explore Series
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </motion.div>

            {/* ─── Footer ─── */}
            <footer className="border-t border-black/[0.05] pt-5 pb-6 flex items-center justify-between">
              <p className="text-[11px] font-sans font-medium text-[#23152C]/30 uppercase tracking-wide">
                &copy; 2026 Sonder Radical Empathy Training
              </p>
              <div className="flex items-center gap-5">
                <a
                  href="#"
                  className="text-[11px] font-sans text-[#23152C]/35 hover:text-[#23152C]/60 transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-[11px] font-sans text-[#23152C]/35 hover:text-[#23152C]/60 transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-[11px] font-sans text-[#23152C]/35 hover:text-[#23152C]/60 transition-colors"
                >
                  Support
                </a>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
