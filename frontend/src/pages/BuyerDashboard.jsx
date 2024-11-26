import React from "react";
import { useNavigate } from "react-router-dom";

const BuyerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored user data (if you have any)
    localStorage.removeItem("buyerInfo");
    navigate("/buyer-login"); // Redirect back to the login page after logout
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Welcome to Your Dashboard
        </h2>
        <p className="mb-6 text-center text-gray-600">You are logged in!</p>

        {/* Displaying some user info */}
        <p className="mb-4">Username: John Doe</p>
        <p className="mb-4">Email: john.doe@example.com</p>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default BuyerDashboard;
