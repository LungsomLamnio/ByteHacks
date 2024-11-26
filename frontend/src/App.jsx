import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SellerDashBoard from "./pages/SellerDashBoard";
import ArtisansBio from "./pages/ArtisansBio";
import LandingPage from "./pages/LandingPage";
import BuyerLogin from "./pages/BuyerLogin";
import SellerLogin from "./pages/SellerLogin";
import SellerRegister from "./pages/SellerRegister";
import BuyerRegister from "./pages/BuyerRegister";
import RegisterationSuccess from "./pages/RegisterationSuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/seller-dashboard" element={<SellerDashBoard />} />
      </Routes>
      <Routes>
        <Route path="/artisans-bio" element={<ArtisansBio />} />
      </Routes>
      <Routes>
        <Route path="/buyer-login" element={<BuyerLogin />} />
      </Routes>
      <Routes>
        <Route path="/seller-login" element={<SellerLogin />} />
      </Routes>
      <Routes>
        <Route path="/seller-register" element={<SellerRegister />} />
      </Routes>
      <Routes>
        <Route path="/buyer-register" element={<BuyerRegister />} />
      </Routes>
      <Routes>
        <Route
          path="/registeration-success"
          element={<RegisterationSuccess />}
        />
      </Routes>
    </Router>
  );
}

export default App;
