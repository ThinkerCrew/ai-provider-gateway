import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon"></div>
        <div>
          <div className="product-name">AI Provider Gateway</div>
          <div className="product-version">v1.0.0</div>
        </div>
      </div>
      
      <div className="nav-section">
        <a href="#" className="nav-item">Overview</a>
        <a href="#" className="nav-item active">Providers</a>
        <a href="#" className="nav-item">Proxy Pools</a>
        <a href="#" className="nav-item">Routing</a>
        <a href="#" className="nav-item">API Keys</a>
        <a href="#" className="nav-item">Clients</a>
        <a href="#" className="nav-item">Usage</a>
        <a href="#" className="nav-item">Quota Tracker</a>
        <a href="#" className="nav-item">Health</a>
        <a href="#" className="nav-item">Logs</a>
      </div>

      <div className="nav-section">
        <div className="nav-section-title">SYSTEM</div>
        <a href="#" className="nav-item">Settings</a>
      </div>

      <div className="sidebar-footer">
        <div className="gateway-status">
          <div className="status-dot online"></div>
          <div>
            Gateway Online
            <div style={{fontSize: '11px', color: 'var(--text-muted)'}}>Environment: Production</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
