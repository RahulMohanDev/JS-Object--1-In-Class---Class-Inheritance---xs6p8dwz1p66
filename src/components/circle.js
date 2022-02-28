// import using require
const Shape = require("./shape");
// declare class
class Circle extends Shape {
  //   constructor(radius = 4, color = "red") {
  //     super("");
  //     this.radius = radius;
  //   }

  calculateArea() {
    return Math.PI * 5 * 5;
  }
}
// export class using module.exports
module.exports.Circle = Circle;
