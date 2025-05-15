import React, { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await api.post("/auth/login", { name, email });
      navigate("/search");
    } catch {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-white to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-10 border border-gray-200">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
          Welcome to <span className="text-indigo-600">Fetch</span> 🐶
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Sign in to browse and match with shelter dogs.
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 text-sm rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <label className="block">
            <span className="text-gray-700 text-sm">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700 text-sm">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
