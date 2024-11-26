const express = require("express");
const bcrypt = require("bcryptjs"); // To hash the password
const Buyer = require("../models/buyer"); // Import Buyer schema
const router = express.Router();

// POST request to register a new buyer
router.post("/register", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Check if password and confirmPassword match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    // Check if email is already taken
    const existingBuyer = await Buyer.findOne({ email });
    if (existingBuyer) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new Buyer document
    const newBuyer = new Buyer({
      username,
      email,
      password: hashedPassword,
    });

    // Save the buyer to the database
    await newBuyer.save();

    res.status(201).json({ message: "Buyer registered successfully" });
  } catch (error) {
    console.error("Error registering buyer", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
