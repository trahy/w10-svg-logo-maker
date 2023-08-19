// creating a parent class which extends to the children class
// constructor class with 'colour' value
class Shape {
    constructor(shapeColour, text, textColour) {
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour;
    }
}

// child class, circle
class Circle extends Shape {
    render() {
        return `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="250" height="250">
        <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColour}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>
        `
    }
}

// child class, triangle
class Triangle extends Shape {
    render() {
        return `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="250" height="250">
        <polygon height="100%" width="100%" points="250,250 125,50 0,250" fill="${this.shapeColour}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>
        `
    }
};

// child class, square
class Square extends Shape {
    render() {
        return `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="250" height="250">
        <rect x="50" height="100%" width="100%" fill="${this.shapeColour}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>
        `
    }
}

module.exports = { Circle, Triangle, Square }