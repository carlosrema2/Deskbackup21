const mysql = require('mysql2/promise');
exports.connection = async () => {
    const connection = await mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "parties_db"
    });
    return connection;
}

module.exports = connection;

