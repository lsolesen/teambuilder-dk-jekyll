const teambuilder = require('../js/ceasarcodedecoder.js');
let assert = require('assert');

describe('CeasarCodeDecoder', function() {
  describe('decrypt', function() {
    it('should return the correct number', function() {

      let str = 'GUVF VF FBZR FNZCYR GRKG URER.';
      let c = teambuilder.CeasarCodeDecoder(str);
      assert.equal(c.decrypt(str, c.getShift()), 'THIS IS SOME SAMPLE TEXT HERE.');      
    });
  });
});
