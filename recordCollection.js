var _ = require('lodash')

var RecordCollection = function(){
  this.inventory = []
  this.valueOfCollection = 0
  this.cashBalance = 5000
}

RecordCollection.prototype = {

  addRecord: function(record){
    if (this.cashBalance >= record.price) {
      this.inventory.push(record)
      this.valueOfCollection += record.price
      this.cashBalance -= record.price
    }
    else {
      return 'Sorry, there are insufficient funds available'
    }
  },

  removeRecord: function(record){
    var index = this.inventory.indexOf(record)
    this.inventory.splice(index, 1)
    this.valueOfCollection -= record.price
    this.cashBalance += record.price
  },

  listInventory: function(){
    var stringToReturn = ''
    this.inventory.forEach(function(record){
      stringToReturn += record.printPropertiesAsString()
    })
    return stringToReturn
  },

  reportFinancialPosition: function(){
    return 'Value of Collection: ' + this.valueOfCollection + ', Cash Balance: ' + this.cashBalance
  },

  filterInventory: function(genre){
    if(!genre) return this.inventory
    return _.filter(this.inventory, function(record){
      return record.genre === genre
    })
  },

  totalValueOfInventory: function(genre){
    var totalValue = 0
    var newArray = this.filterInventory(genre)
    newArray.forEach(function(record){
      totalValue += record.price
    })
    return totalValue
  },

  sortInventoryByValue: function(){
    this.inventory.sort(function (a, b){
      return a.price - b.price
    })
  }

  // findMostValuable: function(){

  // },

}

module.exports = RecordCollection