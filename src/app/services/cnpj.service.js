const axios = require('axios')
require('dotenv').config()
const baseUrl = process.env.RECEITA_WS_URL
const CnpjDto = require('../dtos/cnpj.dto')
const GetCnpjDto = require('../dtos/getCnpj.dto')

exports.CnpjService = async(req) => {
    try {
        const cnpj = req.cnpj;

        const cnpjFormatted = cnpj.replace(/\D/g, '')
        const CnpjDTO = new CnpjDto(cnpjFormatted)

        if (CnpjDTO.isValid() !== true) {
            throw new Error(CnpjDTO.isValid().errors)
        }

        const days = 60
        const token = process.env.RECEITA_WS_TOKEN


        const url = `${baseUrl}/${cnpjFormatted}/days/${days}`
        const config = { headers: { 'Authorization': `Bearer ${token}` } }


        const response = await axios.get(url, config)

        const GetCnpjDTO = await new GetCnpjDto(response.data)

        const cnpjReturn = await GetCnpjDTO.getCnpjData()


        return cnpjReturn

    } catch (error) {

        throw error;

    }
};