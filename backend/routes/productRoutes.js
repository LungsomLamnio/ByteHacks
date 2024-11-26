const express = require("express");
const router = express.Router();
const Product = require("../models/product"); // Adjust path as necessary

// POST: Add a new product
router.post("/products", async (req, res) => {
  try {
    const { name, description, price, category, stock, images } = req.body;

    // Validation
    if (!name || !price || !stock || images?.length === 0) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create the new product
    const product = new Product({
      name,
      description,
      price,
      category,
      stock,
      images,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
