const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false,
    auth: {
        user: 'postmaster@sandbox901add8c64314aeca8654f63b23f2081.mailgun.org',
        pass: 'bdcad94686036ed1d713db24f62989cb-2416cf28-43431473'
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