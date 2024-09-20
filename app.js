const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const routes = require('./src/app/routes/routes')
const helmet = require('helmet')

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(routes)

const port = process.env.PORT || 9000


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})