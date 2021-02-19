const Book = require('../models/Book')

const bookController = {
  createBook: (req,res) => {
    const {title, description, genre} = req.body
    const {image} = req.files
    console.log('')
    const pic = image.name.split('.')
    const url = `../booksimages/${req.user._id}.${pic[1]}`
    image.mv(`./frontend/public/booksimages/${req.user._id}.${pic[1]}`, error => {
      if(error) {
        console.log(error)
        return res.json({success: false, error})
      }
    })
    const createBook = new Book({title, description, genre, 
      user: req.user._id, image:url})
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
  },

  getByGenre: async (req,res)=>{
    const genre = req.params.genre
    Book.find({genre:genre}).populate('user')
    .then(response=> res.json({succes:true, response}))
    .catch(error => res.json({succes: false, error}))
  },

  updateBook: (req, res) => {
    const {newChapter, id} = req.body
    console.log(newChapter, id)
    Book.findOneAndUpdate({_id: id},
      {$push: {chapters: newChapter}},
      {new: true})
    .then(response=> res.json({success: true, response}))
    .catch(error => res.json({success: false, error}))
  },
}

module.exports = bookController
