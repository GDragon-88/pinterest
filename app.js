const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const app = express();
const http = require('http').createServer(app);
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

io.sockets.on('connection',(socket)=>{
    console.log('a user connected');
})


http.listen(3000);
