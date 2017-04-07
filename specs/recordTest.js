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

  it('has genre', function(){
    assert.strictEqual(record.genre, 'Rock/Pop')
  })

  it('has price', function(){
    assert.strictEqual(record.price, 1500)
  })

  it('can print out record properties as a string', function(){
    assert.strictEqual(record.printPropertiesAsString(), 'artist: The Beatles, title: Abbey Road, genre: Rock/Pop, price: 1500')
  })

})