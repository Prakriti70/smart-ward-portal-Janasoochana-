const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT *, (allocated - used) AS remaining FROM budgets', (err, results) => {
        if(err) return res.status(500).send(err);
        res.json({
            totalBudget: results.reduce((sum, cat) => sum + cat.allocated, 0),
            categories: results
        });
    });
});

module.exports = router;
