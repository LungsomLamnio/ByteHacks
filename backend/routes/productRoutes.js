const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.post("/api/products", async (req, res) => {
  const { name, description, price, category, stock, seller, images } =
    req.body;

  // Validate required fields
  if (!name || !description || !price || !category || !stock || !seller) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      stock,
      seller,
      images,
    });

    const savedProduct = await newProduct.save();
    res
      .status(201)
      .json({ message: "Product added successfully", product: savedProduct });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ message: "Error saving product", error });
  }
});

module.exports = router;
