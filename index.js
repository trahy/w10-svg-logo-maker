const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo');


// array of questions for user input
function prompt() {
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter a text for the logo (up to three characters)',
            name: 'text',
            validate: (response) => {
                if (response.length === 0 || response.length > 3) {
                    console.log('\n Invalid input. Please enter a text of up to three characters.');
                }
                else return true;
            }
        },
        {
            type: 'input',
            message: 'Enter a colour for the text (OR use a hexadecimal number)',
            name: 'textColour',
            validate: (response) => {
                if (!response) {
                    console.log('\n Invalid input. Please enter a colour.');
                }
                else return true;
            }
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
            validate: (response) => {
                if (!response) {
                    console.log('\n Invalid input. Please enter a colour.');
                }
                else return true;
            }
        },

    ])
    .then((response) => {
        const logoContent = generateLogo(response);
            fs.writeFile('./examples/logo.svg', logoContent, (err) =>
                err ? console.error(err) : console.log('The logo has been successfully created!')
            );
    });
}

prompt();