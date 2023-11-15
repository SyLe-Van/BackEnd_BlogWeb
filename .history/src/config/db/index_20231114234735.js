const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'BlogWeb',
    user: 'root',
    password: 'Syle0712@'
})