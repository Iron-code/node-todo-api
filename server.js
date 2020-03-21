'use strict'

const app = require('./src/app')
const config = require('./src/config')
const PORT = config('PORT')
const connectDB = require('./databaseConnection')
const sampleModel = require('./src/sampleModel')


  app.listen(PORT, function () {
    console.log(`App is listening on port http://127.0.01:${PORT}`)
    connectDB()
  })