const db = require("../utils/database.js")



module.exports.getAllBlog= ()=>{
    let sql = `select blogID, urlIMg ,userName from pinterest_schemas.tbl_blog , pinterest_schemas.tbl_user where  tbl_blog.userID = tbl_user.userid;`
    return db.execute(sql)
}