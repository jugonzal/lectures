var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Testing Ancestry', function() {
  var ancestryCode = require('../ancestry.js');

  describe('testing greatestGeneration() function', function() {

    // Chai has two test styles: assert and expect.
    // We'll use assert style for these tests

    it('should have 3 people in its greatest generation', function() {
      assert.lengthOf(ancestryCode.greatestGeneration() , 3, 'should be 3 people')
    })

    it('should find Clara in the greatest generation', function() {
      assert.equal(ancestryCode.greatestGeneration()[1].name, 'Clara Aernoudts', 'should have been Clara')
    })

    it('should return people born between 1900 and 1924', function() {
      expect(ancestryCode.greatestGeneration()[0].born).to.be.at.most(1924)
      // assert.equal(, 1908, 'maybe not checking the correct years?' )
    })
  })


})