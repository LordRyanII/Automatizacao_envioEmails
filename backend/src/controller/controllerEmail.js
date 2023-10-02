const envioEmail = require('../services/sendEmail');

exports.postEmail = (req, res) => {
    const email = req.body;

    console.log(req.body);

    try {
        envioEmail(email)
        return res.status(200).json({
            status: 'Ok!',
            message: 'E-mail Enviado com Sucesso!'

        })
    } catch (erro) {
        return res.status(500).json({
            status: 'NoK',
            message:'Erro ao tentar enviar o e-mail', erro
        })
    }
}