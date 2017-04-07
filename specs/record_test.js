var assert = require ('assert')
var Record = require ('../record.js')

describe ('record', function(){

  var record

  beforeEach(function(){
    record = new Record('The Beatles', 'Abbey Road', 'Rock/Pop', 1500)
  })

  it('has artist', function(){
    assert.strictEqual(record.artist ,'The Beatles')
  })

  it('has title', function(){
    assert.strictEqual(record.title, 'Abbey Road')
  })

})