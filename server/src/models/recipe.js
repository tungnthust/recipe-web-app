const mongoose  = require('mongoose')

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    description: {
        type: String,
        required: true
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
    cookTime: {
        type: Number,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    numOfFavourite: {
        type: Number,
        default: 0,
        required: false
    },
    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        content: {
            type: String
        },
        image: {
            type: Buffer
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