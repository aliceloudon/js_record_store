var Customer = function(){
  this.cash = 0
  this.records = []
}

Customer.prototype = {

  getCash: function(){
    this.cash = 5000
  },

  buyRecord: function(record){
    if (this.cash >= record.price){
      this.records.push(record)
      this.cash = this.cash - record.price
    }
    else {
      return 'Sorry, customer has insufficient funds'
    }
  },

  sellRecord: function(record){
    var index = this.records.indexOf(record)
    this.records.splice(index, 1)
    this.cash = this.cash + record.price
  },

}

module.exports = Customer