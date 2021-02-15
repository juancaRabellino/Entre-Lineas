const Book = require('../models/Book')

const bookController = {
  createBook: (req,res) => {
    const {title, description, mainCharacters, genre, 
      user, stars, views, chapters} = req.body
    const createBook = new Book({title, description, mainCharacters, genre, 
      user, stars, views, chapters})
    createBook.save()
    .then(createBook => res.json({success: true, response: createBook}))
    .catch(error => res.json({success: false, error})) 
  }
}