const express = require('express')
const mongoose = require('./config/database')
const router = require('./config/routes')
var cors = require('cors')
const app = express() 
const path = require('path')
app.use(cors())

app.use(express.json())
app.use('/', router)

const port = process.env.PORT || 3005
app.use(express.static(path.join(__dirname,"client/build")))
//for heroku routers
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

app.listen(port, () => {
    console.log('listening on port', port)
})

