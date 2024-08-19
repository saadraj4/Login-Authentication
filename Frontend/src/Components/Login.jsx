import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  document.title = "Login";
  const navigate = useNavigate();
  
  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      try {        
        const response = await axios.post('http://localhost:5000/api/auth/login', values, {
          headers: {
              'Content-Type': 'application/json',
          },
      });
        
        const { token, user } = response.data;

        // Store the token and image URL in local storage
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));

        alert("Login Successful");
        resetForm();

        // Navigate to the profile page
        navigate('/profile');
      } catch (error) {
        if (error.response && error.response.status===400) {
          alert('Invalid credentials. Please try again.');
        } else {
            alert('Server error. Please try again later.');
        }
        
      }
    },
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <br/>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <br/>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <br />
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">New Here?</p>
          <button onClick={() => navigate('/')} className="text-indigo-600 hover:text-indigo-800">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
