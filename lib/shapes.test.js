const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  it('should render a blue triangle', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });
});

describe('Circle', () => {
  it('should render a red circle', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="150" r="100" fill="red" />');
  });
});

describe('Square', () => {
  it('should render a green square', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
  });
});
