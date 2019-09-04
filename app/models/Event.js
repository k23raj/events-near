const mongoose = require ('mongoose')

const Schema = mongoose.Schema


const eventSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    name :{
        type : String,
        required : true
        // minlength : 10
    },
    description : {
        type : String,
        required : true
        // minlength : 20
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : 'Category'
    },
    maxTicket : {
        type : Number
    },
    image : {
        type : String
        // required : true
    },
    date : {
        startDate : {
            type : Date,
            required : true
        },
        endDate : {
            type : Date
        }

    },
    seatDetails:{
    seatCount : {
        type : Number
        // required : true
    },
    tktPrice : {
        type : Number
        // required : true
    }
    },
    isListed : {
        type : Boolean
    },
    status : {
        type : Boolean
    },
    booking : [{
        type : Schema.Types.ObjectId,
        ref : 'Booking'
    }],
    location :{
        city : {
            type : String,
            required : true
        },
        address : {
            type : String,
            required : true
        }
    },
    reviews : [{
        type : Schema.Types.ObjectId,
        ref : 'Review'
    }]
})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event