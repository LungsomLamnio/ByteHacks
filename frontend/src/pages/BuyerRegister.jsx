import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

const BuyerRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false); // To manage loading state
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true); // Show loading state

    try {
      // Send POST request to the server to register the buyer
      const response = await axios.post(
        "http://localhost:5001/api/users/register",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }
      );

      // Redirect to the success page after successful registration
      navigate("/registeration-success", {
        state: { message: response.data.message }, // Optional: Pass message to the success page
      });
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed!"); // Show error message
    } finally {
      setLoading(false); // Hide loading state after request completes
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/buyer-login" className="text-blue-600 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyerRegister;
