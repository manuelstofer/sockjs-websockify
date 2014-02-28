<!DOCTYPE html>
<html>
    <head>
        <script src="http://cdn.sockjs.org/sockjs-0.3.min.js"></script>
        <script type="text/javascript">
            var sock = new SockJS('http://localhost:3000/sockjs');
            socket.addEventListener('message', console.log.bind(console));
            socket.send('hello');
        </script>
    </head>
    <body></body>
</html>
