import React from 'react';
import './UpdateCard.css';
import teamMemberIcon from '../assets/team_member_icon.png';

interface UpdateCardProps {
  title: string;
  author: string;
  description: string;
  impact: string;
  timeAgo: string;
  isLast?: boolean;
}

const UpdateCard: React.FC<UpdateCardProps> = ({
  title,
  author,
  description,
  impact,
  timeAgo,
  isLast = false,
}) => {
  return (
    <div className="update-card-container">
      <div className="update-card-icon-section">
        <img src={teamMemberIcon} alt="Team Member Icon" className="team-member-icon" />
        <div className={`vertical-line ${isLast ? 'vertical-line-end' : ''}`} />
      </div>

      <div className="update-card">
        <div className="update-card-header">
          <div className="update-title">{title}</div>
          <div className="update-time">{timeAgo}</div>
        </div>
        <div className="update-author">{author}</div>
        <div className="update-description">{description}</div>
        <div className="update-impact-wrapper">
          <span className="impact-label">Impact:</span>
          <div className="update-impact">{impact}</div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCard;