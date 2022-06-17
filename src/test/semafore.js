const teambuilder = require('../js/semafore.js');
let assert = require('assert');

describe('Semafore', function() {
  describe('decrypt', function() {
    it('should return the correct number', function() {

      let str = 'virker ikke';
      let c = teambuilder.Semafore(str);
      assert.equal(c.decrypt(), 'virker ikke');      
    });
  });
  describe('encrypt', function() {
    it('should return the correct number', function() {

      let str = 's';
      let c = teambuilder.Semafore(str);
      assert.equal(c.encrypt(), "<IMG SRC='img/sem_s.gif' WIDTH=80 HEIGHT=70 ALT='S'><IMG SRC='img/sem_s.gif' WIDTH=80 HEIGHT=70 ALT='S'><IMG SRC='img/sem_s.gif' WIDTH=80 HEIGHT=70 ALT='S'><IMG SRC='img/sem_s.gif' WIDTH=80 HEIGHT=70 ALT='S'>");      
    });
  });
});
