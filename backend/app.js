const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const budgetRoute = require("./routes/budget");  // route file

// Use routes
app.use("/api/budget", budgetRoute);  // all /api/budget requests go to budget.js

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
