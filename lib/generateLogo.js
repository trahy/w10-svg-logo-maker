const { Circle, Triangle, Square } = require('./shapes');

// function to match user response to create new shape
function generateLogo(response) {

    if (response.shape === 'Circle') {
        let newShape = new Circle(response.shapeColour, response.text, response.textColour)
        return newShape.render()
    }

    if (response.shape === 'Square') {
        let newShape = new Square(response.shapeColour, response.text, response.textColour)
        return newShape.render()
    }

    if (response.shape === 'Triangle') {
        let newShape = new Triangle(response.shapeColour, response.text, response.textColour)
        return newShape.render()
    }
};

module.exports = generateLogo