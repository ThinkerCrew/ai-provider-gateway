import React from 'react';

const ProviderCard = ({ 
  id,
  name, 
  logoClass, 
  logoInitials,
  status, // 'connected', 'disconnected', 'degraded', 'unavailable', 'disabled'
  connectionsCount,
  showToggle,
  enabled,
  badges,
  onClick
}) => {
  
  const getStatusColor = () => {
    switch(status) {
      case 'connected': return 'var(--status-green)';
      case 'degraded': return 'var(--status-amber)';
      case 'unavailable': return 'var(--status-red)';
      default: return 'var(--status-muted)';
    }
  };

  const getStatusText = () => {
    if (status === 'connected') return `${connectionsCount} Connected`;
    if (status === 'disconnected') return 'No connections';
    if (status === 'degraded') return 'Degraded';
    if (status === 'unavailable') return 'Unavailable';
    if (status === 'disabled') return 'Disabled';
    return status;
  };

  const handleToggleClick = (e) => {
    e.stopPropagation();
    // In a real app, this would trigger an API call to enable/disable
    console.log(`Toggled provider ${id}`);
  };

  return (
    <div className="provider-card" onClick={() => onClick(id)}>
      <div className="provider-card-top">
        <div className="provider-logo-name">
          <div className={`provider-logo ${logoClass}`}>
            {logoInitials}
          </div>
          <div className="provider-name">{name}</div>
        </div>
        
        {showToggle && (
          <div 
            className={`toggle-switch ${enabled ? 'on' : ''}`} 
            onClick={handleToggleClick}
            title={enabled ? "Disable provider" : "Enable provider"}
          ></div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="provider-status">
          {(status === 'connected' || status === 'degraded' || status === 'unavailable') && (
            <div className="status-dot" style={{ backgroundColor: getStatusColor() }}></div>
          )}
          {getStatusText()}
        </div>
        
        {badges && badges.length > 0 && (
          <div style={{ display: 'flex', gap: '4px' }}>
            {badges.map((badge, idx) => (
              <span key={idx} className="badge">{badge}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderCard;
