import React from 'react';
import TaskItem from './TaskItem';

const ProjectItem = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <p className="text-sm text-gray-500 mb-4">Due: {project.due_date}</p>
        <h4 className="text-lg font-semibold text-gray-700 mb-2">Tasks:</h4>
        <ul className="space-y-4">
          {project.tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;