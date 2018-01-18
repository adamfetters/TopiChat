const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');

const { SESSION_SECRET } = require('../config');

const server = express();

const routes = require('../api/routes/routes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/topichat', (err, db) => {
  if (err) {
    console.log('Unable to connect to database. Please restart the server.');
  } else {
    console.log('Database connected');
  }
});

server.use(bodyparser.json());
server.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));
server.use(cors());

routes(server);

module.exports = {
  server,
};
