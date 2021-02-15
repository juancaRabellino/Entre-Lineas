const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
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


module.exports = router