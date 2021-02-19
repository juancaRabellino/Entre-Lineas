const Book = require('../models/Book')

const bookController = {
  createBook: (req,res) => {
    const book = req.body.book
    const {title, description, mainCharacters, genre, 
      user, stars, views, chapters, image} = book
    const createBook = new Book({title, description, mainCharacters, genre, 
      user, stars, views, chapters, image})
    createBook.save()
    .then( async createBook => {
      const book = await createBook.populate('user').execPopulate() 
      console.log(book)
      res.json({success: true, response: book})})
    .catch(error => res.json({success: false, error}))
  },

  getBooks: (req,res) => {
    Book.find().populate('user')
    .then(response => res.json({success: true, response}))
    .catch(error => res.json({success: false, error}))
  },

  getByGenre: async (req,res)=>{
    const genre = req.params.genre
    Book.find({genre:genre}).populate('user')
    .then(response=> res.json({succes:true, response}))
    .catch(error => res.json({succes: false, error}))
  },

  updateBook: (req, res) => {
    const id = req.body.id
    const {title, content} = req.body.chapter
    Book.findOneAndUpdate({_id: id},
      {$push: {chapters: [{title, chapter:[{content}]}]}},
      {new: true})
    .then(response=> res.json({success: true, response}))
    .catch(error => res.json({success: false, error}))
  }
}

module.exports = bookController
