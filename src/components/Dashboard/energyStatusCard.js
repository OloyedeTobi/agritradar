import React from 'react';
import '../../Style/card.css';

const EnergyStatusCard = ({ title, value, icon, trend, trendIcon }) => {
  return (
    <div className="energy-status-card">
      <div className="card-content">
        <div className="card-icon-container">
          {icon}
        </div>
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <div className="card-value-container">
            <span className="card-value">{value}</span>
            {trend && (
              <div className="card-trend">
                {trendIcon}
                <span>{trend}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyStatusCard;