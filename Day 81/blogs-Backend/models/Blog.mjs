import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        url:String,
        likes:Number
    },{
        toJson:{
            transform:(doc,ret)=>{
                ret.id=doc._id;
                delete ret._id;
                delete ret.__v;
            }
        }
    }
)

const Blog = mongoose.model('Blog',blogSchema);
export default Blog;