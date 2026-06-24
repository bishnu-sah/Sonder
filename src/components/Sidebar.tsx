import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  BookOpen,
  Users,
  BarChart3,
  UsersRound,
  Plus,
  HelpCircle,
  LogOut,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { icon: Home,       label: 'Home',     path: '/dashboard' },
  { icon: BookOpen,   label: 'Library',  path: '/library'   },
  { icon: Users,      label: 'Roleplay', path: '/roleplay'  },
  { icon: BarChart3,  label: 'Progress', path: '/progress'  },
  { icon: UsersRound, label: 'Team',     path: '/team'      },
];

export default function Sidebar() {
  const navigate  = useNavigate();
  const { pathname } = useLocation();

  return (
    <aside className="w-[220px] shrink-0 bg-[#4D2946] flex flex-col h-full fixed left-0 top-0 z-40">
      {/* Logo */}
      <div className="px-5 pt-7 pb-1">
        <h1 className="font-serif text-[22px] font-semibold text-white tracking-tight leading-none">
          Sonder
        </h1>
        <p className="text-[9px] font-sans font-semibold tracking-[0.18em] text-white/40 uppercase mt-1">
          Empathy Training
        </p>
      </div>

      {/* Nav */}
      <nav className="mt-8 px-3 flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path ||
              (item.path === '/dashboard' && pathname === '/');

            return (
              <li key={item.label}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-sans font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/50 hover:text-white/80 hover:bg-white/[0.04]'
                  }`}
                >
                  {/* Active pill background */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-active-pill"
                        className="absolute inset-0 rounded-xl bg-white/[0.08]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      />
                    )}
                  </AnimatePresence>

                  <item.icon
                    size={17}
                    strokeWidth={isActive ? 2 : 1.8}
                    className="relative z-10 transition-all duration-200"
                  />
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* New Simulation */}
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: '#d4663f' }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/roleplay')}
          className="mt-8 w-full flex items-center justify-center gap-2 bg-[#E8734A] text-white text-[13px] font-semibold font-sans py-2.5 rounded-xl transition-colors duration-200"
        >
          <Plus size={16} strokeWidth={2.2} />
          New Simulation
        </motion.button>
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-5">
        <div className="flex items-center gap-2.5 px-3 py-3 rounded-xl bg-white/[0.06] mb-4">
          <img
            src="/profile-avatar.png"
            alt="Ishaan preet"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-white/10"
          />
          <div className="min-w-0">
            <p className="text-[12.5px] font-sans font-semibold text-white truncate leading-tight">
              Ishaan preet
            </p>
            <p className="text-[10px] font-sans text-white/40 leading-tight">
              Senior Manager
            </p>
          </div>
        </div>

        <div className="space-y-0.5">
          <button className="w-full flex items-center gap-2.5 px-3 py-2 text-[12.5px] font-sans text-white/45 hover:text-white/70 transition-colors duration-200">
            <HelpCircle size={15} strokeWidth={1.6} />
            Help
          </button>
          <button className="w-full flex items-center gap-2.5 px-3 py-2 text-[12.5px] font-sans text-white/45 hover:text-white/70 transition-colors duration-200">
            <LogOut size={15} strokeWidth={1.6} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
