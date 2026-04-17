import { AnimatePresence, motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  CheckSquare, 
  GraduationCap, 
  DollarSign, 
  Heart, 
  Settings, 
  Bell, 
  Search, 
  Zap
} from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import bgPremium from '../../assets/bg-premium.png';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { id: 'ai', label: 'Nexus Intelligence', icon: MessageSquare, path: '/ai' },
  { id: 'community', label: 'Network & Community', icon: Users, path: '/community' },
  { id: 'tasks', label: 'Workflow Engine', icon: CheckSquare, path: '/tasks' },
  { id: 'learning', label: 'Evolution Hub', icon: GraduationCap, path: '/learning' },
  { id: 'economy', label: 'Digital Economy', icon: DollarSign, path: '/economy' },
  { id: 'wellbeing', label: 'Digital Wellbeing', icon: Heart, path: '/wellbeing' },
];

const AppLayout = () => {

  return (
    <div className="nexus-app-container">
      {/* Immersive Background */}
      <img src={bgPremium} className="immersive-bg" alt="bg" />
      
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="nexus-sidebar relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        
        <div className="flex items-center gap-4 mb-12 px-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Zap size={22} className="text-white fill-current" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter">NEXUS</h1>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar pr-2">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group
                ${isActive 
                  ? 'bg-gradient-to-r from-indigo-500/10 to-transparent text-white border-l-2 border-indigo-500' 
                  : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/5'}
              `}
            >
              <item.icon size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-[15px] font-semibold tracking-tight">{item.label}</span>
              {item.id === 'ai' && (
                <span className="ml-auto w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/5 space-y-4">
          <NavLink
            to="/settings"
            className="flex items-center gap-4 px-5 py-3 text-zinc-500 hover:text-white transition-colors"
          >
            <Settings size={20} />
            <span className="font-semibold">System Settings</span>
          </NavLink>
          
          <div className="p-4 bg-white/5 rounded-3xl border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-indigo-500/30 p-0.5">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=Nexus" className="rounded-full" alt="avatar" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">Enterprise Node</p>
                <p className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">Secure Session</p>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Area */}
      <main className="nexus-main flex flex-col backdrop-blur-sm">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 bg-black/20 sticky top-0 z-10">
          <div className="flex items-center gap-6 bg-white/5 border border-white/5 rounded-2xl px-6 py-2.5 w-[450px] group focus-within:border-indigo-500/30 transition-all">
            <Search size={18} className="text-zinc-500 group-focus-within:text-indigo-500" />
            <input 
              type="text" 
              placeholder="Search across the ecosystem..." 
              className="bg-transparent border-none outline-none text-sm w-full font-medium"
            />
            <span className="text-[10px] text-zinc-600 font-bold px-2 py-0.5 border border-white/10 rounded-md">⌘K</span>
          </div>

          <div className="flex items-center gap-5">
            <button className="relative p-2.5 text-zinc-400 hover:text-white transition-colors">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full" />
            </button>
            <div className="h-8 w-[1px] bg-white/5 mx-2" />
            <button className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-all text-sm">
              <Zap size={16} /> Deploy Agent
            </button>
          </div>
        </header>

        <div className="flex-1 p-10 overflow-y-auto relative">
           <AnimatePresence mode="wait">
             <Outlet />
           </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
