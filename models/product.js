const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    pName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:100
    },
    pDesc:{
   type:String, 
   required:true,
   minlength:4,
   maxlength:100
    },
    pPrice:{
        type:Number,
        required:true,
        min :0,
        max:1000007,
        validate:{
            validator:(val)=>{
                return !(val.toString().length>6)
            },
            message:(val)=>{
                return `${val.path} length should be greater than 6`
            }
        }
    }, 
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('products',productSchema)