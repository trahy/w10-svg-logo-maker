const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/generateLogo')



// array of questions for user input
inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter a text for the logo (up to three characters)',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter a colour for the text (OR use a hexadecimal number)',
        name: 'textColour',
    },
    {
        type: 'list',
        message: 'Select the shape of the logo',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Enter a colour for the shape (OR use a hexadecimal number)',
        name: 'shapeColour',
    },

  ])
  .then((data) => {
    const readmeContent = shapes(data);
    fs.writeFile('./examples/logo.svg', readmeContent, (err) =>
    err ? console.error(err) : console.log('The logo has been successfully created!')
    );
  });