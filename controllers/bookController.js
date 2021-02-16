const Book = require('../models/Book')

const bookController = {
  createBook: (req,res) => {
    const book = req.body.book
    const {title, description, mainCharacters, genre, 
      user, stars, views, chapters, image} = book
    const createBook = new Book({title, description, mainCharacters, genre:{genre, image: url[0]}, 
      user, stars, views, chapters, image})
    createBook.save()
    .then( async createBook => {
      const book = await createBook.populate('user').execPopulate() 
      res.json({success: true, response: book})})
    .catch(error => res.json({success: false, error}))
  },

  getBooks: (req,res) => {
    Book.find().populate('user')
    .then(response => res.json({success: true, response}))
    .catch(error => res.json({success: false, error}))
  }
}

module.exports = bookController
