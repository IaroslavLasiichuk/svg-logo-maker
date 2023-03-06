const Square = require('../lib/square');

// Testing for a render() method. 
describe('Square', () => {
    test('should pass if render() is called', () => {
        const shape = new Square();
        expect(shape.render("Las", "red", "blue")).toEqual(`<svg version="1.1" width="300" height="200">
        <rect x="100" y="20" width="150" height="150" fill="blue"/>
        <text x="175" y="110" font-size="60" text-anchor="middle" fill="red">Las</text>
        </svg>`
        );
    });
});