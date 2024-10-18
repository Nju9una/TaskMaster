import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import ProjectList from '../components/ProjectList';

const ProfilePage = () => {
// sample user data
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Project Manager",
    joinDate: "2024-01-15",
    tasksCompleted: 45,
    activeProjects: 3
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
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-600">Tasks Completed</p>
                <p className="text-2xl font-bold">{user.tasksCompleted}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-600">Active Projects</p>
                <p className="text-2xl font-bold">{user.activeProjects}</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Header */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
            <span className="text-2xl">{user.name.charAt(0)}</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-1">{user.email}</p>
            <p className="text-gray-600 mb-1">Role: {user.role}</p>
            <p className="text-gray-600">Member since: {user.joinDate}</p>
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