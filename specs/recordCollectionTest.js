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
    record3 = new Record('Marvin Gaye', 'Greatest Hits', 'Soul', 1100)
    record4 = new Record('Stevie Wonder', 'Talking Book', 'Soul', 1000)
    record5 = new Record('Paul Simon', 'Call Me Al', 'Pop', 6000)
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

  it('cannot add record to inventory with insufficient funds', function(){
    assert.strictEqual(recordCollection.addRecord(record5), 'Sorry, there are insufficient funds available')
  })

  it('can remove record from inventory', function(){
    recordCollection.addRecord(record)
    recordCollection.removeRecord(record)
    assert.strictEqual(recordCollection.inventory.length, 0)
    assert.strictEqual(recordCollection.valueOfCollection, 0)
    assert.strictEqual(recordCollection.cashBalance, 5000)
  })

  it('can list inventory as string', function(){
    recordCollection.addRecord(record)
    recordCollection.addRecord(record2)
    assert.strictEqual(recordCollection.listInventory(), 'Artist: The Beatles, Title: Abbey Road, Genre: Rock, Price: 1500. Artist: Queen, Title: Bohemian Rhapsody, Genre: Rock, Price: 1200. ')
  })

  it('can report financial position', function(){
    recordCollection.addRecord(record)
    recordCollection.addRecord(record2)
    assert.strictEqual(recordCollection.reportFinancialPosition(), 'Value of Collection: 2700, Cash Balance: 2300')
  })

  it('can view all records of given genre', function(){
    recordCollection.addRecord(record2)
    recordCollection.addRecord(record3)
    recordCollection.addRecord(record4)
    assert.strictEqual(recordCollection.findRecordsByGenre('Soul'), 'Artist: Marvin Gaye, Title: Greatest Hits, Genre: Soul, Price: 1100. Artist: Stevie Wonder, Title: Talking Book, Genre: Soul, Price: 1000. ' )
  })

  it('can view total value of collection, regardless of genre', function(){
    recordCollection.addRecord(record)
    recordCollection.addRecord(record2)
    assert.strictEqual(recordCollection.totalValue(), 2700)
  })

  // it('can view total balance of all records of a given genre', function(){
  //   recordCollection.addRecord(record2)
  //   recordCollection.addRecord(record3)
  //   recordCollection.addRecord(record4)
  //   assert.strictEqual()
  // })

})

