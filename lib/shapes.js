// Parent Shape class 
class Shape {
    constructor(text, color, background) {
        this.text = text;   
        this.color = color;
        this.background = background;
    }
    renderText(input) {
        this.text = input;
    }
    renderColor(input) {
        this.color = input;
    }
    renderBackground(input) {
        this.background = input;
    } 
}
// Reuse the code in the child classes Triangle, Circle, and Square
class Triangle extends Shape{
    constructor(text, color, background) {    
        super(text, color, background)
    }
    writeText() {
        return `
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${color}>${text}</text>`
    }
    drawShape() {
        return `
        <polygon points="50 15, 100 100, 0 100"  stroke="black" fill=${this.background} stroke-width="1"/>
       `
    }
}
class Circle extends Shape{
    constructor(text, color, background) {    
        super(text, color, background)
    }
    writeText() {
        return `
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${color}>${text}</text>`
    }
    drawShape() {
        return `
        <circle cx="150" cy="100" r="80" fill=${this.background} />
       `
    }
}
class Square extends Shape{
    constructor(text, color, background) {    
        super(text, color, background)
    }
    writeText(){
        return `
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${color}>${text}</text>`
    }
    drawShape(){
        return `
        <rect x="10" y="10" width="30" height="30" stroke="black" fill=${color} stroke-width="5"/>` 
    }
}
const a = new Square;

console.log(a.writeText);
function createSvg() {
    return `
    <svg width="200" height="200">
    <rect x="10" y="10" width="30" height="30" stroke="black" fill='black' stroke-width="5"/>
     </svg>
 `
}

module.exports = { Shape, Triangle, Circle, Square };
module.exports = createSvg();