const Joi = require('joi')

const validator = {
  validateNewAccount:(req,res,next)=>{
    const schema = Joi.object({
      firstUser:Joi.string().trim().required(),
      LastName:Joi.string().trim().required(),
      // brithday:Joi.string().trim().required(),
      username:Joi.string().trim().required().email({ tlds: {allow: false} }),
      password:Joi.string().trim().required().pattern(/(?=.*\d)/).min(8), // tiene que ser de 8 caracteres o mas y debe tener al menos un num
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