class Shape {
    constructor(text, color, background) {
        this.text = text;
        this.color = color;
        this.background = background;
    }
}

class Triangle extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    }
    render() {
        return `<svg version="1.1" width="300" height="200"><text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.color}>${this.text}</text>
        <polygon points="150, 18 244, 182 56, 182" fill="${this.background}"/>
        </svg> 
        `
    }
}

class Circle extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    }
    render() {
        return `<svg version="1.1" width="300" height="200">
       <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.color}'>${this.text} </text>
      <circle cx="150" cy="100" r="80" fill=${this.background}/>
      </svg>`
    }
}

class Square extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    }
    render() {
        return ` <svg version="1.1" width="300" height="200">
          <rect x="100" y="50" width="150" height="150" fill="${this.background}"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.color}>${this.text}</text>
      </svg>`
    }
}

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
module.exports = Shape;
module.exports = { shapeSelected };
