const Shape = require('./component');
// Reuse the code in the child class Square.
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
module.exports = Square;