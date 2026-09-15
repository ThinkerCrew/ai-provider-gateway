import React, { useState } from 'react';
import Header from '../components/Header';
import FilterToolbar from '../components/FilterToolbar';
import ProviderCard from '../components/ProviderCard';
import AddProviderModal from '../components/AddProviderModal';

// Mock Data
const OAUTH_PROVIDERS = [
  { id: 'claude_code', name: 'Claude Code', logoInitials: 'C', logoClass: 'logo-claude', status: 'connected', connections: 1, enabled: true },
  { id: 'antigravity', name: 'Antigravity', logoInitials: 'A', logoClass: 'logo-generic', status: 'connected', connections: 1, enabled: true },
  { id: 'openai_codex', name: 'OpenAI Codex', logoInitials: 'O', logoClass: 'logo-openai', status: 'connected', connections: 1, enabled: true, showToggle: true },
  { id: 'github_copilot', name: 'GitHub Copilot', logoInitials: 'G', logoClass: 'logo-generic', status: 'connected', connections: 1, enabled: true },
  { id: 'cursor', name: 'Cursor IDE', logoInitials: 'C', logoClass: 'logo-generic', status: 'connected', connections: 1, enabled: true },
  { id: 'kilo_code', name: 'Kilo Code', logoInitials: 'K', logoClass: 'logo-generic', status: 'connected', connections: 1, enabled: true },
  { id: 'cline', name: 'Cline', logoInitials: 'C', logoClass: 'logo-generic', status: 'connected', connections: 1, enabled: true },
];

const FREE_PROVIDERS = [
  { id: 'iflow', name: 'iFlow AI', logoInitials: 'i', logoClass: 'logo-generic', status: 'connected', connections: 1, enabled: true },
  { id: 'qwen', name: 'Qwen Code', logoInitials: 'Q', logoClass: 'logo-generic', status: 'connected', connections: 1, enabled: true },
  { id: 'gemini_cli', name: 'Gemini CLI', logoInitials: 'G', logoClass: 'logo-gemini', status: 'connected', connections: 1, enabled: true },
  { id: 'kiro', name: 'Kiro AI', logoInitials: 'K', logoClass: 'logo-generic', status: 'connected', connections: 1, enabled: true },
];

const API_KEY_PROVIDERS = [
  { id: 'openrouter', name: 'OpenRouter', logoInitials: 'OR', logoClass: 'logo-generic', status: 'connected', connections: 1, enabled: true },
  { id: 'glm_coding', name: 'GLM Coding', logoInitials: 'Z', logoClass: 'logo-generic', status: 'connected', connections: 1, enabled: true },
  { id: 'minimax', name: 'Minimax Coding', logoInitials: 'M', logoClass: 'logo-generic', status: 'connected', connections: 1, enabled: true },
  { id: 'alibaba_intl', name: 'Alibaba Intl', logoInitials: 'A', logoClass: 'logo-generic', status: 'connected', connections: 1, enabled: true },
  { id: 'openai', name: 'OpenAI', logoInitials: 'O', logoClass: 'logo-openai', status: 'disconnected', connections: 0, enabled: false },
  { id: 'anthropic', name: 'Anthropic', logoInitials: 'A', logoClass: 'logo-generic', status: 'disconnected', connections: 0, enabled: false },
  { id: 'gemini', name: 'Gemini', logoInitials: 'G', logoClass: 'logo-gemini', status: 'disconnected', connections: 0, enabled: false },
  { id: 'deepseek', name: 'DeepSeek', logoInitials: 'DS', logoClass: 'logo-generic', status: 'disconnected', connections: 0, enabled: false },
];

const COMPATIBLE_PROVIDERS = [
  { id: 'alibaba_compat', name: 'Alibaba', logoInitials: 'O', logoClass: 'logo-generic', status: 'connected', connections: 1, enabled: true, badges: ['Chat'] },
];

const Providers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleProviderClick = (providerId) => {
    // In a real app, fetch full config. Using basic info for now.
    setSelectedProvider({ name: providerId, type: 'apikey' });
    setModalOpen(true);
  };

  const closeAndClearModal = () => {
    setModalOpen(false);
    setSelectedProvider(null);
  };

  return (
    <div className="scrollable-area">
      <Header />
      
      <FilterToolbar 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
        onFilterChange={setFilter} 
      />

      {/* OAuth Providers */}
      <section className="provider-section">
        <div className="section-header">
          <h2 className="section-title">OAuth Providers</h2>
          <button className="btn-secondary">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Test All
          </button>
        </div>
        <div className="provider-grid">
          {OAUTH_PROVIDERS.map(p => (
            <ProviderCard key={p.id} {...p} connectionsCount={p.connections} onClick={handleProviderClick} />
          ))}
        </div>
      </section>

      {/* Free Providers */}
      <section className="provider-section">
        <div className="section-header">
          <h2 className="section-title">Free Providers</h2>
          <button className="btn-secondary">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Test All
          </button>
        </div>
        <div className="provider-grid">
          {FREE_PROVIDERS.map(p => (
            <ProviderCard key={p.id} {...p} connectionsCount={p.connections} onClick={handleProviderClick} />
          ))}
        </div>
      </section>

      {/* API Key Providers */}
      <section className="provider-section">
        <div className="section-header">
          <h2 className="section-title">API Key Providers</h2>
          <button className="btn-secondary">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Test All
          </button>
        </div>
        <div className="provider-grid">
          {API_KEY_PROVIDERS.map(p => (
            <ProviderCard key={p.id} {...p} connectionsCount={p.connections} onClick={handleProviderClick} />
          ))}
        </div>
      </section>

      {/* API Key Compatible Providers */}
      <section className="provider-section">
        <div className="section-header">
          <h2 className="section-title">API Key Compatible Providers</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-secondary" style={{ backgroundColor: 'rgba(240, 110, 65, 0.1)', borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }} onClick={() => setModalOpen(true)}>
              + Add Anthropic Compatible
            </button>
            <button className="btn-secondary" style={{ backgroundColor: '#fff', color: '#000', borderColor: '#fff' }} onClick={() => setModalOpen(true)}>
              + Add OpenAI Compatible
            </button>
          </div>
        </div>
        <div className="provider-grid">
          {COMPATIBLE_PROVIDERS.map(p => (
            <ProviderCard key={p.id} {...p} connectionsCount={p.connections} onClick={handleProviderClick} />
          ))}
        </div>
      </section>

      <AddProviderModal 
        isOpen={modalOpen} 
        onClose={closeAndClearModal} 
        providerConfig={selectedProvider} 
      />
    </div>
  );
};

export default Providers;
