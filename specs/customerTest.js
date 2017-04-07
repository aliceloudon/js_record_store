var assert = require ('assert')
var Customer = require ('../customer.js')

describe('customer', function(){

  it('has starting cash balance of zero', function(){
    customer = new Customer()
    assert.strictEqual(customer.cash, 0)
  })

})