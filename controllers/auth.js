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
    const {email, contenido} = req.body
    User.findOne({
           where: {email: email},// Chequea si el email es un email valido en nuestra DB
       })
        if (!user) {
            return throwFailed(res, 'El email no coincide con nuestros registros')
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
  }
}

module.exports = auth;
