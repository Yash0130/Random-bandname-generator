// The Random Band generator is here

import express from "express";
import { createRequire } from "module"

const require = createRequire(import.meta.url)

require("dotenv").config()

// Adding the Name list
const fName = require("D:/All Backend stuff/Ejs tutorials/Random bandname generator/public/Data/FirstName.json");
const lName = require("D:/All Backend stuff/Ejs tutorials/Random bandname generator/public/Data/LastName.json");

const Len_fname = fName.length; 
const Len_lname = lName.length;

// Year is also here
let Year = new Date("1995-12-25").getYear();       // This will return the last wo digit of the year


const port = process.env.PORT || 3000

const app = express();
// Middleware
// To add the static file
app.use(express.static("public"));
// To get the body data 
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
    console.log(Year);
    res.render("index.ejs", { year: Year });
});

app.post("/generate", (req, res) => {
    let FName = Math.floor(Math.random() * Len_fname + 1);
    let LName = Math.floor(Math.random() * Len_lname + 1);
     let F = String(fName[FName].first_name); 
     let L = String(lName[LName].last_name); 

    let name = `${F}  ${L}`;
    res.render("index.ejs", {generatedName: name,year: Year});
});

app.listen(port, (err) => {
    if (err) throw console.error(err);
    console.log("listening on port 4000");
});
