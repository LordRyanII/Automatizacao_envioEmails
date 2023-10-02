const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.CLIENTEMAIL,
        pass: process.env.CLIENTEPASS
    }
});

// async..await is not allowed in global scope, must use a wrapper
const main = async (body) => {
    const { from, to, subject, text } = body;
    try {
        const options = await transporter.sendMail({
            from: '<' + from + '>', // Quem envia
            to: to, // Quem recebe
            subject: subject, // Assunto
            text: text, // Texto
        });
        return "Message enviada: %s";
    } catch (err) {
        return err;
    }


}
module.exports = main