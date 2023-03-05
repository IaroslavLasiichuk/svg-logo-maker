const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

function shapeSelected(shape) {
  switch (shape) {
      case "Triangle":
          const triangle = new Triangle();
          return triangle.render();
         
      case "Circle":
          const circle = new Circle();
          return circle.render();
      case "Square":
          const square = new Square();
          return square.render();
      default:
          console.log("Does not exist");
          return;
  }
}

module.exports = { shapeSelected };