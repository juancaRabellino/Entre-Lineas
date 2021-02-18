const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  genre: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  stars:[{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
  comments: [{userPic: String, firstName: String, userLastname: String, content: String, userId: String}],
  views:Number,
  chapters:[{title:String, content:String}],
  image: String,
  commments: [
    {userPic: String, userName: String, userLastname:String, comment: String, userId: String}
  ]
})

const Book = mongoose.model('book', bookSchema)

module.exports = Book