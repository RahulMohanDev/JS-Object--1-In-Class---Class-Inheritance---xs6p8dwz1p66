// declare class
class Shape {
  constructor(color = "red") {
    this.color = color;
  }
  drawShape() {}
  calculateArea() {}
  color() {
    this.color = "red";
  }
}

// export class using module.exports
exports.Shape = Shape;
