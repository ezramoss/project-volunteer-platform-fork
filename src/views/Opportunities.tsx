import React from 'react';
import Card from '../components/Card'; // Import the Card component
import opportunitiesIcon from '../assets/opportunities_icon.png'; // Import the icon for the cards
import './Opportunities.css'; // Optional: Add any specific styles for Opportunities here

const Opportunities: React.FC = () => {
  return (
    <main className="opportunities-content">
      <div className="content-header">
        <h2>Opportunities</h2>
        <div className="sort-by">
          <label htmlFor="sortBy">Sort by:</label>
          <select id="sortBy">
            <option value="recent">Most Recent</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <section className="dashboard-section">
        {/* Use the Card component */}
        <Card
          title="Project Title 1"
          info="Author A • Date A"
          points={['Point A1', 'Point A2', 'Point A3']}
          icon={opportunitiesIcon}
        />
        <Card
          title="Project Title 2"
          info="Author B • Date B"
          points={['Point B1', 'Point B2', 'Point B3']}
          icon={opportunitiesIcon}
        />
        <Card
          title="Project Title 3"
          info="Author C • Date C"
          points={['Point C1', 'Point C2', 'Point C3']}
          icon={opportunitiesIcon}
        />
      </section>
    </main>
  );
};

export default Opportunities;