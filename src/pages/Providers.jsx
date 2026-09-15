import React, { useState } from 'react';
import Header from '../components/Header';
import ProviderCard from '../components/ProviderCard';
import AddProviderModal from '../components/AddProviderModal';

// Mock Data
const OAUTH_PROVIDERS = [
  { id: 'claude_code', name: 'Claude Code', logoSrc: 'https://www.google.com/s2/favicons?domain=anthropic.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'antigravity', name: 'Antigravity', logoSrc: 'https://www.google.com/s2/favicons?domain=deepmind.google&sz=64', status: 'disconnected', connections: 0 },
  { id: 'openai_codex', name: 'OpenAI Codex', logoSrc: 'https://www.google.com/s2/favicons?domain=openai.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'github_copilot', name: 'GitHub Copilot', logoSrc: 'https://www.google.com/s2/favicons?domain=github.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'cursor', name: 'Cursor IDE', logoSrc: 'https://www.google.com/s2/favicons?domain=cursor.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'kilo_code', name: 'Kilo Code', logoInitials: 'K', logoClass: 'logo-generic', status: 'disconnected', connections: 0 },
  { id: 'cline', name: 'Cline', logoInitials: 'C', logoClass: 'logo-generic', status: 'disconnected', connections: 0 },
  { id: 'clinepass', name: 'ClinePass', logoInitials: 'C', logoClass: 'logo-generic', status: 'disconnected', connections: 0 },
  { id: 'codebuddy_cn', name: 'CodeBuddy CN', logoInitials: 'CB', logoClass: 'logo-generic', status: 'disconnected', connections: 0 },
  { id: 'kimchi', name: 'Kimchi', logoInitials: 'K', logoClass: 'logo-generic', status: 'disconnected', connections: 0 },
  { id: 'grok_cli', name: 'Grok CLI (Grok Build)', logoSrc: 'https://www.google.com/s2/favicons?domain=x.ai&sz=64', status: 'disconnected', connections: 0 },
  { id: 'xai_grok', name: 'xAI (Grok)', logoSrc: 'https://www.google.com/s2/favicons?domain=x.ai&sz=64', status: 'disconnected', connections: 0 },
];

const FREE_PROVIDERS = [
  { id: 'mimo_free', name: 'MiMo Code Free', logoInitials: 'M', logoClass: 'logo-generic', status: 'ready', connections: 0 },
  { id: 'opencode_free', name: 'OpenCode Free', logoInitials: 'O', logoClass: 'logo-generic', status: 'ready', connections: 0 },
  { id: 'gemini_cli', name: 'Gemini CLI', logoSrc: 'https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64', status: 'connected', connections: 1 },
  { id: 'kiro', name: 'Kiro AI', logoInitials: 'K', logoClass: 'logo-generic', status: 'connected', connections: 1 },
  { id: 'qoder', name: 'Qoder', logoInitials: 'Q', logoClass: 'logo-generic', status: 'disconnected', connections: 0 },
  { id: 'openrouter', name: 'OpenRouter', logoSrc: 'https://www.google.com/s2/favicons?domain=openrouter.ai&sz=64', status: 'connected', connections: 1 },
  { id: 'nvidia', name: 'NVIDIA NIM', logoSrc: 'https://www.google.com/s2/favicons?domain=nvidia.com&sz=64', status: 'connected', connections: 1 },
  { id: 'ollama_cloud', name: 'Ollama Cloud', logoSrc: 'https://www.google.com/s2/favicons?domain=ollama.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'vertex', name: 'Vertex AI', logoSrc: 'https://www.google.com/s2/favicons?domain=cloud.google.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'gemini', name: 'Gemini', logoSrc: 'https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64', status: 'connected', connections: 1 },
  { id: 'cloudflare', name: 'Cloudflare', logoSrc: 'https://www.google.com/s2/favicons?domain=cloudflare.com&sz=64', status: 'connected', connections: 1 },
  { id: 'byteplus', name: 'BytePlus ModelArk', logoSrc: 'https://www.google.com/s2/favicons?domain=byteplus.com&sz=64', status: 'disconnected', connections: 0 },
];

const API_KEY_PROVIDERS = [
  { id: 'alibaba', name: 'Alibaba', logoSrc: 'https://www.google.com/s2/favicons?domain=alibaba.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'alibaba_intl', name: 'Alibaba Intl', logoSrc: 'https://www.google.com/s2/favicons?domain=alibaba.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'anthropic', name: 'Anthropic', logoSrc: 'https://www.google.com/s2/favicons?domain=anthropic.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'azure', name: 'Azure OpenAI', logoSrc: 'https://www.google.com/s2/favicons?domain=azure.microsoft.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'blackbox', name: 'Blackbox AI', logoSrc: 'https://www.google.com/s2/favicons?domain=blackbox.ai&sz=64', status: 'disconnected', connections: 0 },
  { id: 'cerebras', name: 'Cerebras', logoSrc: 'https://www.google.com/s2/favicons?domain=cerebras.net&sz=64', status: 'disconnected', connections: 0 },
  { id: 'chutes', name: 'Chutes AI', logoSrc: 'https://www.google.com/s2/favicons?domain=chutes.ai&sz=64', status: 'disconnected', connections: 0 },
  { id: 'cohere', name: 'Cohere', logoSrc: 'https://www.google.com/s2/favicons?domain=cohere.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'command_code', name: 'Command Code', logoInitials: 'C', logoClass: 'logo-generic', status: 'disconnected', connections: 0 },
  { id: 'deepseek', name: 'DeepSeek', logoSrc: 'https://www.google.com/s2/favicons?domain=deepseek.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'featherless', name: 'Featherless', logoSrc: 'https://www.google.com/s2/favicons?domain=featherless.ai&sz=64', status: 'disconnected', connections: 0 },
  { id: 'fireworks', name: 'Fireworks AI', logoSrc: 'https://www.google.com/s2/favicons?domain=fireworks.ai&sz=64', status: 'disconnected', connections: 0 },
  { id: 'glm_china', name: 'GLM (China)', logoSrc: 'https://www.google.com/s2/favicons?domain=zhipuai.cn&sz=64', status: 'disconnected', connections: 0 },
  { id: 'glm_coding', name: 'GLM Coding', logoSrc: 'https://www.google.com/s2/favicons?domain=zhipuai.cn&sz=64', status: 'disconnected', connections: 0 },
  { id: 'groq', name: 'Groq', logoSrc: 'https://www.google.com/s2/favicons?domain=groq.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'hyperbolic', name: 'Hyperbolic', logoSrc: 'https://www.google.com/s2/favicons?domain=hyperbolic.xyz&sz=64', status: 'disconnected', connections: 0 },
  { id: 'kimi', name: 'Kimi', logoSrc: 'https://www.google.com/s2/favicons?domain=moonshot.cn&sz=64', status: 'disconnected', connections: 0 },
  { id: 'minimax_china', name: 'Minimax (China)', logoSrc: 'https://www.google.com/s2/favicons?domain=minimaxi.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'minimax_coding', name: 'Minimax Coding', logoSrc: 'https://www.google.com/s2/favicons?domain=minimaxi.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'mistral', name: 'Mistral', logoSrc: 'https://www.google.com/s2/favicons?domain=mistral.ai&sz=64', status: 'disconnected', connections: 0 },
  { id: 'nebius', name: 'Nebius AI', logoSrc: 'https://www.google.com/s2/favicons?domain=nebius.ai&sz=64', status: 'disconnected', connections: 0 },
  { id: 'ollama_local', name: 'Ollama Local', logoSrc: 'https://www.google.com/s2/favicons?domain=ollama.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'openai', name: 'OpenAI', logoSrc: 'https://www.google.com/s2/favicons?domain=openai.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'opencode_go', name: 'OpenCode Go', logoInitials: 'O', logoClass: 'logo-generic', status: 'disconnected', connections: 0 },
  { id: 'perplexity', name: 'Perplexity', logoSrc: 'https://www.google.com/s2/favicons?domain=perplexity.ai&sz=64', status: 'disconnected', connections: 0 },
  { id: 'perplexity_agent', name: 'Perplexity Agent', logoSrc: 'https://www.google.com/s2/favicons?domain=perplexity.ai&sz=64', status: 'disconnected', connections: 0 },
  { id: 'siliconflow', name: 'SiliconFlow', logoSrc: 'https://www.google.com/s2/favicons?domain=siliconflow.cn&sz=64', status: 'disconnected', connections: 0 },
  { id: 'together', name: 'Together AI', logoSrc: 'https://www.google.com/s2/favicons?domain=together.ai&sz=64', status: 'disconnected', connections: 0 },
  { id: 'venice', name: 'Venice AI', logoSrc: 'https://www.google.com/s2/favicons?domain=venice.ai&sz=64', status: 'disconnected', connections: 0 },
  { id: 'vercel', name: 'Vercel AI Gateway', logoSrc: 'https://www.google.com/s2/favicons?domain=vercel.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'vertex_partner', name: 'Vertex Partner', logoSrc: 'https://www.google.com/s2/favicons?domain=cloud.google.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'volcengine', name: 'Volcengine Ark', logoSrc: 'https://www.google.com/s2/favicons?domain=volcengine.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'xiaomi_mimo', name: 'Xiaomi MiMo', logoSrc: 'https://www.google.com/s2/favicons?domain=xiaomi.com&sz=64', status: 'disconnected', connections: 0 },
  { id: 'xiaomi_token', name: 'Xiaomi MiMo (Token Plan)', logoSrc: 'https://www.google.com/s2/favicons?domain=xiaomi.com&sz=64', status: 'disconnected', connections: 0 },
];

const Providers = ({ toggleSidebar }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleProviderClick = (providerId) => {
    setSelectedProvider({ name: providerId, type: 'apikey' });
    setModalOpen(true);
  };

  const closeAndClearModal = () => {
    setModalOpen(false);
    setSelectedProvider(null);
  };

  return (
    <div className="scrollable-area">
      <Header toggleSidebar={toggleSidebar} title="Providers" />

      {/* Custom Providers */}
      <section className="provider-section" style={{marginBottom: '32px'}}>
        <div className="section-header">
          <h2 className="section-title">Custom Providers (OpenAI/Anthropic Compatible)</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" onClick={() => setModalOpen(true)}>
              + Add Anthropic Compatible
            </button>
            <button className="btn-secondary" onClick={() => setModalOpen(true)}>
              + Add OpenAI Compatible
            </button>
          </div>
        </div>
        <div style={{
          padding: '16px', 
          backgroundColor: '#fafafa', 
          border: '1px dashed var(--border-color)', 
          borderRadius: 'var(--border-radius-md)', 
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '13px'
        }}>
          No custom providers — use buttons above to add OpenAI/Anthropic compatible endpoints
      <ProviderSection title="Custom / Private Models" providers={OAUTH_PROVIDERS} onProviderClick={handleProviderClick} />

      {/* Free Tier Providers */}
      <ProviderSection title="Free Tier Providers" providers={FREE_PROVIDERS} onProviderClick={handleProviderClick} />

      {/* API Key Providers */}
      <ProviderSection title="API Key Providers" providers={API_KEY_PROVIDERS} onProviderClick={handleProviderClick} />

      {/* Add Provider Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeAndClearModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Connect to {selectedProvider?.name}</h3>
              <button className="icon-button" onClick={closeAndClearModal}>✕</button>
            </div>
            <div className="modal-body">
              <label className="input-label">API Key</label>
              <input type="password" placeholder={`Enter your ${selectedProvider?.name} API key`} className="modal-input" />
              
              <label className="input-label" style={{marginTop: '16px'}}>Base URL (Optional)</label>
              <input type="text" placeholder="https://..." className="modal-input" />
              
              <div style={{marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '8px'}}>
                <button className="btn-secondary" onClick={closeAndClearModal}>Cancel</button>
                <button className="btn-primary" onClick={closeAndClearModal}>Save Connection</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProviderSection = ({ title, providers, onProviderClick }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Show 8 providers initially (2 rows on desktop)
  const displayedProviders = expanded ? providers : providers.slice(0, 8);
  const hasMore = providers.length > 8;

  return (
    <section className="provider-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div style={{display: 'flex', gap: '8px'}}>
          <button className="btn-secondary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-6"/></svg>
            Test All
          </button>
          <button className="btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add
          </button>
        </div>
      </div>
      
      <div className="provider-grid">
        {displayedProviders.map((p) => (
          <ProviderCard key={p.id} {...p} connectionsCount={p.connections} onClick={onProviderClick} />
        ))}
      </div>
      
      {hasMore && (
        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
          <button className="btn-secondary" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show Less' : `More Providers (${providers.length - 8})`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Providers;
