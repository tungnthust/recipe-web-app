const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//             to: 'trung.ntt1210@gmail.com',
//             from: 'recipeapp.group10@gmail.com',
//             subject: 'Thanks for joining in!',
//             text: "test lai"
//         })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'recipewebapp.group10@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome ${name} to our food website.`
    })
}

const sendResetpassEmail = (email, name, pass) => {
    sgMail.send({
        to: email,
        from: 'recipewebapp.group10@gmail.com',
        subject: 'Reset Password',
        text: `Hello, ${name}. Your password has been changed to: ${pass}`
    })
}

// API send email feedback of user 
const sendFeedbackEmail = (email, name, topic, message) => {
    sgMail.send({
        to: 'recipeapp.group10@gmail.com',
        from: 'recipewebapp.group10@gmail.com',
        subject: `[${topic}] ${name} send you a feedback`,
        text: `Email: ${email}\nMessage: ${message}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendResetpassEmail,
    sendFeedbackEmail
}