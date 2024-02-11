const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'product name must be provided']
    },
    price:{
        type:Number,
        required:[true,'product name must be provided']
    },
    feautred:{
        type:Boolean,
        default:true
    }
    ,
    rated:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['ikea', 'liddy', 'caressa', 'marcos'],
            mesaage:"{VALUE} is not supported"
        }
        
    },


})

module.exports=mongoose.model('Product',productSchema);
