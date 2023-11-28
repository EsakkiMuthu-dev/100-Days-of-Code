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
    }
)

const contact = mongoose.model('contact',contactSchema);

module.exports=contact;