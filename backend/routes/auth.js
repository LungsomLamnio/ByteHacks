const express = require("express");
const bcrypt = require("bcryptjs"); // For hashing passwords
const Buyer = require("../models/buyer"); // Import Buyer model
const Seller = require("../models/seller"); // Import Seller model

const router = express.Router();

// Buyer Registration
router.post("/register/buyer", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email already exists
    const existingBuyer = await Buyer.findOne({ email });
    if (existingBuyer) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new buyer
    const newBuyer = new Buyer({
      username,
      email,
      password: hashedPassword,
    });

    await newBuyer.save();
    res.status(201).json({ message: "Buyer registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering buyer", error });
  }
});

// Seller Registration
router.post("/register/seller", async (req, res) => {
  const { username, email, password, storeName } = req.body;

  try {
    // Check if the email already exists
    const existingSeller = await Seller.findOne({ email });
    if (existingSeller) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new seller
    const newSeller = new Seller({
      username,
      email,
      password: hashedPassword,
      storeName,
    });

    await newSeller.save();
    res.status(201).json({ message: "Seller registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering seller", error });
  }
});

module.exports = router;
