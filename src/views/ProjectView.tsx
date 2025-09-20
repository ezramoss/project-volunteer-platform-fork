import React from 'react';
import './ProjectView.css';
import UpdateCard from '../components/UpdateCard';
import TeamMember from '../components/TeamMember';

const ProjectView: React.FC = () => {
  return (
    <main className="project-view-content">
      {/* Section 1 - Project Header */}
      <section className="project-section">
        <div className="project-header">
          <h2>Project - Fabric Mask</h2>
        </div>

        <p className="project-description">
          We need a Python programmer who can build onto an existing small sample of code. We are modeling supply
          chains and transactions. Some of the core searching is implemented, but in particular we need to read in YAML
          files, build internal Python types, and eventually offer a power suite of commands via an API to present a
          catalog. Additionally, we need to track purchases/manufacturing processes. All of this is being kept at a
          pretty abstract “digital twin” level right now.
        </p>

        <div className="skills-section">
          <div className="skills-label">Skills We’re Looking For:</div>
          <div className="skills-boxes">
            <div className="skill-box">Python</div>
            <div className="skill-box">API Development</div>
            <div className="skill-box">Business Process Analysis</div>
          </div>
        </div>

        <div className="project-stats">
          <div className="stat-item">
            <div className="stat-number">2</div>
            <div className="stat-label">Owners</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5</div>
            <div className="stat-label">Active Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8</div>
            <div className="stat-label">Months to Completion</div>
          </div>
        </div>

        <div className="progress-bar-wrapper">
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: '47%' }} />
          </div>
          <div className="progress-label">Project Progress: 47% Complete</div>
        </div>

        <div className="button-wrapper">
          <button className="join-button">Join Project</button>
        </div>
      </section>

      {/* Section 2 - Updates Header */}
      <section className="project-section section-two">
        <div className="updates-header">
          <span className="green-dot" />
          <span className="updates-text">Updates</span>
          <span className="vertical-line" />
          <span className="updates-date">As of August, 2025</span>
        </div>
      </section>

      {/* Section 3 - Update Cards */}
      <section className="project-section section-three">
        <UpdateCard
          title="Community Food Bank Website Redesign"
          author="Sarah Chen"
          description="Led the complete redesign of the food bank's website, improving user experience and donation flow. Increased online donations by 40%."
          impact="Impact: Increased donation by 40%"
          timeAgo="5 hours ago"
        />
        <UpdateCard
          title="Local Logistics Network Integration"
          author="Marcus Allen"
          description="Integrated logistics data into the platform, enhancing real-time tracking for local deliveries and inventory status."
          impact="Impact: Reduced delivery delays by 25%"
          timeAgo="2 days ago"
        />
      </section>

      {/* Section 4 - Team Members */}
      <section className="project-section section-four">
        <div className="team-header">Team Members</div>
        <div className="team-member-list">
          <TeamMember
            name="Jenna Morales"
            title="Lead Developer"
            email="jenna@example.com"
          />
          <TeamMember
            name="Daniel Tran"
            title="Data Scientist"
            email="daniel@example.com"
          />
          <TeamMember
            name="Alisha Ray"
            title="Project Coordinator"
            email="alisha@example.com"
          />
        </div>
      </section>

      {/* Section 5 - Empty for now */}
      <section className="project-section section-five"></section>
    </main>
  );
};

export default ProjectView;