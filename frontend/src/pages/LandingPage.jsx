import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === "Seller") {
      navigate("/seller-login"); // Correct path to SellerLogin
    } else if (role === "Buyer") {
      navigate("/buyer-login"); // Correct path to BuyerLogin
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Welcome to Our Platform
      </h1>
      <p className="text-xl mb-8 text-center">
        Choose your role to get started
      </p>
      <div className="flex space-x-6">
        <button
          id="sellerButton"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          onClick={() => handleRoleSelection("Seller")}
        >
          I am a Seller
        </button>
        <button
          id="buyerButton"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          onClick={() => handleRoleSelection("Buyer")}
        >
          I am a Buyer
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
