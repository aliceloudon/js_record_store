var assert = require ('assert')
var Customer = require ('../customer.js')

describe('customer', function(){

  var customer

  beforeEach(function(){
    customer = new Customer()
  })

  it('has starting cash balance of zero', function(){
    assert.strictEqual(customer.cash, 0)
  })

  it('has no records at start', function(){
    assert.strictEqual(customer.records.length, 0)
  })

})