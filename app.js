const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')


const app = express();
const port = 3000;
const loginRouter = require("./routes/sign-up.routes.js");

app.set("view engine" ,"ejs")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
// render tran log in 
app.use(express.static("public"));
app.use( express.static("uploads"))

app.use("/",loginRouter)

app.get("/home",(req,res)=>{
    res.render("home")
})
app.get("/create-ideal",(req,res)=>{
    res.render("createIdeal")
})
app.listen(port,()=>{
    console.log(`app is running on http://localhost:${port}`);
})