import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import AIChat from './pages/AIChat';
import Tasks from './pages/Tasks';

// Placeholder modules for future expansion
const Community = () => <div className="animate-in"><h1 className="text-3xl font-black mb-4">Network & Community</h1><p className="text-zinc-500">Coming soon to the Nexus Ecosystem.</p></div>;
const Learning = () => <div className="animate-in"><h1 className="text-3xl font-black mb-4">Evolution Hub</h1><p className="text-zinc-500">Knowledge synthesis engine under construction.</p></div>;
const Economy = () => <div className="animate-in"><h1 className="text-3xl font-black mb-4">Digital Economy</h1><p className="text-zinc-500">Secure transaction layer initializing.</p></div>;
const Wellbeing = () => <div className="animate-in"><h1 className="text-3xl font-black mb-4">Digital Wellbeing</h1><p className="text-zinc-500">Equilibrium metrics processing.</p></div>;
const Settings = () => <div className="animate-in"><h1 className="text-3xl font-black mb-4">System Settings</h1><p className="text-zinc-500">Core node configuration.</p></div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="ai" element={<AIChat />} />
          <Route path="community" element={<Community />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="learning" element={<Learning />} />
          <Route path="economy" element={<Economy />} />
          <Route path="wellbeing" element={<Wellbeing />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
