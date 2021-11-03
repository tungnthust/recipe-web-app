const mongoose  = require('mongoose')

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    ingredients: [{
        ingredient: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Ingredient'
        },
        quantity: {
            type: Number,
            required: false
        },
        quantityType: {
            type: String,
            required: false
        }
    }],
    category: {
        type: String,
        required: true
    },
    steps: [{
        type: String,
        required: true
    }],
    difficulty: {
        type: Number,
        required: true
    },
    numOfFavourite: {
        type: Number,
        required: false
    },
    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        content: {
            type: String
        }
    }],
    image: {
        type: Buffer
    }
}, {
    timestamps: true
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe