const io = require('./server');

module.exports = (socket) => {
    console.log(`Socket id ${socket.id}`);
}