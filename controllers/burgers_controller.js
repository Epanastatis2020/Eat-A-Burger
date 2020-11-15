//------------------------------------------------
// Setting dependencies
//------------------------------------------------

//Importing express
const express = require("express");

const router = express.Router();

//Importing the burger model
const burgerModel = require("../models/burger.js");

//------------------------------------------------
// Setting the routes
//------------------------------------------------

//Rendering the index HTML - the "get"
router.get("/", function (req, res) {
  burgerModel.selectAll(function (data) {
    //hbsObject is the object we are sending to index.handlebars
    var hbsObject = {
      burgers: data,
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Creating a burger - the "post"
router.post("/api/burgers", function (req, res) {
  burgerModel.insertOne(["burger_name"], [req.body.burger], function (result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

//Updating a burger - the "put"
router.put("/api/burgers/:id", function (req, res) {
  burgerModel.updateOne("devoured", "id", req.params.id, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//------------------------------------------------
// Exporting Modules
//------------------------------------------------
module.exports = router;
