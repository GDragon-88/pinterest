const jwt = require("jsonwebtoken");
const path = require("path/posix");

const {upIMG} = require("../models/user.models.js")

module.exports.upLoadImg = async(req,res)=>{
    let cookieData = req.cookies;
    let file = req.file
    let dataUser = jwt.verify(cookieData.cookie,'manhchien')
    let pathImg =  `/${file.filename}`
    await upIMG(dataUser,file.filename,pathImg).then(()=>{
      res.json({mess:file.filename})
    })
}   