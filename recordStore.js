var RecordCollection = require ('./recordCollection.js')

var RecordStore = function(name, city){
  this.name = name
  this.city = city
  this.recordCollection = new RecordCollection()
}

RecordStore.prototype = {

}

module.exports = RecordStore