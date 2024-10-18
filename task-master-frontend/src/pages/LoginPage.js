import { Label, TextInput} from 'flowbite-react'
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
      email: '',
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

        navigate('/home')

      } else {
        toast.error(data.message);
      }
    },
  });
 console.log(formik.errors)
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
            helperText = {formik.errors.email}
            color={formik.errors.email ? 'failure' : undefined} 
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
            helperText={formik.errors.password}
            color={formik.errors.password ? 'failure' : undefined}
          />
        </Label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;