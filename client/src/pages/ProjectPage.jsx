import React from 'react';
import ProjectList from '../components/ProjectList';

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Projects</h1>
        <ProjectList />
      </div>
    </div>
  );
};

export default ProjectPage;