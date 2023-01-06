const express = require("express");
const router = express.Router()
const {getInfoUserFromSignUp} = require("../controllers/sign-up.controller.js");
const {checkEmailExist} = require("../middleware/check.middleware.js")

router.get("/" ,(req,res)=>{
    res.render("login")
})
router.post("/",checkEmailExist,getInfoUserFromSignUp)

module.exports = router;