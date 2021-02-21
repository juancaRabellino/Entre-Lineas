const Joi = require('joi')

const validator = {
    validNewAccount: (req, res, next) => {
        const schema = Joi.object({
            firstname: Joi.string().trim().required().min(2).max(15),
            lastname: Joi.string().trim().required().min(2).max(20),
            email: Joi.string().trim().required().email({ tlds: {allow: false} }),
            password: Joi.string().trim().required().pattern(/(?=.*\d)/).min(5),
            birthday: Joi.string(),
            image: Joi.string()
        })

        const validation = schema.validate(req.body, {abortEarly: false})

        if (!validation.error) {
            next()
        } else {
            console.log(validation.error.details)
            res.json({success: false, errores: ['Hubo un error en los datos, verifique.']})
        }
    }

  }

  module.exports = validator