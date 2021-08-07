require('dotenv').config()
const express = require('express')
const dbConnect = require('./db');
const cors = require('cors')
const Tour = require('./tourModel')
const tourRoute = require('./tourRoute')
const data = require('./data')
const app = express()

dbConnect();

app.use(
  cors({
    origin: "https://mytoursites.netlify.app/",
    methods: "GET,POST",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
    preflightContinue: true,
  })
);

app.use('/tours',tourRoute)
const PORT = process.env.PORT||9000
app.listen(PORT, () => {
    console.log(`Server running at 127.0.0.1:${PORT}`)
})