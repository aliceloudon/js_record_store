var RecordCollection = require ('./recordCollection.js')

var Customer = function(recordCollection){
  this.recordCollection = new RecordCollection()
}

module.exports = Customer
