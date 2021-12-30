const app = require('../src/app')
const User = require('../src/models/user')
const Recipe = require('../src/models/recipe')
const Ingredient = require('../src/models/ingredient')
const mongoose  = require('mongoose')


const user_test_id = new mongoose.Types.ObjectId()
const recipe_test_id = new mongoose.Types.ObjectId()
const ingredient1_test_id = new mongoose.Types.ObjectId()
const ingredient2_test_id = new mongoose.Types.ObjectId()

const user_test = {
    _id: user_test_id,
    name: 'Nguyen Thanh Trung',
    username: 'tungnt',
    email: 'tungnt@gmail.com',
    password: '12345678abc',
}

const recipe_test = {
    _id: recipe_test_id,
    title: "Pho",
    author: user_test_id,
    description: "Description test",
    ingredients: [{
        ingredient: ingredient1_test_id,
        quantity: 1,
        quantityType: 'cu'
    }, {
        ingredient: ingredient2_test_id,
        quantity: 2,
        quantityType: 'bo'
    }],
    category: 'Mon chinh',
    steps: ['Step1', 'Step2', 'Step3'],
    difficulty: 2,
    cookTime: 30,
    cuisine: "Asia",
    numOfFavourite: 2,
    comments: [{
        user: user_test_id,
        content: 'Comment test'
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



// Clean database befor each test function
beforeEach(async () => {
    await User.deleteMany()
    await Recipe.deleteMany()
    await Ingredient.deleteMany()
})


test('Save User', async () => {
    
    await new User(user_test).save()

    const user = await User.findById(user_test_id)
    const pick = ({_id, email, name, username}) => ({_id, email, name, username})
    // expect user retrieved from db match with user intialized before saving 
    expect(pick(user)).toMatchObject(pick(user_test))
})


test('Validate password length', async () => {
    is_error = 0
    invalid_passwd = Object.assign({}, user_test)
    invalid_passwd.password = '12345'

    try {
        await new User(invalid_passwd).save()
    } catch (error) {
        is_error = 1
    }
    
    expect(is_error).toBe(1)

})


test('Validate password strength', async () => {
    is_error = 0
    invalid_passwd = Object.assign({}, user_test)
    invalid_passwd.password = '12345678'

    try {
        await new User(invalid_passwd).save()
    } catch (error) {
        is_error = 1
    }
    
    expect(is_error).toBe(1)

})

test('Validate email', async () => {
    is_error = 0
    invalid_email = Object.assign({}, user_test)
    invalid_email.email = 'tungnt.com'

    try {
        await new User(invalid_email).save()
    } catch (error) {
        is_error = 1
    }
    
    expect(is_error).toBe(1)

})

test('Save ingredients', async () => {
    
    await new Ingredient(ingredient1_test).save()

    const ingredient1 = await Ingredient.findById(ingredient1_test_id)

    // expect ingredient retrieved from db match with ingredient intialized before saving 
    expect(ingredient1).toMatchObject(ingredient1_test)

})

test('Save recipe', async () => {
    await new Ingredient(ingredient1_test).save()
    await new Ingredient(ingredient2_test).save()

    await new User(user_test).save()
    
    await new Recipe(recipe_test).save()
    


    const user = await User.findById(user_test_id)
    const recipe = await Recipe.findById(recipe_test_id)

    // expect recipe retrieved from db match with recipe intialized before saving 
    expect(recipe).toMatchObject(recipe_test)

    // expect when get recipe created by user match with recipe saved in db
    await user.populate({path: 'own_recipes'})
    is_match = JSON.stringify(recipe) == JSON.stringify(user.own_recipes[0])
    expect(is_match).toBe(true)

    
    ingredients = recipe.ingredients

    ingredient1 = await Ingredient.findById(ingredients[0].ingredient)
    ingredient2 = await Ingredient.findById(ingredients[1].ingredient)

    // expect ingredients in recipe collection match with ingredients in ingredient collection
    expect(ingredient1).toMatchObject(ingredient1_test)
    expect(ingredient2).toMatchObject(ingredient2_test)
})

