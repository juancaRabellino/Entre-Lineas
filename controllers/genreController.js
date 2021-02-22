const Genre = require('../models/Genre')

const genreController = {
  addGenre: (req,res) => {
    const {genre, image} = req.body
    const newGenre = new Genre({genre, image})
    newGenre.save()
    .then(newGenre => res.json({success: true, response: newGenre}))
    .catch(errores => res.json({success:false, errores}))
  },
  getGenres: (req,res) => {
    Genre.find()
    .then(response => res.json({success: true, response }))
    .catch(errores => res.json({success: false, errores}))
  }
}

module.exports = genreController