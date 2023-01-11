const jwt = require("jsonwebtoken");

const {addBlog} = require("../models/user.models.js")
module.exports.createBlog = async(req,res)=>{
    
    let cookieData = req.cookies;
    let dataUser = jwt.verify(cookieData.cookie,'manhchien')
    let blogID = Math.random().toString(36).replace('0.',"BlogID" || '')
    let data = req.body
    await addBlog(blogID,dataUser,data.titleBlog,data.fieldBlog,data.descriptionBlog,data.url,data.alowNotComment).then(()=>{
        res.json({mess:"successs!!"})
    })

    
}

