const nodemailer = require('nodemailer')

var transport = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
  })
  
  const auth = {
  restartPassword: async (req, res) => {
    var errores = []
    const {email, contenido,} = req.body
   
    const emailValido = await User.findOne({email: email})
    if (!emailValido) {
        errores.push('El mail no coincide con nuestros registros')
    }

    

    const elContenido = `<div style="width: 100px; height: 100px; 
    background-image: url('../frontend/public/assets/logo.jpg');
    background-size: cover; background-position: center;"></div>
    <h1 style="color: red;">${contenido}</h1>
    <h3>¡Recupera tu contraseña!!</h3>
    <button><a href="http://localhost:3000/api/recuperarpassword">Ir a la web</a></button>`
    var mailOptions = {
        from: 'Entre Lineas <entrelineasmh@gmail.com>',
        to: email,
        subject: 'Gracias por escribir a Entre Lineas',
        html: elContenido
    }
    transport.sendMail(mailOptions, () => {
        console.log("Mail enviado")
    })
    res.json({success: true})
  },

  changePassword: async (req, res) => {
    var errores = []
    const {password} = req.body
    const passwordExistente = await User.findOne({password:password})
    if (passwordExistente) {
        errores.push('No puedes usar una password anterior')
    }

    if (errores.length === 0) {
        const passwordHasheado = bcryptjs.hashSync(password, 10)
        User.findOneAndUpdate({_id: id}, 
            {$set: {password: passwordHasheado}},
            {new: true})
          .then(data => res.json({ success: true, response: data }))
          .catch(error => res.json({ success: false, error }))
        }
  }
}

module.exports = auth;
