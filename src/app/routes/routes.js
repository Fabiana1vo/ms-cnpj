const express = require('express')
const routes = express.Router()
const { CnpjController } = require('../controller/cnpj.controller')

routes.use(express.json());

routes.get('/', (req, res) => {
    res.send('Hello World!')
})

routes.post('/cnpj', CnpjController)

module.exports = routes;