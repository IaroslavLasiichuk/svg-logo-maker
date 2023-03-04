const Shape = require('./component');
// Reuse the code in the child classes Triangle.
class Triangle extends Shape{
    constructor(text, color, background) {    
        super(text, color, background)
    }
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${color}>${text}</text>
        <polygon points="50 15, 100 100, 0 100"  stroke="black" fill=${this.background}stroke-width="1"/>
        `
    }
}
module.exports = Triangle;