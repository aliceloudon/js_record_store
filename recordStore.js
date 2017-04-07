var RecordStore = function(name, city){
  this.name = name
  this.city = city
  this.inventory = []
  this.balance = 0
}

RecordStore.prototype = {

  addRecord: function(record){
    this.inventory.push(record)
  },

  sellRecord: function(record){
    var index = this.inventory.indexOf(record)
    this.inventory.splice(index, 1)
    this.balance = this.balance + record.price
  },

  listInventory: function(){
    var stringToReturn = ''
    this.inventory.forEach(function(record){
      stringToReturn += record.printPropertiesAsString()
    })
    return stringToReturn
  },

  reportFinancialPosition: function(){
    var inventoryValue = 0
    this.inventory.forEach(function(record){
      inventoryValue = inventoryValue + record.price
    })
    return 'Inventory value: ' + inventoryValue + ', Sales: ' + this.balance
  }

}

module.exports = RecordStore



// record.printPropertiesAsString()