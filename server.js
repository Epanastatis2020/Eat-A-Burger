//------------------------------------------------
// Setting dependencies
//------------------------------------------------
const express = require("express");
const exphbs = require("express-handlebars");

//------------------------------------------------
// Setting the port
//------------------------------------------------
const PORT = process.env.PORT || 8000;

//------------------------------------------------
// Creating an instance of the app
//------------------------------------------------
const app = express();

//------------------------------------------------
// Setting static public route
//------------------------------------------------
app.use(express.static("public"));

//------------------------------------------------
// Setting up data parsing
//------------------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//------------------------------------------------
// Setting handlebars as template engine
//------------------------------------------------
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//------------------------------------------------
// Importing routes and pointing server to them
//------------------------------------------------
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

//------------------------------------------------
// Start server so it listens for client requests
//------------------------------------------------
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
