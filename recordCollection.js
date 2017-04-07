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

  findRecordsByGenre: function(genre){
    var stringToReturn = ''
    this.inventory.forEach(function(record){
      if (record.genre === genre){
        stringToReturn += record.printPropertiesAsString()
      }
    })
    return stringToReturn
  }
  // IMPROVE THIS BY USING FILTER ENUMERABLE. ALSO, CHANGE GENRE TO LOWERCASE.

}

module.exports = RecordCollection