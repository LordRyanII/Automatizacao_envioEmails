const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.CLIENTEMAIL,
        pass: process.env.CLIENTEPASS //
    }
});

const main = async (body) => {
    const { from, to, subject, text } = body;
    
    if (typeof to !== 'string') {
        throw new Error('O campo "to" deve ser uma string contendo emails separados por vírgulas.');
    }
    
    const destinatarios = to.split(',').map(email => email.trim());
    
    for (let i = 0; i < destinatarios.length; i++) {
        const destinatario = destinatarios[i];
        
        try {
            const options = await transporter.sendMail({
                from: `<${from}>`, // Quem envia
                to: destinatario, // Quem recebe
                subject: subject, // Assunto
                text: text, // Texto
            });
            console.log(`Email enviado para ${destinatario}.`);
        } catch (err) {
            console.error(`Erro ao enviar email para ${destinatario}: ${err}`);
        }
    }
}

module.exports = main;
