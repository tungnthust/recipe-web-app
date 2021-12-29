require('./db/mongoose')
const express = require('express')
const recipeRouter = require('./routes/recipe')
const userRouter = require('./routes/user')
const ingredientRouter = require('./routes/ingredient')
const app = express()

app.use(express.json())
app.use(recipeRouter)
app.use(userRouter)
app.use(ingredientRouter)

module.exports = app
