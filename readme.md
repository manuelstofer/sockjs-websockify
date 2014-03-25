# sockjs-websockify

Wrapper around SockJS connections. Makes them more web socket like.

Sadly [sockjs-node](https://github.com/sockjs/sockjs-node) connections have
different API than web sockets. ㅜㅜ


## Installation

  $ npm install sockjs-websockify


## Usage


```Javascript

var http        = require('http'),
    sockjs      = require('sockjs'),
    websockify  = require('sockjs-websockify'),
    wss         = sockjs.createServer();

wss.on('connection', function(conn) {

    // wrap the connection to act more like a websocket.
    var socket = websockify(conn);

    socket.send('hello');
    socket.addEventListener('message', console.log.bind(console));
});

var server = http.createServer();
wss.installHandlers(server, { prefix:'/sockjs' });
server.listen(3000, '0.0.0.0');

```
