//for this file, must create routes for GETTING notes, POSTING notes, and DELETING notes

//first set requirements to pull in

const fs = require("fs");
//bring in the db.json data for making, editing, deleting notes
var dbnotes = require("../db/db.json");

//now, set up the previously mentioned api routes
module.exports = function (app) {
    //-------------------------------
    //set up route for GETTING notes
    app.get("/api/notes", function (req,res) {
        res.json(dbnotes);
    });

    //-------------------------------
    //set up route for POSTING notes
    app.post("/api/notes", function (req,res) {
        //make a note in json format
        var createNote = {
            id: dbnotes.length+1,
            title: req.body.title,
            text: req.body.text
        };
        //take note, I've added id as a feature of the note in json, lets us delete them by id number
        //and also lets us create them with unique ids by using the length of the notes array

        //push the created note to the notes array
        dbnotes.push(createNote);
        res.json(dbnotes);
    });

    //-------------------------------
    //set up route for DELETING notes
    app.delete("/api/notes/:id", function (req,res) {
        //first take our input id of the note we want to delete
        var findID = req.params.id;
        //then find the id of the note with the id that matches
        let findNote = dbnotes.filter(findNote => {
            return findNote.id == findID;
        })[0];
        //then find the index of the note with the id that you wish to delete
        var ind = dbnotes.indexOf(findNote);
        //splice changes the notes in the array
        dbnotes.splice(ind,1);
        //then use a for loop to remove the corresponding note
        for (var i=ind; i<dbnotes.length; i++) {
            //-- removes the note from array
            dbnotes[i].id--;
        }
        res.json(dbnotes);
    });
}