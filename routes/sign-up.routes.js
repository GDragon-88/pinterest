const express = require("express");
const router = express.Router()
const multer  = require('multer')
// const upload = multer({ dest: 'uploads' })


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })


const {getInfoUserFromSignUp} = require("../controllers/sign-up.controller.js");
const {checkEmailExist} = require("../middleware/check.middleware.js")





router.get("/" ,(req,res)=>{
    res.render("login")
})


router.post("/upload" ,upload.single("loadImage"),(req,res,next)=>{
    console.log(req.file);
    res.json({mess:"ok"})
})

router.get("/api/upload/:img",(req,res)=>{
    let {img} = req.params
    console.log(img);
    res.render("api-image",{value:img})
})

router.post("/",checkEmailExist,getInfoUserFromSignUp)

module.exports = router;