const Shape = require('./shape');

class Square extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}

module.exports = Square;
