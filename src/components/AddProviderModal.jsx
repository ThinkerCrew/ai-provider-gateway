import React, { useState } from 'react';

const AddProviderModal = ({ isOpen, onClose, providerConfig = null }) => {
  const [testing, setTesting] = useState(false);
  
  if (!isOpen) return null;

  const handleTestConnection = () => {
    setTesting(true);
    setTimeout(() => {
      setTesting(false);
      // Show toast or status update in real app
    }, 1500);
  };

  const isEditing = !!providerConfig;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          {isEditing ? 'Configure Provider' : 'Add New Provider'}
          <button className="icon-button" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div className="form-group">
          <label className="form-label">Provider Name</label>
          <input type="text" className="form-input" defaultValue={providerConfig?.name || ''} placeholder="e.g. OpenAI" />
        </div>

        <div className="form-group">
          <label className="form-label">Connection Type</label>
          <select className="form-input" defaultValue={providerConfig?.type || 'apikey'}>
            <option value="apikey">API Key</option>
            <option value="oauth">OAuth</option>
            <option value="openai_compat">OpenAI Compatible Endpoint</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Base URL</label>
          <input type="text" className="form-input" defaultValue={providerConfig?.baseUrl || 'https://api.openai.com/v1'} />
        </div>

        <div className="form-group">
          <label className="form-label">API Key / Secret</label>
          {/* Using type="password" to natively mask the input */}
          <input type="password" className="form-input" defaultValue={providerConfig?.hasSecret ? '********' : ''} placeholder="Enter API Key" />
          <div style={{fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px'}}>Secrets are encrypted at rest and never returned to the frontend.</div>
        </div>
        
        <div className="form-group" style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1 }}>
            <label className="form-label">Priority</label>
            <input type="number" className="form-input" defaultValue="1" min="1" />
          </div>
          <div style={{ flex: 1 }}>
            <label className="form-label">Routing Weight</label>
            <input type="number" className="form-input" defaultValue="100" min="0" max="100" />
          </div>
        </div>

        <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
          <div className="toggle-switch on"></div>
          <span style={{ fontSize: '13px' }}>Enable this provider immediately</span>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={handleTestConnection} disabled={testing}>
            {testing ? 'Testing...' : 'Test Connection'}
          </button>
          <button className="btn-primary" onClick={onClose}>
            {isEditing ? 'Save Changes' : 'Add Provider'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProviderModal;
