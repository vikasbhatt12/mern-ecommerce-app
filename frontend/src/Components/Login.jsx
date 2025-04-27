/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    const data = {
      email,
      password,
    };

    // Temporary message logic to simulate login functionality
    if (email === 'test@example.com' && password === 'password') {
      alert('Login successful!');
      setMessage('');
    } else {
      setMessage('Please provide a valid email and password!');
    }
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-sm border shadow bg-white mx-auto p-8">
        <h2 className="text-2xl font-semibold pt-5">Please login</h2>
        <form onSubmit={handleLogin} className="space-y-5 max-w-sm mx-auto pt-8">
          <input
            type="text"
            value={email}
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />

          <input
            type="password"
            value={password}
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          {message && <p className="text-red-500">{message}</p>}  {/* Display error message if any */}

          <button
            type="submit"
            className="w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md"
          >
            Login
          </button>
        </form>

        <p className="my-5 italic text-sm text-center">
          Don't have an account?
          <Link to="/register" className="text-red-700 px-1 underline">
            Register
          </Link> 
          here.
        </p>
      </div>
    </section>
  );
};

export default Login;
