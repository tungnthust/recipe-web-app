const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
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
router.get('/members', async (req, res) => {
    try {
        const members = await User.find()
        res.status(201).send(members)
    } catch(error){
        res.status(400).send(error)
    }
})

// API find member by id
router.get('/members/:id', async (req, res) => {
    const _id = req.params.id 

    try {
        const member = await User.findById(_id)
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
// TODO
// ------ end Hoang Ha ---------------------------

module.exports = router
