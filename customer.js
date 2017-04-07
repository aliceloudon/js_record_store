var Customer = function(){
  this.cash = 0
  this.records = []
}

Customer.prototype = {

  buyRecord: function(record){
    this.records.push(record)
    this.cash = this.cash - record.price
  },

  sellRecord: function(record){
    var index = this.records.indexOf(record)
    this.records.splice(index, 1)
    this.cash = this.cash + record.price
  },

}

module.exports = Customer