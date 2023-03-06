const Circle = require('../lib/circle');

// Testing for a render() method. 
describe('Circle', () => {
    test('should pass if render() is called', () => {
        const shape = new Circle();
        expect(shape.render("Las", "red", "blue")).toEqual(`<svg version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Las</text>
        </svg>`
        );
    });
});