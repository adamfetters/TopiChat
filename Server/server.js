const app = require('http').createServer();
const io = module.exports.io = require('socket.io')(app);

const port = process.env.PORT || 5000;

const SocketManager = require('./SocketManager');

io.on('connection', SocketManager);

app.listen(port, () => {
    console.log(`Connected on port ${port}`);
})
