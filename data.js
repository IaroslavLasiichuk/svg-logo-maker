const questions = [
    // User text
    {
      type: "input",
      name: "text",
      message: "Please enter up to three characters:",
      validate(value) {
          if (value.length <= 3) {
            return true;
          }
          return 'Please enter up to three characters:';
      },
    },
    // Text color
    {
      type: "input",
      name: "color",
      message: "Please can enter a text color keyword:",
    },
    // Background
    {
      type: "input",
      name: "background",
      message: "Please enter background color keyword:",
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