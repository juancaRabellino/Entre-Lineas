const Genre = require('../models/Genre')

const genreController = {
  addGenre: (req,res) => {
    const {genre, image} = req.body
    const newGenre = new Genre({genre, image})
    newGenre.save()
    .then(newGenre => res.json({success: true, response: newGenre}))
    .catch(error => res.json({success:false, error}))
  },
  getGenres: (req,res) => {
    Genre.find()
    .then(response => res.json({success: true, response }))
    .then(error => res.json({success: false, error}))
  }
}

module.exports = genreController