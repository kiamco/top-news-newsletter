const Router = require('express').Router();
const sgMail = require('@sendgrid/mail');
const Axios = require('axios');
const onBoardingTemplate = require('../emailTemplates/onboarding.js');
require('dotenv').config();

Router.get('/sendBoardingMail', async (req,res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    try {
        const msg = {
            to: 'kiamcoo@gmail.com',
            from: 'new.news.newsletter@gmail.com',
            subject: 'You have subscribe to New News',
            text: 'Welcome!',
            html: onBoardingTemplate,
        };
        const sent = await sgMail.send(msg);
        return res.status(202).json({
            message:'Sent subscription message',
            data:sent
        })
    } catch (e) {
        console.log(e);
    };
});


module.exports = Router;