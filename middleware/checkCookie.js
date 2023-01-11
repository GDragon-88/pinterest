module.exports.checkCookie = (req,res,next)=>{
    let cookie = req.cookies
    let token = cookie.cookie
    if(token){
        next()
    }else{
        res.redirect("/")
    }
}
