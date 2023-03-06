const inquirer = require('inquirer');
const fs = require('fs');
const { shapeSelected } = require('./lib/generateSvg');
const data = require('./data')

// Initialize app
function init() {
  inquirer
    .prompt(data)
    .then((answers) => {
      const { color, text, background, shapes } = answers;
      fs.writeFile('./examples/logo.svg', shapeSelected(shapes, text, color, background) , err => {
        if (err) {
          console.error(err);
        }
      });
      console.log('Generated logo.svg');
    });
    }
// Function call to initialize app
init();