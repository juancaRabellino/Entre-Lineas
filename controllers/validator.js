const Joi = require('joi')

const validator = {
    validNewAccount: (req, res, next) => {
        const schema = Joi.object({

            firstname: Joi.string().trim().required().min(2).messages({
                "string.base": "El nombre debe ser un tipo de texto",
                "string.empty": "El nombre no puede estar vacio",
                "any.required": "Se requiere el nombre",
                "string.min": "El nombre debe tener al menos dos letras",
              }),
              lastname: Joi.string().trim().min(2).required().messages({
                "string.base": "El apellido deberá ser un texto'",
                "string.empty": "El apellido no puede estar vacio",
                "any.required": "Se requiere el apellido",
                "string.min": "El apellido debe tener al menos dos letras",
              }),

              email: Joi.string().trim().required().email({tlds: {allow: false}}).messages({
          "string.base": "El email deberá ser un texto'",
          "string.empty": "El email no puede estar vacio",
          "any.required": "El correo electronico es obligatorio",
          "string.email": "Por favor escribe un email valido"
        }),
        
        
        password: Joi.string().trim().required().pattern(/(?=.*\d\d)(?=.*[A-Z])(?=.*[a-z])(?!.*[!"#$%&/()=?¡¨*^\][;:_])(?!.*\s).{4,}/).min(4).messages({
            "string.empty": "La contraseña no puede estar en blanco",
            "any.required": "La contraseña es obligatoria!",
            "string.pattern.base": 'La contraseña debe ser por ejemplo, e.g., "Aa00"',
            "string.min": "La contraseña debe contener al menos cuatro caracteres",
          }),

          birthday: Joi.string().trim().required().messages({
            "any.required": "Ingresar la fecha de nacimiento es obligatoria"
          }),
  



            
        })

        const validation = schema.validate(req.body, {abortEarly: false})
 
        if(!validation.error){
          next()
        }else{
          res.json({success: false, errors: validation.error.details})
        }
      }
  }
  

  module.exports = validator