const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const genreController = require('../controllers/genreController')
const commentController = require('../controllers/commentController')
const validator = require ("../controllers/validator")
const passport = require("passport")
require("../config/passport")



//Modelos de Usuarios 
router.route('/user/signup')
.post (validator.validNewAccount, userController.signUp)

router.route('/user/signin')
.post (userController.signIn)

router.route('/user/ls')
.post(passport.authenticate('jwt', {session: false}), userController.logFromLS)

router.route("/user/reset-password")
.post(userController.resetPassword)




// Aca termina los controladores sobre usuarios. Agregaremos el panel de lectores y escritores..

// Book routes
router.route('/book')
.post(bookController.createBook)
.get(bookController.getBooks)

router.route('/book/:genre')
.get(bookController.getByGenre)
/* router.route("/itineraries/:cityId")
.get(itineraryController.allById) */

router.route('/book/addChapter')
.post(bookController.updateBook)

router.route('/settings')
.post(userController.modifyUser)

// Genre Route
router.route('/genre')
.get(genreController.getGenres)
.post(genreController.addGenre)

// Comments Route
router.route('/comments')
.post(commentController.addComment)
.put(commentController.modComment)

router.route('/comments/delete')
.put(commentController.deleteComment)


module.exports = router