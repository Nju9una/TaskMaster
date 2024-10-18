// import React, { useState } from 'react';
import {Button, Label, TextInput} from 'flowbite-react'
import './LoginPage.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email is required'),
      password: Yup.string().required('Password is required')
    }),
    initialValues: {
      phone: '',
      password: '',
    },
    onSubmit: async (values) => {

      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();

      if(data?.access_token){
        toast.success(data.message);

        localStorage.setItem('session', JSON.stringify(data));

        navigate('/')

      } else {
        toast.error(data.message);
      }
    },
  });


  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch('http://localhost:5000/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email, password }),
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log('Login successful:', data);
  //     localStorage.setItem('token', data.token); // Assuming your backend returns a token
  //     // Redirect or update UI as needed
  //   })
  //   .catch((error) => {
  //     console.error('Error logging in:', error);
  //     alert('Login failed. Please try again.');
  //   });
  // };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <Label>
          Email:
          <TextInput 
            type="email" 
            name="email" 
            onChange={formik.handleChange} 
            value={formik.values.email}
            helpertext = {formik.errors.email}
            color={formik.errors.phone ? 'failure' : undefined} 
          />
        </Label>
        <br />
        <Label>
          Password:
          <TextInput 
            type="password" 
            name="password" 
            onChange = {formik.handleChange}
            value={formik.values.password}
            helpertext={formik.errors.password}
            color={formik.errors.password ? 'failure' : undefined}
          />
        </Label>
        <br />
        <Button type="submit" isProcessing={formik.isSubmitting}>Login</Button>
      </form>
    </div>
  );
};

export default Login;