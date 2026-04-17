import { motion } from 'framer-motion';
import { 
  Zap, 
  Activity, 
  Target, 
  Clock, 
  ArrowUpRight, 
  Cpu, 
  ShieldCheck, 
  Globe,
  MoreHorizontal,
  Plus
} from 'lucide-react';

const MetricCard = ({ label, value, trend, icon: Icon, color }: any) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.01 }}
    className="glass-panel p-8 flex flex-col justify-between group h-full"
  >
    <div className="flex items-center justify-between mb-8">
      <div className={`p-3 rounded-2xl bg-${color}-500/10 text-${color}-400 border border-${color}-500/20`}>
        <Icon size={24} />
      </div>
      <span className="text-emerald-400 text-sm font-bold flex items-center gap-1">
        <ArrowUpRight size={14} /> {trend}
      </span>
    </div>
    <div>
      <p className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-1">{label}</p>
      <h3 className="text-4xl font-black tracking-tighter">{value}</h3>
    </div>
    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
      <div className="flex -space-x-2">
        {[1,2,3].map(i => (
          <div key={i} className="w-6 h-6 rounded-full border border-black bg-zinc-800" />
        ))}
      </div>
      <button className="text-zinc-500 hover:text-white transition-colors">
        <MoreHorizontal size={18} />
      </button>
    </div>
  </motion.div>
);

const Dashboard = () => {
  return (
    <div className="max-w-[1600px] mx-auto space-y-12">
      {/* Hero / Strategic Context */}
      <section className="flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit"
          >
            <Zap size={14} className="text-indigo-400 fill-current" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">System Nominal • Nexus Core 4.0</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-black tracking-tight leading-[0.9]"
          >
            Strategic <br /> <span className="glow-text">Intelligence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-xl max-w-2xl font-medium"
          >
            Your digital ecosystem has synthesized 1.4TB of contextual data today. 
            All autonomous agents are synchronized.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="p-8 rounded-[40px] bg-gradient-to-br from-zinc-900 to-black border border-white/5 w-full md:w-[450px] relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
             <Cpu size={120} />
          </div>
          <h4 className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-4">Neural Insight</h4>
          <p className="text-lg font-bold leading-relaxed mb-6">
            "Your peak productivity is predicted for 14:00. I have rescheduled the Backend Audit to align with your high-focus window."
          </p>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-xs hover:bg-indigo-500 transition-colors">Apply Optimization</button>
            <button className="text-zinc-500 text-xs font-bold hover:text-white transition-colors">Dismiss</button>
          </div>
        </motion.div>
      </section>

      {/* Grid Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <MetricCard label="Compute Efficiency" value="98.4%" trend="+2.4%" icon={Activity} color="indigo" />
        <MetricCard label="Agent Velocity" value="42/hr" trend="+12.1%" icon={Zap} color="purple" />
        <MetricCard label="Security Posture" value="A+" trend="Stable" icon={ShieldCheck} color="emerald" />
        <MetricCard label="Network Reach" value="2.4M" trend="+0.8%" icon={Globe} color="cyan" />
      </section>

      {/* Advanced Analysis Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-panel p-10 min-h-[500px] flex flex-col">
          <div className="flex items-center justify-between mb-12">
             <div>
               <h3 className="text-2xl font-black">Synthesis Flow</h3>
               <p className="text-zinc-500 text-sm font-medium">Real-time data ingestion across global nodes</p>
             </div>
             <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Live Ingest</span>
                </div>
             </div>
          </div>
          
          <div className="flex-1 flex items-end gap-3 px-4">
             {[30, 60, 40, 90, 70, 80, 50, 100, 85, 95, 60, 75].map((h, i) => (
               <div key={i} className="flex-1 group relative">
                 <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                  className="bg-indigo-500/20 group-hover:bg-indigo-500/40 transition-colors rounded-t-lg relative"
                 >
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-[10px] font-black px-2 py-1 rounded-md">
                     {h}%
                   </div>
                 </motion.div>
               </div>
             ))}
          </div>
          
          <div className="mt-8 flex justify-between text-[10px] text-zinc-600 font-black uppercase tracking-[0.2em]">
            <span>00:00</span>
            <span>04:00</span>
            <span>08:00</span>
            <span>12:00</span>
            <span>16:00</span>
            <span>20:00</span>
            <span>23:59</span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-panel p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black">Strategic Goals</h3>
              <button className="p-2 bg-white/5 rounded-xl text-zinc-400 hover:text-white transition-colors">
                <Plus size={18} />
              </button>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Global Scaling Architecture', progress: 85, tag: 'High' },
                { label: 'Neural Core Integration', progress: 42, tag: 'Vital' },
                { label: 'Ecosystem Marketplace', progress: 12, tag: 'Q4' },
              ].map((goal, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-zinc-200">{goal.label}</span>
                    <span className="text-[10px] font-black text-indigo-400 uppercase">{goal.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${goal.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                      className="h-full bg-indigo-500 rounded-full" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-8 rounded-[32px] bg-gradient-to-tr from-purple-600/20 to-indigo-600/20 border border-indigo-500/20 flex flex-col items-center text-center">
             <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
             </div>
             <h4 className="text-xl font-black mb-2">Nexus Pro Upgrade</h4>
             <p className="text-zinc-500 text-sm font-medium mb-6">Unlock autonomous agent workflows and global node deployment.</p>
             <button className="w-full py-4 bg-white text-black rounded-2xl font-black text-sm hover:scale-[1.02] transition-transform">Get Pro Access</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
