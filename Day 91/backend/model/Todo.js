const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    important:{
        type:Boolean
    },
    Completed:{
        type:Boolean,
        required:true
    }},{
        toJson:{
            transform:(originalDoc,returnDoc)=>{
                returnDoc.id=originalDoc._id;
                delete returnDoc._id;
                delete returnDoc.__v;
            }
        }
    });

const Todo = mongoose.model(Todo,todoSchema);
export default Todo;