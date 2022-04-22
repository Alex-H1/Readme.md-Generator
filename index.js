// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');




// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message:'Enter title'
    },{
        name: 'description',
        message: 'Enter description'
    },{
        name: 'installation',
        message: 'Enter installation guide'
    },{
        name: 'usage',
        message: 'Enter information guide'
    },{
        name: 'contribution',
        message: 'Enter contribution guidlines'
    },{
        name: 'test',
        message: 'Enter test instructions'
    },{
        type: 'list',
        name: 'license',
        message:'choose a license',
        choices:[
            'MIT','ISC','Perl','Unlicense','None'
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
    .then((data)=>{
        let fileName = generateMarkdown(data);
        fs.writeFile('user.md',fileName,(err)=>
        err ? console.log(err) : console.log('success')
        )
    })
}
// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();

