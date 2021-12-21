const mongoose  = require('mongoose')

const ingredientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

module.exports = Ingredient