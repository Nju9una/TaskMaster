import React, { useState } from 'react';
import './RegistrationPage.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Registration successful:', data);
      // Optionally, you could redirect to the login page or show a success message
    })
    .catch((error) => {
      console.error('Error registering:', error);
      alert('Registration failed. Please try again.');
    });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <br />
        <label>
          Password:
          <input 
            type="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;