// resources_test.js
// Code to test the resources.js file
var world = require('../minecraft-world.js');
var expect = require('chai').expect; // npm package for expect

describe('Minecraft World', function() {

  beforeEach(function(done) {
    done(); // need to call done to move on
  });

  it('should return wood after choppig', function() {
    // test case code
    // steps:
    // 1. setup stage. call some functions, etc.
    // 2. run the code you are testing
    var wood = world.chopWood();
    // 3. check that actual return value is the same as the expected return value.
    expect(wood).to.eql(1);
  });
  it('can run out of wood', function() {
    var wood;
    for (i=0; i<1100 ; i++) {
      wood = world.chopWood();
    }
    expect(wood).to.eql(1);
  });

});
