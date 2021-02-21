const { response } = require('express')
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
    .catch(errores => res.json({
      success: false,
      errores:errores,
      mensaje:'No se puede crear el libro en este momento. Intente mas tarde.'
    }))
  },

  addImage: (req, res) => {
    const {id} = req.body
    const {image} = req.files
    const pic = image.name.split('.')
    const url = `../booksimages/${req.user._id}.${pic[1]}`
    image.mv(`./frontend/public/booksimages/${req.user._id}.${pic[1]}`, errores => {
      if(errores) {
        console.log(errores)
        return res.json({
          success: false,
          errores:errores,
          mensaje:'No se puede agregar la imagen en este momento. Intente mas tarde'
        })
      }
    })
    Book.findOneAndUpdate({_id: id},
      {$set: {image:url}},
      {new: true})
    .then(response=> res.json({success: true, response}))
    .catch(errores => res.json({
      success: false,
      errores:errores,
      mensaje:'No se puede actualizar su imagen en este momento. Intente mas tarde'
    }))
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

  addChapter: (req, res) => {
    const {title, id} = req.body
    console.log(req.body)
    Book.findOneAndUpdate({_id:id},
      {$addToSet: {chapters: {title:title}}},
      {new:true})
    .then(response =  res.json({success: true, response}))
    .catch(error = res.json({success: false, error}))
  },

  updateBook: (req, res) => {
    const {newChapter, id} = req.body
    console.log(newChapter, id)
    Book.findOneAndUpdate({_id: id},
      {$push: {chapters: newChapter}},
      {new: true})
    .then(response=> res.json({success: true, response}))
    .catch(errores => res.json({
      success: false,
      errores:errores,
      mensaje:'No se puede actualizar en este momento. Intente mas tarde'
    }))
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
