//const WebSocket = require('ws')
const sio = require('socket.io')

const run = (server) => {
    // const wsServer = new WebSocket.Server({ server });
    const io = sio(server)

    // wsServer.on('connection', (socket) => { 
    io.on('connection', (socket) => {
        console.log(`Connection ID: ${socket.id}`);

        socket.on('/chat', (data) => {
            console.log('Data: ', data);
        })

        socket.on('/pow', (data, cb) => {
            const result = Math.pow(data.val, data.lvl);
            console.log('Pow result: ', result);

            cb({result});
        })

        socket.on('disconnect', () => {
        console.log(`Disconnection ID: ${socket.id}`)

    })
  })
}

module.exports = run;
