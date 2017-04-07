var assert = require ('assert')
var Customer = require ('../customer.js')
var Record = require ('../record.js')
var RecordCollection = require ('../recordCollection.js')

describe('customer', function(){

  var customer

  beforeEach(function(){
    customer = new Customer()
  })

  // it('can buy a record', function(){
  //   assert.strictEqual(customer.buyRecord(), 1)
  // })

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