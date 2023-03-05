const Shape = require('./component');
// Reuse the code in the child classes Triangle.
class Triangle extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    }
    render() {
        return `<svg version="1.1" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.background}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.color}>${this.text}</text>
        </svg> 
        `
    }
}
module.exports = Triangle;