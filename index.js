// Variables
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('fs/promises');
const Shape = require('./lib/component.js');
const { selectedShape, generateSvg } = require('./lib/generateSvg.js');
const Shapes = require('./lib/shapes.js');

// Initialize app
function init() {
    inquirer
      .prompt(
        [
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
          // Background
            {
              type: 'input',
              name: 'background',
              message: 'Please enter background color keyword (OR a hexadecimal number)?',
          },
             // Shapes
             {
              type: 'list',
              name: 'shapes',
              message: 'What kind of shape should your logo have?',
              choices: [
              { name: "Circle"},
              { name: "Triangle"},
              { name: "Square"}],
          },
      ]
    )
     
    
      .then((answers) => {
     console.log(answers.shapes);
        fs.writeFile('./logo.svg', answers.shapes, err => {
          
                        });
                        console.log('Generating logo.svg file...');
  })
     
  //     .then((answers) => {
  //       const data = JSON.parse(answers.shapes);
        
  //  console.log(data);
  //       fs.writeFile('./logo.svg', generateSvg(data), err => {
  //                 if (err) {
  //                   console.log(err);
  //                 }
  //               });
  //               console.log('Generating logo.svg file...');
  // } )
      
}
// Function call to initialize app
init();  