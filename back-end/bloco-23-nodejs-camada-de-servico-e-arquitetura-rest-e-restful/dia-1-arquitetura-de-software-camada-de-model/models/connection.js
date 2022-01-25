const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'yasmin',
    password: 'Bing@min28',
    database: 'model_example'
});

module.exports = connection;