const express = require('express')
const User = require('../models/user')
const Recipe = require('../models/recipe')
const router = new express.Router()
const auth = require('../middleware/auth')
const { sendWelcomeEmail, sendResetpassEmail, sendFeedbackEmail } = require('../emails/account')

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        sendWelcomeEmail(user.email, user.name)
        res.status(201).send({user})
    } catch(e){
        res.status(400).send(e)
    }
})
 


router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.username, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/resetpass', async (req, res) => {
    try {
        var user = await User.findOne({email : req.body.email})
        var randomstring = Math.random().toString(36).slice(-8);
        user.password = randomstring
        sendResetpassEmail(user.email, user.username, randomstring)
        await user.save()
        res.send(user)
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token)
        await req.user.save()

        res.send("Logout successfully.")
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()

        res.send("Logout all sessions successfully.")
    } catch (e) {
        console.log("err");
        res.status(500).send(e)
    }
})

// ------ start Hoang Ha ------------------

// API return [menbers]
// router.get('/members', async (req, res) => {
//     try {
//         const members = await User.find()
//         console.log(members[0].own_recipes)
//         // TODO
//         // # member'recipe >= 1

//         res.status(201).send(members)
//     } catch(error){
//         res.status(400).send(error)
//     }
// })

// API find member by id
router.get('/members/:id', async (req, res) => {
    const _id = req.params.id 

    try {
        const member = await User.findById(_id)
                                .populate([
                                {
                                    path: "own_recipes", 
                                    model: Recipe
                                },
                                { 
                                    path: "favourited_recipes",
                                    model: Recipe
                                }
                                ])
                                

        if (!member) {
            return res.status(404).send("You can not find this member infor")
            
        }
        res.status(200).send(member)
        
    } catch (error) {
        res.status(500).send(error)
    }
})


// API update member infor
router.patch('/members/:id', auth, async (req, res) => {
    let memberData = req.body
    const updates = Object.keys(memberData)
    const allowedUpdates = ['name', 'avatar']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    const _id = req.params.id

    if (!isValidOperation) {
        return res.status(400).send({
            error: 'Invalid updates'
        })
    }

    try {
        const member = await User.findOne({
            _id,
            author: req.user._id
        })

        if(!member) {
            return res.status(404).send("You're not authorized to update this member infor")
        }

        updates.forEach((update) => member[update] = memberData[update])
        await member.save()
        
        res.send(member)   
    } catch (error) {
        res.status(400).send(error)
    }
})

// API send mail
router.post('/contact', async (req, res) => {
    const {email, name, topic, message} = req.body
    try {
        sendFeedbackEmail(email, name, topic, message)
        res.status(200).send('Sent email successfully!')
        
    } catch (error) {
        res.status(500).send(error)
    }
})

// API return [menbers] (sort if want)
router.get('/members?', async (req, res) => {
    var sort = {}

    if (!req.query.limit) {
        req.query.limit = 50
    }
    
    if(req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1]
    }
    const members = await User.find({ numOfRecipes: {$gt: 0}})
                        // .populate([
                        // {
                        //     path: "own_recipes", 
                        //     model: Recipe
                        // },
                        // { 
                        //     path: "favourited_recipes",
                        //     model: Recipe
                        // }
                        // ])
                        .sort(sort)
                        .limit(parseInt(req.query.limit))
    
    try {
        res.status(201).send(members)

    } catch (error) {
        res.status(400).send(error)
    }
})

// API return [recipe of author] by author Id
router.get('/members/recipes/:id', async (req, res) => {
    var _id = req.params.id
    
    const member = await User.findById(_id).populate({path: "own_recipes"})

    try {
        res.status(201).send(member.own_recipes)

    } catch (error) {
        res.status(400).send(error)
    }
})

// ------ end Hoang Ha ---------------------------

module.exports = router
