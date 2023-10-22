const { createCanvas } = require('canvas');
const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
  let canvas;
  let context;

  beforeAll(() => {
    canvas = createCanvas(300, 200);
    context = canvas.getContext('2d');
  });

  it('should draw a circle', () => {
    const circle = new Circle(50);
    circle.draw(context, 150, 100, 'red');
   
  });

  it('should draw a triangle', () => {
    const triangle = new Triangle(100);
    triangle.draw(context, 150, 100, 'green');
     
  });

  it('should draw a square', () => {
    const square = new Square(100);
    square.draw(context, 150, 100, 'blue');
   
  });
});
