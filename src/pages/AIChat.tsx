import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Bot, 
  Sparkles, 
  Mic, 
  Image as ImageIcon, 
  Paperclip, 
  Zap, 
  Cpu, 
  History, 
  Terminal,
  ChevronRight,
  Maximize2
} from 'lucide-react';

const AgentMessage = ({ content, metadata }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex gap-6 mb-10"
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/20">
        <Bot size={24} className="text-white" />
      </div>
    </div>
    <div className="flex-1 space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-black uppercase tracking-widest text-indigo-400">Nexus Core 4.0</span>
        <span className="text-[10px] text-zinc-600 font-bold">• Now</span>
      </div>
      <div className="p-8 rounded-[32px] bg-white/5 border border-white/5 backdrop-blur-md relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
        <p className="text-lg text-zinc-200 leading-relaxed font-medium">{content}</p>
        
        {metadata && (
          <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
             {metadata.map((item: any, i: number) => (
               <div key={i} className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-3 group-hover:border-indigo-500/30 transition-colors cursor-pointer">
                 <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                   <item.icon size={16} />
                 </div>
                 <div className="min-w-0">
                   <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{item.label}</p>
                   <p className="text-xs font-bold truncate">{item.value}</p>
                 </div>
               </div>
             ))}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const UserMessage = ({ content }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex gap-6 mb-10 flex-row-reverse"
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center border border-white/10">
        <Zap size={24} className="text-zinc-400" />
      </div>
    </div>
    <div className="max-w-2xl text-right space-y-4">
      <div className="flex items-center gap-3 justify-end">
        <span className="text-[10px] text-zinc-600 font-bold">Now •</span>
        <span className="text-sm font-black uppercase tracking-widest text-zinc-400">Authorized Session</span>
      </div>
      <div className="p-6 rounded-[32px] bg-zinc-900 border border-white/10 text-white font-semibold">
        {content}
      </div>
    </div>
  </motion.div>
);

const AIChat = () => {
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: "Session established. I have analyzed your enterprise data stream. There is a strategic opportunity to optimize your cloud node allocation. Shall we initiate the autonomous scaling sequence?",
      metadata: [
        { label: 'Current Load', value: '72% Capacity', icon: Activity },
        { label: 'Latency Node', value: 'Singapore-01', icon: Globe }
      ]
    },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Understood. Reallocating resources to North America regions to minimize edge latency. System audit complete.",
        metadata: [
          { label: 'Action Taken', value: 'Edge Migration', icon: Zap },
          { label: 'Efficiency Gain', value: '+18.4%', icon: ArrowUpRight }
        ]
      }]);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-180px)] flex flex-col gap-8">
      {/* AI Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
           <div className="w-16 h-16 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Cpu size={32} className="text-indigo-400" />
           </div>
           <div>
              <h1 className="text-4xl font-black tracking-tight">Nexus Core <span className="text-indigo-500 text-lg ml-2">v4.0.2</span></h1>
              <p className="text-zinc-500 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Multimodal Reasoning Engine Active
              </p>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <button className="p-3 bg-white/5 rounded-2xl border border-white/5 text-zinc-400 hover:text-white transition-all"><History size={20} /></button>
           <button className="p-3 bg-white/5 rounded-2xl border border-white/5 text-zinc-400 hover:text-white transition-all"><Maximize2 size={20} /></button>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 glass-panel relative overflow-hidden flex flex-col bg-black/40">
        <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
          {messages.map((msg, i) => (
            msg.role === 'assistant' ? <AgentMessage key={i} {...msg} /> : <UserMessage key={i} {...msg} />
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Action Bar */}
        <div className="p-8 border-t border-white/5 bg-black/60 backdrop-blur-xl">
          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-end gap-4 p-4 bg-zinc-900 border border-white/5 rounded-[32px] focus-within:border-indigo-500/50 transition-all shadow-2xl">
              <div className="flex flex-col gap-2 mb-2">
                <button className="p-2.5 bg-white/5 rounded-xl text-zinc-500 hover:text-white transition-colors"><Paperclip size={18} /></button>
                <button className="p-2.5 bg-white/5 rounded-xl text-zinc-500 hover:text-white transition-colors"><ImageIcon size={18} /></button>
              </div>
              
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                placeholder="Submit an objective or system command..." 
                className="flex-1 bg-transparent border-none outline-none text-base font-medium py-3 px-2 resize-none max-h-40 min-h-[50px] custom-scrollbar"
              />
              
              <div className="flex flex-col gap-2 mb-2">
                <button className="p-2.5 bg-white/5 rounded-xl text-zinc-500 hover:text-white transition-colors"><Mic size={18} /></button>
                <button 
                  onClick={handleSend}
                  className="p-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
              <span className="flex items-center gap-2"><Terminal size={12} /> Command Mode</span>
              <span className="flex items-center gap-2 text-indigo-400/60"><Zap size={12} /> High Priority</span>
              <span className="flex items-center gap-2"><History size={12} /> Context Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Re-using components in other files is not shown here but implied for standard React structure
const Activity = (props: any) => <ActivityIcon {...props} />;
const Globe = (props: any) => <GlobeIcon {...props} />;
import { Activity as ActivityIcon, Globe as GlobeIcon, ArrowUpRight } from 'lucide-react';

export default AIChat;
