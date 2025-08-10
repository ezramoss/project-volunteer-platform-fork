import React, { useState } from 'react';
import Card from '../components/Card';
import opportunitiesIcon from '../assets/opportunities_icon.png';
import './MyProjects.css';

const tabs = [
  { id: 'active', label: 'Active Projects' },
  { id: 'watchlist', label: 'Watchlist' },
];

const cardsData = [
  {
    title: 'Project Title 1',
    info: 'Author A • Date A',
    points: [
      'New chat feature',
      'Replacement of Airtable with a new position search tool',
      'Here’s the copywriting from the notification',
    ],
  },
  { title: 'Project Title 2', info: 'Author B • Date B', points: ['Point B1', 'Point B2', 'Point B3'] },
  { title: 'Project Title 3', info: 'Author C • Date C', points: ['Point C1', 'Point C2', 'Point C3'] },
  { title: 'Project Title 4', info: 'Author D • Date D', points: ['Point D1', 'Point D2', 'Point D3'] },
  { title: 'Project Title 5', info: 'Author E • Date E', points: ['Point E1', 'Point E2', 'Point E3'] },
];

const MyProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <main className="my-projects-content">
      <div className="my-projects-header-card">
        <h1 className="my-projects-title">My Projects</h1>
        <p className="my-projects-subtitle">
          Start working on your projects now to make a difference!
        </p>
      </div>

      <div className="my-projects-tabs">
        {tabs.map(({ id, label }, i) => (
          <button
            key={id}
            className={`tab-button${activeTab === id ? ' active' : ''} ${
              i === 0 ? 'tab-left' : i === tabs.length - 1 ? 'tab-right' : ''
            }`}
            onClick={() => setActiveTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <section className="dashboard-section">
        <div className="cards-wrapper">
          {cardsData.map(({ title, info, points }, idx) => (
            <Card
              key={idx}
              title={title}
              info={info}
              points={points}
              icon={opportunitiesIcon}
              buttonText="Join"
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MyProjects;