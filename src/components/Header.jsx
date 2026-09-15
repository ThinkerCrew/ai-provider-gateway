import React from 'react';

const Header = ({ toggleSidebar, title = "Providers" }) => {
  return (
    <header className="top-header">
      <div className="header-left">
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <button className="hamburger-btn icon-button" onClick={toggleSidebar}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
          <div>
            <h1 className="page-title" style={{display: 'inline-block'}}>{title}</h1>
            {title === "Providers" && <div className="page-subtitle" style={{display: 'block'}}>Manage your AI provider connections</div>}
          </div>
        </div>
      </div>
      
      <div className="header-actions">
        <div className="search-input-wrapper">
          <svg 
            width="14" height="14" 
            viewBox="0 0 24 24" fill="none" 
            stroke="var(--text-secondary)" strokeWidth="2" 
            style={{ position: 'absolute', left: '10px', top: '9px' }}
          >
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
        
        <button className="btn-donate">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          Donate
        </button>
        
        <button className="icon-button" title="Theme">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        
        <button className="icon-button" title="Language">
          US
        </button>
        
        <button className="icon-button" title="Grid">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
