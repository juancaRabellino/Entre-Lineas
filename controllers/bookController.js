const Book = require('../models/Book')

const bookController = {
  createBook: (req,res) => {
    const {title, description, genre} = req.body
    const createBook = new Book({title, description, genre, 
      user: req.user._id})
    createBook.save()
    .then( async createBook => {
      const book = await createBook.populate('user').execPopulate() 
      res.json({success: true, response: book})})
    .catch(error => res.json({success: false, error}))
  },
  addImage: (req, res) => {
    const {id} = req.body
    const {image} = req.files
    const pic = image.name.split('.')
    const url = `../booksimages/${req.user._id}.${pic[1]}`
    image.mv(`./frontend/public/booksimages/${req.user._id}.${pic[1]}`, error => {
      if(error) {
        console.log(error)
        return res.json({success: false, error})
      }
    })
    Book.findOneAndUpdate({_id: id},
      {$set: {image:url}},
      {new: true})
    .then(response=> res.json({success: true, response}))
    .catch(error=> res.json({success: false, error}))
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

  incViews: (req, res) => {
    const {id} = req.body
    Book.findOneAndUpdate({_id:id},
      {$inc: {views: 1}},
      {new:true})
    .then(response => res.json({success: true, response}))
    .catch(error=> res.json({success:false, error}))
  }
}

module.exports = bookController
