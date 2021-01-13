//require the path to the package to get the html filepath
var path = require("path");

//then route the app to the html file
module.exports = function(app) {
    //handle how the server gets notes to the html page
    //use "/notes" because notes.html is in the same directory as index.html
    app.get("/notes", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    //go to the index if no notes are there
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


    app.get("/", function(req, res) {
        res.json(path.join(__dirname, "../public/index.html"));
      });
}