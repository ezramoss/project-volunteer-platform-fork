import React, { useState } from 'react';
import './Card.css';
import bookmarkIcon from '../assets/bookmark_icon.png';

interface CardProps {
  title: string;
  info: string;
  points: string[];
  icon: string;
  buttonText: string;
  bookmark?: boolean;  // Optional prop
}

const Card: React.FC<CardProps> = ({ title, info, points, icon, buttonText, bookmark = false }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="card">
      <div className="card-header">
        <img src={icon} alt="Card Icon" className="card-icon" />
        <span className="card-title">{title}</span>
        <span className="card-info">{info}</span>
      </div>
      <div className="card-content">
        <ul className="card-points">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="button-bookmark-wrapper">
          <button className="join-now-button">{buttonText}</button>
          {bookmark && (
            <img
              src={bookmarkIcon}
              alt="Bookmark"
              className={`bookmark-icon ${bookmarked ? 'bookmarked' : ''}`}
              onClick={toggleBookmark}
              role="button"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;