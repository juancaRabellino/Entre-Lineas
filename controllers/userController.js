const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require ("jsonwebtoken")

const userController = {

    signUp: async (req, res) => {
        console.log('llega')
        var errores = []
        const {firstname, lastname, email, password, birthday} = req.body
        const userExists = await User.findOne({email: email})
        if (userExists) {
            errores.push('El nombre email ya está siendo utilizado.  Elija otro.')
        }
        if (errores.length === 0) {
            const passwordHasheado = bcryptjs.hashSync(password, 10)
            var newUser = new User({
                firstname, lastname, email, password: passwordHasheado, birthday
            })
            var newUserSaved = await newUser.save()
            var token = jwt.sign({...newUserSaved}, process.env.SECRET_KEY, {})
        }
        return res.json({success: errores.length === 0 ? true : false,
            errores: errores,
            response: errores.length === 0 && {token, fistname: newUserSaved.firstname}})
    },

    signIn: async (req, res) => {
        const {email, password} = req.body
        const userExists = await User.findOne({email: email})
        if (!userExists) {
            return res.json({success: false, mensaje: 'Nombre de usuario y/o contraseña incorrectos.'})
        }
        const passwordMatches = bcryptjs.compareSync(password, userExists.password)
        if (!passwordMatches) {
            return res.json({success: false, mensaje: 'Nombre de usuario y/o contraseña incorrectos.'})
        }

        var token = jwt.sign({...userExists}, process.env.SECRET_KEY, {})
        return res.json({success: true, response: {token, firstname: userExists.firstname}})
    },

    logFromLS: (req, res) => {
        res.json({success: true, response: {token: req.body.token, fistname: req.user.firstname}})
    }
}

module.exports = userController