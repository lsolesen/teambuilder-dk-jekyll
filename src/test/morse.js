const teambuilder = require('../js/morse.js');
let assert = require('assert');

describe('CeasarCodeDecoder', function() {
  describe('decrypt', function() {
    it('should return the correct number', function() {

      let str = '--/---/.-./..././/./.-.//.-.././-//-./---/-.-';
      let c = teambuilder.Morse(str);
      assert.equal(c.decrypt(), 'morse er let nok');      
    });
  });
  describe('encrypt', function() {
    it('should return the correct number', function() {

      let str = 'morse er let nok';
      let c = teambuilder.Morse(str);
      assert.equal(c.encrypt(), '--/---/.-./..././/./.-.//.-.././-//-./---/-.-');      
    });
  });
});
