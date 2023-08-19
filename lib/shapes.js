// creating a parent class which extends to the children class
// constructor class with 'colour' value
class Shape {
    constructor() {
        this.colour = colour;
    }
}

// child class, circle
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.colour}">`
    }
}

// child class, triangle
class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="250,250 125,50 0,250" fill="${this.colour}">`
    }
};

// child class, square
class Square extends Shape {
    render() {
        return `<rect x="50" height="100%" width="100%" fill="${this.colour}">`
    }
}

module.exports = { Circle, Triangle, Square }