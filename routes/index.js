const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const genreController = require('../controllers/genreController')
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
// Aca termina los controladores sobre usuarios. Agregaremos el panel de lectores y escritores..

// Book routes
router.route('/book')
.post(bookController.createBook)
.get(bookController.getBooks)

// Genre Route
router.route('/genre')
.get(genreController.getGenres)
.post(genreController.addGenre)



module.exports = router