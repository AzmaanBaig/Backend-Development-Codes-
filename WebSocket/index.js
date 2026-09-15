const WebSocket = require('ws');
const PORT = 3000;
const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server running on port ${PORT}`);

wss.on('connection', (ws) => {
    console.log('New Connection Done');

    ws.on('message', (msg) => {
        console.log(`Received: ${msg}`);

        ws.send('Hello from server!');
    });
});