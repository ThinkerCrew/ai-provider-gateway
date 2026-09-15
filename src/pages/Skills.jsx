import React from 'react';
import Header from '../components/Header';

const Skills = ({ toggleSidebar }) => {
  return (
    <div className="scrollable-area">
      <Header toggleSidebar={toggleSidebar} title="Skills" />
      <div style={{ padding: '24px', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)', marginTop: '24px' }}>
        <h2>Skills Page</h2>
        <p>This is a placeholder for the Skills screen. We will generate the content soon!</p>
      </div>
    </div>
  );
};

export default Skills;
