// src/components/TaskForm.js
// src/components/TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';
import "../App.css"

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
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Task Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea 
        placeholder="Description" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input 
        type="date" 
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="">Select Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
