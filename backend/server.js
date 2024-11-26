const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file
const productRoutes = require("./routes/productRoutes");
//const userRoutes = require("./routes/userRoutes"); // Import user routes (buyer/seller registration)
const buyerRoutes = require("./routes/buyerRoutes"); // Import buyer routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes); // Product-related routes
// app.use("/api/users", userRoutes); // User-related routes
app.use("/api/users", buyerRoutes); // User-related routes (Registration)

// MongoDB Connection
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI; // Use the value from .env file
    if (!uri) {
      console.error("MONGO_URI is not defined in .env file");
      process.exit(1); // Exit the process if MONGO_URI is not found
    }

    // No need for useNewUrlParser or useUnifiedTopology anymore
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit process with failure
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
