const mongoose = require('mongoose'); 

// create contactSchema
const contactSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        phoneNumber:{
            type:String,
            required:true,
            trim:true,
            unique:true
        }
    }, 
    {
        toJson:{
            transform: (doc,ret)=>{
                ret.id=doc._id;
                delete ret._id;
                delete  ret.__v;
            }
        }

    }
)

const Contact = mongoose.model('contact',contactSchema);

module.exports=Contact;