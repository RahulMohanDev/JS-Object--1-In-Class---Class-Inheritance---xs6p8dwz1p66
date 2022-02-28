// declare class
class Shape {
  constructor(color = "red") {
    this.color = color;
  }
  drawShape() {}
  calculateArea() {}
}

// export class using module.exports
exports.Shape = Shape;
