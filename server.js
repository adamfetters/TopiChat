const express = require('express');
const app = express();
const server = require('http').createServer(app);

users = [];
connections = [];

const port = process.env.PORT || 4000;
console.log(`Server running on port ${port}`);

server.listen(port);
