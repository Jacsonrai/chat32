


$(function(){
    //make connection
    var socket=io.connect('https://git.heroku.com/chat1996.git')
    //buttons and input
    var message=$("#message")
    var username=$("#username")
    var send_message=$("#send_message")
    var send_username=$("#send_username")
    var chatroom=$("#chatroom")
    //emit a username
    send_username.click(function(){
        console.log(username.val())
        socket.emit('change_username',{username:username.val()})
    })
    //emit message
    send_message.click(function(){
        socket.emit('new_message',{message:message.val()})
        message.val('')

    })
    //listen on new_message
    socket.on("new_message",(data)=>{
        console.log(data)
        chatroom.append("<p class='message'>" + data.username + ":-" + data.message+"</p>")
    })
    //emit a username
    send_username.click(function(){
        console.log(username.val())
        socket.emit('change_username',{username:username.val()})
    })
 
})

