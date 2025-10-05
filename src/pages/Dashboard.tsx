import React, { useState, useEffect, useRef } from 'react';
import './Dashboard.css';
import Header from '../components/Header.tsx';
import MyProjects from '../views/MyProjects';
import Opportunities from '../views/Opportunities';
import DashboardView from '../views/DashboardView';
import ProfileView from '../views/ProfileView';
import Tools from '../views/Tools';
import Settings from '../views/Settings';
import ProjectView from '../views/ProjectView';

import dashboardIcon from '../assets/dashboard_icon.png';
import projectsIcon from '../assets/projects_icon.png';
import opportunitiesIcon from '../assets/opportunities_icon.png';
import toolsIcon from '../assets/tools_icon.png';
import settingsIcon from '../assets/settings_icon.png';
import logoutIcon from '../assets/logout_icon.png';

type ViewType = 'DashboardView' | 'MyProjects' | 'Opportunities' | 'ProfileView' | 'Tools' | 'Settings' | 'ProjectView';

const Dashboard: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('DashboardView');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeView]);

  const renderTab = (view: ViewType | 'Logout', label: string, icon?: string, onClick?: () => void) => (
    <span
      className={`sidebar-tab ${activeView === view ? 'active-tab' : ''}`}
      onClick={onClick ?? (() => setActiveView(view as ViewType))}
    >
      {icon && <img src={icon} alt={`${label} Icon`} className="sidebar-icon" />}
      {label}
    </span>
  );

  return (
    <div className="dashboard-container">
      <Header onProfileClick={() => setActiveView('ProfileView')} />
      <div className="dashboard-content">
        <aside className="sidebar">
          <div className="sidebar-top">
            {renderTab('DashboardView', 'Dashboard', dashboardIcon)}
            {renderTab('MyProjects', 'My Projects', projectsIcon)}
            {renderTab('Opportunities', 'Opportunities', opportunitiesIcon)}
            {renderTab('ProjectView', 'Project View')}
          </div>
          <div className="sidebar-bottom">
            {renderTab('Tools', 'Tools', toolsIcon)}
            {renderTab('Settings', 'Settings', settingsIcon)}
            {renderTab('Logout', 'Logout', logoutIcon, () => console.log('User logged out'))}
          </div>
        </aside>
        <main className={`content ${['DashboardView', 'ProjectView'].includes(activeView) ? 'scrollable-content' : ''}`} ref={contentRef}>
          {activeView === 'DashboardView' && <DashboardView />}
          {activeView === 'MyProjects' && <MyProjects />}
          {activeView === 'Opportunities' && <Opportunities />}
          {activeView === 'ProjectView' && <ProjectView />}
          {activeView === 'ProfileView' && <ProfileView />}
          {activeView === 'Tools' && <Tools />}
          {activeView === 'Settings' && <Settings />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;