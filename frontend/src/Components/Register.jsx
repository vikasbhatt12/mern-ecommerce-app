/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };

    console.log(data);
    // Set a message for successful registration (you can replace this with your logic later)
    setMessage("Registration successful! You can now log in.");
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-sm mx-auto bg-white border shadow p-8">
        <h2 className="text-2xl font-semibold pt-5">Please Register</h2>
        <form
          onSubmit={handleRegister}
          className="space-y-5 max-w-sm mx-auto pt-8"
        >
          <input
            type="text"
            value={username}
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            required
          />

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
          {message && <p className="text-green-500">{message}</p>}
          <button
            type="submit"
            className="w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md"
          >
            Register
          </button>
        </form>

        <p className="my-5 italic text-sm text-center">
          Already have an account? Please
          <Link to="/login" className="text-red-700 px-1 underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
