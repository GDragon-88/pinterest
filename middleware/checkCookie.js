const {getInfoId}=  require("../models/sign-up.model.js");

const jwt = require("jsonwebtoken")

module.exports.checkCookie = async(req,res,next)=>{
    let cookie = req.cookies
    let token = cookie.cookie
    let valueToken = jwt.verify(token,'manhchien')
    let [dataUser] = await getInfoId(valueToken)
    if(token){
        req.mail =  dataUser[0].email
        next()
    }else{
        res.redirect("/")
    }
};

