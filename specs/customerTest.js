var assert = require ('assert')
var Customer = require ('../customer.js')
var Record = require ('../record.js')

describe('customer', function(){

  var customer
  var record

  beforeEach(function(){
    customer = new Customer()
    record = new Record('The Beatles', 'Abbey Road', 'Rock/Pop', 1500)
  })

  it('has starting cash balance of zero', function(){
    assert.strictEqual(customer.cash, 0)
  })

  it('has no records at start', function(){
    assert.strictEqual(customer.records.length, 0)
  })

  it('can buy records', function(){
    customer.buyRecord(record)
    assert.strictEqual(customer.records.length, 1)
  })

})