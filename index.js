
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const {CORS_ORIGIN} = process.env
app.use(cors({origin:CORS_ORIGIN}))
app.use(express.json())
app.use(express.static("public"))



const videoRoutes = require('./routes/videos')

app.use('/videos', videoRoutes)

app.listen(8080, function() {
    console.log("listening at port 8080")
})