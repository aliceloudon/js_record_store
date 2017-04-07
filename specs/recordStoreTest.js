var assert = require ('assert')
var RecordStore = require ('../recordStore.js')

describe ('record store', function(){

  var recordStore

  beforeEach(function(){
    recordStore = new RecordStore("Rooky Ricardo's Records", 'San Francisco')
  })

  it('has name', function(){
    assert.strictEqual(recordStore.name ,"Rooky Ricardo's Records")
  })

  it('has city', function(){
    assert.strictEqual(recordStore.city, 'San Francisco')
  })

  it('starts with zero inventory', function(){
    assert.strictEqual(recordStore.inventory.length, 0)
  })

  it('starts with a balance of zero', function(){
    assert.strictEqual(recordStore.balance, 0)
  })

})