const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM wards LIMIT 1', (err, ward) => {
        if(err) return res.status(500).send(err);

        db.query('SELECT *, (allocated - used) AS remaining FROM budgets', (err2, budgets) => {
            if(err2) return res.status(500).send(err2);

            db.query('SELECT * FROM allowances', (err3, allowances) => {
                if(err3) return res.status(500).send(err3);

                res.json({
                    ...ward[0],
                    totalBudget: budgets.reduce((sum, b) => sum + b.allocated, 0),
                    budgetCategories: budgets,
                    totalAllowanceBudget: allowances.reduce((sum, a) => sum + a.allocated, 0),
                    allowanceCategories: allowances
                });
            });
        });
    });
});

module.exports = router;
