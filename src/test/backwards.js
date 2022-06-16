const teambuilder = require('../js/backwards.js');
let assert = require('assert');

describe('Backwards', function() {
  describe('decrypt', function() {
    it('should return the correct number', function() {

      let str = 'virker ikke';
      let c = teambuilder.Backwards(str);
      assert.equal(c.decrypt(), 'virker ikke');
    });
  });
  describe('encrypt', function() {
    it('should return the correct number', function() {

      let str = 'Jeg er bagvendt kode';
      let c = teambuilder.Backwards(str);
      assert.equal(c.encrypt(), 'edok tdnevgab re geJ');
    });
  });
  describe('encrypt', function() {
    it('should return the correct number', function() {

      let str = 'Jeg er bagvendt kode';
      let c = teambuilder.Backwards(str, 'true', 'true');
      assert.equal(c.encrypt(), 'edoktdnevgabregeJ');
    });
  });
});
