var assert = require ('assert')
var Customer = require ('../customer.js')
var Record = require ('../record.js')

describe('customer', function(){

  var customer
  var record
  var record2

  beforeEach(function(){
    customer = new Customer()
    record = new Record('The Beatles', 'Abbey Road', 'Rock/Pop', 1500)
    record2 = new Record('Queen', 'Bohemian Rhapsody', 'Rock', 1200)
  })

  it('has starting cash balance of zero', function(){
    assert.strictEqual(customer.cash, 0)
  })

  it('has no records at start', function(){
    assert.strictEqual(customer.records.length, 0)
  })

  it('can buy record', function(){
    customer.getCash()
    customer.buyRecord(record)
    assert.strictEqual(customer.records.length, 1)
  })

  it('can buy record and cash goes down', function(){
    customer.getCash()
    customer.buyRecord(record)
    assert.strictEqual(customer.cash, 3500)
  })

  it('can sell record', function(){
    customer.getCash()
    customer.buyRecord(record)
    customer.buyRecord(record2)
    customer.sellRecord(record)
    assert.strictEqual(customer.records.length, 1)
  })

  it('can sell record and cash goes up', function(){
    customer.getCash()
    customer.buyRecord(record)
    customer.buyRecord(record2)
    customer.sellRecord(record)
    assert.strictEqual(customer.cash, 3800)
  })

})