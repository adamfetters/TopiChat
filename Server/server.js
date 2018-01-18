const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

const port = process.env.PORT || 5000;

const routes = require('../api/routes/routes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/topichat', { useMongoClient: true });

server.use(bodyparser.json());
server.use(cors());

routes(server);

server.listen(port, () => {
  console.log(`Server listeing on port:${port}`);
});
