import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const [mediaOpen, setMediaOpen] = useState(true);
  const [hasUpdate, setHasUpdate] = useState(false);

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 15
      }}></div>
      
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {/* Mac window controls */}
        <div style={{ padding: '16px 16px 8px 16px', display: 'flex', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }}></div>
        </div>

        <div className="sidebar-header" style={{ paddingTop: '8px', borderBottom: 'none' }}>
          <div className="logo-row">
            <div className="logo-icon" style={{ backgroundColor: 'var(--accent-color)' }}>
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
                <polyline points="2 8.5 12 15.5 22 8.5"/>
                <polyline points="12 22 12 15.5"/>
              </svg>
            </div>
            <div>
              <div className="product-name">AI Provider Gateway</div>
              <div className="product-version">v1.0.0-beta</div>
            </div>
          </div>
          {hasUpdate && (
            <>
              <div style={{ color: '#10b981', fontSize: '11px', fontWeight: '600', marginTop: '8px', marginBottom: '4px' }}>
                ↑ New version available: v1.0.1
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button style={{ backgroundColor: '#10b981', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}>
                  Update now
                </button>
                <span style={{ fontSize: '9px', color: '#10b981', fontFamily: 'monospace' }}>npm i -g aigateway@la...</span>
              </div>
            </>
          )}
        </div>
        
        <div className="nav-section">
          <NavLink to="/endpoint-key" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9"/></svg>
            Endpoint & Key
          </NavLink>
          <NavLink to="/providers" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Providers
          </NavLink>
          <NavLink to="/combos" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            Combos
          </NavLink>
          <NavLink to="/usage" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
            Usage
          </NavLink>
          <NavLink to="/quota-tracker" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Quota Tracker
          </NavLink>
          <NavLink to="/token-saver" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Token Saver
          </NavLink>
          <NavLink to="/cli-tools" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
            CLI Tools
          </NavLink>
        </div>

        <div className="nav-section">
          <div className="nav-section-title">SYSTEM</div>
          <div className="nav-item" onClick={() => setMediaOpen(!mediaOpen)} style={{justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Media Providers
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{transform: mediaOpen ? 'rotate(180deg)' : 'none'}}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          {mediaOpen && (
            <div>
              <NavLink to="/media/embedding" className={({isActive}) => `nav-subitem ${isActive ? 'active' : ''}`} onClick={onClose}>
                <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>[ ]</span> Embedding
              </NavLink>
              <NavLink to="/media/image" className={({isActive}) => `nav-subitem ${isActive ? 'active' : ''}`} onClick={onClose}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
                Text to Image
              </NavLink>
              <NavLink to="/media/speech" className={({isActive}) => `nav-subitem ${isActive ? 'active' : ''}`} onClick={onClose}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
                Text To Speech
              </NavLink>
              <NavLink to="/media/text" className={({isActive}) => `nav-subitem ${isActive ? 'active' : ''}`} onClick={onClose}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                Speech To Text
              </NavLink>
              <NavLink to="/media/web" className={({isActive}) => `nav-subitem ${isActive ? 'active' : ''}`} onClick={onClose}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v2"/><path d="M8 11h2"/></svg>
                Web Fetch & Search
              </NavLink>
            </div>
          )}
          
          <NavLink to="/proxy-pools" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Proxy Pools
          </NavLink>
          <NavLink to="/skills" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Skills
          </NavLink>
          <NavLink to="/console" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
            Console Log
          </NavLink>
          <NavLink to="/remote" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Remote
          </NavLink>
          <NavLink to="/settings" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            Settings
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
