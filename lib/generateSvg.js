const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

// Renders the selected shape.
function shapeSelected(shape, text, color, background) {
  switch (shape) {
      case "Triangle":
          const triangle = new Triangle();
          return triangle.render(text, color, background);
      case "Circle":
          const circle = new Circle();
          return circle.render(text, color, background);
      case "Square":
          const square = new Square();
          return square.render(text, color, background);
      default:
          console.log("Does not exist");
          return;
  }
}
module.exports = { shapeSelected };