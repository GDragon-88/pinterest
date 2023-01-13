const express = require("express");
const router = express.Router()
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './avatar')
    },
    filename: function (req, file, cb) {
      cb(null,  Date.now() + '_' + file.originalname)
    }
})
const upload = multer({ storage: storage })


const {checkCookie} = require("../middleware/checkCookie.js")
const {getUserInfo,showProfile,getAvatar } = require("../controllers/user-info.controller.js")

router.get("/infor/:id",checkCookie,getUserInfo)
router.get("/edit-profile",checkCookie,showProfile)

router.post("/edit-profile" ,upload.single("avatar"),getAvatar)






module.exports = router;