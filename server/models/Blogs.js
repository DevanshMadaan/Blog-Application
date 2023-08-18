const mongoose=require('mongoose')

const BlogSchema=new mongoose.Schema({
    uname:String,
    email:String,
    password:String
})

const BlogModel=mongoose.model('users',BlogSchema)
module.exports=BlogModel