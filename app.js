//email scheduler - node.js -> cron job (node-cron)
//resource - crontab.guru 
//(nodemailer) - "sendinblue.com" 
const express = require("express");
const app = express();
const scheduler = require('node-cron');
const {transporter, options} = require("./services/email");



scheduler.schedule("* * * * * *", () => {    // "*" - refer crontab.guru site for scheduling 
    console.log("Inside scheduler");

    transporter.sendMail(options, (err, info) => {
        if(err) {
            console.error(err);
        }
        console.log('Email sent with info = ', info);
    })
});

app.listen(5000, () => {
    console.log("App is running on port 5000")
});