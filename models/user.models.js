const db = require("../utils/database.js");
const mysql = require("mysql2")

module.exports.findUser =(mail,password)=>{
    let sql = `SELECT * FROM pinterest_schemas.tbl_user where email = "${mail}" and password="${password}";`
    return db.execute(sql)
};



// upload anh deen tbl-img
module.exports.upIMG =(user_id,imgName,path)=>{
    let sql = `INSERT INTO pinterest_schemas.tbl_img ( user_id, imgName, path) VALUES ( '${user_id}', '${imgName}', '${path}');`
    return db.execute(sql)
}

module.exports.addBlog = (blogID,userID,title,Field,description,urlIMg,comment)=>{
    let sql =`INSERT INTO pinterest_schemas.tbl_blog (blogID, userID, title, Field, description, urlIMg,noComent)
    VALUES ('${blogID}','${userID}','${title}','${Field}','${description}','${urlIMg}','${comment}');`
    return db.execute(sql)
}
module.exports.getCollectionUser = (userID)=>{
    let sql = `SELECT * FROM pinterest_schemas.tbl_collection ,pinterest_schemas.tbl_blog where tbl_collection.userId = ? and tbl_collection.blogId = tbl_blog.blogID;`
    let value = [userID]
    sql = mysql.format(sql,value)
    return db.execute(sql);
}


