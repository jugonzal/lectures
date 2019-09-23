var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Testing Ancestry', function() {
  var ancestryCode = require('../ancestry.final.js');

  describe('looking into Philibert Haverbeke ancestors', function() {
    let philAncestors = ancestryCode.ancestors('Philibert Haverbeke')

    it('should find that Emile is an ancestor to Philibert', function() {
      expect(philAncestors).to.include.members(['Emile Haverbeke'])
    })

    it('should find that Carolus is an ancestor to Philibert', function() {
      expect(philAncestors).to.include.members(['Carolus Haverbeke'])
    })

    it('should find that Carel is an ancestor to Philibert', function() {
      expect(philAncestors).to.include.members(['Carel Haverbeke'])
    })

    it('should return ancestry as an array', function() {
      expect(philAncestors).is.an('array')
    })

    it('should not find someone that is not an ancestor', function() {
      expect(philAncestors).to.not.include.members(['Clara Aernoudts'])
    })

    it('should return an empty array if no ancestors found', function() {
      expect(ancestryCode.ancestors('Clara Aernoudts')).is.an('array').to.be.empty
    })

  })

  describe('and what they witnessed in history', function() {
    it('should be able to use the *witnessed* function', function() {
      expect(ancestryCode.witnessed).to.be.a('function')
    })

    it('should find that Phil´s father was alive during WWI', function() {
      expect(ancestryCode.witnessed('Philibert Haverbeke',1910)).to.include.members(['Emile Haverbeke'])
    })

    it('should find that Carolus was alive in 1850', function() {
      expect(ancestryCode.witnessed('Philibert Haverbeke',1850)).to.include.members(['Carolus Haverbeke'])
    })
  })

})