var nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "bqvinh2311@gmail.com",
        pass: "kmtu gyyw iftq tccq",
    },
});

module.exports = transporter;