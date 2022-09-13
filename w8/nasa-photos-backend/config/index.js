require('dotenv/config')
const express = require('express')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

module.exports = (app) => {
  app.use(logger('dev'))

  app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN?.split(',') || 'http://localhost:3001',
    })
  )

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, 'public')))
}
