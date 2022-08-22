const express = require('express')

function setupApp(app) {
  app.use(express.json())
}

module.exports = setupApp
