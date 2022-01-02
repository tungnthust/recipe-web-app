require('./db/mongoose')
var cors = require('cors')
const express = require('express')
const recipeRouter = require('./routes/recipe')
const userRouter = require('./routes/user')
const ingredientRouter = require('./routes/ingredient')
const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(recipeRouter)
app.use(userRouter)
app.use(ingredientRouter)

module.exports = app
