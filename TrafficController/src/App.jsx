import { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import EmergencySupport from './components/EmergencySupport';
import SocialImpact from './components/SocialImpact';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'dashboard' && <Dashboard />}
        {activeSection === 'features' && <Features />}
        {activeSection === 'emergency' && <EmergencySupport />}
        {activeSection === 'social' && <SocialImpact />}
      </main>
    </div>
  );
}

export default App;