// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![License](https://img.shields.io/badge/license-$%7Blicense%7D-yellow)`;
    }
    
        return "";
    }
       
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return `\n* [License](#license)\n`;
    }
    
        return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License`;
    }
    
        return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  - ${data.description}

  ## Screenshots

  |[alt.text](${data.screenshot})

  ## Table of Contents

  - [License](#license)

  ${renderLicenseLink(data.license)}

  - [Installation](#installation)

  - [Usage](#usage)

  - [Credits](#contributors & credit)

  - [Tests](#tests)

  - [Questions](#questions)

  - [How to contribute](#how to contribute) 

  ## License

  - ${renderLicenseBadge(data.license)}

  Refer to [https://choosealicense.com/](https://choosealicense.com/)

  ## Installation
  To install this application, please follow the steps below:

  - ${data.installation}

  ## Usage

  - ${data.usage}

  ## Contributors & Credit

  - ${data.contributing}

  ## Tests

  - ${data.test}

  ## Questions

  If you have any questions, open an issue or contact me directly at ${data.email}. More of my work can be found at [${data.github}]|(https://github.com/${data.github})
You can view my GitHub at ${data.github}.

`;
}

module.exports = generateMarkdown;