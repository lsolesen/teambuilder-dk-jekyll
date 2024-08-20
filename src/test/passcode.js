const teambuilder = require('../js/passcode.js');
let assert = require('assert');

describe('Passcode', function() {
  describe('decrypt', function() {
    it('should return the correct number', function() {

      let str = 'virker ikke';
      let c = teambuilder.Passcode(str);
      assert.equal(c.decrypt(), 'virker ikke');
    });
  });
  describe('encrypt', function() {
    it('should return the correct number', function() {

      let str = 'Jeg er spejdkoden';
      let c = teambuilder.Passcode(str);
      assert.equal(c.encrypt(), 'Qoy od mnoqrøerop');
    });
  });
});
