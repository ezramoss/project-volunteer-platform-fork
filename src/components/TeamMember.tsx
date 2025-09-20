import React from 'react';
import './TeamMember.css';

interface TeamMemberProps {
  name: string;
  title: string;
  email: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, email }) => {
  return (
    <div className="team-member-card">
      <div className="member-name">{name}</div>
      <div className="member-title">{title}</div>
      <div className="member-email">{email}</div>
      <button className="contact-button">Contact</button>
    </div>
  );
};

export default TeamMember;