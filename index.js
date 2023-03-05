const inquirer = require('inquirer');
const fs = require('fs');
const { shapeSelected } = require('./lib/generateSvg');

// Initialize app
function init() {
  inquirer
    .prompt([
      // User text
      {
        type: "input",
        name: "text",
        message: "Please enter up to three characters?",
      },
      // Text color
      {
        type: "input",
        name: "color",
        message: "Please can enter a text color keyword (OR a hexadecimal number)?",
      },
      // Background
      {
        type: "input",
        name: "background",
        message: "Please enter background color keyword (OR a hexadecimal number)?",
      },
      // Shapes
      {
        type: "list",
        name: "shapes",
        message: "What kind of shape should your logo have?",
        choices: [
          { name: "Circle" },
          { name: "Triangle" },
          { name: "Square" }
        ],
      },
    ])

    .then((answers) => {
      const { color, text, background, shapes } = answers;
      fs.writeFile('./logo.svg', shapeSelected(shapes) , err => {
        if (err) {
          console.error(err);
        }
      });
      console.log('Generating logo.svg file...');
    });
    }
// Function call to initialize app
init();
