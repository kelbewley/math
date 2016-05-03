// Tell the test where to find the code
var math = require('../math');

describe("A simple program that does arithmatic", function ()

	
  it("can add two numbers", function() {
    expect(math.add(4,5)).toBe(9);
  });

  it("can subtract two numbers", function() {
  	expect(math.subtract(10,5)).toBe(5);
  });

  it("can multiply two numbers", function() {
    expect(math.multiply(3,5)).toBe(15);
  });

  it("can divide two numbers", function() {
  	expect(math.divide(10,2)).toBe(5);
  });