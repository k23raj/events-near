const City=require('../models/City')

module.exports.list=(req,res)=>{
    City.find()//returns a promise object
    .then((city)=>{
        res.json(city)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req,res)=>{
    const body=req.body
    const city=new City(body)
    city.save()
    .then(city => res.json({ notice: 'successfully created a city', city})) 
    .catch(err => res.json(err))
}
module.exports.show=(req,res)=>{
    const id=req.params.id
    City.findById(id)
    .then(city=>{
        if(city){
         res.json(city)   
        }else{
            res.json({})
        }
    })
}
module.exports.update=(req,res)=>{
    const id=req.params.id
    City.findByIdAndUpdate(id,{$set:body},{new:true})
    .then(city=>{
        if(city){
            res.json(city)
        }else{
            res.json({})
        }
    })
}
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    City.findOneAndDelete(id)
    .then(city=>{
        if(city){
            res.json(city)
        }else{
            res.json({})
        }       
    })
}   