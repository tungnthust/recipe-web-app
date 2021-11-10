const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
            criteria = /^(?=.*\d)(?=.*[a-z])/
            if (!value.match(criteria)) {
                throw new Error('Password must contain both character and digit.')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    numOfFavourite: {
        type: Number,
        default: 0
    },
    favourited_recipes: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Recipe'
    }],
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})

userSchema.virtual('own_recipes', {
    ref: 'Recipe',
    localField: '_id',
    foreignField: 'author'
})

const User = mongoose.model('User', userSchema)

module.exports = User