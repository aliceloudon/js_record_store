var assert = require ('assert')
var RecordStore = require ('../recordStore.js')
var Record = require ('../record.js')
var RecordCollection = require ('../recordCollection.js')

describe ('record store', function(){

  var recordStore
  var recordCollection

  beforeEach(function(){
    recordStore = new RecordStore("Rooky Ricardo's Records", 'San Francisco', recordCollection)
    record = new Record('The Clash', 'London Calling', 'Rock', 1000)
  })

  it('has name', function(){
    assert.strictEqual(recordStore.name ,"Rooky Ricardo's Records")
  })

  it('has city', function(){
    assert.strictEqual(recordStore.city, 'San Francisco')
  })

  it('has recordCollection of zero at start', function(){
    assert.strictEqual(recordStore.recordCollection.inventory.length, 0)
  })

  it('can report financial position', function(){
    recordStore.recordCollection.addRecord(record)
    assert.strictEqual(recordStore.recordCollection.reportFinancialPosition(), 'Value of Collection: 1000, Cash Balance: 4000')
  })

})

