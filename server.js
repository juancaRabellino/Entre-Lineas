const express = require('express')
require('dotenv').config()
const cors = require('cors')
// const router = require('./routes/index.js')
// require('./config/database')

const app = express()

// MIDDLEWARES

app.use(cors())
app.use(express.json())
// app.use('/api', router)

app.listen(4000, ()=> console.log('App listening on port 4000'))