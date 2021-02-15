const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    birthday: Date
    

    // Debatir en grupo si agregar o no una propiedad de imagen en el modelo..

  
})

const User = mongoose.model('user', userSchema)

module.exports = User