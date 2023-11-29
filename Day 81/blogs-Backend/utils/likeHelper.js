const totalLikes=(blogs)=>{
    let likes = blogs.reduce((sum,blog)=>{
        return sum+blog.likes;
    },0)
    return likes;
}
module.exports=totalLikes;