//Sets up the server using express js

//first, set up dependencies for fs (for reading and writing files) and express (for servers)
const fs = require("fs");
const express = require("express");

//then, set up a server named "app" for express
var app = express();

//then make an initial port for the listener
var PORT = process.env.PORT || 8080;

//then create these lines for parsing json
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//gives express access to the directory named "public"
app.use(express.static("public"));

//set the path for the routes to the html and api, files in "route" directory
require("./route/htmlRoute")(app);
require("./route/apiRoute")(app);

//now set the code that listens to the server
app.listen(PORT,function() {
    console.log("App listening on PORT: " + PORT);
});
