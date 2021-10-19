/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/*
 * polygon.js
 * Language: javascript
 * Test: tests/geometry.test.js
 * Path: src/polygon.js
 *
 * Create a polygon class
 *
 */
/*
 * Define a Polygon class that has the following properties:
 *  1) A constructor that takes and stores an array describing
 *  the lengths of the polygon’s sides.
 *  2) the property called name  = 'Polygon'
 *    https://mzl.la/3vhtrC5
 *  3) A count() method that returns the number of sides.
 *  4) A perimeter() method that returns the polygon’s perimeter.
 *  5) A sayName() method that returns the name of the polygon.
 *
 */

/**
 * Polygon class
 * @class Polygon
 * @constructor Polygon constructor function
 * @param {array} sides - array of integer values describing the
 * @property {string} name - name of the polygon
 */
class Polygon {
  constructor(sides) {
    // write your code here
  }

  /**
   * @returns {number} - number of sides
   */
  count() {
    // write your code here
  }

  /**
   * @returns {number} - value of the perimeter (sum of all sides)
   */
  perimeter() {
    // write your code here
  }

  /**
   * @returns {string} - name of the polygon
   */
  sayName() {
    // write your code here
  }
}

module.exports = {
  Polygon,
};
