class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  draw(context, x, y, color) {
    context.beginPath();
    context.arc(x, y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
  }
}

class Triangle {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  draw(context, x, y, color) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + this.sideLength, y);
    context.lineTo(x + this.sideLength / 2, y - (Math.sqrt(3) / 2) * this.sideLength);
    context.closePath();
    context.fillStyle = color;
    context.fill();
  }
}

class Square {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  draw(context, x, y, color) {
    context.fillStyle = color;
    context.fillRect(x, y, this.sideLength, this.sideLength);
  }
}

module.exports = { Circle, Triangle, Square };
