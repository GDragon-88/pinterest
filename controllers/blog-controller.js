const jwt = require("jsonwebtoken")
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const {getAllBlog,getCommentBlog,
    getInfoBlog,
    updateCommentText,addCollection,checkCollection} = require("../models/blog.model.js");
const {getInfoId} = require("../models/sign-up.model.js")

module.exports.showBlog = async(req,res)=>{
    let [dataBlog] = await getAllBlog()
    res.render("home",{value:dataBlog,user:req.mail})
}
// hien detail blog
module.exports.oneBlog = async(req,res)=>{
    let [data] = await getCommentBlog(req.params.id)
    let idUser = jwt.verify(req.cookies.cookie ,"manhchien")
    
    let [dataInforUser] = await getInfoId(idUser)
    
    if(data.length==0){
        [data] = await getInfoBlog(req.params.id)
        let link = data[0].urlIMg
        res.render("details",{url:link,value:data,user:dataInforUser});
    }else{
        let link = data[0].urlIMg
        console.log(dataInforUser);
        res.render("details",{value:data,url:link,user:dataInforUser })
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

