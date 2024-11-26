import React from "react";
import "./landing_page.css";

const LandingPage = () => {
  const handleRoleSelection = (role) => {
    alert(`You selected: ${role}`);
    // Implement role-based navigation or logic here
  };

  return (
    <div className="landing-container">
      <h1>Welcome to Our Platform</h1>
      <p>Choose your role to get started</p>
      <div className="button-container">
        <button
          id="sellerButton"
          className="action-button"
          onClick={() => handleRoleSelection("Seller")}
        >
          I am a Seller
        </button>
        <button
          id="buyerButton"
          className="action-button"
          onClick={() => handleRoleSelection("Buyer")}
        >
          I am a Buyer
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
