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
    host: "nuskkyrsgmn5rw8c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "wk5by304b5pyzniw",
    password: "rg6f82reaf2e6ksv",
    database: "q2ic2p5h8k8pzig7",
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

//------------------------------------------------
// Exporting Modules
//------------------------------------------------
module.exports = connection;
