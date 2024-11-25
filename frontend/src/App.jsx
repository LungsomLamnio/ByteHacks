import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SellerDashBoard from "./pages/SellerDashBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/seller-dashboard" element={<SellerDashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
