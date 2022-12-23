const nodemailer = require('nodemailer');
require('dotenv').config();

const SMTP_PORT = 587;
const HOST_SERVICE = "smtp-relay.sendinblue.com";

const SENDER_EMAIL = process.env.USER_EMAIL;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;

const CC = [];
const BCC = [];

const EMAIL_SUBJECT = "Happy Birthday";
const EMAIL_BODY_HTML = "<h1>Happy Birthday</h1>";

const options = {
    from: SENDER_EMAIL,
    to: RECEIVER_EMAIL,
    cc: CC,
    bb: BCC,
    subject: EMAIL_SUBJECT,
    html: EMAIL_BODY_HTML
}

const transporter = nodemailer.createTransport({
    host: HOST_SERVICE,
    port: SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
    }
});

module.exports = {transporter, options};