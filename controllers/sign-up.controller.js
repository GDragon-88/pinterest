const {addInfoUserFromSignUp} = require("../models/sign-up.model.js")


module.exports.getInfoUserFromSignUp = async(req,res)=>{
    try {
        let dataUser = req.body;
        await addInfoUserFromSignUp(dataUser.email,dataUser.password,dataUser.age).then((res)=>{
            res.json({message:"successs!!"})
        })
    } catch (error) {
        
        res.json({message:error})
    }
}

