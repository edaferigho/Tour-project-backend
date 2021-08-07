require('dotenv').config()
const express = require('express')
const dbConnect = require('./db');
const cors = require('cors')
const Tour = require('./tourModel')
const tourRoute = require('./tourRoute')
const data = require('./data')
const app = express()

dbConnect();

const corsConfig = {
    origin: [ "https://tourbackend.herokuapp.com/tours", "https://mytoursites.netlify.app"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    allowedHeaders: ['Content-Type']
};
app.use(cors(corsConfig));

app.use('/tours',tourRoute)
const PORT = process.env.PORT||9000
app.listen(PORT, () => {
    console.log(`Server running at 127.0.0.1:${PORT}`)
})