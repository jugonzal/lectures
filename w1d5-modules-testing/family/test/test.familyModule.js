// var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;

var family = require('../familyModule');

describe('Testing our Family Module', function() {

  describe('findPa()', function() {

    // Chai has two test styles: assert and expect.
    // We'll use assert style for these tests

    it('should return Carel when Carolus is given', function() {
      assert.equal("Carel Haverbeke", family.findPa("Carolus Haverbeke"));
    });

    it('should handle null elegantly', function() {
      assert.equal("That is not a person", family.findPa(null))
    })

    it('should return a string', function() {
      expect(family.findPa("Carolus Haverbeke")).to.be.a('string');
    })

  });

  describe ('findGrandPa()', function () {

    it('should tell me that Carel is Emile granpa', function() {
      assert.equal("Carel Haverbeke", family.findGranPa("Emile Haverbeke"))
    })

  })
  
});