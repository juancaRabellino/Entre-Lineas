const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const genreController = require('../controllers/genreController')
const commentController = require('../controllers/commentController')
const auth = require('../controllers/auth')
const validator = require ("../controllers/validator")
const voteController = require('../controllers/voteController')
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
.post(auth.restartPassword)




// Aca termina los controladores sobre usuarios. Agregaremos el panel de lectores y escritores..

// Book routes
router.route('/book')
.post(passport.authenticate('jwt', {session: false}),bookController.createBook)
.get(bookController.getBooks)

router.route('/book/:genre')
.get(bookController.getByGenre)
/* router.route("/itineraries/:cityId")
.get(itineraryController.allById) */

router.route('/book/addChapter')
.post(passport.authenticate('jwt', {session: false}),bookController.updateBook)
// .put(passport.authenticate('jwt', {session: false}), bookController.updateChapter)

router.route('/settings')
.post(userController.modifyUser)

// Genre Route
router.route('/genre')
.get(genreController.getGenres)
.post(genreController.addGenre)

// Comments Route
router.route('/comments')
.post(passport.authenticate('jwt', {session: false}),commentController.addComment)
.put(passport.authenticate('jwt', {session: false}), commentController.modComment)

router.route('/comments/delete')
.put(passport.authenticate('jwt', {session: false}), commentController.deleteComment)

// likes/votes Route
router.route('/vote')
.post(passport.authenticate('jwt', {session: false}), voteController.vote)

router.route('/dismissvote')
.post(passport.authenticate('jwt', {session: false}), voteController.dismissVote)

router.route("/restartpassword")
.post(auth.restartPassword)

module.exports = router