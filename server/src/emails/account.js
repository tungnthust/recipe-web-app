const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'group10ict@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome ${name} to our food website.`
    })
}

const sendResetpassEmail = (email, name, pass) => {
    sgMail.send({
        to: email,
        from: 'group10ict@gmail.com',
        subject: 'Reset Password',
        text: `Hello, ${name}. Your password has been changed to: ${pass}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendResetpassEmail
}
