const express = require('express')
const router = new express.Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')
const Ingredient = require('../models/ingredient')


router.get('/recipes', async (req, res) => {
    
    const recipes = await Recipe.find().populate([
        {
            path: "author",
            model: User,
        },
        {
            path: "ingredients.ingredient",
            select: "name",
            model: Ingredient,
        },
        {
            path: "comments.user",
            model: User,
            
        }
    ])


    try {
        res.status(201).send(recipes)

    } catch (error) {
        res.status(400).send(error)
    }
    
})

module.exports = router