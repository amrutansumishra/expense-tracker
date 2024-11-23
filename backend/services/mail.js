const nodeMailer = require('nodemailer');
async function sendMail(subject,body,email) {
    const transport = nodeMailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false, // `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.MAIL_FROM,
          pass: process.env.MAIL_SECRET_KEY,
        },
      })

      const message = {
        from: "Expense Tracker App",
        to: email,
        subject: subject,
        text: "Message",
        html: body
      };

    try{   
        const info = await transport.sendMail(message)
        if(info.messageId){
            // res.status(200).json({
            //     success:true,
            //     message:info.messageId
            // })
            return true;
        }
    }catch(err){
        // res.status(400).json({
        //     success:false,
        //     err
        // })
        return false;
    }
}

module.exports = sendMail;