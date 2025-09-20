import React from 'react';
import './UpdateCard.css';

interface UpdateCardProps {
  title: string;
  author: string;
  description: string;
  impact: string;
  timeAgo: string;
}

const UpdateCard: React.FC<UpdateCardProps> = ({ title, author, description, impact, timeAgo }) => {
  return (
    <div className="update-card">
      <div className="update-card-header">
        <div className="update-title">{title}</div>
        <div className="update-time">{timeAgo}</div>
      </div>
      <div className="update-author">{author}</div>
      <div className="update-description">{description}</div>
      <div className="update-impact">{impact}</div>
    </div>
  );
};

export default UpdateCard;