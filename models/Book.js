const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  mainCharacters: String,
  genre: String,
  user: {firstname: String, lastname: String, userid: String},
  stars:[{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
  views:Number,
  chapters:[{chapter: String}]
})

const Book = mongoose.model('book', bookSchema)

module.exports = Book