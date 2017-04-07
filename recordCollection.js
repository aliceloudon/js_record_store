var RecordCollection = function(){
  this.inventory = []
  this.valueOfCollection = 0
  this.cashBalance = 5000
}

RecordCollection.prototype = {

  addRecord: function(record){
    this.inventory.push(record)
    this.valueOfCollection = this.valueOfCollection + record.price
    this.cashBalance = this.cashBalance - record.price
  },

  removeRecord: function(record){
    var index = this.inventory.indexOf(record)
    this.inventory.splice(index, 1)
    this.valueOfCollection = this.valueOfCollection - record.price
    this.cashBalance = this.cashBalance + record.price
  },

  listInventory: function(){
    var stringToReturn = ''
    this.inventory.forEach(function(record){
      stringToReturn += record.printPropertiesAsString()
    })
    return stringToReturn
  },

}

module.exports = RecordCollection