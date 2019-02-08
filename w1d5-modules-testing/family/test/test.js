var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Testing Ancestry', function() {
  var ancestryCode = require('../ancestry.js');

  describe('testing greatest() function', function() {

    // Chai has two test styles: assert and expect.
    // We'll use assert style for these tests

    it('should have 3 people in its greatest generation', function() {
      assert.lengthOf(ancestryCode.greatest() , 3, 'should be 3 people')
    })

    it('should find Clara in the greatest generation', function() {
      assert.equal(ancestryCode.greatest()[1].name, 'Clara Aernoudts', 'should have been Clara')
    })
  })

  describe('testing victorians() function', function() {

    // Chai has two test styles: assert and expect.
    // We'll use assert style for these tests

    it('should have 2 people in its victorians generation', function() {
      assert.equal(ancestryCode.victorians().length , 2, 'should be 2 people')
    })

    it('should find Maria in the victorians generation', function() {
      assert.equal(ancestryCode.victorians()[1].name, 'Maria Sturm', 'should have been Maria')
    })
  })

})