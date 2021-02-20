const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require ("jsonwebtoken")
const crypto = require ("crypto")




const userController = {

    signUp: async (req, res) => {
        console.log('Hola')
        console.log(req.body)
        var errores = []
        const {firstname, lastname, email, password, birthday, image} = req.body
        const userExists = await User.findOne({email: email})
        if (userExists) {
            errores.push('El nombre email ya está siendo utilizado.  Elija otro.')
        }
        if (errores.length === 0) {
            const passwordHasheado = bcryptjs.hashSync(password, 10)
            var newUser = new User({
                firstname, lastname, email, password: passwordHasheado, birthday, image
            })
            var newUserSaved = await newUser.save()
            var token = jwt.sign({...newUserSaved}, process.env.SECRET_KEY, {})
        }
        return res.json({success: errores.length === 0 ? true : false,
            errores: errores,
            response: errores.length === 0 && 
                {token, firstname: newUserSaved.firstname, email: newUserSaved.email, lastname: newUserSaved.lastname, birthday: newUserSaved.birthday, image: newUserSaved.image}})
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
        return res.json({success: true, response: 
            {token, firstname: userExists.firstname, email: userExists.email, lastname: userExists.lastname, birthday: userExists.birthday, image: userExists.image}})
    },

    logFromLS: (req, res) => {
        res.json({success: true, response: 
            {token: req.body.token, firstname: req.user.firstname, lastname: req.user.lastname, email: req.user.email, birthday: req.user.birthday, id:req.user._id, image: req.user.image}})
    },

    modifyUser: (req, res) => {
      const {id, email, firstname, lastname, birthday} = req.body
      const {image} = req.files
      const pic = image.name.split('.')
      const url = `../assets/${id}.${pic[1]}`
      image.mv(`./frontend/public/assets/${id}.${pic[1]}`, error => {
        if(error) {
          console.log(error)
          return res.json({success: false, error})
        }
      })
      User.findOneAndUpdate({_id: id}, 
        {$set: {firstname, email, lastname, birthday, image: url}},
        {new: true})
      .then(data => res.json({ success: true, response: data }))
      .catch(error => res.json({ success: false, error }))
    },


    
}

module.exports = userController