import React from 'react';
import TaskItem from './TaskItem';

const ProjectItem = ({ name, description, user_id }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4">Due: {user_id}</p>
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