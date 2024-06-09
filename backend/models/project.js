const mongoose  = require("mongoose")
const Schema = mongoose.Schema({
    title: {
        type:String,
        required: true
    }, 
    
    desc: String,
    userName: String,
    url: String,
    img: String,
})
const project = new mongoose
