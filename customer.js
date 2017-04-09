var RecordCollection = require ('./recordCollection.js')

var Customer = function(name, recordCollection){
  this.name = name
  this.recordCollection = new RecordCollection()
}

Customer.prototype = {

  compareValue: function(anotherCustomer){
    var differenceInValue = this.recordCollection.valueOfCollection - anotherCustomer.recordCollection.valueOfCollection
    return differenceInValue
  },

  compareValueAndReturnString: function(anotherCustomer){
    var myValue = this.recordCollection.valueOfCollection
    var otherCustomersValue = anotherCustomer.recordCollection.valueOfCollection

    if (myValue > otherCustomersValue) {
      var differenceInValue = this.recordCollection.valueOfCollection - anotherCustomer.recordCollection.valueOfCollection
      return "Your record collection is " + differenceInValue + "p more valuable than " + anotherCustomer + "'s record collection."
    }
    else if (otherCustomersValue > myValue) {
      var differenceInValue = anotherCustomer.recordCollection.valueOfCollection - this.recordCollection.valueOfCollection
      return anotherCustomer.name + "'s record collection is " + differenceInValue + "p more valuable than your record collection."
    }
    else {
      return "Your record collection is worth exactly the same as " + anotherCustomer + "'s record collection."
    }
  }

}

module.exports = Customer