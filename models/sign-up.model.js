const db = require("../utils/database.js")
const mysql = require("mysql2")

module.exports.addInfoUserFromSignUp = (mail,name,password,age)=>{
    return db.execute(`INSERT INTO pinterest_schemas.tbl_user (email, userName,password, age,role) VALUES ('${mail}','${name}', '${password}', '${age}','1');`)
}

module.exports.getInfoId = (id)=>{
    let sql = "SELECT * FROM pinterest_schemas.tbl_user where userId = ?"
    let value = [id]
    sql = mysql.format(sql,value)
    return db.execute(sql)
}
module.exports.getAllUser = ()=>{
    return db.execute("SELECT * FROM pinterest_schemas.tbl_user;")
};