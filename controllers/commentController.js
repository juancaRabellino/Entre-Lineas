const Book = require('../models/Book')

const commentController = {
    addComment: (req, res) => {
        const {id, content} = req.body
        const {user} = req
        Book.findOneAndUpdate({_id: id}, {$push:{comments:{firstName: user.firstname, lastName: user.lastname, userPic: user.image, content: content, userId: user._id}} }, {new: true})
        .then(book => {
          return res.json({success: true, respuesta: book})
        })
        .catch(errores => {
          return res.json({
            success: false,
            errores:errores,
            mensaje:'No se puede enviar el comentario en este momento. Intente mas tarde'
          })
        })
    },
    modComment: (req, res) => {
      const {id, idcomment} = req.body
      Book.findOneAndUpdate({_id: id,'comments._id': idcomment}, {$set :{'comments.$.content':req.body.value}}, {new: true})
      .then(book => {
        return res.json({success: true, respuesta: book})
      })
      .catch(errores => {
        return res.json({
          success: false,
          errores:errores,
          mensaje:'No se puede editar el comentario en este momento. Intente mas tarde'})
      })
    },

    deleteComment: (req, res) => {
        const {id, idcomment} = req.body
        Book.findOneAndUpdate({_id: id}, {$pull:{comments:{_id: idcomment}} }, {new: true})
        .then(book => {
          return res.json({success: true, respuesta: book})
        })
        .catch(errores => {
          return res.json({
            success: false,
            errores:errores,
            mensaje:'No se puede borrar el comentarios en este momento. Intente mas tarde'
          })
        })
    }
}


module.exports = commentController