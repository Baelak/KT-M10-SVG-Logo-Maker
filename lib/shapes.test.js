// lib/shapes.test.js
const { Circle, Triangle, Square } = require ('./shapes.js');

test('Circle render', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Triangle render', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Square render', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toBe('<rect x="90" y="40" width="120" height="120" fill="green" />');
});
