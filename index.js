// Variables
const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes.js');
const createSvg = require('./lib/shapes.js');
const questions = [
    // User text
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters?',
    },
    //   Text color
      {
        type: 'input',
        name: 'color',
        message: 'Please can enter a text color keyword (OR a hexadecimal number)?',
      },
     
      // Shapes
      {
        type: 'list',
        name: 'shapes',
        message: 'What kind of shape should your logo have?',
        choices: ['Circle', 'Triangle', 'Square',],
    },
    // Background
      {
        type: 'input',
        name: 'background',
        message: 'Please enter background color keyword (OR a hexadecimal number)?',
    },
];


// Initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
         
            const { Shape, Triangle, Circle, Square } = answers;
            fs.writeFile('./logo.svg', createSvg, err => {
                if (err) {
                  console.error(err);
                }
              });
              console.log('Generating logo.svg file...');
        })
}
// Function call to initialize app
init();