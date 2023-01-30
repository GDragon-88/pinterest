const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 3000;

const loginRouter = require("./routes/sign-up.routes.js");
const  blogRouter = require("./routes/blog.routes.js")
const userRouter = require("./routes/user.routes.js")



app.set("view engine" ,"ejs")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
// render tran log in 
app.use(express.static("public"));
app.use( express.static("uploads"))
app.use( express.static("avatar"))
app.use(cookieParser())


app.use("/",loginRouter);
app.use("/blog",blogRouter)
app.use("/user",userRouter)

app.get("/", (req,res)=>{
    res.render("login"); 
});
app.post("/logout",(req,res)=>{
    res.clearCookie("cookie")
    res.status(200).json({
        status:"success!"
    })
    res.end()
})

app.post("/blog/detail/:id",(req,res)=>{
    socket.emit('broadcast', { someProperty: 'some value', otherProperty: 'other value' });
})
io.on('connection', (socket) => {
    socket.on('broadcast', (msg) => {
        io.emit('broadcast',msg);
    });
  });

http.listen(port,()=>{
    console.log("sever is running port 3000");
});
