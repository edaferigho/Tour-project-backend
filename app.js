require('dotenv').config()
const express = require('express')
const dbConnect = require('./db');
const Tour = require('./tourModel')
const tourRoute = require('./tourRoute')
const data = require('./data')
const app = express()

dbConnect();

app.use('/tours',tourRoute)
const PORT = process.env.PORT||9000
app.listen(PORT, () => {
    console.log(`Server running at 127.0.0.1:${PORT}`)
})