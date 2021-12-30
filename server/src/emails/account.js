const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = ""

sgMail.setApiKey(sendgridAPIKey)

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

module.exports = {
    sendWelcomeEmail,
    sendResetpassEmail
}
