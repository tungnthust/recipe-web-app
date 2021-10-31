const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connect database successfully.")
}).catch((error) => {
    console.log("Fail to connect to database.", error)
})