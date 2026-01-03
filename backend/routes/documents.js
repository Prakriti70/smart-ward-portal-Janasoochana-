const express = require('express');
const router = express.Router();
<<<<<<< HEAD

// Sample documents data
const documents = [
  { id: 1, title: "Citizen ID Guidelines", link: "/docs/citizen-id.pdf" },
  { id: 2, title: "Ward Tax Rules", link: "/docs/ward-tax.pdf" },
  { id: 3, title: "Local Election Info", link: "/docs/election.pdf" }
];

router.get('/', (req, res) => {
  res.json(documents);
=======
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM documents', (err, results) => {
        if(err) return res.status(500).send(err);
        res.json(results);
    });
>>>>>>> origin/budget-ward
});

module.exports = router;
