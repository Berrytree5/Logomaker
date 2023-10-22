const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs'); // Require the 'fs' module

const shapes = {
  Triangle,
  Circle,
  Square,
};

inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter the color for the shape:',
    },
  ])
  .then((answers) => {
    const selectedShape = shapes[answers.shape];
    if (selectedShape) {
      const shapeInstance = new selectedShape();
      shapeInstance.setColor(answers.color);
      const svg = shapeInstance.render();

      // Define a filename based on the shape and color
      const filename = `${answers.shape}_${answers.color}.svg`;
      const filePath = `logos/${filename}`;

      // Write the SVG content to the file
      fs.writeFile(filePath, svg, (err) => {
        if (err) {
          console.error('Error saving the logo:', err);
        } else {
          console.log(`Logo saved as ${filename}`);
        }
      });
    } else {
      console.log('Invalid shape selected.');
    }
  });
