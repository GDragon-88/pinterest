const db = require("../utils/database.js")
const mysql = require("mysql2");



module.exports.getAllBlog= ()=>{
    let sql = `select blogID, urlIMg ,userName from pinterest_schemas.tbl_blog , pinterest_schemas.tbl_user where 
     tbl_blog.userID = tbl_user.userid order by createAt desc;`
    return db.execute(sql)
}

module.exports.getCommentBlog = (idBlog)=>{
    let sql =`select textCommet,userName,title,tbl_comment.like,tbl_user.linkAvart, tbl_comment.commentID , Field,description,urlIMg from pinterest_schemas.tbl_comment ,pinterest_schemas.tbl_user ,pinterest_schemas.tbl_blog 
    where tbl_comment.blogID = "${idBlog}" and  tbl_comment.userId = tbl_user.userId and  tbl_comment.blogID =  tbl_blog.blogID`
    return db.execute(sql)
}
module.exports.getInfoBlog =(idblog)=>{
    let sql =`SELECT * FROM pinterest_schemas.tbl_blog where blogID ="${idblog}";`
    return db.execute(sql)
}
module.exports.updateCommentText = (text,userID,blogID)=>{
    let sql = "INSERT INTO `pinterest_schemas`.`tbl_comment` (`textCommet`, `userId`,`blogID`,`like`) VALUES (?, ?, ?,0)"
    let value = [text,userID,blogID,0]
     sql = mysql.format(sql,value)
     return db.execute(sql)
}
// them vao bao suu tap 
module.exports.addCollection =(blogID,userID)=>{
    let sql =   "INSERT INTO `pinterest_schemas`.`tbl_collection` (`blogId`, `userId`) VALUES (?, ?);"
    let value = [blogID,userID]
    sql = mysql.format(sql,value);
    return db.execute(sql);
}
module.exports.checkCollection = (blogID,userID)=>{
    let sql = "SELECT * FROM pinterest_schemas.tbl_collection WHERE EXISTS (SELECT * FROM pinterest_schemas.tbl_collection  WHERE tbl_collection.blogId = ? AND tbl_collection.userId = ?);"
    let value = [blogID,userID]
    sql = mysql.format(sql,value);
    return db.execute(sql);

}

// lay toan bo thong tin blog theo ID
module.exports.getAllBlogByUserID = (userID)=>{
    let sql = "SELECT * FROM pinterest_schemas.tbl_blog where userID =?;"
    let value = [userID]
    sql = mysql.format(sql,value);
    return db.execute(sql);
}