const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const password="Muthu123";
const url = `mongodb+srv://esakkimuthu6842:${password}@cluster0.mnw5k9a.mongodb.net/noteApp?retryWrites=true&w=majority`;
const app = express();
const PORT = process.env.PORT||3001;
//Configuring middle Ware
app.use(cors());
app.use(morgan('dev'));

// lets connect to the dataBase
mongoose.set("strictQuery",false);
mongoose.connect(url)
        .then(()=> console.log("Connected to mogo DB!!"))

// add note schema and model to fetch fromm data base
const noteSchema =   mongoose.Schema({
    content:String,
    important:Boolean
})
// noteSchema.set('toJSON',{
//     transform:(document,returnedobject)=>{
//         returnedobject.id = returnedobject._id.toString();
//         delete returnedObject._id
//         delete returnedObject.__v
//     }
// })

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
const Note =  mongoose.model('note',noteSchema);

app.get('/',(req,res)=>{
    Note.find({})
        .then((result)=>{
            res.json(result);
        })
    //   res.status(200).send("helloWorld");
})


app.listen(PORT,()=>{
    console.log(`Server started Sucessfully at http://localhost:${PORT} `);
})



// mongoose.set('strictQuery',false);
// mongoose.connect(url)
//         .then(()=> console.log("Connected Successfully!!"));

// const blogSchema =new mongoose.Schema({
//     title:String,
//     content:String
// })

// const Blog = mongoose.model('Blog',blogSchema);
// const newBlog= new Blog({
//     title:"Blog Title",
//     content:"Dummy Content for my blog"
// })


// newBlog.save()
//         .then(()=>console.log("Blog Sved Successfully!!"));

// Blog.find({}).then((result)=> console.log(result))