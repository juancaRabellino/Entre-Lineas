const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')

module.exports=passport.use(new jwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY

}, (payload, done)=>{
  User.findById(payload.doc._id)
  .then(user => {
    return user
    ? done(null, user)
      : done(null,false);
  })
  .catch(err => {
    return done(err, false)
  })
}))