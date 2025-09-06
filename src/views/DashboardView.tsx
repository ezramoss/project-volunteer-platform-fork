import React from 'react';
import Card from '../components/Card';
import dashboardIcon from '../assets/dashboard_icon.png';
import dashboardImage from '../assets/dashboard_image.png';
import './DashboardView.css';

const cardsData = [
  {
    title: 'Project Title 1',
    info: 'Team Member 1 • Date 1',
    points: ['Update Point 1', 'Update Point 2', 'Update Point 3'],
  },
  {
    title: 'Project Title 2',
    info: 'Team Member 2 • Date 2',
    points: ['Update Point 1', 'Update Point 2', 'Update Point 3'],
  },
  {
    title: 'Project Title 3',
    info: 'Team Member 3 • Date 3',
    points: ['Update Point 1', 'Update Point 2', 'Update Point 3'],
  },
  {
    title: 'Project Title 4',
    info: 'Team Member 4 • Date 4',
    points: ['Update Point 1', 'Update Point 2', 'Update Point 3'],
  },
  {
    title: 'Project Title 5',
    info: 'Team Member 5 • Date 5',
    points: ['Update Point 1', 'Update Point 2', 'Update Point 3'],
  },
];

const DashboardView: React.FC = () => {
  return (
    <main className="dashboard-view-content">
      <div className="wide-container">
        <div className="wide-container-left">
          <h2 className="section-title">
            Empower Change: Lead or Contribute with Helpful!
          </h2>
          <p className="section-description">
            Welcome to the Helpful project page! Explore opportunities to lead or contribute to projects,
            advance designs for commercialization, or bring external projects for support, resources, and visibility.
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
        <div className="wide-container-right">
          <img src={dashboardImage} alt="Dashboard" className="dashboard-image" />
        </div>
      </div>

      <div className="content-header">
        <h2>All Helpful Updates</h2>
        <div className="sort-by">
          <label htmlFor="sortBy">Sort by:</label>
          <div className="select-wrapper">
            <select id="sortBy">
              <option value="recent">Most Recent</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      <section className="dashboard-section">
        <div className="cards-wrapper">
          {cardsData.map(({ title, info, points }, idx) => (
            <Card
              key={idx}
              title={title}
              info={info}
              points={points}
              icon={dashboardIcon}
              buttonText="Apply"
              bookmark={true}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default DashboardView;