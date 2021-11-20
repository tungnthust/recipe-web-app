require('./db/mongoose')
const express = require('express')
const recipeRouter = require('./routes/recipe')
const userRouter = require('./routers/user')

const app = express()

app.use(express.json())
app.use(recipeRouter)
app.use(userRouter)

module.exports = app
