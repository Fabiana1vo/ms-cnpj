const axios = require('axios')
require('dotenv').config()
const baseUrl = process.env.RECEITA_WS_URL
const CnpjDto = require('../dtos/cnpj.dto')

exports.CnpjService = async(req) => {
    try {
        const cnpj = req;

        console.log(cnpj)
        const CnpjDTO = new CnpjDto(cnpj)

        if (CnpjDTO.isValid() !== true) {
            throw new Error(CnpjDTO.isValid().errors)
        }

        const days = 60
        const token = process.env.RECEITA_WS_TOKEN


        const url = `${baseUrl}/${cnpj.cnpj}/days/${days}`
        const config = { headers: { 'Authorization': `Bearer ${token}` } }


        const response = await axios.get(url, config)
        console.log(response)

        //Chamar o dto na estrutura correta e retorna-lo
        // return response

    } catch (error) {
        throw error;

    }
};