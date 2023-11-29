const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
    {
        name:{
            type:String,
            requried:true,
        },
        phoneNumber:{
            type:String,
            required:true
        }

    }
    ,{
        toJson:{
            transform:(doc,ret)=>{
               ret.id = doc._id;
               delete ret._id;
               delete ret.__v;
            }
        }
    }
)

const Contact = mongoose.model('contact',contactSchema);

module.exports=Contact;