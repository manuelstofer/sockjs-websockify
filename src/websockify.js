
var EventTarget = require('./event-target');

module.exports = Websockify;

function Websockify (conn) {
    if (!(this instanceof Websockify)) {
        return new Websockify(conn);
    }
    this.conn = conn;
    this.readyState = this.OPEN;

    this.close = this.conn.close.bind(this.conn);
    this.send = this.conn.write.bind(this.conn);

    this.conn.on('close', function () {
        this.readyState = this.CLOSED;
    }.bind(this));

    this.conn.on('open', function () {
        this.readyState = this.OPEN;
    }.bind(this));

    this.conn.on('message', function (data) {
        this.dispatchEvent({ type: 'message', data: data });
    }.bind(this))

    this.conn.on('error', function (data) {
        this.dispatchEvent({ type: 'error', data: data });
    }.bind(this))
}

mixin(Websockify.prototype, EventTarget);

mixin(Websockify.prototype, {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3
});

function mixin (to, from) {
    for (var i in from) { to[i] = from[i]; }
}
