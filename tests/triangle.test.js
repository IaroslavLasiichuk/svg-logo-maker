const Triangle = require('../lib/triangle');

// Testing for a render() method. 
describe('Triangle', () => {
    test('should pass if render() is called', () => {
        const shape = new Triangle();
        expect(shape.render("Las", "red", "blue")).toEqual(`<svg version="1.1" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
        <text x="150" y="170" font-size="60" text-anchor="middle" fill="red">Las</text>
        </svg>`
        );
    });
  });

