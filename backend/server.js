const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // Import Mongoose

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    const uri =
      "mongodb+srv://LungsomLamnio:Nanu%40123@bytehackscluster.cgoef.mongodb.net/e-commerce"; // Replace with your MongoDB URI
    await mongoose.connect(uri); // No need for additional options
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit process with failure
  }
};

connectDB(); // Call the database connection function

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// Start the Server
const PORT = 5001; // Change if needed
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
