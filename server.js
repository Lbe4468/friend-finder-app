// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// =============================================================

// Set up Express app
var app = express();
// Take whatever PORT defined by deployment site (HEROKU), OR 8080; to also be used on our local node server
var PORT = process.env.PORT || 8080;
// =============================================================

// Show public directory for files to access
app.use(express.static(path.join(__dirname, "./app/public")));
// =============================================================

// Set up Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
// =============================================================

// Include app routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);
// =============================================================

// console log to know that server is running when we initiate Node.js
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
// =============================================================