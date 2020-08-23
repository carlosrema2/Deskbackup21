
var mysql = require("mysql2");

var source = {
  localhost: {
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "starwars"
  }
};


// Creating our connection
var connection = mysql.createConnection(source.localhost);


// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;
