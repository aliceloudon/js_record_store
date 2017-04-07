var Record = function(artist, title, genre, price){
  this.artist = artist
  this.title = title
  this.genre = genre
  this.price = price
}

Record.prototype = {

  printPropertiesAsString: function(){
    return 'Artist: ' + this.artist.toString() + ', Title: ' + this.title.toString() + ', Genre: ' + this.genre.toString() + ', Price: ' + this.price.toString() + '. '
  }

}

module.exports = Record