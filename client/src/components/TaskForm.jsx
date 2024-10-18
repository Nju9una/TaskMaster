import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ projectId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, due_date: dueDate, priority, project_id: projectId };
    axios.post('/api/tasks', newTask)
      .then(response => {
        console.log('Task created:', response.data);
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('');
      })
      .catch(error => console.error('Error creating task:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text" 
        placeholder="Task Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea 
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Description" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        rows="3"
      />
      <input 
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="date" 
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <select 
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={priority} 
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="">Select Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button 
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;