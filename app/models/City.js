const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema =  new Schema({

    name : {
        type : String,
    },
    
})
const City = mongoose.model('City', citySchema)
module.exports = City