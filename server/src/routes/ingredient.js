const express = require('express')
const router = new express.Router()
const Ingredient = require('../models/ingredient')

const mongoose = require('mongoose')

router.get('/ingredient/search', async (req, res) => {
    const ingredient_name = req.query.name

    const recipes = await Ingredient.find({
        "name": { "$regex": "^" + ingredient_name, "$options": "i" }
    })

    try {
        res.status(201).send(recipes)

    } catch (error) {
        res.status(400).send(error)
    }
    
})

module.exports = router