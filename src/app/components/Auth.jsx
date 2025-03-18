'use client'
import React, { useState } from 'react';

const AUTH_PASSWORD = process.env.NEXT_PUBLIC_AUTH_PASSWORD; // Use the exposed variable

const Auth = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === AUTH_PASSWORD) {
      onSuccess(); // Callback to handle successful authentication
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-lg font-semibold mb-4">Admin Authentication</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="border px-4 py-2 rounded-lg w-full mb-4"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Submit
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Auth;
