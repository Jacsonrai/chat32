const express= require('express');
const app= express()
const https = require('https');
const port=process.env.PORT||3000
// set the template engine ejs
app.set('view engine','ejs')
//middlewares
app.use(express.static('public'))
//routes
app.get('/',(req,res)=>{
    res.render('index')
})
// Listen on port 3000
server=app.listen(port,()=>{
    console.log("server is running on port"+port)
})
//spcket.io instantiation
const io=require("socket.io")(server)
//listen on every connection
io.on('connection',(socket)=>{
    console.log('new user connected')
    //default user name
    socket.username="Anonymous"
    //listen on change_username
    socket.on('change_username',(data)=>{
        socket.username=data.username
    })
    //listen on new_message
    socket.on('new_message',(data)=>{
        //boardcast the new message
        io.sockets.emit('new_message',{message : data.message, username : socket.username});
    })
   
})
