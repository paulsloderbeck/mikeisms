var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//serve static content from teh public directory in the application directory
app.use(express.static("public"));

//parse application bdy as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes and give the server access to them
var routes = require("./controllers/mikeisms_controller.js");
app.use(routes);

//start ourt server so it can begin listening to client requests
app.listen(PORT, function () {
    //Log (server-side) when our server has started
    console.log("server listening on http://localhost:" + PORT);
});