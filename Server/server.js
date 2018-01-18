const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

const routes = require('../api/routes/routes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/topichat', (err, db) => {
  if (err) {
    console.log('Unable to connect to database. Please restart the server. Error:', err);
  } else {
    console.log('Database connected');
  }
});

server.use(bodyparser.json());
server.use(cors());

routes(server);

module.exports = {
  server,
};
