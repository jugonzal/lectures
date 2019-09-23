var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Testing Ancestry', function() {
  var ancestryCode = require('../ancestry.js');

  describe('looking into Philibert Haverbeke ancestors', function() {
    let philAncestors = ancestryCode.ancestors('Philibert Haverbeke')

    it('should find that Emile is an ancestor to Philibert', function() {
      expect(philAncestors).to.include.members(['Emile Haverbeke'])
    })

    it('should find that Carolus is an ancestor to Philibert', function() {
      expect(philAncestors).to.include.members(['Carolus Haverbeke'])
    })

  })

})