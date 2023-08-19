const { Circle, Triangle, Square } = require('./shapes');

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

// class generateLogo {
//     constructor() {
//         this.logoText = ''
//         this.logoShape = ''
//     }

//     render() {
//         return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="250" height="250">${this.logoShape}${this.logoText}</svg>`
//     }
//     setShape(shape) {
//         this.logoShape = shape.render()
//     }
//     setText(text, colour) {
//         this.logoText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${colour}">${text}</text>`
//     }
// };

module.exports = generateLogo