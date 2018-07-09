const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use (express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const server = app.listen(port, () => console.log(`Listening on port ${ port }`));

const io = require('socket.io')(server);

var messages = [];
var users = {};
io.on('connection', function (socket) {

    socket.on('new_user', function(name){
        users[socket.id]=name;
        var message = name +' has joined the chat!';
        socket.broadcast.emit('user_joined', message);
        socket.emit('messages', messages);
    });

    socket.on('new_message', function(data){
        messages.push(data);
        io.emit('update_message', data);
    });
    
    socket.on('disconnect', function(){
        var message = users[socket.id]+" has disconnected!";
        socket.broadcast.emit('user_joined', message);
        delete users[socket.id];
    });
});

app.get('/', function(request, response) {
    response.render('index');
});
