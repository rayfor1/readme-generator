const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");


// -- They give us an ARRAY called 'questions' What could we do with this (?) -- //
const questions = [

        {
          type: "input",
          message: "What is your name:",
          name: "name"
        },
        {
          type: "input",
          message: "What is your github username?",
          name: "github"
        },
        {
          type: "input",
          message: "What is the title of your project?",
          name: "title"
        },

        {
          type: "input",
          message: "Description of project:",
          name: "desctiption"
        },

        {
          type: "input",
          message: "Table of contents?",
          name: "contents"
        },

        {
          type: "input",
          message: "?",
          name: "install"
        }

];

// -- They give us a writeToFile() FUNCTION, Looks like we may need to read/write to a file. What BUILT-IN node module will help us out with this (?) -- // 
function writeToFile(fileName, data) {
}

// -- This is a fairly common programming construct. They are just giving us a FUNCTION to INITIALIZE or SETUP our project parameter. It's also where we usually kick off our project flow -- //
function init() {

}

// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 
init();
