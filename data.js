const questions = [
    // User text
    {
      type: "input",
      name: "text",
      message: "Please enter up to three characters:",
      validate(value) {
        return (value.length <= 3) ? true : 'Please enter up to three characters:';
      }
    },
    // Text color
    {
      type: "input",
      name: "color",
      message: "Please can enter a text color keyword or a hexadecimal number:",
    },
    // Background
    {
      type: "input",
      name: "background",
      message: "Please enter background color keyword or a hexadecimal number:",
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
]
  
module.exports = questions;