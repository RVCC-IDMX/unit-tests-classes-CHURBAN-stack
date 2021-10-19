/* eslint-disable class-methods-use-this */
/* eslint-disable constructor-super */
/*
 * triangle.js
 * Language: javascript
 * Test: tests/geometry.test.js
 * Path: src/triangle.js
 *
 * Create a Triangle class
 *
 */

const { Polygon } = require('./polygon');

/*
 * Define a Triangle class that has the following properties:
 *  1) Inherits (extends) from the Polygon class
 *  2) A constructor that
 *     a) calls the super class constructor with the arguments provided
 *         https://mzl.la/2Z5y8my
 *     b) sets the property name to 'Triangle'
 *  3) By default, has the methods inherited from Polygon
 *    a) count()
 *    b) perimeter()
 *    c) sayName()
 *  4) Has an isValid() method that returns true if the triangle
 *  can be formed from the lengths of the sides. Otherwise, it
 *  returns false.
 *
 * The sum of the (positive, non-zero) lengths of any two
 *  sides of a triangle is greater than the length of the third side.
 *  If you take the three sides of a triangle and add them in pairs,
 *  the sum is greater than (not equal to) the third side. If that is
 *  not true, then it is not possible to construct a triangle with
 *  the given side lengths.
 *
 */

/**
 * Triangle class
 * @class Triangle class extends Polygon
 * @constructor Triangle constructor function
 * @param {array} sides
 * @property {string} name
 */
class Triangle extends Polygon {
  /**
   * @constructor Triangle constructor function
   * @param {array} sides
   * must use super() to call the parent class constructor
   * https://mzl.la/3DKzZvW
   * must set the name to 'Triangle'
   */
  constructor(sides) {
    // write your code here
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @memberof Triangle
   * @description returns true if the triangle can be formed from the
   * lengths of the sides. Otherwise, it returns false.
   * Must be true:
   * 1) The sides array is
   *   a) actually an array and
   *   b) has 3 and only 3 elements
   *   c) where each element is a number > 0
   *   d) must use Array.isArray() - https://mzl.la/3j9ywYa
   *   e) must use Array.length  - https://mzl.la/30nbWEP
   *   e) must use Array.every() - https://mzl.la/2YTjgb7
   * 2) And the sum of the lengths of any two sides is greater
   * than the length of the third side.
   */
  isValid() {
    // write your code here
  }
}

module.exports = {
  Triangle,
};
