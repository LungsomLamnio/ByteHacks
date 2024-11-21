const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// Start the Server
const PORT = 5001; // Change if needed
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
