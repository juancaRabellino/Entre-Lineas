const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  genre: {genre: String, image: String},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  stars:[{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
  views:Number,
  chapters:[{chapter: String}],
  image: String,
})

const Book = mongoose.model('book', bookSchema)

module.exports = Book