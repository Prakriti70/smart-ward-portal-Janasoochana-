<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM budget', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { category, amount } = req.body;
    db.query('INSERT INTO budget (category, amount) VALUES (?, ?)', [category, amount], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Budget entry added', id: results.insertId });
    });
=======
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/:ward", (req, res) => {
  const filePath = path.join(__dirname, "../data/budget.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Could not read budget file" });

    const budgetData = JSON.parse(data);

    // Calculate percentage used for frontend bars
    const utilization = budgetData.categories.map(cat => ({
      label: cat.title,
      percentage: Math.round((cat.used / cat.allocated) * 100)
    }));

    res.json({
      ward: req.params.ward,
      fiscalYear: "2080/81",
      totalBudget: budgetData.totalBudget,
      utilization
    });
  });
>>>>>>> origin/budget-ward
});

module.exports = router;
