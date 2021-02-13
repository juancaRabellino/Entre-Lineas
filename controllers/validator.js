const Joi = require('joi')

const validator = {
  validateNewAccount:(req,res,next)=>{
    const shcema = Joi.object({

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