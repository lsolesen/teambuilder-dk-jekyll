const teambuilder = require('../js/spejd.js');
let assert = require('assert');

describe('Spejd', function() {
  describe('decrypt', function() {
    it('should return the correct number', function() {

      let str = 'virker ikke';
      let c = teambuilder.Spejd(str);
      assert.equal(c.decrypt(), 'virker ikke');
    });
  });
  describe('encrypt', function() {
    it('should return the correct number', function() {

      let str = 'Jeg er spejdkoden';
      let c = teambuilder.Spejd(str);
      assert.equal(c.encrypt(), 'Qoy od mnoqrøerop');
    });
  });
});
