var Customer = function(){
  this.cash = 0
  this.records = []
}

Customer.prototype = {

  buyRecord: function(record){
    this.records.push(record)
  }

}

module.exports = Customer