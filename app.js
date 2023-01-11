const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const app = express();
const port = 3000;
const loginRouter = require("./routes/sign-up.routes.js");
const   blogRouter = require("./routes/blog.routes.js")
const cors = require('cors');

app.set("view engine" ,"ejs")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
// render tran log in 
app.use(express.static("public"));
app.use( express.static("uploads"))
app.use(cookieParser())
app.use(cors());

app.use("/",loginRouter);
app.use("/blog",blogRouter)

app.get("/", (req,res)=>{
    res.render("login"); 
});



app.listen(port,()=>{
    console.log(`app is running on http://localhost:${port}`);
});