const Book = require('../models/Book')

const likeController = {
    like: async (req, res) => {
        const idBook = req.body.id
        const userId = req.user._id
        await Book.findOneAndUpdate({ _id:idBook}, {$addToSet: {stars:userId}}, {new: true})
        .then(like => {
          return res.json({success: true, respuesta: like})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    },
    dislike: (req, res) => {
        Book.findOneAndUpdate({_id: req.body.id}, {$pull: {stars: req.user._id}}, {new: true})
        .then(dislike => {
          return res.json({success: true, respuesta: dislike})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    }
}

module.exports = likeController