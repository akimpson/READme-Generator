// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "Title"
    }, {
        type: "input",
        message: "What is the project about? Please provide a brief description.",
        name: "Description"
    }, {
        type: "input",
        message: "Table of Contents",
        name: "Table of Contents"    
    }, {
        type: "input",
        message: "What does the user need to install to run this app? ",
        name: "Installation"    
    }, {
        type: "input",
        message: "How is the app used? Give instructions",
        name: "Usage" 
    }, {
        type: "input",
        message: "Add a screenshot using |[alt text](assets/images/screenshot.png)",
        name: "Screenshot"
    }, {    
        type: "input",
        message: "Who contributed to this project?",
        name: "Contributing"   
    }, {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "Tests"  
    }, {
        type: "input",
        message: "Contact information for inquiries",
        name: "Questions"
    }, {
        type: "input",
        message: "What is your GitHub username?",
        name: "Username"               
    }, {
        type: "input",
        message: "What is your email address?",
        name: "Email"     
    }, {
        type: "list",
        message: "Select license",
        name: "License", 
        choices: [ "Unlicense", "MIT", "GVL-GPL 3.0", "APACHE 2.0",

        ]
    },
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if(err) {
            return console.log(err)
        } else {    
        }
    } )

}; 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md" , generatorMarkdown(data));
            console.log(data)
        })

}

// Function call to initialize app
init();
