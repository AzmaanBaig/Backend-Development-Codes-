const WebSocket = require('ws');

const PORT = 3000;
const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server running on port ${PORT}`);

wss.on('connection', (socket) => {
    console.log('New Connection Done');

    socket.on('message', (msg) => {
        const message = msg.toString();

        if (message === 'hi')
            socket.send('Hello Client');
        else if (message === 'Kasise Ho Server')
            socket.send('Mai Thik Hu Client');
        else
            socket.send('Blah');
    });
});