import React from 'react';

const TaskItem = ({ task }) => {
  const priorityColors = {
    Low: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-red-100 text-red-800'
  };

  return (
    <li className="bg-gray-50 rounded-md p-4">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-medium text-gray-900">{task.title}</h5>
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-500">{task.description}</p>
      <p className="mt-2 text-sm text-gray-400">Due: {task.due_date}</p>
    </li>
  );
};

export default TaskItem;