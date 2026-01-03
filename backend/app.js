const express = require("express");
const cors = require("cors");

const app = express();  // create server

// Middlewares
app.use(cors());          // allow frontend to call backend
app.use(express.json());  // parse JSON in POST requests

// Test endpoint
app.get("/", (req, res) => {
  res.send("Smart Ward Portal API is working!");
});
// Import routes
const documentsRoutes = require("./routes/documents");
const announcementsRoutes = require("./routes/announcements");
const dashboardRoutes = require('./routes/dashboard');
const wardsRoute = require("./routes/wards");
const budgetRoute = require("./routes/budget");

// Routes
app.use("/api/v1/documents", documentsRoutes);
app.use("/api/v1/announcements", announcementsRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use("/api/wards", wardsRoute);
app.use("/api/budget", budgetRoute);

// Export app for server.js
module.exports = app;

