import React from 'react';

const ProviderCard = ({ 
  id,
  name, 
  logoClass, 
  logoInitials,
  logoSrc,
  status, // 'connected', 'disconnected', 'degraded', 'unavailable', 'disabled'
  connectionsCount,
  onClick
}) => {
  
  const getStatusContent = () => {
    if (status === 'connected') {
      return (
        <div className="status-badge">
          <span style={{marginRight: '3px'}}>●</span> {connectionsCount} Connected
        </div>
      );
    }
    if (status === 'ready') {
      return (
        <div className="status-badge">
          <span style={{marginRight: '3px'}}>●</span> Ready
        </div>
      );
    }
    return 'No connections';
  };

  return (
    <div className="provider-card" onClick={() => onClick(id)}>
      <div className={`provider-logo ${logoClass}`}>
        {logoSrc ? <img src={logoSrc} alt={name} style={{width: '20px', height: '20px'}} /> : logoInitials}
      </div>
      <div className="provider-info">
        <div className="provider-name" title={name}>{name}</div>
        <div className="provider-status">
          {getStatusContent()}
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
