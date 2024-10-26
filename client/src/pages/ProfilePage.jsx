import  { useState } from 'react';
import TaskList from '../components/TaskList';
import ProjectList from '../components/ProjectList';
import {  CheckCircle, PlusCircle, TrendingUp } from 'lucide-react';

const ProfilePage = ({user}) => {
  

  const [activeTab, setActiveTab] = useState('overview');


  if (!user) {
    return <h1>Loading...</h1>
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return <ProjectList />;
      case 'tasks':
        return <TaskList />;
      default:
        return (
          <div className="overview-container bg-white p-6 rounded-lg shadow-md">
            <div className="overview-header mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="stat-card p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-gray-500 uppercase text-sm font-medium">Tasks Completed</h3>
                <p className="text-3xl font-semibold text-gray-800">{user.tasksCompleted}</p>
                <div className="trend positive text-green-600 flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 mr-1" /> 12% from last month
                </div>
              </div>
              <div className="stat-card p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-gray-500 uppercase text-sm font-medium">Active Projects</h3>
                <p className="text-3xl font-semibold text-gray-800">{user.activeProjects}</p>
                <div className="trend positive text-green-600 flex items-center mt-2">
                  <PlusCircle className="w-4 h-4 mr-1" /> 3 new this month
                </div>
              </div>
              <div className="stat-card p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-gray-500 uppercase text-sm font-medium">Completion Rate</h3>
                <p className="text-3xl font-semibold text-gray-800">{user.completionRate}%</p>
                <div className="trend positive text-green-600 flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 mr-1" /> 5% from last month
                </div>
              </div>
            </div>

            <div className="recent-activity mt-8">
              <h3 className="text-xl font-semibold text-gray-800">Recent Activity</h3>
              <ul className="activity-list mt-4 space-y-4">
                <li className="activity-item flex items-center space-x-4">
                  <CheckCircle className="activity-icon w-8 h-8 text-green-500" />
                  <div className="activity-content">
                    <h4 className="text-lg font-semibold">Completed Task: Website Redesign</h4>
                    <p className="text-gray-500">Finished the main landing page design</p>
                  </div>
                  <span className="activity-date text-gray-400 text-sm">2 hours ago</span>
                </li>
                <li className="activity-item flex items-center space-x-4">
                  <PlusCircle className="activity-icon w-8 h-8 text-blue-500" />
                  <div className="activity-content">
                    <h4 className="text-lg font-semibold">New Project Created</h4>
                    <p className="text-gray-500">Started Mobile App Development</p>
                  </div>
                  <span className="activity-date text-gray-400 text-sm">1 day ago</span>
                </li>
              </ul>
            </div>
          </div>
        );
    }
  };


  return (
      <div className='min-h-screen bg-gray-100 pt-20 px-4 sm:px-6 lg:px-8'>
    <div className="mt-14 max-w-6xl mx-auto px-4"> 
     
      <div className="profile-header bg-white rounded-lg shadow-lg p-8 mb-6 flex items-center space-x-6">
        <div className="profile-avatar w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-700">
          {user.name.charAt(0)}
        </div>
        <div className="profile-details">
          <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">Role: member</p>
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
      </div>
  );
};

export default ProfilePage;