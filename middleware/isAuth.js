const {getAllUser} = require("../models/sign-up.model.js");
const jwt = require("jsonwebtoken");
module.exports.isAuth =async(req,res)=>{
    let allDataUser = await getAllUser()
};
