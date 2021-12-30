const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

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
        from: 'recipeapp.group10@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome ${name} to our food website.`
    })
}

const sendResetpassEmail = (email, name, pass) => {
    sgMail.send({
        to: email,
        from: 'recipeapp.group10@gmail.com',
        subject: 'Reset Password',
        text: `Hello, ${name}. Your password has been changed to: ${pass}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendResetpassEmail
}
