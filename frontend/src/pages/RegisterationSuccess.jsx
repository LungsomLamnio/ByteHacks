import React from "react";
import { useLocation } from "react-router-dom"; // To access passed state

const RegistrationSuccess = () => {
  const location = useLocation();
  const message = location.state?.message || "Registration Successful!";

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Registration Success
        </h2>
        <p className="text-center text-gray-800 mb-4">{message}</p>
        <div className="text-center">
          <a href="/buyer-login" className="text-blue-600 hover:underline">
            Go to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
