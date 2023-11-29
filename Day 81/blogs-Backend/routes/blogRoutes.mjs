import express from 'express';
import BlogController from '../controllers/blogController.mjs';
const router =express.Router();

// add path
router.get('/',BlogController.getAllBlogs);
router.post('/add',BlogController.createBlog);
router.get('/:id',BlogController.getBlog);
router.put('/:id',BlogController.updateBlog);
router.delete('/:id',BlogController.deleteBlog);

export default router;