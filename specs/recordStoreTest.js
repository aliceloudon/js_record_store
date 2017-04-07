var assert = require ('assert')
var RecordStore = require ('../recordStore.js')
var Record = require ('../record.js')
var RecordCollection = require ('../recordCollection.js')

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

})

