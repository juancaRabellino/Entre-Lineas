const Book = require('../models/Book')

const voteController = {
    vote: async (req, res) => {
        const idBook = req.body.id
        const userId = req.user._id
        await Book.findOneAndUpdate({ _id:idBook}, {$addToSet: {stars:userId}}, {new: true})
        .then(book => {
          return res.json({success: true, respuesta: book})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    },
    dismissVote: (req, res) => {
        Book.findOneAndUpdate({_id: req.body.id}, {$pull: {stars: req.user._id}}, {new: true})
        .then(book => {
          return res.json({success: true, respuesta: book})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    }
}

module.exports = voteController