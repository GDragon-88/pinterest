const {getAllBlog} = require("../models/blog.model.js");


module.exports.showBlog = async(req,res)=>{
    let [dataBlog] = await getAllBlog()
    console.log(dataBlog);
    res.render("home",{value:dataBlog})
}