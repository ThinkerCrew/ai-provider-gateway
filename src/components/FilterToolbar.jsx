import React from 'react';

const FilterToolbar = ({ searchTerm, onSearchChange, onFilterChange }) => {
  return (
    <div className="filter-toolbar">
      <div className="search-input-wrapper">
        <svg 
          width="14" height="14" 
          viewBox="0 0 24 24" fill="none" 
          stroke="var(--text-secondary)" strokeWidth="2" 
          style={{ position: 'absolute', left: '10px', top: '10px' }}
        >
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search providers..." 
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="filters-group">
        <button className="filter-btn active" onClick={() => onFilterChange('all')}>All</button>
        <button className="filter-btn" onClick={() => onFilterChange('connected')}>Connected</button>
        <button className="filter-btn" onClick={() => onFilterChange('healthy')}>Healthy</button>
        <button className="filter-btn" onClick={() => onFilterChange('oauth')}>OAuth</button>
        <button className="filter-btn" onClick={() => onFilterChange('apikey')}>API Key</button>
      </div>
    </div>
  );
};

export default FilterToolbar;
