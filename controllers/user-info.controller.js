const jwt = require("jsonwebtoken");
const {getInfoId} = require("../models/sign-up.model.js")
const {getAllBlogByUserID} = require("../models/blog.model.js")
const {getCollectionUser,updateAvatar} = require("../models/user.models.js")
module.exports.getUserInfo = async(req,res)=>{
    let idUser = jwt.verify(req.cookies.cookie ,"manhchien")
    let [dataInforUser] = await getInfoId(idUser)
    let [allBlog]= await getAllBlogByUserID(idUser)
    let [collection] = await getCollectionUser(idUser)
    
    res.render("user-info",{user:dataInforUser,blog:allBlog,save:collection})
}
module.exports.showProfile = async(req,res)=>{
    let idUser = jwt.verify(req.cookies.cookie ,"manhchien")
    let [dataInforUser] = await getInfoId(idUser)
    res.render("seting-profile",{user:dataInforUser})
};
module.exports.getAvatar =async(req,res)=>{
    let path = req.file.filename
    let idUser = jwt.verify(req.cookies.cookie ,"manhchien")
    await updateAvatar(path,idUser).then(()=>{
        res.json({url:path})
    })
    


}