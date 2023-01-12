const express = require("express");
const router = express.Router();

const {checkCookie} = require("../middleware/checkCookie.js")
const {
    oneBlog,
    updateComment,collection
} = require("../controllers/blog-controller.js")


router.get("/detail/:id",oneBlog)
router.post("/:id",(req,res)=>{
    res.redirect(`/:${req.params.id}`)
})

router.post("/collection/:id",collection)


router.post("/detail/:id",updateComment)




module.exports = router