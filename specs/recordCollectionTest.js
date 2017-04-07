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

  // it('starts with a balance of zero', function(){
  //   assert.strictEqual(recordStore.balance, 0)
  // })

  // it('can add record to inventory', function(){
  //   recordStore.addRecord(record)
  //   assert.strictEqual(recordStore.inventory.length, 1)
  // })

  // it('can print out inventory list', function(){
  //   recordStore.addRecord(record)
  //   assert.strictEqual(recordStore.listInventory(), 'Artist: The Beatles, Title: Abbey Road, Genre: Rock, Price: 1500. ')
  // })

  // it('can remove record from inventory', function(){
  //   recordStore.addRecord(record)
  //   recordStore.addRecord(record2)
  //   recordStore.sellRecord(record)
  //   assert.strictEqual(recordStore.inventory.length, 1)
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

