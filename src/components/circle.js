// import using require
const Shape = require("./shape");
// declare class
class Circle extends Shape {
  constructor(radius = 4, color = "red") {
    super(color);
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}
// export class using module.exports
exports.Circle = Circle;
