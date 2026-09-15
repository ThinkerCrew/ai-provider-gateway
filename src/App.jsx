import React from 'react';
import Sidebar from './components/Sidebar';
import Providers from './pages/Providers';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Providers />
      </main>
    </div>
  );
}

export default App;
