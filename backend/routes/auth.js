const express = require("express");
const bcrypt = require("bcryptjs");
const Buyer = require("../models/buyer"); // Import the Buyer model
const Seller = require("../models/seller");
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

// Buyer Login
router.post("/login/buyer", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if buyer exists with the provided email
    const buyer = await Buyer.findOne({ email });
    if (!buyer) {
      return res.status(404).json({ message: "Buyer not found" });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, buyer.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Successfully logged in, send response
    res.status(200).json({
      message: "Login successful",
      buyer: {
        username: buyer.username,
        email: buyer.email,
        _id: buyer._id,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in", error });
  }
});

// Seller Registration
router.post("/register/seller", async (req, res) => {
  const { username, email, password, storeName, gstNumber, businessAddress } =
    req.body;

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
      gstNumber,
      businessAddress, // Assuming businessAddress is an object with fields like street, city, etc.
    });

    await newSeller.save();
    res.status(201).json({ message: "Seller registered successfully" });
  } catch (error) {
    console.error("Error registering seller:", error);
    res
      .status(500)
      .json({ message: "Error registering seller", error: error.message });
  }
});

module.exports = router;
