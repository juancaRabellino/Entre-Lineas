const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
  genre: String,
  image: String
})
const Genre = mongoose.model('genre', genreSchema)
module.exports=Genre