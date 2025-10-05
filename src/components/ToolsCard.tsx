import React from 'react';
import './ToolsCard.css';
import profileIcon from '../assets/figma_icon.png';

interface ToolsCardProps {
  icon: string;
  name: string;
  description: string;
  owner: string;
  accessMessage: string;
  onDetailsClick?: () => void;
  onAccessClick?: () => void;
}

const ToolsCard: React.FC<ToolsCardProps> = ({
  name,
  description,
  owner,
  accessMessage,
  onDetailsClick,
  onAccessClick
}) => {
  return (
    <div className="tools-card">
      <div className="tools-card-main">
        <img src={profileIcon} alt={`${name} icon`} className="tools-card-icon" />
        <div className="tools-card-content">
          <div className="tools-card-title">{name}</div>
          <div className="tools-card-description">{description}</div>
          <div className="tools-card-owner"><strong>Owner:</strong> {owner}</div>
        </div>
      </div>
      <div className="tools-card-footer">
        <button className="tools-card-button" onClick={onDetailsClick}>
          Details
        </button>
        <button className="tools-card-button" onClick={onAccessClick}>
          {accessMessage}
        </button>
      </div>
    </div>
  );
};

export default ToolsCard;