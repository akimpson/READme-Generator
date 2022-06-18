// Include packages needed for this application
// Import inquirer from npm
const inquirer = require("inquirer");
// Import fs 'file system' from npm
const fs = require('fs');
const path = require('path');
//const util = require("util");

// Send data input by user to the README template
const generateMarkdown = require('./utils/generateMarkdown');


// Create an array of questions for user input
// User will answer the questions to generate the README file
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    }, {
        type: "input",
        message: "What is the project about? Please provide a brief description.",
        name: "description"
    }, {
        type: "input",
        message: "What does the user need to install to run this app? ",
        name: "installation"    
    }, {
        type: "input",
        message: "How is the app used? Give instructions",
        name: "usage" 
    }, {
        type: "input",
        message: "Add a screenshot using ![alt text](./assets/images/screenshot.png)",
        name: "screenshot"
    }, {    
        type: "input",
        message: "Who contributed to this project?",
        name: "contributing"   
    }, {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "tests"  
    }, {
        type: "input",
        message: "Contact information for inquiries",
        name: "questions"
    }, {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"               
    }, {
        type: "input",
        message: "What is your email address?",
        name: "email"     
    }, {
        type: "list",
        message: "Select license",
        name: "license", 
        choices: [ "Unlicense", "APACHE", "MIT", "BSO", "GNU-GPL", "MPL", "EPL" ]   
    }
];
        
    
// Created a function to write README file
function writeToFile(filename, data) {
    return  fs.writeFileSync(path.join(process.cwd(), filename), data); 
}

// Created a function to initialize the app
function init() {
    inquirer.prompt(questions)
        .then(function(answers) {
            console.log("Readme is being generated")
            writeToFile("README.md" , generateMarkdown({ ...answers }));
        })

}

// Function call to initialize app
init();
