
// -- HEY LOOK!! They gave us a FUNCTION... SO YOU BETTER USE IT *HINT HINT* 
// function generateMarkdown(data) {
//   return `
// # ${data.title}
const genMarkdown = (data) => {
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
//^^^I forgot how to export this over to the main index.js file so it's in two places. This is the function however...

// -- Here we are making our FUNCTION available outside (EXPORTING) of this file -- //
module.exports = generateMarkdown;
generateMarkdown : generateMarkdown 
// -- NOTICE: that we are adding this function to the 'module.exports' OBJECT -- //

