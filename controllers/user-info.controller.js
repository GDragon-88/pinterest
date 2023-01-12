const jwt = require("jsonwebtoken");
const {getInfoId} = require("../models/sign-up.model.js")
const {getAllBlogByUserID} = require("../models/blog.model.js")


module.exports.getUserInfo = async(req,res)=>{
    let idUser = jwt.verify(req.cookies.cookie ,"manhchien")
    let [dataInforUser] = await getInfoId(idUser)
    let [allBlog]= await getAllBlogByUserID(idUser)
    console.log(allBlog);
    res.render("user-info",{user:dataInforUser,blog:allBlog})
}