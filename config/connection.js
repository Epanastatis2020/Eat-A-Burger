//------------------------------------------------
// Setting dependencies
//------------------------------------------------
const mysql = require("mysql");
const util = require("util");

//------------------------------------------------
// Setting connection
//------------------------------------------------

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SQLr00tP@$sword",
    database: "burgers_db",
  });
}

//------------------------------------------------
// Connecting
//------------------------------------------------
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
