const mostVotedBlogs=(blogs)=>{
    let mostLikedBlog={};
    blogs.reduce((mostLikes,blog)=>{
        if(blog.likes>mostLikes)
        {
            mostLikedBlog=blog;
            return blog.likes;
        }
        return mostLikes;
    },0)
    return {
        title: mostLikedBlog.title,
        author: mostLikedBlog.author,
        likes: mostLikedBlog.likes
    };
}

module.exports=mostVotedBlogs;