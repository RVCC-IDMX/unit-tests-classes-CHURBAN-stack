/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable constructor-super */
/*
 * square.js
 * Language: javascript
 * Test: tests/geometry.test.js
 * Path: src/square.js
 *
 * Create a square class
 *
 */

/*
 * Define a Square class that has the following properties:
 *  1) Inherits (extends) from the Rectangle class
 *  2) A constructor that accepts the square's side length
 *     a) calls the super class constructor with height
 *        and width, both equal to the side of the square
 *       https://mzl.la/2Z5y8my
 *     b) sets the property called name to 'Square'
 *  3) By default, has the methods inherited from rectangle
 *    a) count()
 *    b) perimeter()
 *    c) sayName()
 *    d) area()
 *    e) isValid()
 *  5) A method called getSide() that returns the length
 *     of the square's side
 *
 * hint: as well as passing the height and width to the
 * the super class constructor, you can store side
 * as a property in this class
 * to use with its new method getSide()
 */

/* --------------Important Step Below ------------ */
// import the Rectangle class using the CommonJS require() function
// See triangle.js for an example of how to import a file

/**
 * Square class
 * @class Square class extends rectangle
 * @constructor Square constructor function
 * @param {array} sides
 * @property {string} name
 * @property {number} side
 */

class Square extends Rectangle {
  /**
   * @constructor
   * @param {number} side - the length of a side
   * must use super() to call the parent class constructor
   * hint: this constructor gets 1 number as an argument
   * and calls the parent class constructor with height and width
   */

  /**
   * @constructor
   * @param {number} side - the length of a side of the square
   */
  constructor(side) {
    // write your code here
  }

  /**
   * @method getSide - return the side length
   * @returns {number} the side length
   */
  getSide() {
    // write your code here
  }

  /**
   * @method area - return the area of the square
   * @returns {number} the area of the square if
   * the side length is a number > 0
   * otherwise return 0
   */
  area() {
    // write your code here
  }
}

module.exports = {
  Square,
};
