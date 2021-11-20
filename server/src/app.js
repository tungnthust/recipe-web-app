require('./db/mongoose')
const express = require('express')
const recipeRouter = require('./routes/recipe')

const app = express()

app.use(express.json())
app.use(recipeRouter)

module.exports = app
