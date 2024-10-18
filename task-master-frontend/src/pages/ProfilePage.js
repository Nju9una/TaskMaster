
import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import ProjectList from '../components/ProjectList';
import './ProfilePage.css';

const ProfilePage = () => {
  // sample user data
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Project Manager",
    joinDate: "2024-01-15",
    tasksCompleted: 45,
    activeProjects: 3,
    completionRate: 94
  });

  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return <ProjectList />;
      case 'tasks':
        return <TaskList />;
      default:
        return (
          <div className="overview-container">
            <div className="overview-header">
              <h2>Overview</h2>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Tasks Completed</h3>
                <p>{user.tasksCompleted}</p>
                <div className="trend positive">↑ 12% from last month</div>
              </div>
              <div className="stat-card">
                <h3>Active Projects</h3>
                <p>{user.activeProjects}</p>
                <div className="trend positive">↑ 3 new this month</div>
              </div>
              <div className="stat-card">
                <h3>Completion Rate</h3>
                <p>{user.completionRate}%</p>
                <div className="trend positive">↑ 5% from last month</div>
              </div>
            </div>
            
            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <ul className="activity-list">
                <li className="activity-item">
                  <div className="activity-icon">✓</div>
                  <div className="activity-content">
                    <h4>Completed Task: Website Redesign</h4>
                    <p>Finished the main landing page design</p>
                  </div>
                  <span className="activity-date">2 hours ago</span>
                </li>
                <li className="activity-item">
                  <div className="activity-icon">+</div>
                  <div className="activity-content">
                    <h4>New Project Created</h4>
                    <p>Started Mobile App Development</p>
                  </div>
                  <span className="activity-date">1 day ago</span>
                </li>
                <li className="activity-item">
                  <div className="activity-icon">↑</div>
                  <div className="activity-content">
                    <h4>Project Update: E-commerce Platform</h4>
                    <p>Completed payment integration module</p>
                  </div>
                  <span className="activity-date">2 days ago</span>
                </li>
              </ul>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-avatar">
            {user.name.charAt(0)}
          </div>
          <div className="profile-details">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>Role: {user.role}</p>
            <p>Member since: {user.joinDate}</p>
          </div>
        </div>
      </div>


  {/* Navigation Tabs */}
  <div className="border-b mb-6">
    <nav className="flex gap-4">
      <button
        className={`pb-2 px-4 ${activeTab === 'overview' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
        onClick={() => setActiveTab('overview')}
      >
        Overview
      </button>
      <button
        className={`pb-2 px-4 ${activeTab === 'projects' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
        onClick={() => setActiveTab('projects')}
      >
        Projects
      </button>
      <button
        className={`pb-2 px-4 ${activeTab === 'tasks' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
        onClick={() => setActiveTab('tasks')}
      >
        Tasks
      </button>
    </nav>
  </div>

  {/* Content Area */}
  {renderContent()}
</div>
  );
};
   
export default ProfilePage;



