const mongoose=require('mongoose')//npm install mongoose
//db configuration
mongoose.Promise=global.Promise//mongoose to use the promise library by es6
//'mongodb+srv://raj:raj123@events-zhak9.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect('mongodb://localhost:27017/events-near',{useNewUrlParser:true})
.then(()=>{
        console.log('connected to db')
})
.catch((err)=>{
        console.log('error connnecting to db',err)
})
module.exports=mongoose