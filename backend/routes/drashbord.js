const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Path to JSON file
const dataPath = path.join(__dirname, '../data/dashboard.json');

// Helper to read JSON
function readDashboardData() {
  const jsonData = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(jsonData);
}

// Single endpoint returning all dashboard data
router.get('/', (req, res) => {
  const data = readDashboardData();
  res.json(data);
});

// Optional: separate endpoints
router.get('/announcements', (req, res) => {
  const data = readDashboardData();
  res.json(data.announcements);
});

router.get('/trainings', (req, res) => {
  const data = readDashboardData();
  res.json(data.trainings);
});

router.get('/community', (req, res) => {
  const data = readDashboardData();
  res.json(data.communityActivities);
});

module.exports = router;
