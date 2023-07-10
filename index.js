
const express = require('express')
const app = express()



const videoRoutes = require('./routes/videos')

app.use('/videos', videoRoutes)

app.listen(8080, function() {
    console.log("listening at port 8080")
})