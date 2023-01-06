const db = require("../utils/database.js")

module.exports.addInfoUserFromSignUp = (mail,password,age)=>{
    return db.execute(`INSERT INTO pinterest_schemas.tbl_user (email, password, age,role) VALUES ('${mail}', '${password}', '${age}','1');`)
}


module.exports.getAllUser = ()=>{
    return db.execute("SELECT * FROM pinterest_schemas.tbl_user;")
}