const nodeMailer = require('nodemailer');
const sendMail  = require('../services/mail');

exports.mailController = async (req,res)=>{
    const {email,subject} = req.body;
    sendMail(email,subject)
}


