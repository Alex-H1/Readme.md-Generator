// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'Title',
        message:'Enter title'
    },{
        name: 'Description',
        message: 'Enter description'
    },{
        name: 'Installation',
        message: 'Enter installation guide'
    },{
        name: 'Usage',
        message: 'Enter information guide'
    },{
        name: 'Contribution',
        message: 'Enter contribution guidlines'
    },{
        name: 'test',
        message: 'Enter test instructions'
    },{
        type: 'list',
        name: 'License',
        message:'choose a license',
        choices:[
            'MIT','APACHE 2.0','GPL 3.0','BSD 3','None'
        ],
    },{
        name:'userName',
        message:'Enter your GitHub username',
    },{
        name:'email',
        message:'Enter email adress'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   inquirer
    .prompt(questions)

}
writeToFile();
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log(__dirname)