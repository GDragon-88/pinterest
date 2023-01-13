const jwt = require("jsonwebtoken");
const {getInfoId} = require("../models/sign-up.model.js")
const {getAllBlogByUserID} = require("../models/blog.model.js")
const {getCollectionUser} = require("../models/user.models.js")
// const express = require("express");
// const app = express();
// const http = require("http").Server(app);
// const io = require("socket.io")(http);

module.exports.getUserInfo = async(req,res)=>{
    let idUser = jwt.verify(req.cookies.cookie ,"manhchien")
    let [dataInforUser] = await getInfoId(idUser)
    let [allBlog]= await getAllBlogByUserID(idUser)
    let [collection] = await getCollectionUser(idUser)
    res.render("user-info",{user:dataInforUser,blog:allBlog,save:collection})
}
module.exports.showProfile = async(req,res)=>{
    res.render("seting-profile")
};
module.exports.getAvatar =async(req,res)=>{
    let path = req.file.filename

    
}