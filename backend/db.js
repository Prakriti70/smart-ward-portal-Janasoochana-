const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // your MySQL username
    password: 'MyNewPass@123',          // your MySQL password
    database: 'smart_ward' // database name
});

db.connect(err => {
    if(err) throw err;
    console.log('MySQL Connected...');
origin/budget-ward
});

module.exports = db;
