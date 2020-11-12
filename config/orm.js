//------------------------------------------------
// Setting dependencies
//------------------------------------------------
const connection = require("./connection.js");

//------------------------------------------------
// Setting ORM
//------------------------------------------------
const orm = {
  // Selecting all the data from the table
  selectAll: function (table, cb) {
    const queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Inserting a single record in the table
  insertOne: function (table, col, value, cb) {
    const queryString = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(queryString, [table, col, value], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Updating a record in the table
  updateOne: function (table, col1, col2, val1, val2, cb) {
    const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
    connection.query(queryString, [table, col1, val1, col2, val2], function (
      err,
      result
    ) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

//------------------------------------------------
// Exporting Modules
//------------------------------------------------
module.exports = orm;
