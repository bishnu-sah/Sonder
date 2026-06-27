import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import {
  Search,
  Bell,
  Settings,
  Download,
  Flame,
  ChevronRight,
  TrendingUp,
  Lightbulb,
} from 'lucide-react';



const recentActivity = [
  {
    module: 'Difficult Feedback Delivery',
    date: 'Jun 18, 2026',
    focus: 'COMPASSION',
    score: 87,
  },
  {
    module: 'Cross-Cultural Negotiation',
    date: 'Jun 16, 2026',
    focus: 'DIRECTNESS',
    score: 74,
  },
  {
    module: 'New Hire Onboarding',
    date: 'Jun 14, 2026',
    focus: 'COMPASSION',
    score: 92,
  },
  {
    module: 'Conflict Resolution',
    date: 'Jun 12, 2026',
    focus: 'DIRECTNESS',
    score: 68,
  },
];

const practiceCards = [
  {
    title: 'The Burnt-Out Superstar',
    desc: 'Navigate a conversation with a top performer showing signs of burnout.',
    image: '/card1.png',
    tag: 'Compassion',
  },
  {
    title: 'Micro-Aggression Repair',
    desc: 'Address a micro-aggression reported by a team member with care.',
    image: '/card2.png',
    tag: 'Validation',
  },
  {
    title: 'Navigating Salary Gaps',
    desc: 'Handle a difficult salary equity conversation with transparency.',
    image: '/card3.png',
    tag: 'Directness',
  },
];

const skillData = [
  { label: 'Compassion', value: 82, color: '#E8734A' },
  { label: 'Directness', value: 65, color: '#4D2946' },
  { label: 'Validation', value: 91, color: '#D4A03C' },
];

// Animation variants
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Dashboard() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F8F5F4]">
      {/* ====== SIDEBAR ====== */}
      <Sidebar />

      {/* ====== MAIN CONTENT ====== */}
      <div className="flex-1 ml-[220px] flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-[72px] shrink-0 flex items-center justify-between px-8 border-b border-black/[0.05] bg-[#F8F5F4]">
          <h2 className="text-[18px] font-serif font-semibold text-[#23152C]">
            Overview
          </h2>
          <div className="flex items-center gap-5">
            {/* Search */}
            <div className="relative">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#23152C]/30"
                strokeWidth={1.8}
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="h-[36px] w-[200px] pl-9 pr-3 rounded-lg bg-white border border-black/[0.06] text-[13px] font-sans text-[#23152C] placeholder:text-[#23152C]/30 focus:outline-none focus:ring-1 focus:ring-[#4D2946]/20 transition-all"
              />
            </div>
            <button className="p-2 rounded-lg hover:bg-white/80 transition-colors relative">
              <Bell size={18} strokeWidth={1.6} className="text-[#23152C]/50" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#E8734A] rounded-full"></span>
            </button>
            <button className="p-2 rounded-lg hover:bg-white/80 transition-colors">
              <Settings
                size={18}
                strokeWidth={1.6}
                className="text-[#23152C]/50"
              />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto px-8 py-7">
          {/* Welcome + Streak Row */}
          <div className="flex items-start justify-between mb-7">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
            >
              <h1 className="text-[28px] font-serif font-semibold text-[#23152C] leading-tight">
                Welcome back, Ishaan.
              </h1>
              <p className="text-[14px] font-sans text-[#23152C]/55 mt-1.5 leading-relaxed">
                You've reached{' '}
                <span className="text-[#E8734A] font-semibold">Level 4</span>{' '}
                proficiency in Active Listening this week.
              </p>
            </motion.div>

            {/* Learning Streak Card */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-[0_1px_4px_rgba(0,0,0,0.04)] border border-black/[0.04] shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFF3ED] flex items-center justify-center">
                <Flame size={20} className="text-[#E8734A]" />
              </div>
              <div>
                <p className="text-[10px] font-sans font-bold tracking-[0.12em] text-[#23152C]/35 uppercase">
                  Learning Streak
                </p>
                <p className="text-[18px] font-serif font-semibold text-[#23152C] leading-tight mt-0.5">
                  12 Days Running
                </p>
              </div>
            </motion.div>
          </div>

          {/* Hero Simulation + Skill Snapshot Row */}
          <div className="grid grid-cols-[1fr_300px] gap-5 mb-7">
            {/* Hero Simulation Card */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden min-h-[260px] group cursor-pointer"
            >
              <img
                src="/DASHBOARD.png"  
                alt="Performance Review Simulation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

              <div className="relative z-10 h-full flex flex-col justify-between p-7">
                {/* Badge */}
                <div>
                  <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-[10px] font-sans font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full border border-white/10">
                    Recommended for You
                  </span>
                </div>
                {/* Title & CTA */}
                <div>
                  <h3 className="text-[22px] font-serif font-semibold text-white leading-snug mb-1.5">
                    Performance Review: Managing a High Performer
                  </h3>
                  <p className="text-[13px] font-sans text-white/60 mb-5 max-w-md leading-relaxed">
                    Practice delivering nuanced feedback to a high-achieving team
                    member who needs to grow in new areas.
                  </p>
                  <button className="inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#d4663f] text-white text-[13px] font-sans font-semibold px-6 py-2.5 rounded-xl transition-colors duration-200">
                    Start Simulation
                    <ChevronRight size={15} strokeWidth={2.2} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Skill Snapshot Card */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="bg-white rounded-2xl p-5 shadow-[0_1px_4px_rgba(0,0,0,0.04)] border border-black/[0.04] flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-[15px] font-serif font-semibold text-[#23152C]">
                  Skill Snapshot
                </h3>
                <button className="text-[12px] font-sans font-medium text-[#E8734A] hover:underline">
                  View Radar
                </button>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4 flex-1">
                {skillData.map((skill) => (
                  <div key={skill.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12.5px] font-sans font-medium text-[#23152C]/70">
                        {skill.label}
                      </span>
                      <span className="text-[12.5px] font-sans font-semibold text-[#23152C]">
                        {skill.value}%
                      </span>
                    </div>
                    <div className="w-full h-[6px] bg-[#F0ECE9] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.value}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Growth Tip */}
              <div className="mt-5 bg-[#FDF8F0] rounded-xl px-4 py-3 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#F5E6C8] flex items-center justify-center shrink-0 mt-0.5">
                  <Lightbulb size={14} className="text-[#D4A03C]" />
                </div>
                <div>
                  <p className="text-[11px] font-sans font-bold text-[#23152C]/50 uppercase tracking-wide">
                    Growth Tip
                  </p>
                  <p className="text-[12px] font-sans text-[#23152C]/60 leading-relaxed mt-0.5">
                    Focus on Directness scenarios to round out your profile.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.04)] border border-black/[0.04] mb-7"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[16px] font-serif font-semibold text-[#23152C]">
                Recent Activity
              </h3>
              <button className="flex items-center gap-1.5 text-[12px] font-sans font-medium text-[#23152C]/45 hover:text-[#23152C]/70 transition-colors">
                <Download size={13} strokeWidth={1.8} />
                Download Report
              </button>
            </div>

            {/* Table */}
            <table className="w-full">
              <thead>
                <tr className="border-b border-black/[0.05]">
                  <th className="text-left pb-3 text-[11px] font-sans font-semibold text-[#23152C]/35 uppercase tracking-wide">
                    Simulation Module
                  </th>
                  <th className="text-left pb-3 text-[11px] font-sans font-semibold text-[#23152C]/35 uppercase tracking-wide">
                    Date
                  </th>
                  <th className="text-left pb-3 text-[11px] font-sans font-semibold text-[#23152C]/35 uppercase tracking-wide">
                    Focus Area
                  </th>
                  <th className="text-right pb-3 text-[11px] font-sans font-semibold text-[#23152C]/35 uppercase tracking-wide">
                    Empathy Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-black/[0.03] last:border-0 hover:bg-[#FDFCFB] transition-colors"
                  >
                    <td className="py-3.5 text-[13px] font-sans font-medium text-[#23152C]">
                      {row.module}
                    </td>
                    <td className="py-3.5 text-[13px] font-sans text-[#23152C]/50">
                      {row.date}
                    </td>
                    <td className="py-3.5">
                      <span
                        className={`inline-block text-[10px] font-sans font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-md ${
                          row.focus === 'COMPASSION'
                            ? 'bg-[#FFF3ED] text-[#E8734A]'
                            : 'bg-[#F3EEF5] text-[#4D2946]'
                        }`}
                      >
                        {row.focus}
                      </span>
                    </td>
                    <td className="py-3.5 text-right">
                      <span className="inline-flex items-center gap-1.5 text-[13.5px] font-sans font-semibold text-[#23152C]">
                        {row.score >= 80 && (
                          <TrendingUp
                            size={13}
                            className="text-green-500"
                            strokeWidth={2}
                          />
                        )}
                        {row.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Ready to Practice */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeUp}
            className="mb-7"
          >
            <h3 className="text-[16px] font-serif font-semibold text-[#23152C] mb-4">
              Ready to Practice
            </h3>
            <div className="grid grid-cols-3 gap-5">
              {practiceCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial="hidden"
                  animate="visible"
                  custom={6 + i}
                  variants={fadeUp}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.04)] border border-black/[0.04] group cursor-pointer hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                >
                  <div className="h-[140px] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span
                      className={`inline-block text-[9.5px] font-sans font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-md mb-2.5 ${
                        card.tag === 'Compassion'
                          ? 'bg-[#FFF3ED] text-[#E8734A]'
                          : card.tag === 'Validation'
                          ? 'bg-[#FDF8F0] text-[#D4A03C]'
                          : 'bg-[#F3EEF5] text-[#4D2946]'
                      }`}
                    >
                      {card.tag}
                    </span>
                    <h4 className="text-[14px] font-serif font-semibold text-[#23152C] leading-snug mb-1">
                      {card.title}
                    </h4>
                    <p className="text-[12px] font-sans text-[#23152C]/50 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard Footer */}
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
        </main>
      </div>
    </div>
  );
}
