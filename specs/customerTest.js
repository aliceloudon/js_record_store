var assert = require ('assert')
var Customer = require ('../customer.js')
var Record = require ('../record.js')
var RecordCollection = require ('../recordCollection.js')

describe('customer', function(){

  var customer
  var customer2
  var recordCollection

  beforeEach(function(){
    customer = new Customer("Alice", recordCollection)
    customer2 = new Customer("Donald", recordCollection)
    record = new Record('The Clash', 'London Calling', 'Rock', 1000)
    record2 = new Record('The Who', 'My Generation', 'Rock', 1500)
  })

  it('has a record collection of zero', function(){
    assert.strictEqual(customer.recordCollection.inventory.length, 0)
  })

  it('can buy a record', function(){
    customer.recordCollection.addRecord(record)
    assert.strictEqual(customer.recordCollection.inventory.length, 1)
  })

  it('can compare value of collection with another customer', function(){
    customer.recordCollection.addRecord(record)
    customer2.recordCollection.addRecord(record2)
    assert.strictEqual(customer.compareValue(customer2), -500)
  })

  it('can compare value of collection and return a string', function(){
    customer.recordCollection.addRecord(record)
    customer2.recordCollection.addRecord(record2)
    assert.strictEqual(customer.compareValueAndReturnString(customer2), "Donald's record collection is 500p more valuable than your record collection.")
  })

})










// --------------------------------------------------------------------

// it('cannot buy a record if there are insufficient funds', function(){
//   assert.strictEqual(customer.buyRecord(record), 'Sorry, customer has insufficient funds')
// })

// it('can view total value of collection', function(){
//   customer.getCash()
//   customer.buyRecord(record)
//   customer.buyRecord(record2)
//   assert.strictEqual(customer.getValueOfCollection(), 2700)
// })

// it('can view their collection by genre', function(){
//   customer.getCash()
//   customer.buyRecord(record)
//   customer.buyRecord(record2)
//   customer.buyRecord(record3)
//   assert.strictEqual(customer.findByGenre('rock'), 'Artist: The Beatles, Title: Abbey Road, Genre: Rock, Price: 1500. Artist: Queen, Title: Bohemian Rhapsody, Genre: Rock, Price: 1200. ')
// })

// it('can view total value of all records of a given genre', function(){
//   customer.getCash()
//   customer.buyRecord(record)
//   customer.buyRecord(record2)
//   customer.buyRecord(record3)
//   assert.strictEqual(customer.getValueOfCollection('Rock'), 2700)
// })