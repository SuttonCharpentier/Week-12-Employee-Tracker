const dotenv = require('dotenv');
const mysql = require('mysql2');
dotenv.config();
// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database: 'company_db',
        password: "G665c4c3!"
    },
    console.log(`Connected to the company_db database.`)
)
module.exports = db;