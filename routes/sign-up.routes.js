const express = require("express");
const router = express.Router()
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null,  Date.now() + '_' + file.originalname)
    }
})
const upload = multer({ storage: storage })



const {getInfoUserFromSignUp,checkUser} = require("../controllers/sign-up.controller.js");
const {checkEmailExist} = require("../middleware/check.middleware.js")
const {checkCookie} = require("../middleware/checkCookie.js")
const {showBlog} = require("../controllers/blog-controller.js")

router.get("/home",checkCookie,showBlog)
const {upLoadImg} = require("../controllers/upload-image.js")
router.post("/upload" ,upload.single("loadImage"), upLoadImg)
router.post("/user",checkUser)
router.post("/",checkEmailExist,getInfoUserFromSignUp)
router.get("/create-ideal",checkCookie, (req,res)=>{
  res.render("createIdeal")
})

// xay dung blog qu hinh anh 
router.get("/create-build/:nameImg",checkCookie,(req,res)=>{
  
  res.render("builed",{value:req.params.nameImg})
});
// gui du lieu blog
const {createBlog} = require("../controllers/create-blog.js")
router.post("/creat-blog",createBlog)
// api-anh 






module.exports = router;


