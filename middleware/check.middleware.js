const {getAllUser} = require("../models/sign-up.model.js")

module.exports.checkEmailExist = async(req,res,next)=>{
    try {
        let [data] = await getAllUser()
    let emailPostFromSignUp = req.body.email;
        console.log(emailPostFromSignUp);
    let result = data.find((i)=>{
        if(i.email == emailPostFromSignUp){
            return i
        }
    })
    if(!result){
        next()
    }else{
        res.json({message:"mail exist"})
    }
    } catch (error) {
        res.json({message:error})
    }
}