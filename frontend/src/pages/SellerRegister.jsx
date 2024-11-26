import React, { useState } from "react";
import axios from "axios"; // Make sure axios is installed

const SellerRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    storeName: "",
    gstNumber: "",
    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });

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
    } else {
      try {
        // Send data to backend
        const response = await axios.post(
          "http://localhost:5001/api/users/register/seller", // Your backend API endpoint
          {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            storeName: formData.storeName,
            gstNumber: formData.gstNumber,
            businessAddress: {
              street: formData.street,
              city: formData.city,
              state: formData.state,
              country: formData.country,
              postalCode: formData.postalCode,
            },
          }
        );
        alert(response.data.message); // Handle response from backend
      } catch (error) {
        console.error("Error registering seller:", error.response);
        alert(
          "Error registering seller: " +
            (error.response ? error.response.data.message : "Unknown error")
        );
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Register as Seller
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

          <div className="mb-3">
            <label
              htmlFor="storeName"
              className="block text-gray-700 font-medium mb-1"
            >
              Store Name
            </label>
            <input
              type="text"
              id="storeName"
              name="storeName"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              placeholder="Enter your store name"
              value={formData.storeName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="gstNumber"
              className="block text-gray-700 font-medium mb-1"
            >
              GST Number
            </label>
            <input
              type="text"
              id="gstNumber"
              name="gstNumber"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              placeholder="Enter your GST number"
              value={formData.gstNumber}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="street"
              className="block text-gray-700 font-medium mb-1"
            >
              Street Address
            </label>
            <input
              type="text"
              id="street"
              name="street"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              placeholder="Enter your street address"
              value={formData.street}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="city"
              className="block text-gray-700 font-medium mb-1"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="state"
              className="block text-gray-700 font-medium mb-1"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              placeholder="Enter your state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="country"
              className="block text-gray-700 font-medium mb-1"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              placeholder="Enter your country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="postalCode"
              className="block text-gray-700 font-medium mb-1"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              placeholder="Enter your postal code"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerRegister;
