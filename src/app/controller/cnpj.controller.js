const { CnpjService } = require('../services/cnpj.service')

exports.CnpjController = async(req, res) => {

    try {
        const cnpj = req.body

        const response = await CnpjService(cnpj)


        res.status(200).json({
            data: response
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};