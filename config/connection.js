require('dotenv').config()

const mysql = require('mysql2')

var connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

connection.connect(function(err) {
    if (err) {
        throw err
    }
    console.log('connected!')
})