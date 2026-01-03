const express = require('express');
const router = express.Router();
const db = require('../db');

// GET summary (single ward)
router.get('/summary', (req, res) => {
    const query = `
        SELECT 
            (SELECT amount FROM budgets LIMIT 1) AS budget,
            (SELECT amount FROM social_allowances LIMIT 1) AS social_allowance,
            (SELECT population FROM wards LIMIT 1) AS population
    `;
    db.query(query, (err, results) => {
        if(err) return res.status(500).send(err);
        res.json(results[0]);
    });
});

module.exports = router;
