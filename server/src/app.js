require('./db/mongoose')
var cors = require('cors')
const express = require('express')
const recipeRouter = require('./routes/recipe')
const userRouter = require('./routes/user')
const ingredientRouter = require('./routes/ingredient')
const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080']
}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use('/api', recipeRouter)
app.use('/api', userRouter)
app.use('/api', ingredientRouter)

module.exports = app