const Shape = require('./component');

// Extends the code in the child class Square.
class Square extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    }
    render(text, color, background) {
        return `<svg version="1.1" width="300" height="200">
        <rect x="100" y="20" width="150" height="150" fill="${background}"/>
        <text x="175" y="110" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
        </svg>`
    }
}
module.exports = Square;