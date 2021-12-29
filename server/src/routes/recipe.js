const express = require('express')
const router = new express.Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')
const Ingredient = require('../models/ingredient')
const auth = require('../middleware/auth')
const mongoose = require('mongoose')


router.get('/recipes?', async (req, res) => {
    var query = req.query
    var sort = {}
    if (query.ingredients) {
        var ingredients = query.ingredients.split(',')
        var ingredientsArray = await Ingredient.find({"name": {$in: ingredients}}, '_id')
        var ingredientsId = ingredientsArray.map(a => a._id)
        query["ingredients.ingredient"] = {$all: ingredientsId}
        delete query.ingredients
    }
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1]
    }
    const recipes = await Recipe.find(query).populate([
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
    ]).sort(sort).limit(parseInt(req.query.limit))


    try {
        res.status(201).send(recipes)

    } catch (error) {
        res.status(400).send(error)
    }
    
})

router.post('/recipes', auth, async (req, res) => {
    let recipeData = req.body
    let ingredients = []
    for await (const ingredientObj of recipeData.ingredients) {
        
        const ingredient = await Ingredient.findOne({name: ingredientObj.ingredient})
        if (!ingredient) {
            const newIngredientId = new mongoose.Types.ObjectId()
            const newIngredient = new Ingredient({
                _id: newIngredientId,
                name: ingredientObj.ingredient
            })

            await newIngredient.save()
            ingredients.push({
                ingredient: newIngredientId,
                quantity: ingredientObj.quantity,
                quantityType: ingredientObj.quantityType
            })
        } else {
            ingredients.push({
                ingredient: ingredient._id,
                quantity: ingredientObj.quantity,
                quantityType: ingredientObj.quantityType
            })
        }
        
    }

    recipeData.ingredients = ingredients

    const recipe = new Recipe({
        ...recipeData,
        author: req.user._id
    })
    try {
        await recipe.save()
        res.status(201).send(recipe)

    } catch (error) {
        res.status(400).send(error)
    }
    
})

router.get('/recipes/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const recipe = await Recipe.findById(_id)
        if (!recipe) {
            return res.status(404).send("You're not authorized to view task")
        }
        await recipe.populate([
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
                model: User
            }
        ])
        res.status(200).send(recipe)
        
    } catch (error) {
        res.status(500).send(error)
    }

})

router.patch('/recipes/:id', auth, async (req, res) => {
    let recipeData = req.body
    const updates = Object.keys(recipeData)
    const allowedUpdates = ['title', 'description', 'ingredients', 'category', 'steps', 'difficulty', 'cookTime', 'cuisine']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    const _id = req.params.id
    if (!isValidOperation) {
        return res.status(400).send({
            error: 'Invalid updates'
        })
    }
    
    try {
        const recipe = await Recipe.findOne({
            _id,
            author: req.user._id
        })

        if (!recipe) {
            return res.status(404).send("You're not authorized to update this recipe")
        }

        let ingredients = []

        for await (const ingredientObj of recipeData.ingredients) {
        
            const ingredient = await Ingredient.findOne({name: ingredientObj.ingredient})
            if (!ingredient) {
                const newIngredientId = new mongoose.Types.ObjectId()
                const newIngredient = new Ingredient({
                    _id: newIngredientId,
                    name: ingredientObj.ingredient
                })

                await newIngredient.save()
                ingredients.push({
                    ingredient: newIngredientId,
                    quantity: ingredientObj.quantity,
                    quantityType: ingredientObj.quantityType
                })
            } else {
                ingredients.push({
                    ingredient: ingredient._id,
                    quantity: ingredientObj.quantity,
                    quantityType: ingredientObj.quantityType
                })
            }
            
        }

        recipeData.ingredients = ingredients
        
        updates.forEach((update) => recipe[update] = recipeData[update])
        await recipe.save()
        await recipe.populate([
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
                model: User
            }
        ])
        res.send(recipe)

    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/recipes/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const recipe = await Recipe.findOne({
            _id,
            author: req.user._id
        })

        if (!recipe) {
            return res.status(404).send("You're not authorized to delete this recipe.")
        }

        recipe.remove()

        res.send(recipe)
        
    } catch (error) {
        res.status(500).send(error)
    }

})

router.post('/recipes/like/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        let recipe = await Recipe.findById(_id)

        if (!recipe) {
            return res.status(404).send("Recipe does not exist.")
        }

        let user = req.user
        const userFavouritedRecipes = user.favourited_recipes
        if (userFavouritedRecipes.includes(_id)) {
            user.favourited_recipes = user.favourited_recipes.filter(arrayItem => arrayItem != _id)
            recipe.numOfFavourite -= 1
        } else {
            user.favourited_recipes.push(_id)
            recipe.numOfFavourite += 1
        }

        user.save()
        recipe.save()

        res.send(user)
        
    } catch (error) {
        res.status(500).send(error)
    }

})

router.post('/recipes/comment/:id', auth, async (req, res) => {
    const _id = req.params.id
    const commentContent = req.body.content
    try {
        let recipe = await Recipe.findById(_id)

        if (!recipe) {
            return res.status(404).send("Recipe does not exist.")
        }

        recipe.comments.push({
            user: req.user._id,
            content: commentContent
        })

        recipe.save()
        
        res.send(recipe)
        
    } catch (error) {
        res.status(500).send(error)
    }

})

module.exports = router