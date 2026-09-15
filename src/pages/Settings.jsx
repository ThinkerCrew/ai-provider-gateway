import React from 'react';
import Header from '../components/Header';

const Settings = ({ toggleSidebar }) => {
  return (
    <div className="scrollable-area">
      <Header toggleSidebar={toggleSidebar} title="Settings" />
      <div style={{ padding: '24px', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)', marginTop: '24px' }}>
        <h2>Settings Page</h2>
        <p>This is a placeholder for the Settings screen. We will generate the content soon!</p>
      </div>
    </div>
  );
};

export default Settings;
