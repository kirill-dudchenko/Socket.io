const socket = io();

setTimeout(() => {
    socket.emit('/chat', { uid: 'a1d', message: 'Hello' });
}, 1000);

const run = () => {
    socket.emit('/pow', {val: 10, lvl: 2}, (data) => {
        console.log('data: ', data);
    });
}

run()