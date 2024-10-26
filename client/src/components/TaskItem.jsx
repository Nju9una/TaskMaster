import React from 'react';

const TaskItem = ({ title, description, status, due_date }) => {
  const priorityColors = {
    Low: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-red-100 text-red-800'
  };

  return (
    <li className="bg-gray-50 rounded-md p-4">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-medium text-gray-900">{title}</h5>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            priorityColors[status]
          }`}
        >
          {status}
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-400">Due: {due_date}</p>
    </li>
  );
};

export default TaskItem;