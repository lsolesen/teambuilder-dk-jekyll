const teambuilder = require('../js/alfa.js');
let assert = require('assert');

describe('Alfa', function() {
  describe('decrypt', function() {
    it('should return the correct number', function() {

      let str = 'virker ikke';
      let c = teambuilder.Alfa(str);
      assert.equal(c.decrypt(), 'virker ikke');
    });
  });
  describe('encrypt', function() {
    it('should return the correct number', function() {

      let str = 'Jeg er alfa';
      let c = teambuilder.Alfa(str);
      assert.equal(c.encrypt(), '10 5 7    5 18    1 12 6 1');
    });
  });
  describe('encrypt', function() {
    it('should return the correct number', function() {

      let str = 'Jeg er alfa uden w';
      let c = teambuilder.Alfa(str, 'false');
      assert.equal(c.encrypt(), '10 5 7    5 18    1 12 6 1    21 4 5 14    w');
    });
  });
});
