const WebSocket = require('ws')

const run = (server) => {
    const wsServer = new WebSocket.Server({ server });

    wsServer.on('connection', (socket) => { 
    
    console.log(new Date() + "new WS connection")

    let sum = 0;

    socket.on('message', (data) => {
        
        sum+= Number(data);
        console.log(`Frontend sent ${data}`)
        console.log(`Sum ${sum}`)

        if (sum > 10) {
            socket.send(sum);
        }
    });
});
}

module.exports = run;