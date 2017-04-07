var assert = require ('assert')
var RecordStore = require ('../recordStore.js')
var Record = require ('../record.js')
var RecordCollection = require ('../recordCollection.js')

describe ('record collection', function(){

  var recordCollection
  var record
  var record2
  var record3
  var record4

  beforeEach(function(){
    recordCollection = new RecordCollection()
    record = new Record('The Beatles', 'Abbey Road', 'Rock', 1500)
    record2 = new Record('Queen', 'Bohemian Rhapsody', 'Rock', 1200)
    record3 = new Record('Stevie Wonder', 'Greatest Hits', 'Soul', 1100)
    record4 = new Record('Stevie Wonder', 'Talking Book', 'Soul', 1000)
  })

  it('starts with zero inventory', function(){
    assert.strictEqual(recordCollection.inventory.length, 0)
  })

  it('starts with a cash balance of 5000', function(){
    assert.strictEqual(recordCollection.cashBalance, 5000)
  })

  it('starts with a value of collection of 0', function(){
    assert.strictEqual(recordCollection.valueOfCollection, 0)
  })

  it('can add record to inventory', function(){
    recordCollection.addRecord(record)
    assert.strictEqual(recordCollection.inventory.length, 1)
    assert.strictEqual(recordCollection.valueOfCollection, 1500)
    assert.strictEqual(recordCollection.cashBalance, 3500)
  })

  it('can remove record from inventory', function(){
    recordCollection.addRecord(record)
    recordCollection.removeRecord(record)
    assert.strictEqual(recordCollection.inventory.length, 0)
    assert.strictEqual(recordCollection.valueOfCollection, 0)
    assert.strictEqual(recordCollection.cashBalance, 5000)
  })

  // it('can print out inventory list', function(){
  //   recordCollection.addRecord(record)
  //   assert.strictEqual(recordCollection.listInventory(), 'Artist: The Beatles, Title: Abbey Road, Genre: Rock, Price: 1500. ')
  // })

  // it('can remove record from inventory', function(){
  //   recordCollection.addRecord(record)
  //   recordCollection.addRecord(record2)
  //   recordCollection.removeRecord(record)
  //   assert.strictEqual(recordCollection.inventory.length, 1)
  // })

  // it('can remove record from inventory and store balance goes up', function(){
  //   recordStore.addRecord(record)
  //   recordStore.addRecord(record2)
  //   recordStore.sellRecord(record)
  //   assert.strictEqual(recordStore.balance, 1500)
  // })

  // it('can report financial position', function(){
  //   recordStore.addRecord(record)
  //   recordStore.addRecord(record2)
  //   recordStore.addRecord(record3)
  //   recordStore.sellRecord(record)
  //   assert.strictEqual(recordStore.reportFinancialPosition(), 'Inventory value: 2300, Sales: 1500')
  // })

  // it('can view all records of given genre', function(){
  //   recordStore.addRecord(record)
  //   recordStore.addRecord(record4)
  //   recordStore.addRecord(record2)
  //   recordStore.addRecord(record3)
  //   assert.strictEqual(recordStore.findByGenre('Soul'), 'Artist: Stevie Wonder, Title: Talking Book, Genre: Soul, Price: 1000. Artist: Stevie Wonder, Title: Greatest Hits, Genre: Soul, Price: 1100. ' )
  // })

})

