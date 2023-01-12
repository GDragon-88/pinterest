const jwt = require("jsonwebtoken")

const {getAllBlog,getCommentBlog,
    getInfoBlog,
    updateCommentText,addCollection,checkCollection} = require("../models/blog.model.js");


module.exports.showBlog = async(req,res)=>{
    let [dataBlog] = await getAllBlog()
    res.render("home",{value:dataBlog,user:req.mail})
}
// hien detail blog
module.exports.oneBlog = async(req,res)=>{
    console.log(req.params);
    let [data] = await getCommentBlog(req.params.id)
    if(data.length==0){
        [data] = await getInfoBlog(req.params.id)
        let link = data[0].urlIMg
        res.render("details",{url:link,value:data});
    }else{
        let link = data[0].urlIMg
        res.render("details",{value:data,url:link})
    } 
}

// update comment
module.exports.updateComment = async(req,res)=>{
    let token = jwt.verify(req.cookies.cookie,"manhchien");
    await updateCommentText(req.body.comment,token,req.params.id).then(()=>{
        res.json({mess:"ok"})
    })
    
}

// luw vao bo su su tap 
module.exports.collection = async(req,res)=>{
    let token = jwt.verify(req.cookies.cookie,"manhchien");
    let [data] = await checkCollection(req.params.id,token);
    if(data.length==0){
        await addCollection(req.params.id,token)
    }
}

