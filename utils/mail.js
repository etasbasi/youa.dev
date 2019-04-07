const nodemailer = require('nodemailer');
const config = require('../config/config');

const transporter = nodemailer.createTransport({
    host: config.MAIL_HOST,
    port: config.MAIL_PORT,
    secure: false,
    auth: {
        user: config.MAIL_AUTH_USER,
        pass: config.MAIL_AUTH_PASSWORD
    }
});

const send = data => {
    const message = {
        from: data.from,
        to: data.to,
        subject: data.subject,
        text: data.text
    };
    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
};

module.exports = send;