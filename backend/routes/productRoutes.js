const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const productRoutes = require("./routes/productRoutes");
const buyerRoutes = require("./routes/buyerRoutes");
const authRoutes = require("./routes/auth");
const sellerRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users/buyers", buyerRoutes);
app.use("/api/users/auth", authRoutes);
app.use("/api/users/sellers", sellerRoutes);

// MongoDB Connection
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      console.error("MONGO_URI is not defined in .env file");
      process.exit(1);
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

connectDB();

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

process.on("SIGINT", async () => {
  console.log("Closing MongoDB connection...");
  await mongoose.disconnect();
  process.exit(0);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
