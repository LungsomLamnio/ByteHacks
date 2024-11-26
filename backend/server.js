const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file
const productRoutes = require("./routes/productRoutes");
const buyerRoutes = require("./routes/buyerRoutes"); // Import buyer routes
const authRoutes = require("./routes/auth"); // Import the auth routes
const sellerRoutes = require("./routes/auth"); // Import seller routes from auth.js

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use("/api/products", productRoutes); // Product-related routes
app.use("/api/users", buyerRoutes); // User-related routes (Registration)
app.use("/api/users", authRoutes); // Use auth.js for user-related routes (login/registration)
app.use("/api/users", sellerRoutes); // Use seller routes for registration

// MongoDB Connection
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      console.error("MONGO_URI is not defined in .env file");
      process.exit(1);
    }
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

connectDB(); // Connect to MongoDB

// Root Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the E-commerce API!",
    status: "API is running",
    routes: [
      { path: "/api/products", description: "Product-related endpoints" },
      { path: "/api/users", description: "User registration endpoints" },
    ],
  });
});

// Graceful Shutdown
process.on("SIGINT", async () => {
  console.log("Closing MongoDB connection...");
  await mongoose.disconnect();
  process.exit(0);
});

// Start the Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
