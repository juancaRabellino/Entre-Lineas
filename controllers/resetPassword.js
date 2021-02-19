
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
}),

const resetPassword =()=> {
  resetPw: (req, res) => {
    const {email, contenido} = req.body
    const elContenido = `<div style="width: 100px; height: 100px; 
    background-image: url('https://elmejorplandelmundo.files.wordpress.com/2015/02/mirta.jpg');
    background-size: cover; background-position: center;"></div>
    <h1 style="color: red;">${contenido}</h1>
    <h3>Feliz año nuevo!</h3>
    <button><a href="http://www.clarin.com">Ir a la web</a></button>`

    var mailOptions = {
        from: 'Lechería Carlitos <lechescarlitos@gmail.com>',
        to: email,
        subject: 'Gracias por escribir a Lechería Carlitos',
        html: elContenido
    }

    transport.sendMail(mailOptions, () => {
        console.log("Mail enviado")
    })
    res.json({success: true})
  }
}

module.exports = resetPassword