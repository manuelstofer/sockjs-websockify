var http        = require('http'),
    sockjs      = require('sockjs'),
    websockify  = require('../'),
    wss         = sockjs.createServer();

wss.on('connection', function(conn) {
    var socket = websockify(conn);
    socket.send('hello');
    socket.addEventListener('message', console.log.bind(console));
});

var server = http.createServer();
wss.installHandlers(server, { prefix:'/sockjs' });
server.listen(3000, '0.0.0.0');
