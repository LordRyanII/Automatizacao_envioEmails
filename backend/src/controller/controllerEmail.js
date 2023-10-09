const envioEmail = require('../services/sendEmail');

exports.postEmail = (req, res) => {
    const email = req.body;

    console.log(req.body);

    try {
        envioEmail(email)
            .then(resp => {
                return res.status(200).json({
                    status: 'Ok!',
                    message: 'E-mail Enviado com Sucesso!'

                })
            }).catch(error => {
                return res.status(400).json({
                    status: 'Nok!',
                    message: 'E-mail Não enviado, verifique novamente',
                    sistemMensage: error

                })
            })

    } catch (erro) {
        return res.status(500).json({
            status: 'NoK',
            message: 'Erro ao tentar enviar o e-mail'
        })
    }
}