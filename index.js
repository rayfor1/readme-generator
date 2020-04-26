const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util")
const fs = require("fs");

const writeFileAsync = util.promisify(fs.writeFile)


// // -- They give us an ARRAY called 'questions' What could we do with this (?) -- //

function questions(){
return inquirer.prompt ([
        {
            type: "input",
            message: "What is your name:",
            name: "name"
        },
        {
            type: "input",
            message: "What is your e-mail address?",
            name: "email"
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
            message: "Give a description of the project:",
            name: "description"
        },

        {
            type: "input",
            message: "Table of contents:",
            name: "contents"
        },

        {
            type: "input",
            message: "What command should be used to install any additional dependencies?",
            name: "installation"
        },

        {
            type: "input",
            message: "Any additional info for the user to know about the repo?",
            name: "usage"
        },

        {
            type: "input",
            message: "What type of license should the project have?",
            name: "license"
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

        {
            type: "input",
            message: "Any additional questions?",
            name: "question"
        },
])
        //(code seems to work without the .then arguments for now...)
        //     .then(data => {
        //         let text = data.name;
        //         text = text + data.data;
        //         text = text + data.username;
        //         text = text + data.description;
        //         text = text + data.contents;
        //         text = text + data.installation;
        //         text = text + data.usage;
        //         text = text + data.contributing;
        //         text = text + data.test;
        
}



// // -- They give us a writeToFile() FUNCTION, Looks like we may need to read/write to a file. What BUILT-IN node module will help us out with this (?) -- // 
// function writeToFile(fileName, data) {
       //      fs.writeFile("readme_gen.md", text, function(err){
        //         if(err){
        //              console.log("There is an error");
        //         }
        //         console.log("Success!");
        //         }   
        //     )}
    let getInfo = (data) => {
        let queryUrl = `https://api.github.com/users/${data.username}`;
        return axios.get(queryUrl)
    
}


const genMarkdown = (data, image, email) => {
    console.log(data)
    return `
        # ${data.title}
        ![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

        ## Description
        ${data.description}

        ## Table of Contents:
        *[Installation](#installation)
        *[Usage](#usage)
        *[License](#license)
        *[Contributing](#contributing)
        *[Tests](#tests)
        *[Questions](#questions)
        
        ## Installation
        To install any necessary dependencies, run the following command:
            ${data.installation}

        ## Usage
        ${data.usage}

        ## License
        This project is licensed under the ${data.license} license.

        ## Contributing
        ${data.contributing}

        ## Tests
        To run any tests, run the following command:
            ${data.tests}

        ## Questions
        <img src="${image}" alt="avatar" style="border-radius: 14px" width="40"/>
        If you have any questions about the repo, open an issue or contact me at: 
        ${data.email} [${data.username}] 
    `
};


// // -- This is a fairly common programming construct. They are just giving us a FUNCTION to INITIALIZE or SETUP our project parameter. It's also where we usually kick off our project flow -- //

async function init() {
    console.log("Generating README")
    try {
      const data = await questions();
      const response =  await getInfo(data);
      const writeMarkdown =  genMarkdown(data,response.data.avatar_url,response.data.html_url);
  
      await writeFileAsync("README.md", writeMarkdown);
      console.log("Successfully wrote to README.md");
    } 
    catch(err) {
      console.log(err);
    }
  }
// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 
init();