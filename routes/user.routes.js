const express = require("express");
const router = express.Router()
const {checkCookie} = require("../middleware/checkCookie.js")
const {getUserInfo} = require("../controllers/user-info.controller.js")

router.get("/:id",checkCookie,getUserInfo)








module.exports = router;