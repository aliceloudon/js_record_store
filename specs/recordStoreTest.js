var assert = require ('assert')
var RecordStore = require ('../recordStore.js')
var Record = require ('../record.js')

describe ('record store', function(){

  var recordStore
  var record
  var record2

  beforeEach(function(){
    recordStore = new RecordStore("Rooky Ricardo's Records", 'San Francisco')
    record = new Record('The Beatles', 'Abbey Road', 'Rock/Pop', 1500)
    record2 = new Record('Queen', 'Bohemian Rhapsody', 'Rock', 1200)
    record3 = new Record('Stevie Wonder', 'Greatest Hits', 'Soul', 1100)
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

  it('can add record to inventory', function(){
    recordStore.addRecord(record)
    assert.strictEqual(recordStore.inventory.length, 1)
  })

  it('can print out inventory list', function(){
    recordStore.addRecord(record)
    assert.strictEqual(recordStore.listInventory(), 'artist: The Beatles, title: Abbey Road, genre: Rock/Pop, price: 1500')
  })

  it('can remove record from inventory', function(){
    recordStore.addRecord(record)
    recordStore.addRecord(record2)
    recordStore.sellRecord(record)
    assert.strictEqual(recordStore.inventory.length, 1)
  })

  it('can remove record from inventory and store balance goes up', function(){
    recordStore.addRecord(record)
    recordStore.addRecord(record2)
    recordStore.sellRecord(record)
    assert.strictEqual(recordStore.balance, 1500)
  })

  it('can report financial position', function(){
    recordStore.addRecord(record)
    recordStore.addRecord(record2)
    recordStore.addRecord(record3)
    recordStore.sellRecord(record)
    assert.strictEqual(recordStore.reportFinancialPosition(), 'Inventory value: 2300, Sales: 1500')
  })

  it('can view all records of given genre', function(){
    recordStore.addRecord(record)
    recordStore.addRecord(record2)
    recordStore.addRecord(record3)
    assert.strictEqual(recordStore.findByGenre('Soul'), 'artist: Stevie Wonder, title: Greatest Hits, genre: Soul, price: 1100')
  })

})

