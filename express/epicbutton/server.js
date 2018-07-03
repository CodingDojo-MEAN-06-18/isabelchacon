const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, 'client')));

const server = app.listen(port, () => console.log(`Listening on port ${ port }`));
const io = require('socket.io')(server);

let counter = 0;

io.on('connection', socket => {
    console.log('incoming socket connection');

    socket.on('buttonClicked', function(){
        numberUpdated(++counter);
    });

    socket.on('reset', function(){
        numberUpdated(counter = 0);
    });

    socket.emit('numberUpdated', counter);
});

function numberUpdated(number){
    io.emit('numberUpdated', number);
}