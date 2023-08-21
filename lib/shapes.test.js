// Importing individual shapes from shapes.js
const { Circle, Triangle, Square } = require("./shapes.js");

// testing shape to render a circle logo
describe("Circle test", () => {
  test("checks for a circle with text and colours", () => {
    const circle = new Circle('UNO', 'yellow', 'red');
    expect(circle.render()).toEqual(
      `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="50%" cy="50%" r="100" fill="red"/>
        <text x="50%" y="60%" font-size="60" text-anchor="middle" fill="yellow">UNO</text>
        </svg>
        `
    );
  });
});

// testing shape to render a triangle logo
describe("Triangle test", () => {
  test("checks for a triangle with text and colours", () => {
    const triangle = new Triangle('DUO', 'pink', 'green');
    expect(triangle.render()).toEqual(
      `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="275,200 150,0 25,200" fill="green"/>
        <text x="50%" y="80%" font-size="60" text-anchor="middle" fill="pink">DUO</text>
        </svg>
        `
    );
  });
});

// testing shape to render a square logo
describe("Square test", () => {
  test("checks for a square with text and colours", () => {
    const square = new Square('TRE', 'white', 'blue');
    expect(square.render()).toEqual(
      `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="0" height="100%" width="200" fill="blue"/>
        <text x="100" y="60%" font-size="60" text-anchor="middle" fill="white">TRE</text>
        </svg>
        `
    );
  });
});