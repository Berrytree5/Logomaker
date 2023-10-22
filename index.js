const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const svgContainer = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
const svgFooter = '</svg>';

const logoFolderPath = 'logos';


inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape (or "done" to finish):',
      choices: ['Circle', 'Triangle', 'Square', 'done'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter the color for the shape:',
    },
    {
      type: 'input',
      name: 'logoName',
      message: 'Enter a name for the logo:',
    },
  ])
  .then(function createLogo(answers) {
    if (answers.shape === 'done') {
      console.log('Logos saved in the "logos" folder.');
      return;
    }

    const svgContent = svgContainer + getShapeSvg(answers.shape, answers.color) + svgFooter;
    const filename = `${answers.logoName}.svg`;
    const filePath = path.join(logoFolderPath, filename);

    fs.writeFileSync(filePath, svgContent, 'utf-8');
    console.log(`Logo "${filename}" saved in the "logos" folder.`);

    inquirer.prompt([
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape (or "done" to finish):',
        choices: ['Circle', 'Triangle', 'Square', 'done'],
      },
      {
        type: 'input',
        name: 'color',
        message: 'Enter the color for the shape:',
      },
      {
        type: 'input',
        name: 'logoName',
        message: 'Enter a name for the logo:',
      },
    ]).then(createLogo);
  });

function getShapeSvg(shape, color) {
  switch (shape) {
    case 'Circle':
      return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
    case 'Triangle':
      return `<polygon points="150,18 244,182 56,182" fill="${color}" />`;
    case 'Square':
      return `<rect x="50" y="50" width="200" height="200" fill="${color}" />`;
    default:
      return '';
  }
}
