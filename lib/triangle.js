const Shape = require('./component');

// Extends the code in the child classes Triangle.
class Triangle extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    }
    render(text, color, background) {
        return `<svg version="1.1" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="${background}"/>
        <text x="150" y="170" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
        </svg>`
    }
}
module.exports = Triangle;