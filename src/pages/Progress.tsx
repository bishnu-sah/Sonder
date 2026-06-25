import { motion } from 'framer-motion';
import {
  BarChart3,
  BookOpen,
  ChevronRight,
  HelpCircle,
  Home,
  Lock,
  LogOut,
  Medal,
  MessageCircle,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  UsersRound,
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../utils/logout';

const plum = '#3B1E35';

const navItems = [
  { icon: Home, label: 'Home', path: '/dashboard' },
  { icon: BookOpen, label: 'Library', path: '/library' },
  { icon: Users, label: 'Roleplay', path: '/roleplay' },
  { icon: BarChart3, label: 'Progress', path: '/progress' },
  { icon: UsersRound, label: 'Team', path: '/team' },
];

const cardReveal = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.62 },
  }),
};

function ProgressSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 z-40 flex h-screen w-[220px] flex-col bg-[#FBF8F6] px-4 py-8"
    >
      <div className="px-2">
        <h1 className="font-serif text-[25px] font-semibold leading-none tracking-tight text-[#241328]">
          Sonder
        </h1>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#241328]/42">
          Empathy Training
        </p>
      </div>

      <nav className="mt-12 flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <li key={item.label}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`relative flex h-12 w-full items-center gap-3 rounded-xl px-4 text-[14px] font-semibold transition-all duration-300 ${
                    active
                      ? 'text-white shadow-[0_16px_30px_rgba(59,30,53,0.18)]'
                      : 'text-[#241328]/52 hover:bg-white hover:text-[#241328]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="progress-active-nav"
                      className="absolute inset-0 rounded-xl bg-[#3B1E35]"
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                    />
                  )}
                  <item.icon className="relative z-10" size={18} strokeWidth={2} />
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/roleplay')}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#3B1E35] text-[13px] font-bold text-white shadow-[0_18px_34px_rgba(59,30,53,0.18)]"
        >
          <Plus size={17} />
          New Simulation
        </motion.button>
        <div className="mt-9">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[13px] font-semibold text-[#241328]/50 transition-colors hover:text-[#241328]">
            <HelpCircle size={17} />
            Help
          </button>
          <button
            onClick={() => logout(navigate)}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[13px] font-semibold text-[#241328]/50 transition-colors hover:text-[#241328]"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </div>
    </motion.aside>
  );
}

function RadarChart() {
  const center = 132;
  const radius = 92;
  const labels = ['Active Listening', 'Emotional Regulation', 'Conflict Resolution', 'Vulnerability', 'Perspective'];
  const mastery = [0.9, 0.78, 0.82, 0.66, 0.86];
  const expert = [0.95, 0.88, 0.9, 0.84, 0.92];

  const point = (i: number, scale = 1) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / labels.length;
    return [center + Math.cos(angle) * radius * scale, center + Math.sin(angle) * radius * scale];
  };
  const polygon = (values: number[]) => values.map((v, i) => point(i, v).join(',')).join(' ');
  const ring = (scale: number) => labels.map((_, i) => point(i, scale).join(',')).join(' ');

  return (
    <div className="relative h-[312px]">
      <svg viewBox="0 0 264 264" className="mx-auto h-[264px] w-[264px] overflow-visible">
        {[0.25, 0.5, 0.75, 1].map((r) => (
          <polygon key={r} points={ring(r)} fill="none" stroke="#E7DDD6" strokeWidth="1" />
        ))}
        {labels.map((_, i) => {
          const [x, y] = point(i);
          return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="#E7DDD6" strokeWidth="1" />;
        })}
        <motion.polygon
          points={polygon(expert)}
          fill="rgba(232,115,74,0.13)"
          stroke="#E8734A"
          strokeWidth="2"
          strokeDasharray="6 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.35 }}
        />
        <motion.polygon
          points={polygon(mastery)}
          fill="rgba(59,30,53,0.17)"
          stroke={plum}
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.35, delay: 0.2 }}
        />
        {mastery.map((value, i) => {
          const [cx, cy] = point(i, value);
          return (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="4"
              fill={plum}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.08, type: 'spring', stiffness: 220 }}
            />
          );
        })}
      </svg>
      {labels.map((label, i) => {
        const [x, y] = point(i, 1.23);
        return (
          <span
            key={label}
            className="absolute w-[104px] -translate-x-1/2 -translate-y-1/2 text-center text-[10px] font-semibold leading-tight text-[#2D1B2E]/56"
            style={{ left: `calc(50% - 132px + ${x}px)`, top: `${y}px` }}
          >
            {label}
          </span>
        );
      })}
    </div>
  );
}

function Histogram() {
  const bars = [26, 38, 46, 58, 67, 78, 94, 72, 55, 39, 24];
  return (
    <div className="mt-9">
      <div className="flex h-[190px] items-end gap-3 border-b border-white/15 px-2">
        {bars.map((height, index) => {
          const isUser = index === 6;
          return (
            <div key={index} className="relative flex flex-1 justify-center">
              {isUser && (
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="absolute -top-8 rounded-full bg-white px-3 py-1 text-[10px] font-black tracking-[0.16em] text-[#4A2A43]"
                >
                  YOU
                </motion.span>
              )}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height }}
                transition={{ duration: 0.85, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full rounded-t-[10px] ${isUser ? 'bg-[#F1A15C]' : 'bg-white/24'}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TrendChart() {
  const paths = {
    empathy: 'M18 172 C115 132 170 104 260 82 C335 65 408 45 520 30',
    clarity: 'M18 190 C110 166 178 146 260 118 C345 89 418 106 520 70',
    directness: 'M18 205 C105 196 172 176 260 144 C350 120 424 92 520 92',
  };
  const points = [
    [18, 172], [260, 82], [520, 30],
    [18, 190], [260, 118], [520, 70],
    [18, 205], [260, 144], [520, 92],
  ];
  return (
    <div className="mt-8 rounded-[22px] bg-[#FBF8F6] p-5">
      <svg viewBox="0 0 540 230" className="h-[270px] w-full overflow-visible">
        {[40, 85, 130, 175, 220].map((y) => (
          <line key={y} x1="0" y1={y} x2="540" y2={y} stroke="#E8DFDA" strokeWidth="1" />
        ))}
        {Object.entries(paths).map(([key, d], i) => (
          <motion.path
            key={key}
            d={d}
            fill="none"
            stroke={key === 'empathy' ? plum : key === 'clarity' ? '#E8734A' : '#5D8D63'}
            strokeWidth={key === 'empathy' ? 4 : 3}
            strokeLinecap="round"
            strokeDasharray={key === 'clarity' ? '10 10' : undefined}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.35, delay: 0.22 + i * 0.12, ease: 'easeInOut' }}
          />
        ))}
        {points.map(([cx, cy], index) => (
          <motion.circle
            key={`${cx}-${cy}-${index}`}
            cx={cx}
            cy={cy}
            r="5"
            fill="#FBF8F6"
            stroke={index < 3 ? plum : index < 6 ? '#E8734A' : '#5D8D63'}
            strokeWidth="3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + index * 0.07, type: 'spring', stiffness: 260 }}
          />
        ))}
      </svg>
      <div className="grid grid-cols-3 px-2 text-[12px] font-semibold text-[#2D1B2E]/45">
        <span>October</span>
        <span className="text-center">November</span>
        <span className="text-right">December</span>
      </div>
    </div>
  );
}

const achievements = [
  { title: 'Peacemaker', text: '5 Tension Diffusals', icon: ShieldCheck, color: '#E8734A', locked: false },
  { title: 'Clarity Master', text: 'Top feedback recipient', icon: Star, color: '#D8A13C', locked: false },
  { title: 'Mindful Mentor', text: '3 Reflection Blocks', icon: Medal, color: '#5D8D63', locked: false },
  { title: 'Radical Empath', text: 'Locked', icon: Lock, color: '#AFA6AB', locked: true },
  { title: 'Culture Architect', text: 'Locked', icon: Lock, color: '#AFA6AB', locked: true },
];

export default function Progress() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#FBF8F6] text-[#241328]"
    >
      <ProgressSidebar />
      <main className="ml-[220px] min-h-screen bg-[#FBF8F6] px-6 py-8 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-[1280px] space-y-9">
          <motion.section
            variants={cardReveal}
            initial="hidden"
            animate="visible"
            custom={0}
            className="grid gap-8 rounded-[34px] bg-[linear-gradient(135deg,#FFFDF9_0%,#F6ECE5_53%,#F1E5E0_100%)] p-8 shadow-[0_24px_70px_rgba(59,30,53,0.09)] lg:grid-cols-[1fr_330px] lg:p-11"
          >
            <div className="flex flex-col justify-center">
              <span className="w-fit rounded-full bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#7D625C]">
                Current Status
              </span>
              <p className="mt-7 text-[17px] font-semibold text-[#3B1E35]">Level 4: Master Mediator</p>
              <h2 className="mt-3 font-serif text-[52px] font-semibold leading-[1.03] tracking-normal text-[#241328] md:text-[68px]">
                Your Leadership Growth
              </h2>
              <p className="mt-5 max-w-[700px] text-[16px] leading-8 text-[#241328]/58">
                Reflecting on your journey from authority to connection. Your empathy score has increased by 12% this month, placing you in the top tier of emerging leaders.
              </p>
            </div>
            <div className="grid content-center gap-5">
              {[
                ['Next Milestone', 'Radical Empath', '92/95'],
                ['Activity Score', '842', ''],
              ].map(([label, value, meta], index) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -8, boxShadow: '0 26px 52px rgba(59,30,53,0.14)' }}
                  className="rounded-[24px] border border-white/80 bg-white/78 p-6 shadow-[0_16px_36px_rgba(59,30,53,0.08)] backdrop-blur"
                >
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#241328]/38">{label}</p>
                  <p className={`${index === 1 ? 'text-[44px]' : 'text-[25px]'} mt-4 font-serif font-semibold leading-none text-[#3B1E35]`}>
                    {value}
                  </p>
                  {meta && <p className="mt-3 text-[13px] font-bold text-[#E8734A]">{meta}</p>}
                </motion.div>
              ))}
            </div>
          </motion.section>

          <div className="grid gap-9 xl:grid-cols-[1fr_360px]">
            <div className="space-y-9">
              <motion.section
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={1}
                whileHover={{ y: -8, boxShadow: '0 28px 54px rgba(59,30,53,0.1)' }}
                className="rounded-[30px] bg-white p-8 shadow-[0_18px_46px_rgba(59,30,53,0.06)]"
              >
                <div className="grid gap-7 lg:grid-cols-[1fr_260px]">
                  <div>
                    <h3 className="font-serif text-[31px] font-semibold text-[#241328]">Skills Radar</h3>
                    <p className="mt-2 text-[14px] text-[#241328]/50">Proficiency across 5 core empathy dimensions</p>
                    <RadarChart />
                    <div className="mt-2 flex gap-7 text-[12px] font-bold text-[#241328]/60">
                      <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-full bg-[#3B1E35]" />Your Mastery</span>
                      <span className="flex items-center gap-2"><i className="h-3 w-3 rounded-full bg-[#E8734A]" />Industry Expert</span>
                    </div>
                  </div>
                  <div className="rounded-[24px] bg-[#FBF8F6] p-6">
                    <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#3B1E35]/45">Skill Gap Analysis</p>
                    <h4 className="mt-5 font-serif text-[24px] font-semibold leading-tight text-[#241328]">
                      Vulnerability is your next meaningful growth edge.
                    </h4>
                    <p className="mt-4 text-[14px] leading-7 text-[#241328]/56">
                      Your highest gains are coming from Active Listening and Perspective. Focused practice in vulnerable leadership will close the final gap to Level 5.
                    </p>
                  </div>
                </div>
              </motion.section>

              <motion.section
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={2}
                whileHover={{ y: -8, boxShadow: '0 28px 54px rgba(59,30,53,0.15)' }}
                className="rounded-[30px] bg-[#4A2A43] p-8 text-white shadow-[0_24px_58px_rgba(74,42,67,0.2)]"
              >
                <h3 className="font-serif text-[32px] font-semibold">Peer Distribution</h3>
                <p className="mt-2 max-w-[620px] text-[15px] leading-7 text-white/62">
                  You're in the top 15% for Active Listening among Team Leads globally.
                </p>
                <Histogram />
                <div className="mt-8 flex items-center justify-between text-[13px] font-bold text-white/70">
                  <span>Score: <b className="text-white">88/100</b></span>
                  <span>Average: <b className="text-white">72</b></span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/14">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '88%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-[#F1A15C]"
                  />
                </div>
              </motion.section>

              <motion.section
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={3}
                whileHover={{ y: -8, boxShadow: '0 28px 54px rgba(59,30,53,0.1)' }}
                className="rounded-[30px] bg-white p-8 shadow-[0_18px_46px_rgba(59,30,53,0.06)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <h3 className="font-serif text-[32px] font-semibold">Performance Trends</h3>
                    <p className="mt-2 text-[14px] text-[#241328]/50">Visualizing your growth over the last quarter</p>
                  </div>
                  <div className="rounded-full bg-[#F4EEE9] p-1 text-[12px] font-bold text-[#241328]/54">
                    <button className="rounded-full bg-[#3B1E35] px-5 py-2 text-white">Quarterly</button>
                    <button className="px-5 py-2">Monthly</button>
                  </div>
                </div>
                <TrendChart />
                <div className="mt-6 flex flex-wrap gap-6 text-[12px] font-bold text-[#241328]/58">
                  <span className="flex items-center gap-2"><i className="h-[3px] w-8 rounded-full bg-[#3B1E35]" />Empathy</span>
                  <span className="flex items-center gap-2"><i className="h-[3px] w-8 rounded-full border-t-2 border-dashed border-[#E8734A]" />Clarity</span>
                  <span className="flex items-center gap-2"><i className="h-[3px] w-8 rounded-full bg-[#5D8D63]" />Directness</span>
                </div>
              </motion.section>
            </div>

            <aside className="space-y-9">
              <motion.section
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={2}
                whileHover={{ y: -8, boxShadow: '0 28px 54px rgba(59,30,53,0.1)' }}
                className="rounded-[30px] bg-white p-7 shadow-[0_18px_46px_rgba(59,30,53,0.06)]"
              >
                <h3 className="font-serif text-[29px] font-semibold">Focus Areas</h3>
                <div className="mt-7 space-y-4">
                  {[
                    ['The Vulnerable Leader', 'Simulation focused on sharing mistakes with your team.', 'Priority High'],
                    ['Negotiating Needs', 'Practice setting boundaries without losing connection.', 'Recommended'],
                  ].map(([title, text, badge], index) => (
                    <div key={title} className="rounded-[22px] bg-[#FBF8F6] p-5">
                      <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] ${index === 0 ? 'bg-[#FDE8DF] text-[#C8552E]' : 'bg-[#ECE7EF] text-[#3B1E35]'}`}>
                        {badge}
                      </span>
                      <h4 className="mt-4 font-serif text-[21px] font-semibold text-[#241328]">{title}</h4>
                      <p className="mt-2 text-[13px] leading-6 text-[#241328]/54">{text}</p>
                    </div>
                  ))}
                </div>
                <motion.button whileHover={{ scale: 1.04 }} className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#3B1E35] text-[13px] font-bold text-white">
                  View All Training
                  <ChevronRight size={16} />
                </motion.button>
              </motion.section>

              <motion.section
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={3}
                whileHover={{ y: -8, boxShadow: '0 28px 54px rgba(59,30,53,0.1)' }}
                className="rounded-[30px] bg-white p-7 shadow-[0_18px_46px_rgba(59,30,53,0.06)]"
              >
                <div className="border-t-4 border-[#E8734A] pt-6">
                  <Sparkles className="text-[#E8734A]" size={24} />
                  <p className="mt-6 font-serif text-[25px] italic leading-[1.38] text-[#241328]">
                    "The most basic of all human needs is the need to understand and be understood."
                  </p>
                  <p className="mt-5 text-[13px] font-bold text-[#241328]/48">Ralph G. Nichols</p>
                  <motion.button whileHover={{ scale: 1.04 }} className="mt-7 h-12 rounded-xl bg-[#3B1E35] px-6 text-[13px] font-bold text-white">
                    Daily Reflection
                  </motion.button>
                </div>
              </motion.section>
            </aside>
          </div>

          <motion.section variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}>
            <h3 className="font-serif text-[32px] font-semibold">Achievement Gallery</h3>
            <p className="mt-2 text-[14px] text-[#241328]/50">Milestones reached on your path to empathy mastery</p>
            <div className="mt-6 grid gap-5 md:grid-cols-5">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.25 }}
                  whileHover={{ y: -8, boxShadow: '0 24px 42px rgba(59,30,53,0.1)' }}
                  className={`rounded-[24px] bg-white p-5 shadow-[0_16px_36px_rgba(59,30,53,0.05)] ${item.locked ? 'opacity-45 grayscale' : ''}`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: item.locked ? '#EEE9E6' : item.color }}>
                    <item.icon className="text-white" size={25} />
                  </div>
                  <h4 className="mt-5 font-serif text-[20px] font-semibold">{item.title}</h4>
                  <p className="mt-2 text-[12px] font-semibold text-[#241328]/45">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <div className="grid gap-9 xl:grid-cols-[1fr_420px]">
            <motion.section
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              whileHover={{ y: -8, boxShadow: '0 28px 54px rgba(59,30,53,0.1)' }}
              className="rounded-[30px] bg-white p-8 shadow-[0_18px_46px_rgba(59,30,53,0.06)]"
            >
              <h3 className="font-serif text-[32px] font-semibold">Recent Breakthroughs</h3>
              <div className="mt-8 space-y-8 border-l border-[#E7DDD6] pl-7">
                {[
                  ['Perfect "Validation" Score', 'During the "Resisting Feedback" simulation, you validated the speaker\'s emotions 3 times before responding to the content.'],
                  ['Empathy Streak: 10 Days', "You've maintained your daily reflection habit for two business weeks straight."],
                ].map(([title, text]) => (
                  <div key={title} className="relative">
                    <span className="absolute -left-[35px] top-1 h-4 w-4 rounded-full border-4 border-white bg-[#E8734A] shadow-[0_0_0_1px_#E8734A]" />
                    <h4 className="font-serif text-[23px] font-semibold">{title}</h4>
                    <p className="mt-2 max-w-[760px] text-[14px] leading-7 text-[#241328]/56">{text}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <div className="grid gap-5">
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 28px 54px rgba(59,30,53,0.16)' }}
                className="relative min-h-[230px] overflow-hidden rounded-[30px] bg-cover bg-center p-7 text-white shadow-[0_18px_46px_rgba(59,30,53,0.1)]"
                style={{ backgroundImage: 'linear-gradient(90deg, rgba(35,21,44,0.78), rgba(35,21,44,0.35)), url(/simulation-hero.png)' }}
              >
                <Trophy size={24} />
                <h3 className="mt-20 font-serif text-[31px] font-semibold">Impact Stories</h3>
                <p className="mt-2 max-w-[300px] text-[14px] leading-6 text-white/74">See how other leads applied these skills to drive team success.</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 28px 54px rgba(59,30,53,0.1)' }}
                className="rounded-[30px] bg-white p-7 shadow-[0_18px_46px_rgba(59,30,53,0.06)]"
              >
                <Target className="text-[#E8734A]" size={26} />
                <h3 className="mt-6 font-serif text-[30px] font-semibold">Ready for Level 5?</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#241328]/56">Unlock "Managing Power Dynamics" by completing one more simulation.</p>
                <motion.button whileHover={{ scale: 1.04 }} className="mt-6 flex h-12 items-center gap-2 rounded-xl bg-[#3B1E35] px-6 text-[13px] font-bold text-white">
                  Start Simulation
                  <MessageCircle size={16} />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
