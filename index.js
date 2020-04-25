const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");


// -- They give us an ARRAY called 'questions' What could we do with this (?) -- //

function questions () {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name:",
            name: "name"
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },

        {
            type: "input",
            message: "Give a cescription of the project:",
            name: "desctiption"
        },

        {
            type: "input",
            message: "Table of contents:",
            name: "contents"
        },

        {
            type: "input",
            message: "?",
            name: "installation"
        },

        {
            type: "input",
            message: "Any additional info for the user to know about the repo?",
            name: "usage"
        },

        {
            type: "input",
            message: "What type of licence should the project have?",
            name: "contributing"
        },

        {
            type: "input",
            message: "Any additional info for the user to know about contributing to the repo?",
            name: "contributing"
        },

        {
            type: "input",
            message: "What command should be used to run tests?",
            name: "tests"
        },

        // {
        //     type: "input",
        //     message: "Any additional questions?",
        //     name: "question"
        // },

    ])
    .then(response => {
        let text = response.name;
        text = text + response.data;
        text = text + response.username;
        text = text + response.description;
        text = text + response.contents;
        text = text + response.installation;
        text = text + response.usage;
        text = text + response.contributing;
        text = text + response.tets;

        fs.writeFile("readme_gen.md", text, function(err){
            if(err){
                console.log("There is an error");
            }
            console.log("Success!");
        }   
    )}
)}

// -- They give us a writeToFile() FUNCTION, Looks like we may need to read/write to a file. What BUILT-IN node module will help us out with this (?) -- // 
function writeToFile(fileName, data) {

}

// -- This is a fairly common programming construct. They are just giving us a FUNCTION to INITIALIZE or SETUP our project parameter. It's also where we usually kick off our project flow -- //
function init() {

}

// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 
init();
