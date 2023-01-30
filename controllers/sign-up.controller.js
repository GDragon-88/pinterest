const express = require("express");
const {addInfoUserFromSignUp,getAllUser} = require("../models/sign-up.model.js")

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');



module.exports.getInfoUserFromSignUp = async(req,res)=>{
    try {
        let dataUser = req.body;
        let password = dataUser.password
        let hash = bcrypt.hashSync(password,10)
        let name = dataUser.email.split("@")[0]
        await addInfoUserFromSignUp(dataUser.email,name,hash,dataUser.age).then((res)=>{
            res.json({message:"successs!!"})
        })
    } catch (error) {
        res.json({message:error})
    }
};


// kiem tra nguoi dung dang cos ton tai user ko va set cookies cho nguoi dung 
module.exports.checkUser = async(req,res)=>{
    try {
        let {email ,password} = req.body
        let [data]  = await getAllUser()
        let user = data.find(i=> {if(i.email==email && bcrypt.compareSync(password,i.password)){
            return i
        }})
        if(user){
            let token = jwt.sign(user.userId,'manhchien');
            return res.json({token:token});
        }else {
            return res.json({message:"user not define!!"})
        }
    } catch (error) {
        
    }
}






