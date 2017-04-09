var RecordCollection = require ('./recordCollection.js')

var RecordStore = function(name, city){
  this.name = name
  this.city = city
  this.recordCollection = new RecordCollection()
}

RecordStore.prototype = {

  reportFinancialPosition: function(){
    return 'Value of Collection: ' + this.recordCollection.valueOfCollection + ', Cash Balance: ' + this.recordCollection.cashBalance
  },
}

module.exports = RecordStore