const Book = require('../models/Book')

const commentController = {
    addComment: (req, res) => {
        const {id, content} = req.body
        const {user} = req
        Book.findOneAndUpdate({_id: id}, {$push:{comments:{firstName: user.firstname, lastName: user.lastname, userPic: user.image, content: content}} }, {new: true})
        .then(book => {
          console.log(book.comments)
          return res.json({success: true, respuesta: book})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    },
    modComment: (req, res) => {
      const {id, idcomment} = req.body
      Book.findOneAndUpdate({_id: id,'comments._id': idcomment}, {$set :{'comments.$.content':req.body.value}}, {new: true})
      .then(book => {
        return res.json({success: true, respuesta: book})
      })
      .catch(error => {
        return res.json({success: false, error: error})
      })
    },
    deleteComment: (req, res) => {
        const {id, idcomment} = req.body
        Book.findOneAndUpdate({_id: id}, {$pull:{comments:{_id: idcomment}} }, {new: true})
        .then(book => {
          return res.json({success: true, respuesta: book})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    }
}


module.exports = commentController