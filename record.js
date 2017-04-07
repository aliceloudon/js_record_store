var Record = function(artist, title, genre, price){
  this.artist = artist
  this.title = title
  this.genre = genre
  this.price = price
}

Record.prototype = {

  printPropertiesAsString: function(){
    return 'artist: ' + this.artist.toString() + ', title: ' + this.title.toString() + ', genre: ' + this.genre.toString() + ', price: ' + this.price.toString()
  }

}

module.exports = Record