//------------------------------------------------
// Setting dependencies
//------------------------------------------------
const orm = require("../config/orm.js");

//------------------------------------------------
// Setting the burger model
//------------------------------------------------
const burger = {
  // calling the selectAll method from ORM
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // calling the insertOne method from ORM
  insertOne: function (col, value, cb) {
    orm.insertOne("burgers", col, value, function (res) {
      cb(res);
    });
  },
  // calling the updateOne method from ORM
  updateOne: function (col1, col2, val2, cb) {
    orm.updateOne("burgers", col1, col2, "1", val2, function (res) {
      cb(res);
    });
  },
};

//------------------------------------------------
// Exporting Modules
//------------------------------------------------
module.exports = burger;
