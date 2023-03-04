const Shape = require('./component');
// Reuse the code in the child class Square.
class Square extends Shape{
    constructor(text, color, background) {    
        super(text, color, background)
    }
    render() {
        return ` <text x="150" y="125" font-size="60" text-anchor="middle" fill=${color}>${text}</text>
        <rect x="10" y="10" width="30" height="30" stroke="black" fill=${color} stroke-width="5"/>`
    }
}
module.exports = Square;