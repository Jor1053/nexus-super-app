import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Search, 
  Filter, 
  ChevronDown, 
  MoreHorizontal, 
  Zap, 
  LayoutList, 
  Kanban, 
  Calendar,
  AlertCircle
} from 'lucide-react';

const TaskRow = ({ title, status, priority, time, team }: any) => {
  const [done, setDone] = useState(status === 'Done');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group flex items-center gap-6 p-6 border-b border-white/5 hover:bg-white/[0.02] transition-all cursor-pointer ${done ? 'opacity-50' : ''}`}
    >
      <button onClick={() => setDone(!done)} className={`transition-colors ${done ? 'text-indigo-500' : 'text-zinc-600 hover:text-zinc-400'}`}>
        {done ? <CheckCircle2 size={22} /> : <Circle size={22} />}
      </button>
      
      <div className="flex-1 min-w-0">
        <h4 className={`text-base font-bold truncate ${done ? 'line-through' : ''}`}>{title}</h4>
      </div>
      
      <div className="flex items-center gap-8 text-xs font-bold whitespace-nowrap">
        <div className="flex items-center gap-2 text-zinc-500 w-32">
          <Clock size={14} /> <span>{time}</span>
        </div>
        
        <div className={`w-24 px-3 py-1 rounded-lg text-center uppercase tracking-widest text-[10px] border ${
          priority === 'High' ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' :
          priority === 'Med' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' :
          'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
        }`}>
          {priority}
        </div>

        <div className="flex -space-x-2 w-16">
          {[1,2].map(i => (
             <div key={i} className="w-6 h-6 rounded-full border border-black bg-zinc-800" />
          ))}
        </div>
        
        <button className="p-2 text-zinc-600 hover:text-white transition-opacity opacity-0 group-hover:opacity-100">
           <MoreHorizontal size={18} />
        </button>
      </div>
    </motion.div>
  );
};

const Tasks = () => {
  return (
    <div className="max-w-[1400px] mx-auto space-y-12">
      {/* Workflow Header */}
      <header className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
        <div className="space-y-4">
           <h1 className="text-6xl font-black tracking-tight leading-none">Workflow <br /> <span className="text-zinc-500">Orchestration</span></h1>
           <p className="text-zinc-500 text-lg font-medium">12 active nodes • 4 autonomous optimizations pending</p>
        </div>
        
        <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/5">
           {[
             { label: 'List', icon: LayoutList, active: true },
             { label: 'Board', icon: Kanban, active: false },
             { label: 'Timeline', icon: Calendar, active: false },
           ].map(view => (
             <button key={view.label} className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${view.active ? 'bg-white text-black shadow-xl' : 'text-zinc-500 hover:text-zinc-200'}`}>
               <view.icon size={16} /> {view.label}
             </button>
           ))}
        </div>
      </header>

      {/* Control Strip */}
      <section className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-white/5 border border-white/5 rounded-3xl">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
            <input type="text" placeholder="Filter tasks..." className="w-full bg-black/40 border border-white/5 rounded-xl py-2.5 pl-12 pr-4 text-sm font-medium outline-none focus:border-indigo-500/30" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 text-zinc-500 font-bold text-xs hover:text-white transition-colors">
            <Filter size={16} /> Views <ChevronDown size={14} />
          </button>
        </div>
        
        <button className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-xl font-black text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20">
          <Plus size={20} /> Create Objective
        </button>
      </section>

      {/* Workflow Content */}
      <section className="glass-panel overflow-hidden">
        <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
           <div className="flex items-center gap-3">
              <AlertCircle size={18} className="text-indigo-400" />
              <h3 className="font-black text-sm uppercase tracking-widest">Immediate Horizon</h3>
           </div>
           <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">4 Tasks</span>
        </div>
        
        <div className="flex flex-col">
          <TaskRow title="Implement Global Identity Layer v2" time="Today, 2:00 PM" priority="High" team={3} />
          <TaskRow title="Neural Core Synthesis: Dataset Alpha" time="Tomorrow, 10:00 AM" priority="High" team={2} />
          <TaskRow title="Security Audit: Edge Nodes" time="Oct 24" priority="Med" team={1} />
          <TaskRow title="Marketplace Smart Contract Deployment" time="Oct 28" priority="Low" team={5} />
        </div>
        
        <div className="p-6 bg-indigo-500/5 flex items-center justify-between group cursor-pointer hover:bg-indigo-500/10 transition-colors">
           <div className="flex items-center gap-4">
              <Zap size={20} className="text-indigo-400 animate-pulse" />
              <div>
                <p className="text-sm font-bold">Predictive Scheduling Active</p>
                <p className="text-xs text-zinc-500 font-medium">Nexus Core has optimized your next 48 hours for maximum output.</p>
              </div>
           </div>
           <button className="px-5 py-2.5 bg-indigo-600/20 text-indigo-400 rounded-xl font-black text-[10px] uppercase tracking-widest border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all">Review Plan</button>
        </div>
      </section>
    </div>
  );
};

export default Tasks;
