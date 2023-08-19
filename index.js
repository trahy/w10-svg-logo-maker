const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes')

// class Svg{
//     constructor(){
//         this.logoText = ''
//         this.logoShape = ''
//     }

//     render(){
//         return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="250" height="250">${this.logoShape}${this.logoText}</svg>`
//     }
//     setTextElement(text,color){
//         this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${shapeColor}">${ShapeText}</text>`
//     }
//     setShapeElement(shape){
//         this.shapeElement = shape.render()
//     }
// };

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