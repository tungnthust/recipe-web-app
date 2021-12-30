const app = require('../src/app')
const User = require('../src/models/user')
const Recipe = require('../src/models/recipe')
const Ingredient = require('../src/models/ingredient')
const mongoose  = require('mongoose')
const request = require('supertest')

const user1_test_id = new mongoose.Types.ObjectId()
const user2_test_id = new mongoose.Types.ObjectId()
const recipe1_test_id = new mongoose.Types.ObjectId()
const recipe2_test_id = new mongoose.Types.ObjectId()
const recipe3_test_id = new mongoose.Types.ObjectId()
const ingredient1_test_id = new mongoose.Types.ObjectId()
const ingredient2_test_id = new mongoose.Types.ObjectId()
const ingredient3_test_id = new mongoose.Types.ObjectId()
const ingredient4_test_id = new mongoose.Types.ObjectId()
const ingredient5_test_id = new mongoose.Types.ObjectId()


const user1_test = {
    _id: user1_test_id,
    name: 'Nguyen Thanh Trung',
    username: 'tungnt',
    email: 'tungnt@gmail.com',
    password: '12345678abc',
}

const user2_test = {
    _id: user2_test_id,
    name: 'Do Huy Hung',
    username: 'hungdh',
    email: 'hungdh@gmail.com',
    password: '12345678abc',
}

const recipe1_test = {
    _id: recipe1_test_id,
    title: "Pho",
    author: user1_test_id,
    description: "Description test",
    ingredients: [{
        ingredient: ingredient1_test_id,
        quantity: 1,
        quantityType: 'cu'
    }, {
        ingredient: ingredient2_test_id,
        quantity: 40,
        quantityType: 'gram'
    }],
    category: 'Mon chinh',
    steps: ['Step1', 'Step2', 'Step3'],
    difficulty: 2,
    cookTime: 30,
    cuisine: "Asia",
    numOfFavourite: 2,
    comments: [{
        user: user1_test_id,
        content: 'Comment1 test'
    }, {
        user: user2_test_id,
        content: 'Comment2 test'
    }
    ]
}

const recipe2_test = {
    _id: recipe2_test_id,
    title: "Chao ga",
    author: user2_test_id,
    description: "Description chao ga",
    ingredients: [{
        ingredient: ingredient3_test_id,
        quantity: 1,
        quantityType: 'kg'
    }, {
        ingredient: ingredient2_test_id,
        quantity: 50,
        quantityType: 'gram'
    }],
    category: 'Mon chinh',
    steps: ['Step1', 'Step2', 'Step3'],
    difficulty: 3,
    cookTime: 60,
    cuisine: "Europe",
    numOfFavourite: 6,
    comments: [{
        user: user2_test_id,
        content: 'Comment test'
    }]
}

const recipe3_test = {
    _id: recipe3_test_id,
    title: "Thit bo xao",
    author: user2_test_id,
    description: "Description chao ga",
    ingredients: [{
        ingredient: ingredient1_test_id,
        quantity: 1,
        quantityType: 'cu'
    }, {
        ingredient: ingredient4_test_id,
        quantity: 500,
        quantityType: 'gram'
    }, {
        ingredient: ingredient5_test_id,
        quantity: 2,
        quantityType: 'qua'
    }],
    category: 'Mon chinh',
    steps: ['Step1', 'Step2', 'Step3'],
    difficulty: 4,
    cookTime: 60,
    cuisine: "Asia",
    numOfFavourite: 0,
    comments: [{
        user: user1_test_id,
        content: 'Comment1 test'
    }, {
        user: user2_test_id,
        content: 'Comment2 test'
    }, {
        user: user1_test_id,
        content: 'Comment3 test'
    }]
}



const ingredient1_test = {
    _id: ingredient1_test_id,
    name: "Toi"
}

const ingredient2_test = {
    _id: ingredient2_test_id,
    name: "Hanh"
}

const ingredient3_test = {
    _id: ingredient3_test_id,
    name: "Ga"
}

const ingredient4_test = {
    _id: ingredient4_test_id,
    name: "Bo"
}

const ingredient5_test = {
    _id: ingredient5_test_id,
    name: "Ca chua"
}

// Clean database befor each test function
beforeEach(async () => {
    await User.deleteMany()
    await Recipe.deleteMany()
    await Ingredient.deleteMany()

    await new Ingredient(ingredient1_test).save()
    await new Ingredient(ingredient2_test).save()
    await new Ingredient(ingredient3_test).save()
    await new Ingredient(ingredient4_test).save()
    await new Ingredient(ingredient5_test).save()

    await new User(user1_test).save()
    await new User(user2_test).save()
    
    await new Recipe(recipe1_test).save()
    await new Recipe(recipe2_test).save()
    await new Recipe(recipe3_test).save()

})

test('Get all recipes', async () => {
    const res = await request(app)
        .get('/recipes')
        .send()
        .expect(201)

    expect(res.body.length).toEqual(3)
})