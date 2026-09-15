import React from 'react';
import Header from '../components/Header';

const Remote = ({ toggleSidebar }) => {
  return (
    <div className="scrollable-area">
      <Header toggleSidebar={toggleSidebar} title="Remote" />
      <div style={{ padding: '24px', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)', marginTop: '24px' }}>
        <h2>Remote Page</h2>
        <p>This is a placeholder for the Remote screen. We will generate the content soon!</p>
      </div>
    </div>
  );
};

export default Remote;
