import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// Pages
import Providers from './pages/Providers';
import EndpointKey from './pages/EndpointKey';
import Combos from './pages/Combos';
import Usage from './pages/Usage';
import QuotaTracker from './pages/QuotaTracker';
import TokenSaver from './pages/TokenSaver';
import CliTools from './pages/CliTools';
import ProxyPools from './pages/ProxyPools';
import Skills from './pages/Skills';
import ConsoleLog from './pages/ConsoleLog';
import Remote from './pages/Remote';
import Settings from './pages/Settings';
import MediaEmbedding from './pages/MediaEmbedding';
import MediaTextToImage from './pages/MediaTextToImage';
import MediaTextToSpeech from './pages/MediaTextToSpeech';
import MediaSpeechToText from './pages/MediaSpeechToText';
import MediaWebFetch from './pages/MediaWebFetch';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/providers" replace />} />
            <Route path="/providers" element={<Providers toggleSidebar={toggleSidebar} />} />
            <Route path="/endpoint-key" element={<EndpointKey toggleSidebar={toggleSidebar} />} />
            <Route path="/combos" element={<Combos toggleSidebar={toggleSidebar} />} />
            <Route path="/usage" element={<Usage toggleSidebar={toggleSidebar} />} />
            <Route path="/quota-tracker" element={<QuotaTracker toggleSidebar={toggleSidebar} />} />
            <Route path="/token-saver" element={<TokenSaver toggleSidebar={toggleSidebar} />} />
            <Route path="/cli-tools" element={<CliTools toggleSidebar={toggleSidebar} />} />
            <Route path="/proxy-pools" element={<ProxyPools toggleSidebar={toggleSidebar} />} />
            <Route path="/skills" element={<Skills toggleSidebar={toggleSidebar} />} />
            <Route path="/console" element={<ConsoleLog toggleSidebar={toggleSidebar} />} />
            <Route path="/remote" element={<Remote toggleSidebar={toggleSidebar} />} />
            <Route path="/settings" element={<Settings toggleSidebar={toggleSidebar} />} />
            <Route path="/media/embedding" element={<MediaEmbedding toggleSidebar={toggleSidebar} />} />
            <Route path="/media/image" element={<MediaTextToImage toggleSidebar={toggleSidebar} />} />
            <Route path="/media/speech" element={<MediaTextToSpeech toggleSidebar={toggleSidebar} />} />
            <Route path="/media/text" element={<MediaSpeechToText toggleSidebar={toggleSidebar} />} />
            <Route path="/media/web" element={<MediaWebFetch toggleSidebar={toggleSidebar} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
