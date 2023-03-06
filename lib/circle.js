const Shape = require('./component');

// Extends code in the child class Circle.
class Circle extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    }
    render(text, color, background) {
        return `<svg version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${background}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
        </svg>`
    }
}
module.exports = Circle;