var RecordCollection = function(){
  this.inventory = []
  this.balance = 0
}

RecordCollection.prototype = {

  addRecord: function(record){
    this.inventory.push(record)
  },



}

module.exports = RecordCollection