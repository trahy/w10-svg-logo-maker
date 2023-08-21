const { Circle, Triangle, Square } = require('./shapes');

// function to match user response to create new shape
function generateLogo(response) {

    if (response.shape === 'Circle') {
        let newShape = new Circle(response.text, response.textColour, response.shapeColour)
        return newShape.render()
    }

    if (response.shape === 'Square') {
        let newShape = new Square(response.text, response.textColour, response.shapeColour)
        return newShape.render()
    }

    if (response.shape === 'Triangle') {
        let newShape = new Triangle(response.text, response.textColour, response.shapeColour)
        return newShape.render()
    }
};

module.exports = generateLogo