// creating a parent class which extends to the children class
// constructor class with 'colour' value
class Shape {
    constructor(text, textColour, shapeColour) {
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour;
    }
}

// child class, defining circle shape
class Circle extends Shape {
    render() {
        return `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="50%" cy="50%" r="100" fill="${this.shapeColour}"/>
        <text x="50%" y="60%" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>
        `
    }
}

// child class, defining triangle shape
class Triangle extends Shape {
    render() {
        return `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="275,200 150,0 25,200" fill="${this.shapeColour}"/>
        <text x="50%" y="80%" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>
        `
    }
};

// child class, defining square shape
class Square extends Shape {
    render() {
        return `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="0" height="100%" width="200" fill="${this.shapeColour}"/>
        <text x="100" y="60%" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
        </svg>
        `
    }
}

module.exports = { Circle, Triangle, Square }