var Customer = function(){
  this.recordCollection = new RecordCollection
}

Customer.prototype = {


  // buyRecord: function(record){
  //   if (this.cash >= record.price){
  //     this.records.push(record)
  //     this.cash = this.cash - record.price
  //   }
  //   else {
  //     return 'Sorry, customer has insufficient funds'
  //   }
  // },

  // sellRecord: function(record){
  //   var index = this.records.indexOf(record)
  //   this.records.splice(index, 1)
  //   this.cash = this.cash + record.price
  // },

  // findByGenre: function(genre){
  //   var stringToReturn = ''
  //   this.records.forEach(function(record){
  //     if (record.genre === genre){
  //       stringToReturn += record.printPropertiesAsString()
  //     }
  //   })
  //   return stringToReturn
  // },

  // getValueOfCollection: function(genre) {
  //   var valueOfCollection = 0
  //     if (genre === undefined){
  //       this.records.forEach(function(record){
  //         valueOfCollection = valueOfCollection + record.price
  //       })
  //     } else {

  //     }
  //   return valueOfCollection
  // }

}

module.exports = Customer