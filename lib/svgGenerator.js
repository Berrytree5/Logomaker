const fs = require('fs');
const { createCanvas } = require('canvas');
const { DOMParser, XMLSerializer } = require('xmldom');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');

const COLORS = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  // Add more colors as needed
};

function createSVG(text, textColor, shapeType, shapeColor) {
  const canvas = createCanvas(300, 200);
  const context = canvas.getContext('2d');
  const shape = createShape(shapeType);

  context.clearRect(0, 0, canvas.width, canvas.height);

  shape.draw(context, 150, 100, shapeColor);

  context.font = '20px Arial';
  context.fillStyle = textColor;
  context.fillText(text, 150 - context.measureText(text).width / 2, 110);

  const svgString = new XMLSerializer().serializeToString(new DOMParser().parseFromString(canvas.toBuffer()));

  fs.writeFileSync('logo.svg', svgString, 'utf-8');
  console.log('Generated logo.svg');
}

function createShape(shapeType) {
  switch (shapeType) {
    case 'circle':
      return new Circle(50);
    case 'triangle':
      return new Triangle(100);
    case 'square':
      return new Square(100);
    default:
      throw new Error('Invalid shape type');
  }
}

function getUserInput() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters: ',
        validate: (input) => input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or hexadecimal number for text: ',
      },
      {
        type: 'list',
        name: 'shapeType',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or hexadecimal number for the shape: ',
      },
    ])
    .then((answers) => {
      const textColor = COLORS[answers.textColor] || answers.textColor;
      const shapeColor = COLORS[answers.shapeColor] || answers.shapeColor;
      createSVG(answers.text, textColor, answers.shapeType, shapeColor);
    });
}

getUserInput();

module.exports = {
  createSVG,
};
