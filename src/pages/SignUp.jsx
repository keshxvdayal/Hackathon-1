// components/Signup.js
import React from "react";

const Signup = ({ onSignup }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Signup</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>
          <button
            type="button"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            onClick={onSignup}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
