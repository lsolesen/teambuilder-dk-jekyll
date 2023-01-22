const teambuilder = require('../js/ak.js');
let assert = require('assert');

describe('CeasarCodeDecoder', function() {
  describe('decrypt', function() {
    it('should return the correct number', function() {

      let str = 'ku oø voa xyu';
      let c = teambuilder.AK(str);
      assert.equal(c.decrypt(), 'ak er let nok');      
    });
  });
  describe('encrypt', function() {
    it('should return the correct number', function() {

      let str = 'ak er let nok';
      let c = teambuilder.AK(str);
      assert.equal(c.encrypt(), 'ku oø voa xyu');      
    });
  });
});
