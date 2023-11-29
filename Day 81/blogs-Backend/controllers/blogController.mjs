import mongoose from "mongoose";
import Blog from "../models/Blog.mjs";
const BlogController = {
    getAllBlogs:async(req,res)=>{
        try{
            const blogs= await Blog.find();
            res.status(200).json(blogs)
        }catch(e){
            res.status(500).json({message:"No Blog Found",error:e});
        }
        
    },
    createBlog:async(req,res)=>{
        try{
            const newBlog= new Blog(req.body);
            const blog = await newBlog.save();
            res.status(200).json(blog)
        }
        catch(e){
            res.status(500).json({message:"Can't Create Blog",error:e});
        }
    },
    getBlog:async(req,res)=>{
        try{
            const id = req.params.id;
            const blog = await Blog.findById(id);
            if(!blog){
                res.status(404).json({message:"No Blog Found on this ID"});
            }
            res.status(200).json(blog);
        }catch(e)
        {
            res.status(500).json({message:"No Blog Found on this ID",error:e});
        }
    },
    updateBlog:async(req,res)=>{
        try{
            const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true});
            if(!updatedBlog)   res.status(404).json({message:"No Blog Found on this ID"});
            res.status(200).json(updatedBlog);
        }catch(e)
        {
            res.status(500).json({message:"No Blog Found on this ID",error:e});
        }
    },
    deleteBlog:async(req,res)=>{
        try{
            const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
            if(!deletedBlog) res.status(404).json({message:"No Blog Found on this ID"});
            res.status(200).json({message:"Blog is Deleted","deletedBlog":deletedBlog})
        }
        catch(e){
            res.status(500).json({message:"No Blog Found on this ID",error:e});
        }
    }
}

export default BlogController;