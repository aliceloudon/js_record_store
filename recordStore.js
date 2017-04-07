var RecordStore = function(name, city){
  this.name = name
  this.city = city
  this.inventory = []
  this.balance = 0
}

RecordStore.prototype = {

  addRecordToInventory: function(record){
    this.inventory.push(record)
  },

  listInventory: function(){
    var stringToReturn = ''
    this.inventory.forEach(function(record){
      stringToReturn += record.printPropertiesAsString()
    })
    return stringToReturn
  }

}

module.exports = RecordStore



// record.printPropertiesAsString()