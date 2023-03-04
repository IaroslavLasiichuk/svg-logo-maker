const Shape = require('./component');
// Reuse the code in the child class Circle.
class Circle extends Shape{
    constructor(text, color, background) {    
        super(text, color, background)
    }
    render() {
        return ` <text x="150" y="125" font-size="60" text-anchor="middle" fill=${color}'>${text} </text>
        <circle cx="150" cy="100" r="80" fill=${this.background}/>`
    }
}
module.exports = Circle;