var assert = require ('assert')
var RecordStore = require ('../recordStore.js')

describe ('record store', function(){

  var recordStore

  beforeEach(function(){
    recordStore = new RecordStore("Rooky Ricardo's Records", "San Francisco")
  })

  it('has name', function(){
    assert.strictEqual(recordStore.name ,"Rooky Ricardo's Records")
  })

})