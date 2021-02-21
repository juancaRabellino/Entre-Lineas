const Book = require('../models/Book')

const voteController = {
    vote: async (req, res) => {
        const idBook = req.body.id
        const userId = req.user._id
        await Book.findOneAndUpdate({ _id:idBook}, 
          {$addToSet: {stars: userId}}, 
          {new: true})
        .then(bookVoted => {
          return res.json({success: true, respuesta: bookVoted})
        })
        .catch(errores => {
          return res.json({
            success: false,
            errores:errores,
            mensaje:'No se puede votar en este momento. Intente mas tarde'})
        })
    },
    dismissVote: (req, res) => {
        Book.findOneAndUpdate({_id: req.body.id}, {$pull: {stars: req.user._id}}, {new: true})
        .then(book => {
          return res.json({success: true, respuesta: book})
        })
        .catch(errores => {
          return res.json({
            success: false,
            errores:errores,
            mensaje:'No se puede sacar el voto en este momento. Intente mas tarde'
          })
        })
    }
}

module.exports = voteController